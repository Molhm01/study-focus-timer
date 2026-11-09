// ---------- daily quests ----------
// Pure logic. Three quests per day, picked deterministically from the date so
// the set is stable across renders and reloads. Progress is always derived
// from truthful data: today's saved stats and the lifetime task ledger's
// completion timestamps. Claiming is the interactive part (see
// useProgression.claimQuest); quest XP goes into the additive bonus store so
// it can never rewrite history.

export interface QuestDef {
    id: string;
    kind: 'focus' | 'sessions' | 'tasks' | 'streak';
    name: string;
    target: number;
    xp: number;
    unit: string; // progress label, e.g. 'min'
}

const FOCUS_TIERS: QuestDef[] = [
    { id: 'focus-25', kind: 'focus', name: 'Focus 25 minutes today', target: 25, xp: 15, unit: 'min' },
    { id: 'focus-45', kind: 'focus', name: 'Focus 45 minutes today', target: 45, xp: 25, unit: 'min' },
    { id: 'focus-90', kind: 'focus', name: 'Focus 90 minutes today', target: 90, xp: 45, unit: 'min' },
];
const SESSION_TIERS: QuestDef[] = [
    { id: 'sessions-1', kind: 'sessions', name: 'Complete 1 focus session', target: 1, xp: 10, unit: '' },
    { id: 'sessions-2', kind: 'sessions', name: 'Complete 2 focus sessions', target: 2, xp: 20, unit: '' },
    { id: 'sessions-3', kind: 'sessions', name: 'Complete 3 focus sessions', target: 3, xp: 35, unit: '' },
];
const TASK_TIERS: QuestDef[] = [
    { id: 'tasks-1', kind: 'tasks', name: 'Finish 1 task', target: 1, xp: 10, unit: '' },
    { id: 'tasks-2', kind: 'tasks', name: 'Finish 2 tasks', target: 2, xp: 20, unit: '' },
    { id: 'tasks-3', kind: 'tasks', name: 'Finish 3 tasks', target: 3, xp: 30, unit: '' },
];
const STREAK_QUEST: QuestDef = { id: 'streak-keep', kind: 'streak', name: 'Study today to protect your streak', target: 1, xp: 15, unit: '' };

function hashStr(s: string): number {
    let h = 2166136261;
    for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
}
function mulberry32(seed: number): () => number {
    let a = seed >>> 0;
    return () => {
        a |= 0; a = (a + 0x6d2b79f5) | 0;
        let t = Math.imul(a ^ (a >>> 15), 1 | a);
        t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
        return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
}

// The day's three quests. `streakThroughYesterday` decides whether the
// streak-protection quest appears; it is stable all day, so the quest set
// never reshuffles mid-day. One quest per kind, tier seeded by the date.
export function dailyQuests(day: string, streakThroughYesterday: number): QuestDef[] {
    const rnd = mulberry32(hashStr(day));
    const focus = FOCUS_TIERS[Math.floor(rnd() * FOCUS_TIERS.length)];
    const sessions = SESSION_TIERS[Math.floor(rnd() * SESSION_TIERS.length)];
    const tasks = TASK_TIERS[Math.floor(rnd() * TASK_TIERS.length)];
    const third = streakThroughYesterday >= 2 ? STREAK_QUEST : tasks;
    // Seeded display order so the layout feels varied day to day.
    const defs = [focus, sessions, third];
    for (let i = defs.length - 1; i > 0; i--) {
        const j = Math.floor(rnd() * (i + 1));
        [defs[i], defs[j]] = [defs[j], defs[i]];
    }
    return defs;
}

export interface QuestProgress extends QuestDef {
    progress: number;
    done: boolean;
    claimed?: boolean;
}

export function evalQuests(defs: QuestDef[], args: { todayMin: number; todaySessions: number; tasksToday: number }): QuestProgress[] {
    return defs.map((d) => {
        const raw = d.kind === 'focus' ? args.todayMin
            : d.kind === 'sessions' ? args.todaySessions
            : d.kind === 'streak' ? args.todaySessions
            : args.tasksToday;
        const progress = Math.min(raw, d.target);
        return { ...d, progress, done: raw >= d.target };
    });
}
