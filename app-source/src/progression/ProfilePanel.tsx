import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Avatar } from './Avatar';
import {
    ACCESSORIES, ACHIEVEMENTS, AVATAR_BASES, Slot, fmtDuration,
    isUnlocked, nextUnlocks, titleForLevel,
} from './engine';
import { useProgression, readStudyingNow, syncLedgerFromStorage } from './useProgression';
import { backendEnabled, useCloudAuth, usePresence, pullCloudProfile, pushCloudProfile } from './backend';

// Always-mounted beacon that keeps this visitor's anonymous presence flag
// (studying / not studying) up to date. Renders nothing. Entirely inert
// until the backend config is filled in - no network calls before then.
export function PresenceBeacon() {
    const [studying, setStudying] = useState(false);
    useEffect(() => {
        syncLedgerFromStorage();
        const sync = () => syncLedgerFromStorage();
        const syncIv = window.setInterval(sync, 15000);
        if (!backendEnabled) return () => window.clearInterval(syncIv);
        const update = () => setStudying(readStudyingNow());
        update();
        const iv = window.setInterval(update, 10000);
        return () => { window.clearInterval(iv); window.clearInterval(syncIv); };
    }, []);
    usePresence(studying, backendEnabled);
    return null;
}

const SLOTS: { slot: Slot; label: string }[] = [
    { slot: 'hat', label: 'Hat' },
    { slot: 'eyes', label: 'Eyewear' },
    { slot: 'aura', label: 'Aura' },
    { slot: 'frame', label: 'Frame' },
];

export const ProfilePanel = React.memo(function ProfilePanel({ onClose }: { onClose: () => void }) {
    const prog = useProgression(true);
    const { snapshot, levelInfo, profile, setProfile, replaceProfile, meta } = prog;
    const cloud = useCloudAuth();
    const [studying, setStudying] = useState(false);
    useEffect(() => {
        if (!backendEnabled) return;
        const update = () => setStudying(readStudyingNow());
        update();
        const iv = window.setInterval(update, 5000);
        return () => window.clearInterval(iv);
    }, []);
    const presence = usePresence(studying, backendEnabled);

    const [editingName, setEditingName] = useState(false);
    const [nameDraft, setNameDraft] = useState('');
    const [syncMsg, setSyncMsg] = useState('');
    const mergedForRef = useRef('');

    // Cloud merge on sign-in: newest updatedAt wins, then keep cloud in sync.
    useEffect(() => {
        if (!backendEnabled || cloud.status !== 'signed-in' || !cloud.user || cloud.user.anonymous) return;
        const uid = cloud.user.uid;
        if (mergedForRef.current === uid) return;
        mergedForRef.current = uid;
        pullCloudProfile(uid)
            .then((remote) => {
                if (remote && remote.updatedAt > profile.updatedAt) {
                    replaceProfile(remote);
                    setSyncMsg('Profile synced from your account.');
                } else {
                    pushCloudProfile(uid, profile).then(() => setSyncMsg('Profile saved to your account.')).catch(() => setSyncMsg('Could not sync right now; your local profile is safe.'));
                }
            })
            .catch(() => setSyncMsg('Could not sync right now; your local profile is safe.'));
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [cloud.status, cloud.user]);

    // Push local profile edits (debounced) while signed in with a real account.
    useEffect(() => {
        if (!backendEnabled || cloud.status !== 'signed-in' || !cloud.user || cloud.user.anonymous) return;
        if (!profile.updatedAt) return;
        const t = window.setTimeout(() => {
            pushCloudProfile(cloud.user!.uid, profile).catch(() => setSyncMsg('Could not sync right now; your local profile is safe.'));
        }, 800);
        return () => window.clearTimeout(t);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profile.updatedAt, cloud.status, cloud.user]);

    const level = levelInfo.level;
    const title = titleForLevel(level);
    const unlockedAchievements = useMemo(() => ACHIEVEMENTS.filter((a) => a.unlocked(snapshot)), [snapshot]);
    const newAchievements = unlockedAchievements.filter((a) => !meta.seenAchievements.includes(a.id));
    const leveledUp = level > meta.celebratedLevel;
    const upcoming = nextUnlocks(level);

    const commitName = () => {
        const name = nameDraft.trim().slice(0, 24);
        setProfile({ name });
        setEditingName(false);
    };

    const displayName = profile.name || 'Guest scholar';

    return <aside className="ft-sheet pf-sheet" aria-label="Profile and progress">
        <div className="ft-sheet-head">
            <h2>Profile</h2>
            <button type="button" className="ft-sheet-close" aria-label="Close profile" onClick={onClose}>×</button>
        </div>

        <div className="pf-hero">
            <Avatar spec={profile} size={84} />
            <div className="pf-hero-info">
                {editingName
                    ? <span className="pf-nameedit">
                        <input value={nameDraft} maxLength={24} autoFocus placeholder="Display name"
                            onChange={(e) => setNameDraft(e.target.value)}
                            onKeyDown={(e) => { if (e.key === 'Enter') commitName(); if (e.key === 'Escape') setEditingName(false); }} />
                        <button type="button" className="ft-primary is-compact" onClick={commitName}>Save</button>
                    </span>
                    : <button type="button" className="pf-name" title="Edit display name" onClick={() => { setNameDraft(profile.name); setEditingName(true); }}>
                        {displayName} <span className="pf-name-pen" aria-hidden="true">✎</span>
                    </button>}
                <span className="pf-title">{title}</span>
                {presence.status === 'live' && presence.count !== null
                    ? <span className="pf-live" title="People with a focus session running right now">
                        <span className="pf-live-dot" aria-hidden="true" /> {presence.count} studying now
                    </span>
                    : null}
            </div>
            <span className="pf-level-badge" title={`Level ${level}`}>Lv {level}</span>
        </div>

        <div className="pf-xpwrap" role="img" aria-label={`Level ${level}, ${levelInfo.intoLevel} of ${levelInfo.needed} experience toward level ${level + 1}`}>
            <div className="pf-xpbar"><span style={{ width: `${Math.round(levelInfo.progress * 100)}%` }} /></div>
            <span className="pf-xpnum">{levelInfo.intoLevel} / {levelInfo.needed} XP</span>
        </div>

        {leveledUp ? <div className="pf-banner" role="status">
            Level {level} reached - {title}!{upcoming.length === 0 ? '' : ' New gear below.'}
            <button type="button" className="ft-primary is-compact" onClick={() => prog.celebrateLevel(level)}>Nice</button>
        </div> : null}
        {newAchievements.length > 0 ? <div className="pf-banner" role="status">
            Unlocked: {newAchievements.map((a) => a.name).join(', ')}
            <button type="button" className="ft-primary is-compact" onClick={() => prog.markAchievementsSeen(newAchievements.map((a) => a.id))}>Nice</button>
        </div> : null}

        <h3>Your stats</h3>
        <div className="pf-stats">
            <div className="pf-stat"><strong>{fmtDuration(snapshot.totalFocusMin)}</strong><span>total focus</span></div>
            <div className="pf-stat"><strong>{snapshot.totalSessions}</strong><span>sessions</span></div>
            <div className="pf-stat"><strong>{snapshot.totalTasksCompleted}</strong><span>tasks done · all time</span></div>
            <div className="pf-stat"><strong>{snapshot.currentStreak} {snapshot.currentStreak === 1 ? 'day' : 'days'}</strong><span>current streak</span></div>
            <div className="pf-stat"><strong>{snapshot.bestStreak} {snapshot.bestStreak === 1 ? 'day' : 'days'}</strong><span>best streak</span></div>
            <div className="pf-stat"><strong>{fmtDuration(snapshot.bestDayMin)}</strong><span>best day</span></div>
        </div>

        <h3>Customize</h3>
        <p className="ft-field-hint">Pick a look. Locked gear opens as you level up from focus time.</p>
        <div className="pf-subhead">Avatar</div>
        <div className="pf-bases">
            {AVATAR_BASES.map((b) => <button key={b.id} type="button" title={b.name} aria-label={`Avatar ${b.name}`}
                className={`pf-basebtn ${profile.base === b.id ? 'is-active' : ''}`}
                onClick={() => setProfile({ base: b.id })}>
                <Avatar spec={{ ...profile, base: b.id, hat: 'none-hat', eyes: 'none-eyes', aura: 'none-aura', frame: 'none-frame' }} size={44} />
            </button>)}
        </div>
        {SLOTS.map(({ slot, label }) => <div key={slot}>
            <div className="pf-subhead">{label}</div>
            <div className="pf-gear">
                {ACCESSORIES.filter((a) => a.slot === slot).map((a) => {
                    const open = isUnlocked(a, level);
                    const active = profile[slot] === a.id || (a.id.startsWith('none') && !ACCESSORIES.some((x) => x.slot === slot && profile[slot] === x.id));
                    return <button key={a.id} type="button"
                        className={`pf-gearbtn ${active ? 'is-active' : ''} ${open ? '' : 'is-locked'}`}
                        title={open ? a.name : `${a.name} - ${a.hint}`}
                        onClick={() => { if (open) setProfile({ [slot]: a.id } as Partial<typeof profile>); }}>
                        {open ? a.name : `🔒 ${a.name} · Lv ${a.level}`}
                    </button>;
                })}
            </div>
        </div>)}
        {upcoming.length > 0 ? <p className="ft-field-hint">Next unlock: {upcoming[0].name} at level {upcoming[0].level} ({levelInfo.needed - levelInfo.intoLevel} XP to next level).</p> : null}

        <h3>Achievements</h3>
        <ul className="pf-achievements">
            {ACHIEVEMENTS.map((a) => {
                const got = a.unlocked(snapshot);
                return <li key={a.id} className={got ? 'is-got' : ''}>
                    <span className="pf-ach-check" aria-hidden="true">{got ? '★' : '☆'}</span>
                    <span className="pf-ach-body"><strong>{a.name}</strong><span>{a.desc}</span></span>
                </li>;
            })}
        </ul>

        <h3>Account</h3>
        {!backendEnabled ? <p className="ft-field-hint">
            Sign-in and the live studying counter need a small server, which has not been connected yet.
            Your level, avatar and stats are saved in this browser and keep working offline.
        </p> : <>
            {cloud.status === 'signed-out' ? <p className="ft-field-hint">
                Optional: sign in to keep your profile and level across devices. You can keep studying without an account.
            </p> : null}
            {cloud.status === 'signed-out' ? <button type="button" className="ft-primary is-compact" onClick={cloud.signInWithGoogle}>Sign in with Google</button> : null}
            {cloud.status === 'loading' ? <p className="ft-field-hint">Loading account features…</p> : null}
            {cloud.status === 'signed-in' && cloud.user ? <div className="pf-account">
                {cloud.user.anonymous
                    ? <p className="ft-field-hint">Browsing as a guest. <button type="button" className="pf-linkbtn" onClick={cloud.signInWithGoogle}>Sign in with Google</button> to save this profile to an account.</p>
                    : <><p className="pf-account-name">{cloud.user.name}{cloud.user.email ? ` · ${cloud.user.email}` : ''}</p>
                        <button type="button" className="ft-ghost is-compact" onClick={cloud.signOut}>Sign out</button></>}
            </div> : null}
            {cloud.error ? <p className="ft-field-hint">{cloud.error}</p> : null}
            {syncMsg ? <p className="ft-field-hint">{syncMsg}</p> : null}
            <p className="ft-field-hint">The studying counter is an anonymous total. Nobody can see your name, avatar or stats.</p>
        </>}
        {prog.storageMessage ? <p className="ft-field-hint">{prog.storageMessage}</p> : null}
    </aside>;
});
