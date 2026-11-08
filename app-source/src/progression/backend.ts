import { useCallback, useEffect, useRef, useState } from 'react';
import { Profile } from './useProgression';

// ---------- optional cloud layer (Firebase Spark, no-cost plan) ----------
// INERT until FIREBASE_CONFIG below is filled in. With an empty config:
// no sign-in UI, no live presence, no network calls - the app stays local.
//
// What the cloud layer does once configured (and only then):
//  - Google sign-in (Firebase Authentication, free tier, no card)
//  - profile + progression sync to the visitor's own record (private by
//    default: security rules restrict each record to its owner)
//  - live presence: an aggregate "N people studying now" count. Presence
//    records carry only a random auth id, a studying flag and a timestamp -
//    no names, no stats - and are removed on disconnect. Guests appear in
//    the count through anonymous sign-in; the count is the ONLY thing any
//    visitor can read about others.

export const FIREBASE_CONFIG = {
    apiKey: '',
    authDomain: '',
    projectId: '',
    databaseURL: '',
    appId: '',
};

export const backendEnabled = Boolean(FIREBASE_CONFIG.apiKey && FIREBASE_CONFIG.databaseURL && FIREBASE_CONFIG.authDomain);

const SDK_VERSION = '10.14.1';
const SDK_URLS = {
    app: `https://www.gstatic.com/firebasejs/${SDK_VERSION}/firebase-app.js`,
    auth: `https://www.gstatic.com/firebasejs/${SDK_VERSION}/firebase-auth.js`,
    database: `https://www.gstatic.com/firebasejs/${SDK_VERSION}/firebase-database.js`,
};

type AnyMod = Record<string, any>;
interface FirebaseHandle { auth: AnyMod; db: AnyMod; authApi: AnyMod; dbApi: AnyMod }

let fbPromise: Promise<FirebaseHandle> | null = null;
function dynamicImport(url: string): Promise<AnyMod> {
    // Indirection so the bundler leaves this cross-origin runtime import alone.
    return (new Function('u', 'return import(u)') as (u: string) => Promise<AnyMod>)(url);
}
function loadFirebase(): Promise<FirebaseHandle> {
    if (!fbPromise) {
        const p = Promise.all([dynamicImport(SDK_URLS.app), dynamicImport(SDK_URLS.auth), dynamicImport(SDK_URLS.database)])
            .then(([appApi, authApi, dbApi]) => {
                const app = appApi.initializeApp(FIREBASE_CONFIG);
                return { auth: authApi.getAuth(app), db: dbApi.getDatabase(app), authApi, dbApi };
            });
        p.catch(() => { if (fbPromise === p) fbPromise = null; });
        fbPromise = p;
    }
    return fbPromise;
}

export interface CloudUser { uid: string; name: string; email: string | null; anonymous: boolean }
export type CloudStatus = 'off' | 'loading' | 'signed-out' | 'signed-in' | 'error';

export function useCloudAuth(): {
    status: CloudStatus; user: CloudUser | null; error: string;
    signInWithGoogle: () => void; signOut: () => void;
} {
    const [status, setStatus] = useState<CloudStatus>(backendEnabled ? 'loading' : 'off');
    const [user, setUser] = useState<CloudUser | null>(null);
    const [error, setError] = useState('');

    useEffect(() => {
        if (!backendEnabled) return;
        let unsub: (() => void) | undefined;
        let alive = true;
        loadFirebase()
            .then(({ auth, authApi }) => {
                if (!alive) return;
                unsub = authApi.onAuthStateChanged(auth, (u: any) => {
                    if (!alive) return;
                    if (u) {
                        setUser({ uid: u.uid, name: u.displayName || (u.isAnonymous ? 'Guest' : 'Scholar'), email: u.email || null, anonymous: Boolean(u.isAnonymous) });
                        setStatus('signed-in');
                    } else {
                        setUser(null);
                        setStatus('signed-out');
                    }
                });
            })
            .catch(() => { if (alive) { setStatus('error'); setError('Account features could not be loaded. Everything else still works on this device.'); } });
        return () => { alive = false; if (unsub) unsub(); };
    }, []);

    const signInWithGoogle = useCallback(() => {
        if (!backendEnabled) return;
        setError('');
        loadFirebase()
            .then(({ auth, authApi }) => authApi.signInWithPopup(auth, new authApi.GoogleAuthProvider()))
            .catch((e: any) => {
                if (e && (e.code === 'auth/popup-closed-by-user' || e.code === 'auth/cancelled-popup-request')) return;
                setError('Sign-in did not complete. Your local progress is unaffected.');
            });
    }, []);

    const signOut = useCallback(() => {
        if (!backendEnabled) return;
        loadFirebase().then(({ auth, authApi }) => authApi.signOut(auth)).catch(() => {});
    }, []);

    return { status, user, error, signInWithGoogle, signOut };
}

// ---------- profile sync ----------
// Writes the local profile to the owner's private record. Callers merge
// cloud -> local on sign-in (newest updatedAt wins), then push local changes.

export async function pullCloudProfile(uid: string): Promise<Profile | null> {
    if (!backendEnabled) return null;
    const { db, dbApi } = await loadFirebase();
    const snap = await dbApi.get(dbApi.child(dbApi.ref(db), `profiles/${uid}`));
    const v = snap && snap.val ? snap.val() : null;
    if (!v || typeof v !== 'object') return null;
    return {
        name: typeof v.name === 'string' ? v.name.slice(0, 40) : '',
        base: typeof v.base === 'string' ? v.base : 'moon',
        hat: typeof v.hat === 'string' ? v.hat : 'none-hat',
        eyes: typeof v.eyes === 'string' ? v.eyes : 'none-eyes',
        aura: typeof v.aura === 'string' ? v.aura : 'none-aura',
        frame: typeof v.frame === 'string' ? v.frame : 'none-frame',
        updatedAt: typeof v.updatedAt === 'number' ? v.updatedAt : 0,
    };
}

export async function pushCloudProfile(uid: string, p: Profile): Promise<void> {
    if (!backendEnabled) return;
    const { db, dbApi } = await loadFirebase();
    await dbApi.set(dbApi.ref(db, `profiles/${uid}`), {
        name: p.name.slice(0, 40),
        base: p.base, hat: p.hat, eyes: p.eyes, aura: p.aura, frame: p.frame,
        updatedAt: p.updatedAt,
    });
}

// ---------- live presence (aggregate count only) ----------
export type PresenceStatus = 'off' | 'connecting' | 'live' | 'error';

export function usePresence(studying: boolean, enabled: boolean): { count: number | null; status: PresenceStatus } {
    const [count, setCount] = useState<number | null>(null);
    const [status, setStatus] = useState<PresenceStatus>(backendEnabled ? 'connecting' : 'off');
    const studyingRef = useRef(studying);
    studyingRef.current = studying;

    useEffect(() => {
        if (!backendEnabled || !enabled) { setStatus('off'); setCount(null); return; }
        let alive = true;
        let cleanup: (() => void) | undefined;
        setStatus('connecting');
        (async () => {
            try {
                const { auth, db, authApi, dbApi } = await loadFirebase();
                let user = auth.currentUser;
                if (!user) user = (await authApi.signInAnonymously(auth)).user;
                if (!alive) return;
                const meRef = dbApi.ref(db, `presence/${user.uid}`);
                const write = () => dbApi.set(meRef, { studying: studyingRef.current, ts: Date.now() }).catch(() => {});
                await write();
                dbApi.onDisconnect(meRef).remove().catch(() => {});
                const heartbeat = window.setInterval(write, 30000);
                const unsub = dbApi.onValue(dbApi.ref(db, 'presence'), (snap: any) => {
                    if (!alive) return;
                    const now = Date.now();
                    let n = 0;
                    const val = snap && snap.val ? snap.val() : {};
                    for (const k of Object.keys(val || {})) {
                        const e = val[k];
                        if (e && e.studying === true && typeof e.ts === 'number' && now - e.ts < 90000) n++;
                    }
                    setCount(n);
                    setStatus('live');
                }, () => { if (alive) setStatus('error'); });
                cleanup = () => {
                    window.clearInterval(heartbeat);
                    if (unsub) unsub();
                    dbApi.remove(meRef).catch(() => {});
                };
            } catch {
                if (alive) setStatus('error');
            }
        })();
        return () => { alive = false; if (cleanup) cleanup(); };
    }, [enabled]);

    // re-write promptly when the studying flag flips
    useEffect(() => {
        if (!backendEnabled || !enabled || status !== 'live') return;
        loadFirebase().then(({ auth, db, dbApi }) => {
            const user = auth.currentUser;
            if (user) dbApi.set(dbApi.ref(db, `presence/${user.uid}`), { studying, ts: Date.now() }).catch(() => {});
        }).catch(() => {});
    }, [studying, enabled, status]);

    return { count, status };
}
