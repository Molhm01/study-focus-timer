import { useCallback, useEffect, useMemo, useState } from 'react';
import {
    StatsState, TasksState, Snapshot, snapshotFrom, xpFrom, levelFromXp, LevelInfo,
} from './engine';
import type { AvatarSpec } from './Avatar';

// ---------- storage ----------
// Reads the timer's own saved data (same localStorage keys the app already
// writes) and adds exactly one new key for the profile. Existing guest data
// (settings, tasks, stats, session) is read-only here and never migrated.

const STATS_KEY = 'sft:ft-stats.v1';
const TASKS_KEY = 'sft:ft-tasks.v1';
const SESSION_KEY = 'sft:ft-session.v1';
const PROFILE_KEY = 'sft:ft-profile.v1';
const LEDGER_KEY = 'sft:ft-progress-ledger.v1';

// ---------- lifetime completion ledger ----------
// The task list itself is mutable checklist state: tasks can be unticked,
// deleted or cleared. The ledger records each completed task's stable id the
// first time it is seen completed, so lifetime XP and achievements survive all
// of that, and untick/recomplete of the same task cannot earn XP twice.
interface Ledger { v: 1; tasks: Record<string, number>; migratedAt: number | null }

export function loadLedger(): Ledger {
    const saved = readJSON<Partial<Ledger>>(LEDGER_KEY);
    if (saved && saved.v === 1 && saved.tasks && typeof saved.tasks === 'object') {
        return { v: 1, tasks: saved.tasks as Record<string, number>, migratedAt: saved.migratedAt ?? null };
    }
    return { v: 1, tasks: {}, migratedAt: null };
}

// Adds any currently-completed task ids not yet recorded. Idempotent. The
// first call doubles as the one-time migration: tasks already completed in the
// existing list are credited once, stamped now. Tasks that were deleted before
// this module first ran are not recoverable and are not credited.
export function syncLedger(tasksState: TasksState): Ledger {
    const ledger = loadLedger();
    let changed = false;
    if (ledger.migratedAt === null) { ledger.migratedAt = Date.now(); changed = true; }
    for (const t of tasksState.tasks || []) {
        if (t.completed && typeof t.id === 'string' && t.id && !(t.id in ledger.tasks)) {
            ledger.tasks[t.id] = Date.now();
            changed = true;
        }
    }
    if (changed) {
        try { window.localStorage.setItem(LEDGER_KEY, JSON.stringify(ledger)); } catch { /* blocked */ }
    }
    return ledger;
}

// For the always-mounted beacon: capture completions even while the profile
// panel is closed (at latest on the next app load after a completion).
export function syncLedgerFromStorage(): void {
    const tasks = readJSON<TasksState>(TASKS_KEY) || { tasks: [], activeId: null };
    syncLedger(tasks);
}

// Synchronous capture for the task-toggle integration hook: call this in the
// same gesture that marks a task completed, BEFORE any delete or clear can
// run. Polling above remains only as migration and fallback.
export function recordTaskCompletion(id: string): void {
    if (!id) return;
    const ledger = loadLedger();
    let changed = false;
    if (ledger.migratedAt === null) { ledger.migratedAt = Date.now(); changed = true; }
    if (!(id in ledger.tasks)) { ledger.tasks[id] = Date.now(); changed = true; }
    if (changed) {
        try { window.localStorage.setItem(LEDGER_KEY, JSON.stringify(ledger)); } catch { /* blocked */ }
    }
}

export interface Profile extends AvatarSpec {
    name: string;
    updatedAt: number;
}

export const DEFAULT_PROFILE: Profile = {
    name: '',
    base: 'moon',
    hat: 'none-hat',
    eyes: 'none-eyes',
    aura: 'none-aura',
    frame: 'none-frame',
    updatedAt: 0,
};

interface ProgressMeta {
    seenAchievements: string[];
    celebratedLevel: number;
}

function readJSON<T>(key: string): T | null {
    try {
        const raw = window.localStorage.getItem(key);
        return raw ? (JSON.parse(raw) as T) : null;
    } catch { return null; }
}

export function loadProfile(): Profile {
    const saved = readJSON<Partial<Profile>>(PROFILE_KEY);
    return { ...DEFAULT_PROFILE, ...(saved || {}) };
}

export function saveProfile(p: Profile): void {
    try { window.localStorage.setItem(PROFILE_KEY, JSON.stringify(p)); } catch { /* storage blocked */ }
}

function loadMeta(): ProgressMeta {
    const saved = readJSON<Partial<ProgressMeta>>('sft:ft-progress-meta.v1');
    return { seenAchievements: [], celebratedLevel: 1, ...(saved || {}) };
}
function saveMeta(m: ProgressMeta): void {
    try { window.localStorage.setItem('sft:ft-progress-meta.v1', JSON.stringify(m)); } catch { /* blocked */ }
}

// Whether the visitor is mid focus session right now (drives the live
// "studying" presence flag). Read from the persisted session state.
export function readStudyingNow(): boolean {
    const s = readJSON<{ phase?: string; running?: boolean }>(SESSION_KEY);
    return Boolean(s && s.running && s.phase === 'focus');
}

export interface Progression {
    ready: boolean;
    snapshot: Snapshot;
    levelInfo: LevelInfo;
    profile: Profile;
    setProfile: (patch: Partial<Profile>) => void;
    replaceProfile: (p: Profile) => void;
    meta: ProgressMeta;
    markAchievementsSeen: (ids: string[]) => void;
    celebrateLevel: (level: number) => void;
    storageMessage: string;
}

// `active` should be true while the profile panel is open: saved stats are
// re-read on an interval so the panel reflects a session that just completed.
export function useProgression(active: boolean): Progression {
    const [tick, setTick] = useState(0);
    const [profile, setProfileState] = useState<Profile>(() => loadProfile());
    const [meta, setMeta] = useState<ProgressMeta>(() => loadMeta());
    const [storageMessage, setStorageMessage] = useState('');

    useEffect(() => {
        if (!active) return;
        const bump = () => setTick((t) => t + 1);
        const iv = window.setInterval(bump, 2000);
        window.addEventListener('focus', bump);
        window.addEventListener('sft:progress', bump as EventListener);
        return () => {
            window.clearInterval(iv);
            window.removeEventListener('focus', bump);
            window.removeEventListener('sft:progress', bump as EventListener);
        };
    }, [active]);

    const stats = useMemo<StatsState>(() => readJSON<StatsState>(STATS_KEY) || { days: {} }, [tick]);
    const tasks = useMemo<TasksState>(() => readJSON<TasksState>(TASKS_KEY) || { tasks: [], activeId: null }, [tick]);
    const [lifetimeTasks, setLifetimeTasks] = useState(() => loadLedger());
    useEffect(() => { setLifetimeTasks(syncLedger(tasks)); }, [tasks]);
    const snapshot = useMemo(
        () => snapshotFrom(stats, tasks, Object.keys(lifetimeTasks.tasks).length),
        [stats, tasks, lifetimeTasks],
    );
    const levelInfo = useMemo(() => levelFromXp(xpFrom(snapshot)), [snapshot]);

    const setProfile = useCallback((patch: Partial<Profile>) => {
        setProfileState((prev) => {
            const next = { ...prev, ...patch, updatedAt: Date.now() };
            try { saveProfile(next); } catch { setStorageMessage('This browser blocked saving. Profile changes last until the tab closes.'); }
            return next;
        });
    }, []);

    // Applies a cloud profile verbatim (cloud merge keeps its own updatedAt).
    const replaceProfile = useCallback((p: Profile) => {
        setProfileState(() => {
            try { saveProfile(p); } catch { /* blocked */ }
            return p;
        });
    }, []);

    const markAchievementsSeen = useCallback((ids: string[]) => {
        setMeta((prev) => {
            const next = { ...prev, seenAchievements: Array.from(new Set([...prev.seenAchievements, ...ids])) };
            saveMeta(next);
            return next;
        });
    }, []);

    const celebrateLevel = useCallback((level: number) => {
        setMeta((prev) => {
            const next = { ...prev, celebratedLevel: Math.max(prev.celebratedLevel, level) };
            saveMeta(next);
            return next;
        });
    }, []);

    return {
        ready: true,
        snapshot,
        levelInfo,
        profile,
        setProfile,
        replaceProfile,
        meta,
        markAchievementsSeen,
        celebrateLevel,
        storageMessage,
    };
}
