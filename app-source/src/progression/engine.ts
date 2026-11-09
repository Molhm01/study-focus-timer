// ---------- progression engine ----------
// Pure logic only. No network, no accounts, no storage writes. Everything is
// derived from the timer's own saved stats/tasks so guest data is never
// duplicated or migrated.

export interface DayStat { focusSec: number; sessions: number }
export interface StatsState { days: Record<string, DayStat> }
export interface TaskItem { id: string; title: string; est: number; done: number; completed: boolean }
export interface TasksState { tasks: TaskItem[]; activeId: string | null }

export interface Snapshot {
    totalFocusMin: number;
    totalSessions: number;
    totalTasksCompleted: number; // lifetime completions from the ledger, not the current checklist
    currentStreak: number;
    bestStreak: number;
    bestDayMin: number;
    activeDays: number;
}

// XP sources. Focus minutes are the core (the user asked for "minutes spent
// studying gives you new accessories"); sessions and finished tasks add a bonus.
export const XP_PER_FOCUS_MINUTE = 2;
export const XP_PER_SESSION = 25;
export const XP_PER_TASK_COMPLETED = 15;

export function todayKey(d = new Date()): string {
    return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}

export function snapshotFrom(stats: StatsState, tasksState: TasksState, lifetimeTasksCompleted: number): Snapshot {
    const days = stats.days || {};
    let totalFocusSec = 0;
    let totalSessions = 0;
    let bestDaySec = 0;
    let activeDays = 0;
    const keys = Object.keys(days).sort();
    for (const k of keys) {
        const d = days[k];
        if (!d) continue;
        totalFocusSec += d.focusSec || 0;
        totalSessions += d.sessions || 0;
        if ((d.focusSec || 0) > bestDaySec) bestDaySec = d.focusSec || 0;
        if ((d.sessions || 0) > 0) activeDays++;
    }
    // current streak: consecutive days with at least one session, ending today or yesterday
    let currentStreak = 0;
    const d = new Date();
    if (!((days[todayKey(d)]?.sessions || 0) > 0)) d.setDate(d.getDate() - 1);
    while ((days[todayKey(d)]?.sessions || 0) > 0) { currentStreak++; d.setDate(d.getDate() - 1); }
    // best streak over all history
    let bestStreak = 0;
    let run = 0;
    let prev: Date | null = null;
    for (const k of keys) {
        if (!((days[k]?.sessions || 0) > 0)) continue;
        const cur = new Date(k + 'T12:00:00');
        if (prev) {
            const gapDays = Math.round((cur.getTime() - prev.getTime()) / 86400000);
            run = gapDays === 1 ? run + 1 : 1;
        } else run = 1;
        if (run > bestStreak) bestStreak = run;
        prev = cur;
    }
    // Task XP and achievements use the lifetime ledger: unticking, deleting or
    // clearing completed tasks never takes earned progress away.
    return {
        totalFocusMin: Math.round(totalFocusSec / 60),
        totalSessions,
        totalTasksCompleted: lifetimeTasksCompleted,
        currentStreak,
        bestStreak,
        bestDayMin: Math.round(bestDaySec / 60),
        activeDays,
    };
}

export function xpFrom(s: Snapshot): number {
    return s.totalFocusMin * XP_PER_FOCUS_MINUTE + s.totalSessions * XP_PER_SESSION + s.totalTasksCompleted * XP_PER_TASK_COMPLETED;
}

// XP cost to advance from `level` to `level + 1`. Early levels come quickly
// (level 2 lands after roughly one focused hour) and later ones feel earned.
export function levelCost(level: number): number {
    return 100 + 50 * (level - 1);
}

export interface LevelInfo { level: number; xp: number; intoLevel: number; needed: number; progress: number }
export function levelFromXp(xp: number): LevelInfo {
    let level = 1;
    let remaining = Math.max(0, Math.floor(xp));
    while (level < 99 && remaining >= levelCost(level)) { remaining -= levelCost(level); level++; }
    const needed = levelCost(level);
    return { level, xp, intoLevel: remaining, needed, progress: needed > 0 ? remaining / needed : 0 };
}

export const TITLES: { level: number; name: string }[] = [
    { level: 1, name: 'Newcomer' },
    { level: 3, name: 'Apprentice' },
    { level: 5, name: 'Scholar' },
    { level: 7, name: 'Night Owl' },
    { level: 10, name: 'Deep Diver' },
    { level: 14, name: 'Sage' },
    { level: 18, name: 'Luminary' },
    { level: 24, name: 'Master of Focus' },
    { level: 30, name: 'Legend of the Library' },
    { level: 36, name: 'Titan of Study' },
    { level: 42, name: 'Myth of the Stacks' },
];
export function titleForLevel(level: number): string {
    let name = TITLES[0].name;
    for (const t of TITLES) if (level >= t.level) name = t.name;
    return name;
}

// ---------- cosmetics ----------
export type Slot = 'hat' | 'eyes' | 'aura' | 'frame';
export interface Accessory { id: string; slot: Slot; name: string; level: number; hint: string }

export const ACCESSORIES: Accessory[] = [
    { id: 'none-hat', slot: 'hat', name: 'No hat', level: 1, hint: '' },
    { id: 'headphones', slot: 'hat', name: 'Headphones', level: 2, hint: 'Unlocked at level 2' },
    { id: 'beanie', slot: 'hat', name: 'Beanie', level: 4, hint: 'Unlocked at level 4' },
    { id: 'halo', slot: 'hat', name: 'Halo', level: 8, hint: 'Unlocked at level 8' },
    { id: 'crown', slot: 'hat', name: 'Focus crown', level: 12, hint: 'Unlocked at level 12' },
    { id: 'wizard', slot: 'hat', name: 'Wizard hat', level: 16, hint: 'Unlocked at level 16' },
    { id: 'laurel', slot: 'hat', name: 'Laurel wreath', level: 20, hint: 'Unlocked at level 20' },
    { id: 'gradcap', slot: 'hat', name: 'Graduation cap', level: 7, hint: 'Unlocked at level 7' },
    { id: 'astro', slot: 'hat', name: 'Astro helmet', level: 24, hint: 'Unlocked at level 24' },
    { id: 'none-eyes', slot: 'eyes', name: 'No eyewear', level: 1, hint: '' },
    { id: 'glasses', slot: 'eyes', name: 'Round glasses', level: 3, hint: 'Unlocked at level 3' },
    { id: 'shades', slot: 'eyes', name: 'Cool shades', level: 6, hint: 'Unlocked at level 6' },
    { id: 'monocle', slot: 'eyes', name: 'Monocle', level: 10, hint: 'Unlocked at level 10' },
    { id: 'star-eyes', slot: 'eyes', name: 'Starry eyes', level: 15, hint: 'Unlocked at level 15' },
    { id: 'hearts', slot: 'eyes', name: 'Heart eyes', level: 8, hint: 'Unlocked at level 8' },
    { id: 'none-aura', slot: 'aura', name: 'No aura', level: 1, hint: '' },
    { id: 'sparkle', slot: 'aura', name: 'Sparkles', level: 5, hint: 'Unlocked at level 5' },
    { id: 'calm-ring', slot: 'aura', name: 'Calm ring', level: 9, hint: 'Unlocked at level 9' },
    { id: 'ember', slot: 'aura', name: 'Ember glow', level: 13, hint: 'Unlocked at level 13' },
    { id: 'galaxy', slot: 'aura', name: 'Galaxy ring', level: 18, hint: 'Unlocked at level 18' },
    { id: 'rainbow', slot: 'aura', name: 'Rainbow ring', level: 15, hint: 'Unlocked at level 15' },
    { id: 'none-frame', slot: 'frame', name: 'No frame', level: 1, hint: '' },
    { id: 'frame-bronze', slot: 'frame', name: 'Bronze frame', level: 2, hint: 'Unlocked at level 2' },
    { id: 'frame-silver', slot: 'frame', name: 'Silver frame', level: 6, hint: 'Unlocked at level 6' },
    { id: 'frame-gold', slot: 'frame', name: 'Gold frame', level: 11, hint: 'Unlocked at level 11' },
    { id: 'frame-emerald', slot: 'frame', name: 'Emerald frame', level: 16, hint: 'Unlocked at level 16' },
    { id: 'frame-diamond', slot: 'frame', name: 'Diamond frame', level: 22, hint: 'Unlocked at level 22' },
    { id: 'frame-rainbow', slot: 'frame', name: 'Rainbow frame', level: 25, hint: 'Unlocked at level 25' },
];
export function isUnlocked(a: Accessory, level: number): boolean { return level >= a.level; }
export function nextUnlocks(level: number): Accessory[] {
    return ACCESSORIES.filter((a) => a.level > level).sort((a, b) => a.level - b.level).slice(0, 3);
}

export interface AvatarBase { id: string; name: string }
export const AVATAR_BASES: AvatarBase[] = [
    { id: 'moon', name: 'Moon' },
    { id: 'cat', name: 'Cat' },
    { id: 'owl', name: 'Owl' },
    { id: 'fox', name: 'Fox' },
    { id: 'robot', name: 'Robot' },
    { id: 'star', name: 'Star' },
    { id: 'sprout', name: 'Sprout' },
    { id: 'blob', name: 'Blob' },
    { id: 'penguin', name: 'Penguin' },
    { id: 'frog', name: 'Frog' },
];

// ---------- achievements ----------
// ctx carries progression values that live outside the raw stats snapshot
// (bonus XP from quests, lifetime quest claims). Every entry keeps working
// without ctx; it just can't unlock ctx-based achievements then.
export interface AchievementCtx { xp: number; questsClaimed: number }
export interface Achievement {
    id: string; name: string; desc: string;
    unlocked: (s: Snapshot, ctx?: AchievementCtx) => boolean;
    // Optional progress bar data for locked achievements.
    target?: number;
    progress?: (s: Snapshot, ctx?: AchievementCtx) => number;
}
export const ACHIEVEMENTS: Achievement[] = [
    { id: 'first-session', name: 'First steps', desc: 'Complete your first focus session', unlocked: (s) => s.totalSessions >= 1, target: 1, progress: (s) => s.totalSessions },
    { id: 'ten-sessions', name: 'Getting serious', desc: 'Complete 10 focus sessions', unlocked: (s) => s.totalSessions >= 10, target: 10, progress: (s) => s.totalSessions },
    { id: 'fifty-sessions', name: 'Half century', desc: 'Complete 50 focus sessions', unlocked: (s) => s.totalSessions >= 50, target: 50, progress: (s) => s.totalSessions },
    { id: 'tasks-5', name: 'Task tackler', desc: 'Finish 5 tasks', unlocked: (s) => s.totalTasksCompleted >= 5, target: 5, progress: (s) => s.totalTasksCompleted },
    { id: 'tasks-25', name: 'Task master', desc: 'Finish 25 tasks', unlocked: (s) => s.totalTasksCompleted >= 25, target: 25, progress: (s) => s.totalTasksCompleted },
    { id: 'streak-3', name: 'Hat trick', desc: 'Study 3 days in a row', unlocked: (s) => s.bestStreak >= 3, target: 3, progress: (s) => s.bestStreak },
    { id: 'streak-7', name: 'Full week', desc: 'Study 7 days in a row', unlocked: (s) => s.bestStreak >= 7, target: 7, progress: (s) => s.bestStreak },
    { id: 'streak-30', name: 'Unstoppable', desc: 'Study 30 days in a row', unlocked: (s) => s.bestStreak >= 30, target: 30, progress: (s) => s.bestStreak },
    { id: 'hour-day', name: 'Solid hour', desc: 'Focus 60 minutes in one day', unlocked: (s) => s.bestDayMin >= 60, target: 60, progress: (s) => s.bestDayMin },
    { id: 'deep-day', name: 'Deep work day', desc: 'Focus 3 hours in one day', unlocked: (s) => s.bestDayMin >= 180, target: 180, progress: (s) => s.bestDayMin },
    { id: 'ten-hours', name: 'Ten hours deep', desc: 'Reach 10 total focus hours', unlocked: (s) => s.totalFocusMin >= 600, target: 600, progress: (s) => s.totalFocusMin },
    { id: 'hundred-hours', name: 'Century club', desc: 'Reach 100 total focus hours', unlocked: (s) => s.totalFocusMin >= 6000, target: 6000, progress: (s) => s.totalFocusMin },
    { id: 'level-5', name: 'Rising star', desc: 'Reach level 5', unlocked: (s, ctx) => levelFromXp(ctx ? ctx.xp : xpFrom(s)).level >= 5, target: 5, progress: (s, ctx) => levelFromXp(ctx ? ctx.xp : xpFrom(s)).level },
    { id: 'level-10', name: 'Double digits', desc: 'Reach level 10', unlocked: (s, ctx) => levelFromXp(ctx ? ctx.xp : xpFrom(s)).level >= 10, target: 10, progress: (s, ctx) => levelFromXp(ctx ? ctx.xp : xpFrom(s)).level },
    { id: 'level-20', name: 'Sky high', desc: 'Reach level 20', unlocked: (s, ctx) => levelFromXp(ctx ? ctx.xp : xpFrom(s)).level >= 20, target: 20, progress: (s, ctx) => levelFromXp(ctx ? ctx.xp : xpFrom(s)).level },
    { id: 'quests-1', name: 'Quest starter', desc: 'Claim your first daily quest', unlocked: (_s, ctx) => (ctx?.questsClaimed || 0) >= 1, target: 1, progress: (_s, ctx) => ctx?.questsClaimed || 0 },
    { id: 'quests-10', name: 'Quest regular', desc: 'Claim 10 daily quests', unlocked: (_s, ctx) => (ctx?.questsClaimed || 0) >= 10, target: 10, progress: (_s, ctx) => ctx?.questsClaimed || 0 },
    { id: 'quests-50', name: 'Quest legend', desc: 'Claim 50 daily quests', unlocked: (_s, ctx) => (ctx?.questsClaimed || 0) >= 50, target: 50, progress: (_s, ctx) => ctx?.questsClaimed || 0 },
    { id: 'active-7', name: 'Regular', desc: 'Study on 7 different days', unlocked: (s) => s.activeDays >= 7, target: 7, progress: (s) => s.activeDays },
    { id: 'active-30', name: 'Devoted', desc: 'Study on 30 different days', unlocked: (s) => s.activeDays >= 30, target: 30, progress: (s) => s.activeDays },
];

export function fmtDuration(min: number): string {
    if (min < 60) return `${min} min`;
    const h = Math.floor(min / 60);
    const m = min % 60;
    return m ? `${h}h ${m}m` : `${h}h`;
    }
