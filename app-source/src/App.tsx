import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

// ---------- device-local storage (plain localStorage on standalone hosting) ----------
function useLocalState<T>(key: string, initial: T): [T, (v: T | ((prev: T) => T)) => void, { ready: boolean; message: string }] {
    const [value, setValue] = useState<T>(initial);
    const [ready, setReady] = useState(false);
    const [message, setMessage] = useState('');
    useEffect(() => {
        try {
            const raw = window.localStorage.getItem('sft:' + key);
            if (raw != null) {
                const parsed = JSON.parse(raw);
                const merged = initial !== null && typeof initial === 'object' && !Array.isArray(initial) && parsed !== null && typeof parsed === 'object' && !Array.isArray(parsed)
                    ? ({ ...(initial as object), ...(parsed as object) } as T)
                    : (parsed as T);
                setValue(merged);
            }
        } catch { setMessage('Saved data on this browser could not be read.'); }
        setReady(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [key]);
    const set = useCallback((v: T | ((prev: T) => T)) => {
        setValue((prev) => {
            const next = typeof v === 'function' ? (v as (p: T) => T)(prev) : v;
            try { window.localStorage.setItem('sft:' + key, JSON.stringify(next)); }
            catch { setMessage('This browser blocked saving. Changes last until the tab closes.'); }
            return next;
        });
    }, [key]);
    return [value, set, { ready, message }];
}

// ---------- background photos: full images load on demand, thumbnails load for the picker ----------
const PHOTO_LOADERS: Record<string, () => Promise<{ default: string }>> = {
    rain: () => import('./photos/rain.jpg'),
    library: () => import('./photos/library.jpg'),
    coffee: () => import('./photos/coffee.jpg'),
    desk: () => import('./photos/desk.jpg'),
    mountains: () => import('./photos/mountains.jpg'),
    forest: () => import('./photos/forest.jpg'),
    stars: () => import('./photos/stars.jpg'),
    ocean: () => import('./photos/ocean.jpg'),
};
const THUMB_LOADERS: Record<string, () => Promise<{ default: string }>> = {
    rain: () => import('./thumbs/rain.jpg'),
    library: () => import('./thumbs/library.jpg'),
    coffee: () => import('./thumbs/coffee.jpg'),
    desk: () => import('./thumbs/desk.jpg'),
    mountains: () => import('./thumbs/mountains.jpg'),
    forest: () => import('./thumbs/forest.jpg'),
    stars: () => import('./thumbs/stars.jpg'),
    ocean: () => import('./thumbs/ocean.jpg'),
};
const photoCache: Record<string, string> = {};
const thumbCache: Record<string, string> = {};

type Phase = 'focus' | 'short' | 'long';
type BgKind = 'builtin' | 'gradient' | 'link' | 'upload' | 'animated' | 'scene';

interface Settings {
    focusMin: number; shortMin: number; longMin: number; longEvery: number;
    autoBreaks: boolean; autoFocus: boolean;
    alarmSound: string; alarmVolume: number; alarmRepeat: boolean;
    customAlarm: { source: string; name: string } | null;
    tick: boolean;
    ambient: string; ambientVolume: number;
    notifications: boolean; keepAwake: boolean;
    background: { kind: BgKind; id?: string; source?: string };
    scrim: number;
    accent: string; font: string;
    clockStyle: 'ring' | 'bar' | 'minimal'; clockSize: 's' | 'm' | 'l';
    showDots: boolean; showChip: boolean; showHint: boolean;
    spotify: string | null; spotifyOpen: boolean;
}

interface Task { id: string; title: string; est: number; done: number; completed: boolean; }
interface TasksState { tasks: Task[]; activeId: string | null; }
interface StatsState { days: Record<string, { focusSec: number; sessions: number }>; }

const DEFAULT_SETTINGS: Settings = {
    focusMin: 25, shortMin: 5, longMin: 15, longEvery: 4,
    autoBreaks: false, autoFocus: false,
    alarmSound: 'bell', alarmVolume: 0.8, alarmRepeat: true,
    customAlarm: null,
    tick: false,
    ambient: 'none', ambientVolume: 0.5,
    notifications: false, keepAwake: false,
    background: { kind: 'builtin', id: 'rain' },
    scrim: 0.45,
    accent: '#9fd8c6', font: 'sans',
    clockStyle: 'ring', clockSize: 'm',
    showDots: true, showChip: true, showHint: true,
    spotify: null, spotifyOpen: false,
};

const BUILTIN_BGS = [
    { id: 'rain', name: 'Rainy window' },
    { id: 'library', name: 'Library' },
    { id: 'coffee', name: 'Coffee notes' },
    { id: 'desk', name: 'Night desk' },
    { id: 'mountains', name: 'Mountains' },
    { id: 'forest', name: 'Misty forest' },
    { id: 'stars', name: 'Night sky' },
    { id: 'ocean', name: 'Ocean' },
];

const GRADIENTS = [
    { id: 'dusk', name: 'Dusk', css: 'linear-gradient(160deg, #232453 0%, #6b3f63 55%, #c96f4a 100%)' },
    { id: 'moss', name: 'Moss', css: 'linear-gradient(160deg, #0f2e25 0%, #1d5c46 60%, #7ea87b 100%)' },
    { id: 'ink', name: 'Ink', css: 'linear-gradient(160deg, #101418 0%, #1f2a33 100%)' },
    { id: 'dawn', name: 'Dawn', css: 'linear-gradient(160deg, #3b2f4a 0%, #8a5a6e 55%, #e8a87c 100%)' },
];

const ANIMATED_BGS = [
    { id: 'aurora', name: 'Aurora' },
    { id: 'meteor', name: 'Falling stars' },
    { id: 'waves', name: 'Night waves' },
    { id: 'rainfall', name: 'Rain streaks' },
];

// Animated video scenes, lazy-loaded like the photos. Source: Pixabay, free to use under the
// Pixabay Content License (no attribution required). Asset IDs and regeneration: see README.
const SCENES = [
    { id: 'shrine', name: 'Moonlit shrine' },
    { id: 'rainy-window', name: 'Rainy window' },
    { id: 'misty-river', name: 'Misty river' },
    { id: 'water-garden', name: 'Water garden' },
];
const SCENE_VIDEO_LOADERS: Record<string, () => Promise<{ default: string }>> = {
    shrine: () => import('./scenes-b64/shrine.mp4.js'),
    'rainy-window': () => import('./scenes-b64/rainy-window.mp4.js'),
    'misty-river': () => import('./scenes-b64/misty-river.mp4.js'),
    'water-garden': () => import('./scenes-b64/water-garden.mp4.js'),
};
const SCENE_POSTER_LOADERS: Record<string, () => Promise<{ default: string }>> = {
    shrine: () => import('./scenes-b64/shrine.jpg.js'),
    'rainy-window': () => import('./scenes-b64/rainy-window.jpg.js'),
    'misty-river': () => import('./scenes-b64/misty-river.jpg.js'),
    'water-garden': () => import('./scenes-b64/water-garden.jpg.js'),
};
const sceneVideoCache: Record<string, string> = {};
const scenePosterCache: Record<string, string> = {};

function dataUriToBlobUrl(dataUri: string): string {
    const comma = dataUri.indexOf(',');
    const mime = dataUri.slice(5, comma).replace(';base64', '');
    const bin = atob(dataUri.slice(comma + 1));
    const bytes = new Uint8Array(bin.length);
    for (let i = 0; i < bin.length; i++) bytes[i] = bin.charCodeAt(i);
    return URL.createObjectURL(new Blob([bytes], { type: mime }));
}

const ACCENTS = [
    { id: 'mint', name: 'Mint', value: '#9fd8c6' },
    { id: 'sky', name: 'Sky', value: '#9cc7ff' },
    { id: 'rose', name: 'Rose', value: '#f2a9c4' },
    { id: 'amber', name: 'Amber', value: '#ffcf99' },
    { id: 'violet', name: 'Violet', value: '#c9b6ff' },
    { id: 'white', name: 'White', value: '#ffffff' },
];

const FONTS = [
    { id: 'sans', name: 'Sans', css: 'inherit' },
    { id: 'serif', name: 'Serif', css: "Georgia, 'Times New Roman', serif" },
    { id: 'mono', name: 'Mono', css: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace" },
    { id: 'round', name: 'Round', css: "'Trebuchet MS', Verdana, sans-serif" },
];

const THEMES: { id: string; name: string; accent: string; font: string; bg: { kind: BgKind; id: string } }[] = [
    { id: 'mint', name: 'Mint', accent: '#9fd8c6', font: 'sans', bg: { kind: 'gradient', id: 'ink' } },
    { id: 'dusk', name: 'Dusk', accent: '#ffcf99', font: 'serif', bg: { kind: 'gradient', id: 'dusk' } },
    { id: 'moss', name: 'Moss', accent: '#7ea87b', font: 'round', bg: { kind: 'gradient', id: 'moss' } },
    { id: 'dawn', name: 'Dawn', accent: '#f2a9c4', font: 'serif', bg: { kind: 'gradient', id: 'dawn' } },
];

const ALARMS = [
    { id: 'bell', name: 'Bell' },
    { id: 'chime', name: 'Chime' },
    { id: 'gong', name: 'Gong' },
    { id: 'beep', name: 'Digital' },
    { id: 'wood', name: 'Woodblock' },
    { id: 'custom', name: 'My sound' },
];

const AMBIENTS = [
    { id: 'none', name: 'Off' },
    { id: 'rain', name: 'Rain' },
    { id: 'cafe', name: 'Cafe' },
    { id: 'brown', name: 'Brown noise' },
    { id: 'white', name: 'White noise' },
];

const SPOTIFY_PRESETS = [
    { id: 'lofi', name: 'Lofi Girl', url: 'https://open.spotify.com/playlist/0vvXsWCC9xrXsKd4FyS8kM' },
    { id: 'deep', name: 'Deep Focus', url: 'https://open.spotify.com/playlist/37i9dQZF1DWZeKCadgRdKQ' },
    { id: 'piano', name: 'Peaceful Piano', url: 'https://open.spotify.com/playlist/37i9dQZF1DX4sWSpwq3LiO' },
];

const PHASE_LABEL: Record<Phase, string> = { focus: 'Focus', short: 'Short break', long: 'Long break' };

// ---------- audio engine ----------
let actx: AudioContext | null = null;
function audioCtx(): AudioContext {
    if (!actx) actx = new (window.AudioContext || (window as any).webkitAudioContext)();
    if (actx.state === 'suspended') void actx.resume();
    return actx;
}

function tone(ctx: AudioContext, out: GainNode, opts: { freq: number; type?: OscillatorType; start: number; dur: number; gain: number }) {
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = opts.type || 'sine';
    o.frequency.value = opts.freq;
    g.gain.setValueAtTime(0.0001, opts.start);
    g.gain.exponentialRampToValueAtTime(Math.max(0.0002, opts.gain), opts.start + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, opts.start + opts.dur);
    o.connect(g); g.connect(out);
    o.start(opts.start); o.stop(opts.start + opts.dur + 0.05);
}

function playBuiltinAlarm(name: string, volume: number, repeat: boolean) {
    const ctx = audioCtx();
    const out = ctx.createGain();
    out.gain.value = volume;
    out.connect(ctx.destination);
    const rounds = repeat ? 2 : 1;
    const span = name === 'gong' ? 3.6 : name === 'bell' ? 2.4 : 1.6;
    for (let r = 0; r < rounds; r++) {
        const t0 = ctx.currentTime + 0.02 + r * (span + 0.35);
        if (name === 'bell') {
            [[660, 0.5], [1320, 0.28], [1760, 0.14], [2240, 0.07]].forEach(([f, g]) => tone(ctx, out, { freq: f, start: t0, dur: 2.2, gain: g }));
        } else if (name === 'chime') {
            tone(ctx, out, { freq: 783.99, start: t0, dur: 1.3, gain: 0.4 });
            tone(ctx, out, { freq: 1046.5, start: t0 + 0.32, dur: 1.4, gain: 0.34 });
        } else if (name === 'gong') {
            [[196, 0.42], [294, 0.24], [392, 0.17], [523, 0.09]].forEach(([f, g]) => tone(ctx, out, { freq: f, start: t0, dur: 3.4, gain: g }));
        } else if (name === 'beep') {
            for (let i = 0; i < 3; i++) tone(ctx, out, { freq: 880, type: 'square', start: t0 + i * 0.3, dur: 0.16, gain: 0.22 });
        } else if (name === 'wood') {
            tone(ctx, out, { freq: 1400, type: 'triangle', start: t0, dur: 0.07, gain: 0.5 });
            tone(ctx, out, { freq: 1400, type: 'triangle', start: t0 + 0.22, dur: 0.07, gain: 0.4 });
        }
    }
}

function playTick(volume: number) {
    const ctx = audioCtx();
    const out = ctx.createGain();
    out.gain.value = 0.35 * volume;
    out.connect(ctx.destination);
    tone(ctx, out, { freq: 1800, start: ctx.currentTime, dur: 0.035, gain: 0.5 });
}

function makeNoiseBuffer(ctx: AudioContext, kind: 'white' | 'brown'): AudioBuffer {
    const len = 2 * ctx.sampleRate;
    const buf = ctx.createBuffer(1, len, ctx.sampleRate);
    const d = buf.getChannelData(0);
    let last = 0;
    for (let i = 0; i < len; i++) {
        const w = Math.random() * 2 - 1;
        if (kind === 'brown') { last = (last + 0.02 * w) / 1.02; d[i] = last * 3.2; }
        else d[i] = w;
    }
    return buf;
}

function startAmbient(kind: string, volume: number): (() => void) | null {
    if (kind === 'none') return null;
    const ctx = audioCtx();
    const master = ctx.createGain();
    master.gain.value = volume;
    master.connect(ctx.destination);
    const src = ctx.createBufferSource();
    src.buffer = makeNoiseBuffer(ctx, kind === 'white' ? 'white' : 'brown');
    src.loop = true;
    let node: AudioNode = src;
    if (kind === 'rain') {
        const hp = ctx.createBiquadFilter(); hp.type = 'highpass'; hp.frequency.value = 420;
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 1500;
        node.connect(hp); hp.connect(lp); node = lp;
    } else if (kind === 'cafe') {
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 520;
        node.connect(lp); node = lp;
    } else if (kind === 'brown') {
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
        node.connect(lp); node = lp;
    }
    const swell = ctx.createGain();
    swell.gain.value = 0.85;
    const lfo = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = kind === 'rain' ? 0.13 : 0.07;
    lfoGain.gain.value = 0.15;
    lfo.connect(lfoGain); lfoGain.connect(swell.gain);
    node.connect(swell); swell.connect(master);
    src.start(); lfo.start();
    return () => { try { src.stop(); lfo.stop(); master.disconnect(); } catch { /* already stopped */ } };
}

// ---------- media helpers ----------
function isProbablyAudioUrl(url: string) { return /^https:\/\/.+/i.test(url.trim()); }

async function fetchBlob(url: string): Promise<Blob> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.blob();
}

async function resolveImageSource(input: string): Promise<Blob> {
    const trimmed = input.trim();
    if (/pin\.it\//i.test(trimmed)) throw new Error('short pin link');
    const pinMatch = trimmed.match(/pinterest\.[a-z.]+\/pin\/(?:.*?-)?(\d{6,})/i);
    let imageUrl = trimmed;
    if (pinMatch) {
        const res = await fetch(`https://widgets.pinterest.com/v3/pidgets/pins/info/?pin_ids=${pinMatch[1]}&base_scheme=https`);
        if (!res.ok) throw new Error('pin lookup failed');
        const json = await res.json();
        if (json?.status !== 'success' || !Array.isArray(json?.data) || json.data.length === 0) throw new Error('pin unavailable');
        const images = json.data[0]?.images;
        if (!images) throw new Error('pin has no image');
        const pick = images.originals || images['736x'] || images['564x'] || images['236x'];
        if (!pick?.url) throw new Error('pin has no image');
        imageUrl = pick.url;
    }
    if (!/^https:\/\//i.test(imageUrl)) throw new Error('not a link');
    try {
        const blob = await fetchBlob(imageUrl);
        if (blob.type.startsWith('image/')) return blob;
        throw new Error('not an image');
    } catch {
        const proxied = `https://images.weserv.nl/?url=${encodeURIComponent(imageUrl.replace(/^https?:\/\//, ''))}&w=1920`;
        const blob = await fetchBlob(proxied);
        if (!blob.type.startsWith('image/')) throw new Error('not an image');
        return blob;
    }
}

// ---------- spotify ----------
function spotifyEmbedUrl(source: string): string | null {
    const preset = SPOTIFY_PRESETS.find((p) => p.id === source);
    const url = preset ? preset.url : source;
    const m = url.trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
    return m ? `https://open.spotify.com/embed/${m[1].toLowerCase()}/${m[2]}?theme=0` : null;
}

// ---------- small ui helpers ----------
function fmt(ms: number) {
    const total = Math.max(0, Math.round(ms / 1000));
    const m = Math.floor(total / 60);
    const s = total % 60;
    return `${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
}
function todayKey(d = new Date()) { return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; }

function Stepper({ label, value, min, max, onChange, unit }: { label: string; value: number; min: number; max: number; onChange: (v: number) => void; unit?: string }) {
    const commit = (raw: string) => {
        const n = parseInt(raw, 10);
        if (Number.isFinite(n)) onChange(Math.min(max, Math.max(min, n)));
    };
    return <div className="ft-field">
        <span className="ft-field-label">{label}</span>
        <span className="ft-stepper">
            <button type="button" aria-label={`Decrease ${label}`} onClick={() => onChange(Math.max(min, value - 1))}>-</button>
            <input className="ft-stepper-input" type="number" inputMode="numeric" aria-label={`${label} value`} min={min} max={max} value={value} onChange={(e) => commit(e.target.value)} />
            {unit ? <span className="ft-stepper-unit">{unit}</span> : null}
            <button type="button" aria-label={`Increase ${label}`} onClick={() => onChange(Math.min(max, value + 1))}>+</button>
        </span>
    </div>;
}

function Toggle({ label, hint, checked, onChange }: { label: string; hint?: string; checked: boolean; onChange: (v: boolean) => void }) {
    return <button type="button" role="switch" aria-checked={checked} className={`ft-toggle ${checked ? 'is-on' : ''}`} onClick={() => onChange(!checked)}>
        <span className="ft-toggle-text"><span className="ft-field-label">{label}</span>{hint ? <span className="ft-field-hint">{hint}</span> : null}</span>
        <span className="ft-switch"><span className="ft-knob" /></span>
    </button>;
}

// ---------- memoized subtrees: the ticking clock must not re-render these ----------
const SceneVideo = React.memo(function SceneVideo({ id, paused }: { id: string; paused: boolean }) {
    const ref = useRef<HTMLVideoElement | null>(null);
    const [urls, setUrls] = useState<{ video: string; poster: string } | null>(null);
    const [reduceMotion] = useState(() => typeof window !== 'undefined' && !!window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches);
    useEffect(() => {
        let alive = true;
        const vLoader = SCENE_VIDEO_LOADERS[id];
        if (!vLoader) return;
        const pLoader = SCENE_POSTER_LOADERS[id];
        Promise.all([vLoader(), pLoader ? pLoader() : Promise.resolve(null)]).then(([v, p]) => {
            if (!alive) return;
            const video = sceneVideoCache[id] || (sceneVideoCache[id] = dataUriToBlobUrl(v.default));
            const poster = p ? (scenePosterCache[id] || (scenePosterCache[id] = p.default)) : '';
            setUrls({ video, poster });
        }).catch(() => { /* keep blank fallback */ });
        return () => { alive = false; };
    }, [id]);
    useEffect(() => {
        const v = ref.current;
        if (!v || reduceMotion || !urls) return;
        const sync = () => {
            if (paused || document.hidden) v.pause();
            else v.play().catch(() => { /* autoplay blocked: poster stays */ });
        };
        sync();
        document.addEventListener('visibilitychange', sync);
        return () => document.removeEventListener('visibilitychange', sync);
    }, [paused, reduceMotion, id, urls]);
    if (!urls) return <div className="ft-bg" />;
    if (reduceMotion) return <img className="ft-bg ft-bgvideo" src={urls.poster} alt="" aria-hidden="true" />;
    return <video ref={ref} className="ft-bg ft-bgvideo" src={urls.video} poster={urls.poster || undefined} muted loop autoPlay playsInline preload="auto" aria-hidden="true" />;
});

const Background = React.memo(function Background({ kind, id, scrim, builtinSrc, linkBgUrl, uploadBgUrl, paused }: {
    kind: BgKind; id?: string; scrim: number;
    builtinSrc: string | null; linkBgUrl: string | null; uploadBgUrl: string | null; paused?: boolean;
}) {
    let style: React.CSSProperties = {};
    if (kind === 'builtin' && builtinSrc) style = { backgroundImage: `url(${builtinSrc})` };
    else if (kind === 'gradient') style = { backgroundImage: (GRADIENTS.find((g) => g.id === id) || GRADIENTS[0]).css };
    else if (kind === 'link' && linkBgUrl) style = { backgroundImage: `url(${linkBgUrl})` };
    else if (kind === 'upload' && uploadBgUrl) style = { backgroundImage: `url(${uploadBgUrl})` };
    else if (kind === 'link' || kind === 'upload' || kind === 'builtin') style = { backgroundImage: GRADIENTS[0].css };
    const animId = ANIMATED_BGS.some((a) => a.id === id) ? id! : 'aurora';
    return <>
        {kind === 'animated'
            ? <div className={`ft-anim ft-anim-${animId}`} aria-hidden="true"><i /><i /><i /></div>
            : kind === 'scene' && SCENES.some((s) => s.id === id)
                ? <SceneVideo id={id!} paused={!!paused} />
                : <div className="ft-bg" style={style} />}
        <div className="ft-scrim" style={{ opacity: scrim }} />
    </>;
});

const SceneSwatch = React.memo(function SceneSwatch({ id, name, active, onPick }: { id: string; name: string; active: boolean; onPick: () => void }) {
    const [src, setSrc] = useState<string | null>(scenePosterCache[id] || null);
    useEffect(() => {
        let alive = true;
        if (!scenePosterCache[id] && SCENE_POSTER_LOADERS[id]) {
            SCENE_POSTER_LOADERS[id]().then((m) => { scenePosterCache[id] = m.default; if (alive) setSrc(m.default); }).catch(() => { /* keep placeholder */ });
        }
        return () => { alive = false; };
    }, [id]);
    return <button type="button" className={`ft-bgswatch ${active ? 'is-active' : ''}`} style={src ? { backgroundImage: `url(${src})` } : undefined} aria-label={`${name} animated scene`} onClick={onPick} />;
});

const BgSwatch = React.memo(function BgSwatch({ id, name, active, onPick }: { id: string; name: string; active: boolean; onPick: () => void }) {
    const [src, setSrc] = useState<string | null>(thumbCache[id] || null);
    useEffect(() => {
        let alive = true;
        if (!thumbCache[id] && THUMB_LOADERS[id]) {
            THUMB_LOADERS[id]().then((m) => { thumbCache[id] = m.default; if (alive) setSrc(m.default); }).catch(() => { /* keep placeholder */ });
        }
        return () => { alive = false; };
    }, [id]);
    return <button type="button" className={`ft-bgswatch ${active ? 'is-active' : ''}`} style={src ? { backgroundImage: `url(${src})` } : undefined} aria-label={name} onClick={onPick} />;
});

const TopBar = React.memo(function TopBar({ chip, panel, fullscreenSupported, onFullscreen, onTasks, onSettings, onMinimize }: {
    chip: string | null; panel: 'none' | 'tasks' | 'settings'; fullscreenSupported: boolean;
    onFullscreen: () => void; onTasks: () => void; onSettings: () => void; onMinimize: () => void;
}) {
    return <header className="ft-topbar">
        <span className="ft-brand">Study focus</span>
        {chip ? <span className="ft-chip" title="Today's completed focus time">{chip}</span> : null}
        <span className="ft-topbar-actions">
            {fullscreenSupported ? <button type="button" className="ft-iconbtn" aria-label="Fullscreen" onClick={onFullscreen}>⛶</button> : null}
            <button type="button" className="ft-iconbtn" aria-label="Minimize to a small timer" title="Minimize to a small timer" onClick={onMinimize}>🗕</button>
            <button type="button" className={`ft-iconbtn ${panel === 'tasks' ? 'is-active' : ''}`} aria-label="Tasks" onClick={onTasks}>☰</button>
            <button type="button" className={`ft-iconbtn ${panel === 'settings' ? 'is-active' : ''}`} aria-label="Settings" onClick={onSettings}>⚙</button>
        </span>
    </header>;
});

const TasksSheet = React.memo(function TasksSheet({ tasksState, setTasksState, week, ready, savedMessage, onClose }: {
    tasksState: TasksState; setTasksState: (v: TasksState | ((p: TasksState) => TasksState)) => void;
    week: { label: string; minutes: number }[]; ready: boolean; savedMessage: string; onClose: () => void;
}) {
    const [newTask, setNewTask] = useState('');
    const [newEst, setNewEst] = useState(1);
    const tasks = tasksState.tasks;
    const weekMax = Math.max(1, ...week.map((w) => w.minutes));
    const addTask = () => {
        const title = newTask.trim();
        if (!title) return;
        const task: Task = { id: `t${Date.now()}`, title, est: newEst, done: 0, completed: false };
        setTasksState((prev) => ({ tasks: [...prev.tasks, task], activeId: prev.activeId || task.id }));
        setNewTask(''); setNewEst(1);
    };
    return <aside className="ft-sheet" aria-label="Tasks">
        <div className="ft-sheet-head"><h2>Tasks</h2><button type="button" className="ft-sheet-close" aria-label="Close tasks" onClick={onClose}>✕</button></div>
        <div className="ft-addtask">
            <input value={newTask} placeholder="What are you studying?" onChange={(e) => setNewTask(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') addTask(); }} maxLength={120} />
            <span className="ft-stepper is-small">
                <button type="button" aria-label="Fewer pomodoros" onClick={() => setNewEst(Math.max(1, newEst - 1))}>-</button>
                <span className="ft-stepper-value">{newEst}<em>est</em></span>
                <button type="button" aria-label="More pomodoros" onClick={() => setNewEst(Math.min(20, newEst + 1))}>+</button>
            </span>
            <button type="button" className="ft-primary is-compact" onClick={addTask} disabled={!ready}>Add</button>
        </div>
        {tasks.length === 0 ? <p className="ft-field-hint">No tasks yet. Add one to track pomodoros against it, or just run the timer.</p> : null}
        <ul className="ft-tasklist">
            {tasks.map((t) => <li key={t.id} className={`${t.id === tasksState.activeId ? 'is-active' : ''} ${t.completed ? 'is-done' : ''}`}>
                <button type="button" className="ft-taskcheck" aria-label={t.completed ? 'Mark not done' : 'Mark done'} onClick={() => setTasksState((prev) => ({ ...prev, tasks: prev.tasks.map((x) => x.id === t.id ? { ...x, completed: !x.completed } : x) }))}>{t.completed ? '✓' : ''}</button>
                <button type="button" className="ft-taskname" onClick={() => setTasksState((prev) => ({ ...prev, activeId: t.id }))}>{t.title}</button>
                <span className="ft-taskcount">{t.done}/{t.est}</span>
                <button type="button" className="ft-taskdel" aria-label={`Delete ${t.title}`} onClick={() => setTasksState((prev) => ({ tasks: prev.tasks.filter((x) => x.id !== t.id), activeId: prev.activeId === t.id ? null : prev.activeId }))}>×</button>
            </li>)}
        </ul>
        {tasks.some((t) => t.completed) ? <button type="button" className="ft-ghost is-compact" onClick={() => setTasksState((prev) => ({ ...prev, tasks: prev.tasks.filter((t) => !t.completed) }))}>Clear completed</button> : null}
        <div className="ft-week">
            <h3>This week</h3>
            <div className="ft-weekbars" role="img" aria-label={`Focus minutes by day: ${week.map((w) => `${w.label} ${w.minutes}`).join(', ')}`}>
                {week.map((w, i) => <span key={i} className="ft-weekcol"><span className="ft-weekbar" style={{ height: `${Math.round((w.minutes / weekMax) * 64)}px` }} /><span className="ft-weekday">{w.label}</span></span>)}
            </div>
        </div>
        <p className="ft-field-hint">{savedMessage}</p>
    </aside>;
});

const SettingsSheet = React.memo(function SettingsSheet({ settings, patch, bgStatus, soundStatus, lastBgSrcRef, lastSndSrcRef, resolveLinkBg, resolveCustomSound, uploadBg, uploadSound, previewAlarm, requestNotifications, notificationsSupported, wakeLockSupported, onResetSettings, savedMessage, onClose }: {
    settings: Settings; patch: (part: Partial<Settings>) => void;
    bgStatus: string; soundStatus: string;
    lastBgSrcRef: React.MutableRefObject<string>; lastSndSrcRef: React.MutableRefObject<string>;
    resolveLinkBg: (source: string) => Promise<boolean>; resolveCustomSound: (source: string) => Promise<boolean>;
    uploadBg: (file: File | undefined) => void; uploadSound: (file: File | undefined) => void;
    previewAlarm: (id: string) => void; requestNotifications: (on: boolean) => void;
    notificationsSupported: boolean; wakeLockSupported: boolean;
    onResetSettings: () => void; savedMessage: string; onClose: () => void;
}) {
    const [bgInput, setBgInput] = useState('');
    const [soundInput, setSoundInput] = useState('');
    const [spInput, setSpInput] = useState('');
    const [spStatus, setSpStatus] = useState('');
    const bg = settings.background;

    const applyBgLink = () => {
        const source = bgInput.trim();
        if (!source) return;
        void resolveLinkBg(source).then((ok) => { if (ok) { lastBgSrcRef.current = source; patch({ background: { kind: 'link', source } }); } });
    };
    const applySoundLink = () => {
        const source = soundInput.trim();
        if (!isProbablyAudioUrl(source)) return;
        void resolveCustomSound(source).then((ok) => { if (ok) { lastSndSrcRef.current = source; patch({ alarmSound: 'custom', customAlarm: { source, name: source.split('/').pop()?.split('?')[0] || 'Custom sound' } }); } });
    };
    const applySpotify = () => {
        const source = spInput.trim();
        if (!source) return;
        if (!spotifyEmbedUrl(source)) { setSpStatus('That is not a Spotify link. Copy a link that starts with https://open.spotify.com/ from the Spotify app (Share - Copy link). Your current player is unchanged.'); return; }
        setSpStatus('');
        patch({ spotify: source, spotifyOpen: true });
    };

    return <aside className="ft-sheet" aria-label="Settings">
        <div className="ft-sheet-head"><h2>Settings</h2><button type="button" className="ft-sheet-close" aria-label="Close settings" onClick={onClose}>✕</button></div>

        <section>
            <h3>Appearance</h3>
            <div className="ft-chips">
                {THEMES.map((t) => <button key={t.id} type="button" className="ft-chipbtn" onClick={() => patch({ accent: t.accent, font: t.font, background: { kind: t.bg.kind, id: t.bg.id } })}>{t.name} theme</button>)}
            </div>
            <div className="ft-field is-stacked">
                <span className="ft-field-label">Accent color</span>
                <span className="ft-inrow">
                    {ACCENTS.map((a) => <button key={a.id} type="button" className={`ft-colorswatch ${settings.accent.toLowerCase() === a.value ? 'is-active' : ''}`} style={{ background: a.value }} aria-label={`${a.name} accent`} onClick={() => patch({ accent: a.value })} />)}
                    <label className="ft-colorcustom"><input type="color" value={/^#[0-9a-f]{6}$/i.test(settings.accent) ? settings.accent : '#9fd8c6'} aria-label="Custom accent color" onChange={(e) => patch({ accent: e.target.value })} /><span>Custom</span></label>
                </span>
            </div>
            <div className="ft-field is-stacked">
                <span className="ft-field-label">Font</span>
                <div className="ft-chips">{FONTS.map((f) => <button key={f.id} type="button" className={`ft-chipbtn ${settings.font === f.id ? 'is-active' : ''}`} style={f.css === 'inherit' ? undefined : { fontFamily: f.css }} onClick={() => patch({ font: f.id })}>{f.name}</button>)}</div>
            </div>
            <div className="ft-field is-stacked">
                <span className="ft-field-label">Clock style</span>
                <div className="ft-chips">
                    {([['ring', 'Ring'], ['bar', 'Bar'], ['minimal', 'Minimal']] as const).map(([id, name]) => <button key={id} type="button" className={`ft-chipbtn ${settings.clockStyle === id ? 'is-active' : ''}`} onClick={() => patch({ clockStyle: id })}>{name}</button>)}
                </div>
            </div>
            <div className="ft-field is-stacked">
                <span className="ft-field-label">Clock size</span>
                <div className="ft-chips">
                    {([['s', 'Small'], ['m', 'Medium'], ['l', 'Large']] as const).map(([id, name]) => <button key={id} type="button" className={`ft-chipbtn ${settings.clockSize === id ? 'is-active' : ''}`} onClick={() => patch({ clockSize: id })}>{name}</button>)}
                </div>
            </div>
            <Toggle label="Cycle dots" checked={settings.showDots} onChange={(v) => patch({ showDots: v })} />
            <Toggle label="Today's stats chip" checked={settings.showChip} onChange={(v) => patch({ showChip: v })} />
            <Toggle label="Shortcut hints" checked={settings.showHint} onChange={(v) => patch({ showHint: v })} />
        </section>

        <section>
            <h3>Music (Spotify player)</h3>
            <div className="ft-chips">
                {SPOTIFY_PRESETS.map((p) => <button key={p.id} type="button" className={`ft-chipbtn ${settings.spotify === p.id ? 'is-active' : ''}`} onClick={() => { setSpStatus(''); patch({ spotify: p.id, spotifyOpen: true }); }}>{p.name}</button>)}
            </div>
            <div className="ft-field is-stacked">
                <span className="ft-field-label">Any Spotify link</span>
                <span className="ft-field-hint">Paste an open.spotify.com playlist, album, track or podcast link (in Spotify: Share - Copy link). Music plays in Spotify's official player at the bottom of the page; this is not account sync. Spotify decides what plays: usually full songs when you sign in to Spotify inside the player, 30-second previews when signed out; podcast episodes usually play in full.</span>
                <span className="ft-inrow">
                    <input className="ft-textinput" value={spInput} placeholder="https://open.spotify.com/playlist/…" onChange={(e) => setSpInput(e.target.value)} inputMode="url" />
                    <button type="button" className="ft-ghost is-compact" onClick={applySpotify}>Use link</button>
                </span>
                {settings.spotify ? <span className="ft-inrow">
                    <button type="button" className="ft-ghost is-compact" onClick={() => patch({ spotifyOpen: !settings.spotifyOpen })}>{settings.spotifyOpen ? 'Minimize player' : 'Show player'}</button>
                    <button type="button" className="ft-ghost is-compact" onClick={() => patch({ spotify: null, spotifyOpen: false })}>Remove player</button>
                </span> : null}
                {spStatus ? <span className="ft-field-hint">{spStatus}</span> : null}
            </div>
        </section>

        <section>
            <h3>Timer</h3>
            <Stepper label="Focus" value={settings.focusMin} min={1} max={180} unit="min" onChange={(v) => patch({ focusMin: v })} />
            <Stepper label="Short break" value={settings.shortMin} min={1} max={60} unit="min" onChange={(v) => patch({ shortMin: v })} />
            <Stepper label="Long break" value={settings.longMin} min={1} max={90} unit="min" onChange={(v) => patch({ longMin: v })} />
            <Stepper label="Long break every" value={settings.longEvery} min={1} max={12} unit="sessions" onChange={(v) => patch({ longEvery: v })} />
            <Toggle label="Auto-start breaks" checked={settings.autoBreaks} onChange={(v) => patch({ autoBreaks: v })} />
            <Toggle label="Auto-start focus" checked={settings.autoFocus} onChange={(v) => patch({ autoFocus: v })} />
            {notificationsSupported ? <Toggle label="Browser notifications" hint="Alerts when a session ends in another tab." checked={settings.notifications} onChange={requestNotifications} /> : null}
            {wakeLockSupported ? <Toggle label="Keep screen awake" checked={settings.keepAwake} onChange={(v) => patch({ keepAwake: v })} /> : null}
        </section>

        <section>
            <h3>Alarm</h3>
            <div className="ft-chips">
                {ALARMS.map((a) => <button key={a.id} type="button" className={`ft-chipbtn ${settings.alarmSound === a.id ? 'is-active' : ''}`} onClick={() => { patch({ alarmSound: a.id }); previewAlarm(a.id); }}>{a.name}</button>)}
            </div>
            <div className="ft-field">
                <span className="ft-field-label">Volume</span>
                <input type="range" min={0} max={1} step={0.05} value={settings.alarmVolume} aria-label="Alarm volume" onChange={(e) => patch({ alarmVolume: parseFloat(e.target.value) })} />
            </div>
            <Toggle label="Ring twice" checked={settings.alarmRepeat} onChange={(v) => patch({ alarmRepeat: v })} />
            <Toggle label="Ticking while running" checked={settings.tick} onChange={(v) => patch({ tick: v })} />
            <div className="ft-field is-stacked">
                <span className="ft-field-label">My sound from a link</span>
                <span className="ft-field-hint">Paste a direct audio link (mp3, wav, ogg). Links work when the file's host allows cross-site loading; many do not. Uploading a file always works until the tab reloads; a saved link reloads each visit.</span>
                <span className="ft-inrow">
                    <input className="ft-textinput" value={soundInput} placeholder="https://…/sound.mp3" onChange={(e) => setSoundInput(e.target.value)} inputMode="url" />
                    <button type="button" className="ft-ghost is-compact" onClick={applySoundLink}>Use link</button>
                </span>
                <span className="ft-inrow">
                    <label className="ft-ghost is-compact ft-filebtn">Upload audio<input type="file" accept="audio/*" aria-label="Upload alarm sound file" className="ft-fileinput" onChange={(e) => uploadSound(e.target.files?.[0])} /></label>
                    {settings.customAlarm ? <span className="ft-field-hint">Current: {settings.customAlarm.name}</span> : null}
                </span>
                {soundStatus ? <span className="ft-field-hint">{soundStatus}</span> : null}
            </div>
        </section>

        <section>
            <h3>Ambient sound</h3>
            <div className="ft-chips">
                {AMBIENTS.map((a) => <button key={a.id} type="button" className={`ft-chipbtn ${settings.ambient === a.id ? 'is-active' : ''}`} onClick={() => patch({ ambient: a.id })}>{a.name}</button>)}
            </div>
            {settings.ambient !== 'none' ? <div className="ft-field">
                <span className="ft-field-label">Ambient volume</span>
                <input type="range" min={0} max={1} step={0.05} value={settings.ambientVolume} aria-label="Ambient volume" onChange={(e) => patch({ ambientVolume: parseFloat(e.target.value) })} />
            </div> : null}
        </section>

        <section>
            <h3>Background</h3>
            <h4 className="ft-subhead">Animated scenes</h4>
            <div className="ft-bggrid">
                {SCENES.map((s) => <SceneSwatch key={s.id} id={s.id} name={s.name} active={bg.kind === 'scene' && bg.id === s.id} onPick={() => patch({ background: { kind: 'scene', id: s.id } })} />)}
            </div>
            <h4 className="ft-subhead">Animated</h4>
            <div className="ft-bggrid">
                {ANIMATED_BGS.map((a) => <button key={a.id} type="button" className={`ft-bgswatch ft-animsw ft-animsw-${a.id} ${bg.kind === 'animated' && bg.id === a.id ? 'is-active' : ''}`} aria-label={`${a.name} animated background`} onClick={() => patch({ background: { kind: 'animated', id: a.id } })} />)}
            </div>
            <h4 className="ft-subhead">Photos</h4>
            <div className="ft-bggrid">
                {BUILTIN_BGS.map((b) => <BgSwatch key={b.id} id={b.id} name={b.name} active={bg.kind === 'builtin' && bg.id === b.id} onPick={() => patch({ background: { kind: 'builtin', id: b.id } })} />)}
            </div>
            <h4 className="ft-subhead">Colors</h4>
            <div className="ft-bggrid">
                {GRADIENTS.map((g) => <button key={g.id} type="button" className={`ft-bgswatch ${bg.kind === 'gradient' && bg.id === g.id ? 'is-active' : ''}`} style={{ backgroundImage: g.css }} aria-label={g.name} onClick={() => patch({ background: { kind: 'gradient', id: g.id } })} />)}
            </div>
            <div className="ft-field is-stacked">
                <span className="ft-field-label">Pinterest or image link</span>
                <span className="ft-field-hint">Paste a full public Pinterest pin link (pinterest.com/pin/…) or a direct image link. Saved links reload each visit. When a direct load is blocked, the link you paste is fetched through a public image relay (weserv.nl), so never use private boards or private image URLs.</span>
                <span className="ft-inrow">
                    <input className="ft-textinput" value={bgInput} placeholder="https://www.pinterest.com/pin/…" onChange={(e) => setBgInput(e.target.value)} inputMode="url" />
                    <button type="button" className="ft-ghost is-compact" onClick={applyBgLink}>Use link</button>
                </span>
                <span className="ft-inrow">
                    <label className="ft-ghost is-compact ft-filebtn">Upload image<input type="file" accept="image/*" aria-label="Upload background image file" className="ft-fileinput" onChange={(e) => uploadBg(e.target.files?.[0])} /></label>
                    <span className="ft-field-hint">Lasts until the tab reloads.</span>
                </span>
                {bgStatus ? <span className="ft-field-hint">{bgStatus}</span> : null}
            </div>
            <div className="ft-field">
                <span className="ft-field-label">Darken background</span>
                <input type="range" min={0.15} max={0.85} step={0.05} value={settings.scrim} aria-label="Background darkness" onChange={(e) => patch({ scrim: parseFloat(e.target.value) })} />
            </div>
        </section>

        <div className="ft-field">
            <span className="ft-field-label">Start over</span>
            <button type="button" className="ft-ghost is-compact" onClick={onResetSettings}>Reset settings</button>
        </div>
        <p className="ft-field-hint">Your settings, tasks and stats stay in this browser. Link backgrounds and sounds are fetched from the sites you paste, through the weserv.nl image relay when a direct load is blocked; Spotify playback happens inside Spotify's official player; nothing else is sent anywhere. {savedMessage}</p>
    </aside>;
});

export function App() {
    const [settings, setSettings, settingsSaved] = useLocalState<Settings>('ft-settings.v2', DEFAULT_SETTINGS);
    const [tasksState, setTasksState, tasksSaved] = useLocalState<TasksState>('ft-tasks.v1', { tasks: [], activeId: null });
    const [stats, setStats, statsSaved] = useLocalState<StatsState>('ft-stats.v1', { days: {} });
    const [session, setSession, sessionSaved] = useLocalState<{ phase: Phase; running: boolean; endAt: number; remainingMs: number; cycleCount: number } | null>('ft-session.v1', null);

    const durations = useMemo(() => ({ focus: settings.focusMin * 60000, short: settings.shortMin * 60000, long: settings.longMin * 60000 }), [settings.focusMin, settings.shortMin, settings.longMin]);

    const [phase, setPhase] = useState<Phase>('focus');
    const [running, setRunning] = useState(false);
    const [remaining, setRemaining] = useState(durations.focus);
    const [cycleCount, setCycleCount] = useState(0);
    const [panel, setPanel] = useState<'none' | 'tasks' | 'settings'>('none');
    const [compact, setCompact] = useState(false);
    const endAtRef = useRef(0);
    const runningRef = useRef(false);
    runningRef.current = running;
    const phaseRef = useRef(phase);
    phaseRef.current = phase;
    const remainingRef = useRef(remaining);
    remainingRef.current = remaining;

    // resolved custom media (object URLs, session-scoped)
    const [linkBgUrl, setLinkBgUrl] = useState<string | null>(null);
    const [uploadBgUrl, setUploadBgUrl] = useState<string | null>(null);
    const [builtinSrc, setBuiltinSrc] = useState<string | null>(null);
    const [bgStatus, setBgStatus] = useState('');
    const [customAudioUrl, setCustomAudioUrl] = useState<string | null>(null);
    const [soundStatus, setSoundStatus] = useState('');

    const customAudioRef = useRef<HTMLAudioElement | null>(null);
    const ambientStopRef = useRef<(() => void) | null>(null);
    const wakeLockRef = useRef<any>(null);

    // ---------- persistence of resolved link media (re-resolve on load) ----------
    const resolveLinkBg = useCallback(async (source: string): Promise<boolean> => {
        setBgStatus('Loading background…');
        try {
            const blob = await resolveImageSource(source);
            setLinkBgUrl((old) => { if (old) URL.revokeObjectURL(old); return URL.createObjectURL(blob); });
            setBgStatus('Background applied.');
            return true;
        } catch (err) {
            const msg = err instanceof Error && err.message === 'short pin link'
                ? 'Short pin.it links cannot be resolved here. Open the pin on Pinterest and copy the full pinterest.com/pin/… link. Your previous background is unchanged.'
                : 'Could not load that pin or link. Private or deleted pins cannot be read. Use a public pin link, a direct image link, or upload the image below. Your previous background is unchanged.';
            setBgStatus(msg);
            return false;
        }
    }, []);

    const resolveCustomSound = useCallback(async (source: string): Promise<boolean> => {
        setSoundStatus('Loading sound…');
        try {
            const blob = await fetchBlob(source);
            if (!/^audio\//.test(blob.type) && !/\.(mp3|wav|ogg|m4a|aac|flac|opus)(\?|$)/i.test(source)) throw new Error('not audio');
            setCustomAudioUrl((old) => { if (old) URL.revokeObjectURL(old); return URL.createObjectURL(blob); });
            setSoundStatus('Sound saved. It will ring when a session ends.');
            return true;
        } catch {
            setSoundStatus('That link blocks cross-site loading. Download the sound to your device and upload it instead. Your previous sound is unchanged.');
            return false;
        }
    }, []);

    // ---------- link media: re-resolve whenever the saved source changes ----------
    const lastBgSrcRef = useRef('');
    const lastSndSrcRef = useRef('');
    useEffect(() => {
        if (!settingsSaved.ready) return;
        if (settings.background.kind === 'link' && settings.background.source && settings.background.source !== lastBgSrcRef.current) {
            lastBgSrcRef.current = settings.background.source;
            void resolveLinkBg(settings.background.source);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settingsSaved.ready, settings.background]);
    useEffect(() => {
        if (!settingsSaved.ready) return;
        const src = settings.customAlarm?.source || '';
        if (settings.alarmSound === 'custom' && src && src !== lastSndSrcRef.current) {
            lastSndSrcRef.current = src;
            void resolveCustomSound(src);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settingsSaved.ready, settings.alarmSound, settings.customAlarm]);

    // Session-only uploads do not survive a reload; reset them once persisted settings have loaded.
    const mediaInitRef = useRef(false);
    useEffect(() => {
        if (!settingsSaved.ready || mediaInitRef.current) return;
        mediaInitRef.current = true;
        if (settings.background.kind === 'upload') { // an uploaded image does not survive a reload
            patch({ background: { kind: 'gradient', id: 'dusk' } });
            setBgStatus('Your uploaded image resets when the tab reloads. Upload it again, or save a link instead.');
        }
        if (!settings.customAlarm?.source && settings.alarmSound === 'custom') { // an uploaded sound does not survive a reload
            patch({ alarmSound: 'bell' });
            setSoundStatus('Your uploaded sound resets when the tab reloads. Upload it again, or save a link instead.');
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settingsSaved.ready]);

    // Normalize any older saved settings shape with the current defaults.
    useEffect(() => {
        if (!settingsSaved.ready) return;
        if (!settings.accent || !settings.font || !settings.clockStyle || !settings.clockSize || typeof settings.showDots !== 'boolean' || typeof settings.spotifyOpen !== 'boolean' || settings.spotify === undefined) {
            setSettings((prev) => ({ ...DEFAULT_SETTINGS, ...prev }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settingsSaved.ready]);

    // ---------- builtin photo: load the selected full image on demand ----------
    const bg = settings.background;
    useEffect(() => {
        let alive = true;
        if (!settingsSaved.ready) return; // wait for the saved pick so we never fetch a photo we will not use
        if (bg.kind === 'builtin') {
            const id = bg.id && PHOTO_LOADERS[bg.id] ? bg.id : 'rain';
            if (photoCache[id]) setBuiltinSrc(photoCache[id]);
            else {
                setBuiltinSrc(null);
                PHOTO_LOADERS[id]().then((m) => { photoCache[id] = m.default; if (alive) setBuiltinSrc(m.default); }).catch(() => { /* keep fallback */ });
            }
        }
        return () => { alive = false; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settingsSaved.ready, bg.kind, bg.id]);

    // ---------- session persistence ----------
    const sessionRestoredRef = useRef(false);
    const persistSession = useCallback((over: { phase: Phase; running: boolean; endAt?: number; remainingMs: number; cycleCount: number }) => {
        if (!sessionSaved.ready) return;
        setSession({ phase: over.phase, running: over.running, endAt: over.endAt || 0, remainingMs: over.remainingMs, cycleCount: over.cycleCount });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sessionSaved.ready]);

    useEffect(() => {
        if (!sessionSaved.ready || sessionRestoredRef.current) return;
        sessionRestoredRef.current = true;
        if (!session) return;
        const p: Phase = session.phase === 'short' || session.phase === 'long' ? session.phase : 'focus';
        setPhase(p);
        setCycleCount(session.cycleCount || 0);
        if (session.running && session.endAt > Date.now() + 500) {
            endAtRef.current = session.endAt;
            setRemaining(session.endAt - Date.now());
            setRunning(true);
        } else if (session.running) {
            setRemaining(durationsRef.current[p]);
            setRunning(false);
        } else {
            const left = typeof session.remainingMs === 'number' && session.remainingMs > 0 ? Math.min(session.remainingMs, durationsRef.current[p]) : durationsRef.current[p];
            setRemaining(left);
            setRunning(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [sessionSaved.ready]);

    // ---------- timer core ----------
    const durationsRef = useRef(durations);
    durationsRef.current = durations;

    const completePhase = useCallback((skipped: boolean) => {
        const finished = phaseRef.current;
        let next: Phase = 'focus';
        let newCycle = cycleCount;
        if (finished === 'focus') {
            newCycle = skipped ? cycleCount : cycleCount + 1;
            setCycleCount(newCycle);
            next = newCycle % Math.max(1, settings.longEvery) === 0 && newCycle > 0 ? 'long' : 'short';
            if (!skipped) {
                const key = todayKey();
                const day = stats.days[key] || { focusSec: 0, sessions: 0 };
                setStats({ days: { ...stats.days, [key]: { focusSec: day.focusSec + Math.round(durationsRef.current.focus / 1000), sessions: day.sessions + 1 } } });
                if (tasksState.activeId) {
                    setTasksState((prev) => ({ ...prev, tasks: prev.tasks.map((t) => t.id === prev.activeId ? { ...t, done: t.done + 1 } : t) }));
                }
            }
        } else {
            next = 'focus';
        }
        if (settings.alarmSound === 'custom' && customAudioRef.current) {
            try { customAudioRef.current.currentTime = 0; customAudioRef.current.volume = settings.alarmVolume; customAudioRef.current.play().catch(() => playBuiltinAlarm('bell', settings.alarmVolume, settings.alarmRepeat)); } catch { playBuiltinAlarm('bell', settings.alarmVolume, settings.alarmRepeat); }
        } else if (settings.alarmSound === 'custom') {
            playBuiltinAlarm('bell', settings.alarmVolume, settings.alarmRepeat);
        } else {
            playBuiltinAlarm(settings.alarmSound, settings.alarmVolume, settings.alarmRepeat);
        }
        if (settings.notifications && typeof Notification !== 'undefined' && Notification.permission === 'granted') {
            try { new Notification(`${PHASE_LABEL[finished]} finished`, { body: next === 'focus' ? 'Time to focus.' : `Time for a ${PHASE_LABEL[next].toLowerCase()}.` }); } catch { /* unsupported */ }
        }
        setPhase(next);
        setRemaining(durationsRef.current[next]);
        const shouldAuto = next === 'focus' ? settings.autoFocus : settings.autoBreaks;
        if (shouldAuto) {
            endAtRef.current = Date.now() + durationsRef.current[next];
            setRunning(true);
        } else {
            setRunning(false);
        }
        persistSession({ phase: next, running: shouldAuto, endAt: shouldAuto ? Date.now() + durationsRef.current[next] : 0, remainingMs: durationsRef.current[next], cycleCount: newCycle });
    }, [cycleCount, settings, stats, setStats, setTasksState, persistSession]);

    const completePhaseRef = useRef(completePhase);
    completePhaseRef.current = completePhase;

    // Tick: only re-render when the displayed second actually changes (was: 5 renders/sec on every device).
    useEffect(() => {
        if (!running) return;
        const iv = window.setInterval(() => {
            const left = endAtRef.current - Date.now();
            if (left <= 0) {
                completePhaseRef.current(false);
            } else {
                setRemaining((prev) => (Math.ceil(prev / 1000) !== Math.ceil(left / 1000) ? left : prev));
            }
        }, 250);
        return () => window.clearInterval(iv);
    }, [running]);

    // keep display in sync when durations change while idle
    useEffect(() => {
        if (!runningRef.current) setRemaining(durations[phase]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [durations, phase]);

    // ticking sound
    const lastTickRef = useRef(0);
    useEffect(() => {
        if (!running || !settings.tick) return;
        const iv = window.setInterval(() => {
            const sec = Math.ceil((endAtRef.current - Date.now()) / 1000);
            if (sec !== lastTickRef.current) { lastTickRef.current = sec; playTick(settings.alarmVolume); }
        }, 250);
        return () => window.clearInterval(iv);
    }, [running, settings.tick, settings.alarmVolume]);

    // document title
    useEffect(() => {
        document.title = `${fmt(remaining)} - ${PHASE_LABEL[phase]} - Study focus timer`;
    }, [remaining, phase]);

    // ---------- ambient ----------
    useEffect(() => {
        if (ambientStopRef.current) { ambientStopRef.current(); ambientStopRef.current = null; }
        if (settings.ambient !== 'none') {
            ambientStopRef.current = startAmbient(settings.ambient, settings.ambientVolume);
        }
        return () => { if (ambientStopRef.current) { ambientStopRef.current(); ambientStopRef.current = null; } };
    }, [settings.ambient, settings.ambientVolume]);

    // ---------- wake lock ----------
    useEffect(() => {
        if (!settings.keepAwake || !('wakeLock' in navigator)) return;
        let cancelled = false;
        const request = () => { (navigator as any).wakeLock.request('screen').then((s: any) => { if (!cancelled) wakeLockRef.current = s; }).catch(() => { /* unsupported */ }); };
        request();
        const onVis = () => { if (document.visibilityState === 'visible') request(); };
        document.addEventListener('visibilitychange', onVis);
        return () => { cancelled = true; document.removeEventListener('visibilitychange', onVis); if (wakeLockRef.current) { try { wakeLockRef.current.release(); } catch { /* ignore */ } wakeLockRef.current = null; } };
    }, [settings.keepAwake]);

    // custom alarm element
    useEffect(() => {
        if (customAudioUrl) {
            customAudioRef.current = new Audio(customAudioUrl);
            customAudioRef.current.preload = 'auto';
        } else {
            customAudioRef.current = null;
        }
    }, [customAudioUrl]);

    // ---------- actions ----------
    const start = useCallback(() => {
        audioCtx();
        if (customAudioRef.current) { try { customAudioRef.current.pause(); customAudioRef.current.currentTime = 0; } catch { /* ignore */ } }
        endAtRef.current = Date.now() + remainingRef.current;
        setRunning(true);
        persistSession({ phase: phaseRef.current, running: true, endAt: endAtRef.current, remainingMs: remainingRef.current, cycleCount });
    }, [persistSession, cycleCount]);
    const pause = useCallback(() => { setRunning(false); persistSession({ phase: phaseRef.current, running: false, remainingMs: remainingRef.current, cycleCount }); }, [persistSession, cycleCount]);
    const reset = useCallback(() => { setRunning(false); setRemaining(durationsRef.current[phaseRef.current]); persistSession({ phase: phaseRef.current, running: false, remainingMs: durationsRef.current[phaseRef.current], cycleCount }); }, [persistSession, cycleCount]);
    const skip = useCallback(() => { completePhaseRef.current(true); }, []);
    const switchPhase = useCallback((p: Phase) => { setRunning(false); setPhase(p); setRemaining(durationsRef.current[p]); persistSession({ phase: p, running: false, remainingMs: durationsRef.current[p], cycleCount }); }, [persistSession, cycleCount]);
    const toggleFullscreen = useCallback(() => {
        if (document.fullscreenElement) void document.exitFullscreen().catch(() => { /* ignore */ });
        else void document.documentElement.requestFullscreen().catch(() => { /* blocked */ });
    }, []);
    const minimize = useCallback(() => { setPanel('none'); setCompact(true); }, []);
    const showTasksPanel = panel === 'tasks';
    const showSettingsPanel = panel === 'settings';
    const toggleTasks = useCallback(() => setPanel((p) => (p === 'tasks' ? 'none' : 'tasks')), []);
    const toggleSettings = useCallback(() => setPanel((p) => (p === 'settings' ? 'none' : 'settings')), []);

    // keyboard shortcuts
    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            const tag = (e.target as HTMLElement)?.tagName;
            if (tag === 'INPUT' || tag === 'TEXTAREA' || tag === 'SELECT') return;
            if (e.code === 'Space') { e.preventDefault(); if (runningRef.current) pause(); else start(); }
            else if (e.key === 'r' || e.key === 'R') reset();
            else if (e.key === 's' || e.key === 'S') skip();
            else if (e.key === '1') switchPhase('focus');
            else if (e.key === '2') switchPhase('short');
            else if (e.key === '3') switchPhase('long');
            else if (e.key === 'm' || e.key === 'M') setCompact((c) => !c);
            else if (e.key === 'f' || e.key === 'F') toggleFullscreen();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [start, pause, reset, skip, switchPhase, toggleFullscreen]);

    // ---------- settings helpers ----------
    const patch = useCallback((part: Partial<Settings>) => setSettings((prev) => ({ ...prev, ...part })), [setSettings]);

    // ---------- media upload / preview actions ----------
    const uploadBg = useCallback((file: File | undefined) => {
        if (!file) return;
        if (!file.type.startsWith('image/')) { setBgStatus('That file is not an image.'); return; }
        setUploadBgUrl((old) => { if (old) URL.revokeObjectURL(old); return URL.createObjectURL(file); });
        patch({ background: { kind: 'upload' } });
        setBgStatus('Background applied for this visit. Use a Pinterest or image link to keep it across visits.');
    }, [patch]);
    const uploadSound = useCallback((file: File | undefined) => {
        if (!file) return;
        if (!file.type.startsWith('audio/')) { setSoundStatus('That file is not an audio file.'); return; }
        setCustomAudioUrl((old) => { if (old) URL.revokeObjectURL(old); return URL.createObjectURL(file); });
        patch({ alarmSound: 'custom', customAlarm: { source: '', name: file.name } });
        setSoundStatus(`Using "${file.name}" for this visit. Use a link to keep it across visits.`);
    }, [patch]);
    const previewAlarm = useCallback((id: string) => {
        if (id === 'custom') {
            if (customAudioRef.current) { try { customAudioRef.current.currentTime = 0; customAudioRef.current.volume = settings.alarmVolume; customAudioRef.current.play().catch(() => setSoundStatus('Your browser blocked playback before the first tap. Press Start once, then preview again.')); } catch { /* ignore */ } }
            else setSoundStatus(settings.customAlarm?.source ? 'Still loading your sound.' : 'Add a link or upload a file first.');
            return;
        }
        playBuiltinAlarm(id, settings.alarmVolume, false);
    }, [settings.alarmVolume, settings.customAlarm]);
    const requestNotifications = useCallback((on: boolean) => {
        if (!on) { patch({ notifications: false }); return; }
        if (typeof Notification === 'undefined') return;
        try {
            const p = Notification.requestPermission();
            if (p && typeof (p as Promise<string>).then === 'function') {
                (p as Promise<string>).then((perm) => patch({ notifications: perm === 'granted' })).catch(() => patch({ notifications: false }));
            } else {
                patch({ notifications: Notification.permission === 'granted' });
            }
        } catch { patch({ notifications: false }); }
    }, [patch]);
    const resetSettings = useCallback(() => setSettings(DEFAULT_SETTINGS), [setSettings]);

    // ---------- stats ----------
    const EMPTY_DAY = useMemo(() => ({ focusSec: 0, sessions: 0 }), []);
    const today = stats.days[todayKey()] || EMPTY_DAY;
    const streak = useMemo(() => {
        let count = 0;
        const d = new Date();
        if (!(stats.days[todayKey(d)]?.sessions > 0)) d.setDate(d.getDate() - 1);
        while (stats.days[todayKey(d)]?.sessions > 0) { count++; d.setDate(d.getDate() - 1); }
        return count;
    }, [stats.days]);
    const week = useMemo(() => {
        const out: { label: string; minutes: number }[] = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date(); d.setDate(d.getDate() - i);
            const day = stats.days[todayKey(d)];
            out.push({ label: `${'SMTWTFS'[d.getDay()]}`, minutes: Math.round((day?.focusSec || 0) / 60) });
        }
        return out;
    }, [stats.days]);

    const chip = useMemo(() => settings.showChip
        ? `${today.sessions} ${today.sessions === 1 ? 'session' : 'sessions'} · ${Math.round(today.focusSec / 60)} min${streak > 1 ? ` · ${streak}-day streak` : ''}`
        : null, [settings.showChip, today, streak]);

    const ready = settingsSaved.ready && tasksSaved.ready && statsSaved.ready;
    const fontCss = FONTS.find((f) => f.id === settings.font)?.css || 'inherit';
    const progress = 1 - remaining / Math.max(1, durations[phase]);
    const R = 118;
    const CIRC = 2 * Math.PI * R;
    const notificationsSupported = typeof Notification !== 'undefined';
    const wakeLockSupported = typeof navigator !== 'undefined' && 'wakeLock' in navigator;
    const fullscreenSupported = typeof document !== 'undefined' && document.fullscreenEnabled;
    const tasks = tasksState.tasks;
    const activeTask = tasks.find((t) => t.id === tasksState.activeId) || null;
    const spotifySrc = settings.spotify ? spotifyEmbedUrl(settings.spotify) : null;

    return <div className={`ft-root ${compact ? 'is-compact' : ''}`} style={{ ['--ft-accent' as string]: settings.accent, ['--ft-font' as string]: fontCss } as React.CSSProperties}>
        <Background kind={bg.kind} id={bg.id} scrim={settings.scrim} builtinSrc={builtinSrc} linkBgUrl={linkBgUrl} uploadBgUrl={uploadBgUrl} paused={compact} />

        <TopBar chip={chip} panel={panel} fullscreenSupported={fullscreenSupported} onFullscreen={toggleFullscreen} onTasks={toggleTasks} onSettings={toggleSettings} onMinimize={minimize} />

        <main className="ft-center">
            <nav className="ft-modes" aria-label="Timer mode">
                {(['focus', 'short', 'long'] as Phase[]).map((p) => (
                    <button key={p} type="button" className={`ft-mode ${phase === p ? 'is-active' : ''}`} onClick={() => switchPhase(p)}>{PHASE_LABEL[p]}</button>
                ))}
            </nav>
            {settings.showDots ? <div className="ft-dots" aria-label="Cycle progress">
                {Array.from({ length: Math.max(1, settings.longEvery) }).map((_, i) => <span key={i} className={`ft-dot ${i < cycleCount % Math.max(1, settings.longEvery) || (cycleCount > 0 && cycleCount % Math.max(1, settings.longEvery) === 0 && phase !== 'focus') ? 'is-done' : ''}`} />)}
            </div> : null}

            <div className={`ft-clock is-${settings.clockSize}`} role="timer" aria-live="off" aria-label={`${PHASE_LABEL[phase]} timer, ${fmt(remaining)} remaining`}>
                {settings.clockStyle === 'ring' ? <svg className="ft-ring" viewBox="0 0 260 260" aria-hidden="true">
                    <circle className="ft-ring-track" cx="130" cy="130" r={R} />
                    <circle className="ft-ring-fill" cx="130" cy="130" r={R} strokeDasharray={CIRC} strokeDashoffset={CIRC * (1 - progress)} />
                </svg> : null}
                <div className="ft-time-wrap">
                    <div className="ft-time">{fmt(remaining)}</div>
                    <div className="ft-taskline">{activeTask ? activeTask.title : phase === 'focus' ? 'Pick a task or just focus' : 'Rest up'}</div>
                </div>
            </div>
            {settings.clockStyle === 'bar' ? <div className="ft-progressbar" aria-hidden="true"><span style={{ width: `${Math.round(progress * 100)}%` }} /></div> : null}

            <div className="ft-controls">
                <button type="button" className="ft-primary" onClick={() => (running ? pause() : start())}>{running ? 'Pause' : remaining < durations[phase] ? 'Resume' : 'Start'}</button>
                <button type="button" className="ft-ghost" onClick={reset}>Reset</button>
                <button type="button" className="ft-ghost" onClick={skip}>Skip</button>
            </div>
            {settings.showHint ? <p className="ft-hint">Space start or pause · R reset · S skip · M minimize · F fullscreen</p> : null}
        </main>

        {compact ? <div className="ft-compactpill" role="dialog" aria-label="Minimized timer">
            <span className="ft-compactphase">{PHASE_LABEL[phase]}</span>
            <span className="ft-compacttime">{fmt(remaining)}</span>
            <button type="button" className="ft-compactbtn" aria-label={running ? 'Pause' : 'Start'} onClick={() => (running ? pause() : start())}>{running ? '❚❚' : '▶'}</button>
            <button type="button" className="ft-compactbtn" aria-label="Expand timer" onClick={() => setCompact(false)}>⤢</button>
        </div> : null}

        {showTasksPanel ? <TasksSheet tasksState={tasksState} setTasksState={setTasksState} week={week} ready={ready} savedMessage={tasksSaved.message || statsSaved.message || ''} onClose={() => setPanel('none')} /> : null}

        {showSettingsPanel ? <SettingsSheet
            settings={settings} patch={patch}
            bgStatus={bgStatus} soundStatus={soundStatus}
            lastBgSrcRef={lastBgSrcRef} lastSndSrcRef={lastSndSrcRef}
            resolveLinkBg={resolveLinkBg} resolveCustomSound={resolveCustomSound}
            uploadBg={uploadBg} uploadSound={uploadSound}
            previewAlarm={previewAlarm} requestNotifications={requestNotifications}
            notificationsSupported={notificationsSupported} wakeLockSupported={wakeLockSupported}
            onResetSettings={resetSettings}
            savedMessage={settingsSaved.message || ''}
            onClose={() => setPanel('none')}
        /> : null}

        {spotifySrc ? <div className={`ft-spotify ${settings.spotifyOpen ? 'is-open' : ''}`}>
            <div className="ft-spotify-frame" aria-hidden={!settings.spotifyOpen}>
                <iframe src={spotifySrc} width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify player" />
            </div>
            <button type="button" className="ft-spotify-toggle" aria-expanded={settings.spotifyOpen} onClick={() => patch({ spotifyOpen: !settings.spotifyOpen })}>
                {settings.spotifyOpen ? 'Hide player' : '♫ Music'}
            </button>
        </div> : null}
    </div>;
}
