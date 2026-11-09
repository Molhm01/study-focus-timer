import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { ProfilePanel, PresenceBeacon } from './progression/ProfilePanel';
import { recordTaskCompletion } from './progression/useProgression';

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

const IMAGE_PARTS: Record<string,string[]> = {"v2cat":["images/images/v2cat-0.txt", "images/images/v2cat-1.txt"],"longer":["images/images/longer-0.txt", "images/images/longer-1.txt", "images/images/longer-2.txt", "images/images/longer-3.txt", "images/images/longer-4.txt", "images/images/longer-5.txt"],"curated":["images/images/curated-0.txt"],"rain": ["images/images/rain-0.txt", "images/images/rain-1.txt"], "thumb-rain": ["images/images/thumb-rain-0.txt"], "library": ["images/images/library-0.txt", "images/images/library-1.txt", "images/images/library-2.txt", "images/images/library-3.txt", "images/images/library-4.txt"], "thumb-library": ["images/images/thumb-library-0.txt"], "coffee": ["images/images/coffee-0.txt", "images/images/coffee-1.txt", "images/images/coffee-2.txt"], "thumb-coffee": ["images/images/thumb-coffee-0.txt"], "desk": ["images/images/desk-0.txt", "images/images/desk-1.txt", "images/images/desk-2.txt"], "thumb-desk": ["images/images/thumb-desk-0.txt"], "mountains": ["images/images/mountains-0.txt", "images/images/mountains-1.txt", "images/images/mountains-2.txt", "images/images/mountains-3.txt", "images/images/mountains-4.txt", "images/images/mountains-5.txt"], "thumb-mountains": ["images/images/thumb-mountains-0.txt"], "forest": ["images/images/forest-0.txt", "images/images/forest-1.txt", "images/images/forest-2.txt", "images/images/forest-3.txt"], "thumb-forest": ["images/images/thumb-forest-0.txt"], "stars": ["images/images/stars-0.txt"], "thumb-stars": ["images/images/thumb-stars-0.txt"], "ocean": ["images/images/ocean-0.txt", "images/images/ocean-1.txt", "images/images/ocean-2.txt"], "thumb-ocean": ["images/images/thumb-ocean-0.txt"], "catalog": ["images/images/catalog-0.txt", "images/images/catalog-1.txt", "images/images/catalog-2.txt", "images/images/catalog-3.txt", "images/images/catalog-4.txt", "images/images/catalog-5.txt", "images/images/catalog-6.txt"]};
const imagePromises: Record<string,Promise<string>> = {};
function imageUrl(id:string):Promise<string> { return imagePromises[id] ||= Promise.all(IMAGE_PARTS[id].map(async path=>{const r=await fetch(path);if(!r.ok)throw Error('Image unavailable');return r.text()})).then(parts=>'data:image/jpeg;base64,'+parts.join('').replace(/\s/g,'')); }
function useImageUrl(id:string) {const [url,setUrl]=useState('');useEffect(()=>{let live=true;imageUrl(id).then(x=>{if(live)setUrl(x)}).catch(()=>{});return()=>{live=false}},[id]);return url;}

// ---------- background photos: full images load on demand, thumbnails load for the picker ----------
// Photos and thumbs are runtime files at the repo root (GitHub Pages serves them next to index.html).
const PHOTO_FILES: Record<string, string> = {
    rain: 'photos/12-rain.jpg',
    library: 'photos/13-library.jpg',
    coffee: 'photos/14-coffee.jpg',
    desk: 'photos/15-desk.jpg',
    mountains: 'photos/28-mountains.jpg',
    forest: 'photos/17-forest.jpg',
    stars: 'photos/18-stars.jpg',
    ocean: 'photos/19-ocean.jpg',
};
const THUMB_FILES: Record<string, string> = {
    rain: 'thumbs/20-rain.jpg',
    library: 'thumbs/21-library.jpg',
    coffee: 'thumbs/22-coffee.jpg',
    desk: 'thumbs/23-desk.jpg',
    mountains: 'thumbs/24-mountains.jpg',
    forest: 'thumbs/25-forest.jpg',
    stars: 'thumbs/26-stars.jpg',
    ocean: 'thumbs/27-ocean.jpg',
};
const PHOTO_LOADERS: Record<string, () => Promise<{ default: string }>> = Object.fromEntries(
    Object.keys(PHOTO_FILES).map(k => [k, () => imageUrl(k).then(url=>({default:url}))])
);
const THUMB_LOADERS: Record<string, () => Promise<{ default: string }>> = Object.fromEntries(
    Object.keys(THUMB_FILES).map(k => [k, () => imageUrl('thumb-'+k).then(url=>({default:url}))])
);
const photoCache: Record<string, string> = {};
const thumbCache: Record<string, string> = {};

type Phase = 'focus' | 'short' | 'long';
type BgKind = 'builtin' | 'link' | 'upload' | 'scene' | 'color';

interface Settings {
    focusMin: number; shortMin: number; longMin: number; longEvery: number;
    autoBreaks: boolean; autoFocus: boolean;
    alarmSound: string; alarmVolume: number; alarmRepeat: boolean;
    customAlarm: { source: string; name: string } | null;
    tick: boolean;
    ambient: string; ambientVolume: number;
    notifications: boolean; keepAwake: boolean;
    background: { kind: BgKind; id?: string; source?: string };
    bgAnimate: boolean; customFit: 'cover' | 'contain'; enhance: boolean;
    scrim: number;
    accent: string; font: string;
    clockStyle: 'ring' | 'bar' | 'minimal'; clockSize: 's' | 'm' | 'l';
    showDots: boolean; showChip: boolean; showHint: boolean;
    clockOnly: boolean;
    spotify: string | null; spotifyOpen: boolean;
    musicOpen: boolean; musicMode: 'radio' | 'spotify';
    radio: { index: number; playing: boolean; volume: number };
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
    bgAnimate: true, customFit: 'cover', enhance: true,
    scrim: 0.45,
    accent: '#9fd8c6', font: 'sans',
    clockStyle: 'ring', clockSize: 'm',
    showDots: true, showChip: true, showHint: true,
    clockOnly: false,
    spotify: null, spotifyOpen: false,
    musicOpen: true, musicMode: 'radio',
    radio: { index: 0, playing: false, volume: 0.7 },
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

// Solid background colors: one-tap presets; the color wheel below picks any color.
const SOLID_COLORS = [
    { id: '#101418', name: 'Ink' },
    { id: '#16213a', name: 'Midnight' },
    { id: '#122b21', name: 'Forest' },
    { id: '#2e1a33', name: 'Plum' },
    { id: '#33191f', name: 'Wine' },
    { id: '#232a30', name: 'Slate' },
    { id: '#3a2e1e', name: 'Cocoa' },
    { id: '#d8cfc0', name: 'Paper' },
];

// ---------- focus radio: built-in free lofi ----------
// Streams directly from Pixabay's CDN only while playing (Pixabay Content License: free use,
// no attribution required - same license as the scene videos). Source links in README.
// Tracks are instrumental; the player shows live title, artist and cover.
interface RadioTrack { id: string; title: string; artist: string; url: string; cover: string; seconds: number }
const RADIO_TRACKS: RadioTrack[] = [
    { id: 'chillhop-jazz', title: 'Chillhop Jazz Coffee Shop', artist: 'alex-morgan', url: 'https://cdn.pixabay.com/download/audio/2026/06/16/audio_912babebe1.mp3?filename=alex-morgan-chillhop-jazz-coffee-shop-552792.mp3', cover: 'https://cdn.pixabay.com/audio/2026/06/16/18-47-53-884_200x200.jpg', seconds: 173 },
    { id: 'subclair-lofi', title: 'Lofi', artist: 'Sub_Clair', url: 'https://cdn.pixabay.com/download/audio/2026/08/15/audio_7249b5f798.mp3?filename=sub_clair-lofi-586095.mp3', cover: 'https://cdn.pixabay.com/audio/2026/08/15/08-51-29-850_200x200.jpg', seconds: 214 },
    { id: 'kulakovka-relax', title: 'LoFi Relax', artist: 'Kulakovka', url: 'https://cdn.pixabay.com/download/audio/2026/07/20/audio_d3e4d47bc2.mp3?filename=kulakovka-lofi-relax-570489.mp3', cover: 'https://cdn.pixabay.com/gradients/82bfb5-eac560_200x200.png', seconds: 140 },
    { id: 'apalon-lofi', title: 'Lofi', artist: 'APALONBeats', url: 'https://cdn.pixabay.com/download/audio/2026/07/29/audio_453d7bbab8.mp3?filename=apalonbeats-lofi-576261.mp3', cover: 'https://cdn.pixabay.com/audio/2026/07/29/14-51-13-130_200x200.jpg', seconds: 128 },
    { id: 'monda-lofi', title: 'LoFi Music', artist: 'MondaMusic', url: 'https://cdn.pixabay.com/download/audio/2026/08/20/audio_cd7ca920a0.mp3?filename=mondamusic-lofi-lofi-music-589107.mp3', cover: 'https://cdn.pixabay.com/audio/2026/08/20/09-14-53-672_200x200.jpg', seconds: 98 },
    { id: 'zephira-chill', title: 'Chill Lofi', artist: 'ZephiraMusic', url: 'https://cdn.pixabay.com/download/audio/2026/08/14/audio_a5f2abd4d3.mp3?filename=zephiramusic-chill-lofi-585360.mp3', cover: 'https://cdn.pixabay.com/gradients/67a871-909cf2_200x200.png', seconds: 137 },
    { id: 'coffee-shop', title: 'Lofi Coffee Shop', artist: 'alex-morgan', url: 'https://cdn.pixabay.com/download/audio/2026/07/15/audio_6353298add.mp3?filename=alex-morgan-lofi-coffee-shop-568150.mp3', cover: 'https://cdn.pixabay.com/audio/2026/07/15/21-20-45-679_200x200.jpg', seconds: 114 },
    { id: 'midnight-club', title: 'Lofi Midnight Club', artist: 'alex-morgan', url: 'https://cdn.pixabay.com/download/audio/2026/07/15/audio_53935e58bb.mp3?filename=alex-morgan-lofi-midnight-club-568164.mp3', cover: 'https://cdn.pixabay.com/audio/2026/07/15/21-18-58-754_200x200.jpg', seconds: 137 },
];

// ---------- color helpers ----------
function hexToHsl(hex: string): { h: number; s: number; l: number } {
    const m = hex.replace('#', '');
    const r = parseInt(m.slice(0, 2), 16) / 255, g = parseInt(m.slice(2, 4), 16) / 255, b = parseInt(m.slice(4, 6), 16) / 255;
    const max = Math.max(r, g, b), min = Math.min(r, g, b);
    const l = (max + min) / 2;
    if (max === min) return { h: 0, s: 0, l };
    const d = max - min;
    const s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    let h = 0;
    if (max === r) h = ((g - b) / d + (g < b ? 6 : 0));
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    return { h: h * 60, s, l };
}
function hslToHex(h: number, s: number, l: number): string {
    const f = (n: number) => {
        const k = (n + h / 30) % 12;
        const a = s * Math.min(l, 1 - l);
        const c = l - a * Math.max(-1, Math.min(k - 3, 9 - k, 1));
        return Math.round(c * 255).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
}
// Relative luminance (0 dark .. 1 light), used to keep the clock readable on light backgrounds.
function relLuma(hex: string): number {
    const m = hex.replace('#', '');
    if (!/^[0-9a-f]{6}$/i.test(m)) return 0;
    const ch = (i: number) => { const v = parseInt(m.slice(i, i + 2), 16) / 255; return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4); };
    return 0.2126 * ch(0) + 0.7152 * ch(2) + 0.0722 * ch(4);
}

// Animated source videos stream directly from Pixabay's CDN only when selected (embedding allowed per Pixabay API terms). Picker previews are one small composed atlas.
// Illustrated scenes are drawn as seamless loops and hard-loop natively. Photographed scenes are near-static compositions with continuous water/fog motion; their wrap is covered by a short crossfade (blend: true), not claimed to be seamless.
// Sources: Pixabay Content License video embeddings; source links and notices in README. No self-hosted video files.
interface SceneDef { id: string; name: string; url?: string; tile?: number; preview?: string; duration?: number; poster?: string; blend?: boolean }
const SCENES: SceneDef[] = [
    {"id": "lofi-246243", "name": "Windowsill cat", "url": "https://cdn.pixabay.com/video/2024/12/11/246243_medium.mp4", "tile": 0, "preview": "v2cat", "duration": 76.71},
    {"id": "lofi-246535", "name": "Sunset cat", "url": "https://cdn.pixabay.com/video/2024/12/13/246535_medium.mp4", "tile": 1, "preview": "v2cat", "duration": 58.56},
    {"id": "lofi-246241", "name": "Night room cat", "url": "https://cdn.pixabay.com/video/2024/12/11/246241_medium.mp4", "tile": 2, "preview": "v2cat", "duration": 75.34},
    {"id": "lofi-246242", "name": "Fireplace cat", "url": "https://cdn.pixabay.com/video/2024/12/11/246242_medium.mp4", "tile": 3, "preview": "v2cat", "duration": 58.69},
    {"id": "lofi-270983", "name": "Mountain cafe", "url": "https://cdn.pixabay.com/video/2025/04/09/270983_medium.mp4", "tile": 4, "preview": "v2cat", "duration": 5.33},
    {"id": "lofi-73663", "name": "Attic nap", "url": "https://cdn.pixabay.com/video/2021/05/09/73663-549527825_medium.mp4", "tile": 5, "preview": "v2cat", "duration": 60.01},
    {"id": "lofi-215407", "name": "Rainy study desk", "url": "https://cdn.pixabay.com/video/2024/06/05/215407_medium.mp4", "tile": 6, "preview": "v2cat", "duration": 60.09},
    {"id": "photo-107976", "name": "Tropical waterfall", "url": "https://cdn.pixabay.com/video/2022/02/17/107976-678971242_medium.mp4", "tile": 7, "preview": "v2cat", "duration": 60.01, "blend": true},
    {"id": "photo-22589", "name": "Waterfall streams", "url": "https://cdn.pixabay.com/video/2019/04/04/22589-328624822_medium.mp4", "tile": 8, "preview": "v2cat", "duration": 36.31, "blend": true},
    {"id": "lofi-312345", "name": "Rainy reading cat", "url": "https://cdn.pixabay.com/video/2025/10/27/312345_medium.mp4", "tile": 9, "preview": "v2cat", "duration": 64.00},
    {"id": "lofi-345856", "name": "City window cat", "url": "https://cdn.pixabay.com/video/2026/04/11/345856_medium.mp4", "tile": 10, "preview": "v2cat", "duration": 64.00},
    {"id": "lofi-310025", "name": "Cozy study rain", "url": "https://cdn.pixabay.com/video/2025/10/15/310025_medium.mp4", "tile": 11, "preview": "v2cat", "duration": 64.00},
    {"id": "lofi-270507", "name": "Sunset fence cat", "url": "https://cdn.pixabay.com/video/2025/04/07/270507_medium.mp4", "tile": 12, "preview": "v2cat", "duration": 59.97},
    {"id": "photo-292827", "name": "Alpine lake", "url": "https://cdn.pixabay.com/video/2025/07/22/292827_medium.mp4", "tile": 13, "preview": "v2cat", "duration": 20.03, "blend": true},
    {"id": "photo-20451", "name": "Golden surf", "url": "https://cdn.pixabay.com/video/2019/01/04/20451-309694501_medium.mp4", "tile": 14, "preview": "v2cat", "duration": 43.32, "blend": true},
    {"id": "photo-198488", "name": "Shoreline waves", "url": "https://cdn.pixabay.com/video/2024/01/29/198488-907576442_medium.mp4", "tile": 15, "preview": "v2cat", "duration": 60.00, "blend": true},
    {"id": "lofi-214500", "name": "Warm library desk", "url": "https://cdn.pixabay.com/video/2024/05/30/214500_medium.mp4", "tile": 16, "preview": "v2cat", "duration": 63.23},
    {"id": "lofi-301247", "name": "Retro train cat", "url": "https://cdn.pixabay.com/video/2025/09/02/301247_medium.mp4", "tile": 17, "preview": "v2cat", "duration": 29.87},
    {"id": "lofi-345838", "name": "Sleeping dog desk", "url": "https://cdn.pixabay.com/video/2026/04/11/345838_medium.mp4", "tile": 18, "preview": "v2cat", "duration": 61.40},
    {"id": "lofi-345955", "name": "Night reading", "url": "https://cdn.pixabay.com/video/2026/04/12/345955_medium.mp4", "tile": 19, "preview": "v2cat", "duration": 64.00}
];

const SCENE_BY_ID = new Map<string, SceneDef>(SCENES.map((s) => [s.id, s]));
// Quality ladder: smaller, same-resolution variants start faster on phones; larger variants are retried on failure.
function sceneLadder(url: string, mobile: boolean): string[] {
    const swap = (q: string) => url.replace(/_(tiny|small|medium|large)\.mp4/, q);
    const all = [swap('_medium.mp4'), swap('_large.mp4'), swap('_small.mp4'), swap('_tiny.mp4')];
    const uniq = [...new Set(all)];
    const first = mobile ? swap('_small.mp4') : swap('_medium.mp4');
    return [first, ...uniq.filter((u) => u !== first)];
}
function posterSrc(scene: SceneDef): string | undefined {
    const inline = (window as any).__SFT_POSTERS?.[scene.id];
    return inline || scene.poster;
}
const SCENE_FILES: Record<string, string> = {
    'balcony-dusk-l.jpg': '53-balcony-dusk-l.jpg',
    'balcony-dusk-l.mp4': '32-balcony-dusk-l.mp4',
    'balcony-dusk-p.jpg': '52-balcony-dusk-p.jpg',
    'balcony-dusk-p.mp4': '31-balcony-dusk-p.mp4',
    'cozy-window-l.jpg': '51-cozy-window-l.jpg',
    'cozy-window-l.mp4': '30-cozy-window-l.mp4',
    'cozy-window-p.jpg': '50-cozy-window-p.jpg',
    'cozy-window-p.mp4': '29-cozy-window-p.mp4',
    'japan-street-l.jpg': '49-japan-street-l.jpg',
    'japan-street-l.mp4': '34-japan-street-l.mp4',
    'japan-street-p.jpg': '48-japan-street-p.jpg',
    'japan-street-p.mp4': '35-japan-street-p.mp4',
    'misty-river-l.jpg': '40-misty-river-l.jpg',
    'misty-river-l.mp4': '22-misty-river-l.mp4',
    'misty-river-p.jpg': '39-misty-river-p.jpg',
    'misty-river-p.mp4': '21-misty-river-p.mp4',
    'night-train-l.jpg': '47-night-train-l.jpg',
    'night-train-l.mp4': '28-night-train-l.mp4',
    'night-train-p.jpg': '46-night-train-p.jpg',
    'night-train-p.mp4': '27-night-train-p.mp4',
    'rainy-window-l.jpg': '41-rainy-window-l.jpg',
    'rainy-window-l.mp4': '20-rainy-window-l.mp4',
    'rainy-window-p.jpg': '37-rainy-window-p.jpg',
    'rainy-window-p.mp4': '17-rainy-window-p.mp4',
    'sakura-night-l.jpg': '45-sakura-night-l.jpg',
    'sakura-night-l.mp4': '26-sakura-night-l.mp4',
    'sakura-night-p.jpg': '44-sakura-night-p.jpg',
    'sakura-night-p.mp4': '25-sakura-night-p.mp4',
    'shrine-l.jpg': '10-shrine-l.jpg',
    'shrine-l.mp4': '1-shrine-l.mp4',
    'shrine-p.jpg': '36-shrine-p.jpg',
    'shrine-p.mp4': '18-shrine-p.mp4',
    'water-garden-l.jpg': '43-water-garden-l.jpg',
    'water-garden-l.mp4': '24-water-garden-l.mp4',
    'water-garden-p.jpg': '42-water-garden-p.jpg',
    'water-garden-p.mp4': '23-water-garden-p.mp4'
};
const sceneMedia = (id: string, orientation: 'p' | 'l', ext: 'mp4' | 'jpg') => `scenes/${SCENE_FILES[`${id}-${orientation}.${ext}`]}`;
const scenePoster = (s: SceneDef, o: 'p' | 'l') => sceneMedia(s.id, o, 'jpg');

const ACCENTS = [
    { id: 'mint', name: 'Mint', value: '#9fd8c6' },
    { id: 'sky', name: 'Sky', value: '#9cc7ff' },
    { id: 'rose', name: 'Rose', value: '#f2a9c4' },
    { id: 'amber', name: 'Amber', value: '#ffcf99' },
    { id: 'violet', name: 'Violet', value: '#c9b6ff' },
    { id: 'white', name: 'White', value: '#ffffff' },
];

const FONTS = [
    { id: 'sans', name: 'Sans', css: "system-ui, -apple-system, 'Segoe UI', Roboto, sans-serif" },
    { id: 'serif', name: 'Serif', css: "Georgia, 'Times New Roman', serif" },
    { id: 'mono', name: 'Mono', css: "ui-monospace, 'SF Mono', Menlo, Consolas, monospace" },
    { id: 'round', name: 'Round', css: "'Trebuchet MS', Verdana, sans-serif" },
];

const THEMES: { id: string; name: string; accent: string; font: string; bg: { kind: BgKind; id: string } }[] = [
    { id: 'mint', name: 'Mint', accent: '#9fd8c6', font: 'sans', bg: { kind: 'color', id: '#101418' } },
    { id: 'dusk', name: 'Dusk', accent: '#ffcf99', font: 'serif', bg: { kind: 'color', id: '#3b2f4a' } },
    { id: 'moss', name: 'Moss', accent: '#7ea87b', font: 'round', bg: { kind: 'color', id: '#0f2e25' } },
    { id: 'dawn', name: 'Dawn', accent: '#f2a9c4', font: 'serif', bg: { kind: 'color', id: '#4a2f3d' } },
];

const ALARMS = [
    { id: 'bell', name: 'Bell' },
    { id: 'chime', name: 'Chime' },
    { id: 'gong', name: 'Gong' },
    { id: 'beep', name: 'Digital' },
    { id: 'wood', name: 'Woodblock' },
    { id: 'custom', name: 'My sound' },
];

// Ambient sounds. File entries are CC0 BigSoundBank recordings, accurately labelled.
// See sounds/CREDITS.md. They play through looping Web Audio buffers.
// White/brown noise are genuinely generated noise, so they stay synthesized.
const AMBIENTS: { id: string; name: string; file?: string }[] = [
    { id: 'none', name: 'Off' },
    { id: 'rain', name: 'Rain', file: 'sounds/rain.m4a' },
    { id: 'storm', name: 'Thunderstorm', file: 'sounds/thunderstorm.m4a' },
    { id: 'ocean', name: 'Ocean waves', file: 'sounds/ocean.m4a' },
    { id: 'forest', name: 'Forest birds', file: 'sounds/forest.m4a' },
    { id: 'fire', name: 'Fireplace', file: 'sounds/fireplace.m4a' },
    { id: 'cafe', name: 'Restaurant chatter', file: 'sounds/coffee-shop.m4a' },
    { id: 'night', name: 'Field cricket', file: 'sounds/crickets.m4a' },
    { id: 'wind', name: 'Wind', file: 'sounds/wind.m4a' },
    { id: 'stream', name: 'Stream', file: 'sounds/stream.m4a' },
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

const AUDIO_PARTS: Record<string, string[]> = {"sounds/rain.m4a":["sounds/rain-0.txt","sounds/rain-1.txt","sounds/rain-2.txt","sounds/rain-3.txt","sounds/rain-4.txt","sounds/rain-5.txt"],"sounds/thunderstorm.m4a":["sounds/thunderstorm-0.txt","sounds/thunderstorm-1.txt","sounds/thunderstorm-2.txt","sounds/thunderstorm-3.txt","sounds/thunderstorm-4.txt","sounds/thunderstorm-5.txt"],"sounds/ocean.m4a":["sounds/ocean-0.txt","sounds/ocean-1.txt","sounds/ocean-2.txt","sounds/ocean-3.txt","sounds/ocean-4.txt","sounds/ocean-5.txt"],"sounds/forest.m4a":["sounds/forest-0.txt","sounds/forest-1.txt","sounds/forest-2.txt","sounds/forest-3.txt","sounds/forest-4.txt"],"sounds/fireplace.m4a":["sounds/fireplace-0.txt","sounds/fireplace-1.txt","sounds/fireplace-2.txt","sounds/fireplace-3.txt","sounds/fireplace-4.txt","sounds/fireplace-5.txt"],"sounds/coffee-shop.m4a":["sounds/coffee-shop-0.txt","sounds/coffee-shop-1.txt","sounds/coffee-shop-2.txt","sounds/coffee-shop-3.txt","sounds/coffee-shop-4.txt","sounds/coffee-shop-5.txt"],"sounds/crickets.m4a":["sounds/crickets-0.txt","sounds/crickets-1.txt","sounds/crickets-2.txt","sounds/crickets-3.txt"],"sounds/wind.m4a":["sounds/wind-0.txt","sounds/wind-1.txt","sounds/wind-2.txt","sounds/wind-3.txt","sounds/wind-4.txt","sounds/wind-5.txt"],"sounds/stream.m4a":["sounds/stream-0.txt","sounds/stream-1.txt","sounds/stream-2.txt","sounds/stream-3.txt","sounds/stream-4.txt","sounds/stream-5.txt"]};
const ambientBufCache: Record<string, Promise<AudioBuffer>> = {};
function ambientBuf(ctx: AudioContext, file: string): Promise<AudioBuffer> {
    if (!ambientBufCache[file]) {
        ambientBufCache[file] = Promise.all((AUDIO_PARTS[file] || []).map(async (part) => {
            const r = await fetch(part);
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return (await r.text()).trim();
        })).then((parts) => {
            if (!parts.length) throw new Error('Recording unavailable');
            const raw = atob(parts.join(''));
            return ctx.decodeAudioData(Uint8Array.from(raw, (c) => c.charCodeAt(0)).buffer);
        }).catch((error) => { delete ambientBufCache[file]; throw error; });
    }
    return ambientBufCache[file];
}

function startAmbient(kind: string, volume: number): (() => void) | null {
    if (kind === 'none') return null;
    const def = AMBIENTS.find((a) => a.id === kind);
    const ctx = audioCtx();
    const master = ctx.createGain();
    master.gain.value = volume;
    master.connect(ctx.destination);
    if (def?.file) {
        let stopped = false;
        let src: AudioBufferSourceNode | null = null;
        ambientBuf(ctx, def.file).then((buf) => {
            if (stopped) return;
            src = ctx.createBufferSource();
            src.buffer = buf;
            src.loop = true;
            src.connect(master);
            src.start();
        }).catch(() => { /* file failed to load: stay silent, chip stays selected */ });
        return () => { stopped = true; try { src?.stop(); } catch { /* not started */ } try { master.disconnect(); } catch { /* gone */ } };
    }
    const src = ctx.createBufferSource();
    src.buffer = makeNoiseBuffer(ctx, kind === 'white' ? 'white' : 'brown');
    src.loop = true;
    let node: AudioNode = src;
    if (kind === 'brown') {
        const lp = ctx.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.value = 900;
        node.connect(lp); node = lp;
    }
    node.connect(master);
    src.start();
    return () => { try { src.stop(); master.disconnect(); } catch { /* already stopped */ } };
}

// ---------- media helpers ----------
function isProbablyAudioUrl(url: string) { return /^https:\/\/.+/i.test(url.trim()); }

async function fetchBlob(url: string): Promise<Blob> {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.blob();
}

// Load an image as a blob: direct read first, then through the public weserv.nl relay at full size (no 1920px cap) for hosts that block cross-site reads.
async function fetchImageBlob(url: string): Promise<Blob> {
    try {
        const blob = await fetchBlob(url);
        if (blob.type.startsWith('image/')) return blob;
        throw new Error('not an image');
    } catch {
        const proxied = `https://images.weserv.nl/?url=${encodeURIComponent(url.replace(/^https?:\/\//, ''))}`;
        const blob = await fetchBlob(proxied);
        if (!blob.type.startsWith('image/')) throw new Error('not an image');
        return blob;
    }
}

async function resolveImageSource(input: string): Promise<{ blob: Blob; finalUrl: string }> {
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
    // Pinterest CDN thumbnail links (i.pinimg.com/236x|564x|736x/...) upscale badly; request the original-resolution file and verify it by actually loading it, falling back to the pasted size if the original is missing. Browsers usually block cross-site reads of i.pinimg.com, so both candidates go through the public image relay when a direct read fails.
    const pinCdn = imageUrl.match(/^(https:\/\/i\.pinimg\.com)\/(?:236x|564x|736x)(\/.*)$/i);
    if (pinCdn) {
        try {
            const originalUrl = `${pinCdn[1]}/originals${pinCdn[2]}`;
            const blob = await fetchImageBlob(originalUrl);
            return { blob, finalUrl: originalUrl };
        } catch { /* original unavailable; use the pasted size below */ }
    }
    if (!/^https:\/\//i.test(imageUrl)) throw new Error('not a link');
    const blob = await fetchImageBlob(imageUrl);
    return { blob, finalUrl: imageUrl };
}

// ---------- spotify ----------
function spotifyEmbedUrl(source: string): string | null {
    const preset = SPOTIFY_PRESETS.find((p) => p.id === source);
    const url = preset ? preset.url : source;
    const m = url.trim().match(/open\.spotify\.com\/(playlist|album|track|artist|show|episode)\/([A-Za-z0-9]{10,})/i);
    return m ? `https://open.spotify.com/embed/${m[1].toLowerCase()}/${m[2]}?theme=0` : null;
}


// ---------- inline SVG icons (unicode glyphs render as boxes on some devices) ----------
const SvgIcon = ({ d, vb = 24 }: { d: string; vb?: number }) => (
    <svg width="18" height="18" viewBox={`0 0 ${vb} ${vb}`} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{d.split('|').map((p, i) => <path key={i} d={p} />)}</svg>
);
const ICON_FULLSCREEN = 'M4 9V4h5|M20 9V4h-5|M4 15v5h5|M20 15v5h-5';
const ICON_MINIMIZE = 'M5 12h14';
const ICON_TASKS = 'M4 6h16|M4 12h16|M4 18h10';
const ICON_SETTINGS = 'M12 8.5a3.5 3.5 0 1 0 0 7 3.5 3.5 0 0 0 0-7|M12 2.5v3|M12 18.5v3|M4.9 4.9l2.2 2.2|M16.9 16.9l2.2 2.2|M2.5 12h3|M18.5 12h3|M4.9 19.1l2.2-2.2|M16.9 7.1l2.2-2.2';
const ICON_CLOSE = 'M6 6l12 12|M18 6L6 18';
const ICON_PLAY = 'M8 5.5v13l11-6.5z';
const ICON_POPOUT = 'M14 4h6v6|M20 4l-8 8|M18 13v5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5';
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
const SceneVideo = React.memo(function SceneVideo({ scene, token, paused, animate, onReady, onFail }: { scene: SceneDef; token: number; paused: boolean; animate: boolean; onReady: (key: number) => void; onFail: (key: number) => void }) {
    const root = useRef<HTMLDivElement | null>(null);
    const [error, setError] = useState(false);
    const [attempt, setAttempt] = useState(0);
    const mobile = useMemo(() => window.matchMedia('(max-width: 900px), (orientation: portrait)').matches, []);
    const ladder = useMemo(() => scene.url ? sceneLadder(scene.url, mobile) : [sceneMedia(scene.id, 'p', 'mp4')], [scene, mobile]);
    const src = ladder[Math.min(attempt, ladder.length - 1)];
    const control = useRef({ paused, animate }); control.current = { paused, animate };
    const cb = useRef({ onReady, onFail }); cb.current = { onReady, onFail };
    useEffect(() => {
        setError(false);
        const stage = root.current;
        if (!stage) return;
        let blending = false, dead = false, raf = 0, started = false, errSeen = false;
        const play = (v: HTMLVideoElement) => v.play().catch(() => { /* blocked until first tap */ });
        const runWanted = () => !control.current.paused && control.current.animate && !document.hidden;
        const makeVideo = () => {
            const v = document.createElement('video');
            v.className = 'ft-bg ft-bgvideo';
            v.muted = true; v.playsInline = true;
            v.setAttribute('playsinline', ''); v.setAttribute('disablepictureinpicture', ''); v.setAttribute('disableremoteplayback', '');
            v.preload = 'auto'; v.src = src; v.setAttribute('aria-hidden', 'true');
            v.loop = !scene.blend; // designed loops wrap natively; photographed scenes crossfade over the join
            return v;
        };
        const onErr = () => {
            if (errSeen || dead) return; errSeen = true;
            setAttempt((cur) => {
                if (cur < ladder.length - 1) return cur + 1;
                setError(true); if (a) { a.remove(); a = null; } cb.current.onFail(token); return cur;
            });
        };
        let b: HTMLVideoElement | null = null;
        const onEnded = () => {
            if (dead) return;
            if (a) { a.currentTime = 0; a.style.opacity = '1'; if (runWanted()) play(a); }
            if (b) { b.remove(); b = null; }
            blending = false;
        };
        let a: HTMLVideoElement | null = makeVideo();
        a.addEventListener('error', onErr);
        a.addEventListener('ended', onEnded);
        stage.appendChild(a);
        const sync = () => {
            if (!runWanted()) { a?.pause(); b?.pause(); }
            else if (started && a) { play(a); if (b) play(b); }
        };
        const paint = () => {
            if (dead || !a) return;
            if (!started && a.readyState >= 2) { started = true; if (root.current) root.current.style.opacity = '1'; cb.current.onReady(token); if (runWanted()) play(a); }
            if (runWanted() && started) {
                if (a.paused && !a.ended) play(a);
                const end = scene.duration || a.duration;
                const d = Math.min(1.5, end / 4);
                if (!scene.blend) { raf = requestAnimationFrame(paint); return; }
                if (!blending && Number.isFinite(end) && a.currentTime >= end - d) {
                    blending = true;
                    b = makeVideo(); b.style.opacity = '0'; b.style.zIndex = '2';
                    b.addEventListener('error', () => { /* partner failed: hard loop via ended */ });
                    stage.appendChild(b); b.currentTime = 0; play(b);
                }
                if (blending && b && b.readyState >= 2) {
                    if (b.paused) play(b);
                    const mix = Math.min(1, b.currentTime / d);
                    a.style.opacity = String(1 - mix);
                    b.style.opacity = '1';
                    if (mix >= 1) {
                        a.remove();
                        a = b; b = null; blending = false;
                        a.addEventListener('error', onErr);
                        a.addEventListener('ended', onEnded);
                        stage.dataset.wraps = String(Number(stage.dataset.wraps || 0) + 1);
                    }
                }
            }
            raf = requestAnimationFrame(paint);
        };
        raf = requestAnimationFrame(paint);
        document.addEventListener('visibilitychange', sync);
        window.addEventListener('pointerdown', sync);
        return () => {
            dead = true; cancelAnimationFrame(raf);
            a?.pause(); b?.pause(); a?.remove(); b?.remove();
            document.removeEventListener('visibilitychange', sync);
            window.removeEventListener('pointerdown', sync);
        };
    }, [src]);
    return <div ref={root} className="ft-scene-stage" key={src} style={{ opacity: 0, transition: 'opacity .25s' }}>{error && <span className="ft-stream-status">This scene could not load right now. Try another background.</span>}</div>;
});

// Scene switching: the previously decoded scene stays on screen until the new scene's first frame is ready, then swaps. On first visit a still photo shows until first decode; on failure the previous scene (or the still) remains - never a stretched preview thumbnail or a different-looking fallback scene.
// Readiness is tracked per mounted video (a numeric token), never per scene id: re-picking a scene you already
// watched mounts a fresh video that is NOT ready yet, and the old scene must stay visible until it is. A stale
// per-id "ready" once dropped the visible scene right after a re-pick, leaving a black gap while it reloaded.
const SceneStage = React.memo(function SceneStage({ scene, paused, animate }: { scene: SceneDef; paused: boolean; animate: boolean }) {
    const [stack, setStack] = useState<{ s: SceneDef; key: number }[]>([{ s: scene, key: 0 }]);
    const [readyKey, setReadyKey] = useState<number | null>(null);
    const firstStill = useImageUrl('rain');
    const keySeq = useRef(0);
    const stackRef = useRef(stack);
    const currentKey = useRef(0);
    const readyKeyRef = useRef<number | null>(null);
    const applyStack = (next: { s: SceneDef; key: number }[]) => { stackRef.current = next; setStack(next); };
    useEffect(() => {
        const cur = stackRef.current;
        const top = cur[cur.length - 1];
        if (top && top.s.id === scene.id) {
            // Re-picked the scene already on top: its video is alive, so no new "ready" event will fire -
            // drop the older stage here so it cannot linger playing behind the current one.
            currentKey.current = top.key;
            const k = top.key;
            window.setTimeout(() => { if (currentKey.current === k && readyKeyRef.current === k) applyStack(stackRef.current.filter((x) => x.key === k)); }, 400);
            return;
        }
        const key = ++keySeq.current;
        currentKey.current = key;
        applyStack([...cur.filter((x) => x.s.id !== scene.id).slice(-1), { s: scene, key }]);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [scene]);
    const handleReady = useCallback((key: number) => {
        // A stage that is no longer selected must never shrink the stack: its late "ready" would otherwise
        // filter the stack down to a stage that is no longer in it, emptying the stage until reload.
        if (key !== currentKey.current) return;
        readyKeyRef.current = key;
        setReadyKey(key);
        window.setTimeout(() => { if (currentKey.current === key) applyStack(stackRef.current.filter((x) => x.key === key)); }, 400);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const handleFail = useCallback((_key: number) => { /* failed scene keeps its error note; previous scene or the still stays visible behind it */ }, []);
    const loading = readyKey === null || readyKey !== currentKey.current;
    return <>
        {loading ? <div className="ft-bg" style={{ backgroundColor: '#101418', backgroundImage: firstStill ? `url(${firstStill})` : undefined, backgroundSize: 'cover', backgroundPosition: 'center' }} /> : null}
        {stack.map((x) => <SceneVideo key={x.key} scene={x.s} token={x.key} paused={paused} animate={animate} onReady={handleReady} onFail={handleFail} />)}
        {loading && stack.length > 1 ? <div className="ft-scene-switching" aria-hidden="true"><i /></div> : null}
    </>;
});

interface BgMedia { url: string; kind: 'image' | 'video' }
const Background = React.memo(function Background({ kind, id, scrim, builtinSrc, linkBg, uploadBg, paused, animate, customFit, enhance }: {
    kind: BgKind; id?: string; scrim: number;
    builtinSrc: string | null; linkBg: BgMedia | null; uploadBg: BgMedia | null; paused?: boolean; animate: boolean; customFit: 'cover' | 'contain'; enhance?: boolean;
}) {
    let style: React.CSSProperties = {};
    if (kind === 'builtin' && builtinSrc) style = { backgroundImage: `url(${builtinSrc})` };
    else if (kind === 'color') style = { backgroundColor: /^#[0-9a-f]{6}$/i.test(id || '') ? id! : '#101418' };
    else if (kind === 'link' && linkBg?.kind === 'image') style = { backgroundImage: `url(${linkBg.url})` };
    else if (kind === 'upload' && uploadBg?.kind === 'image') style = { backgroundImage: `url(${uploadBg.url})` };
    else if (kind === 'link' || kind === 'upload' || kind === 'builtin') style = { backgroundColor: '#101418' };
    if ((kind === 'link' || kind === 'upload') && style.backgroundImage) { style = {...style, backgroundSize: customFit, backgroundRepeat:'no-repeat',backgroundColor:'#101418'}; if (enhance !== false) style = {...style, filter: 'url(#ft-sharpen) saturate(1.08) contrast(1.05)'}; }
    const scene = kind === 'scene' ? (SCENE_BY_ID.get(id!) || SCENES[0]) : undefined;
    const linkVideo = kind === 'link' && linkBg?.kind === 'video' ? linkBg.url : kind === 'upload' && uploadBg?.kind === 'video' ? uploadBg.url : null;
    // A light solid color is dimmed beyond the scrim setting so the clock stays readable.
    const effectiveScrim = kind === 'color' ? Math.max(scrim, Math.min(0.78, Math.pow(relLuma(id || '#101418'), 1.15) * 0.9)) : scrim;
    return <>
        {scene
            ? <SceneStage scene={scene} paused={!!paused} animate={animate} />
            : linkVideo
                ? <CustomVideo src={linkVideo} paused={!!paused} animate={animate} fit={customFit} />
                : <div className="ft-bg" style={style} />}
        <div className="ft-scrim" style={{ opacity: effectiveScrim }} />
        <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true"><filter id="ft-sharpen"><feConvolveMatrix order="3" kernelMatrix="0 -0.3 0 -0.3 2.2 -0.3 0 -0.3 0" /></filter></svg>
    </>;
});

const CustomVideo = React.memo(function CustomVideo({ src, paused, animate, fit }: { src: string; paused: boolean; animate: boolean; fit: 'cover' | 'contain' }) {
    const ref = useRef<HTMLVideoElement | null>(null);
    useEffect(() => {
        const v = ref.current;
        if (!v) return;
        const sync = () => {
            if (paused || !animate || document.hidden) v.pause();
            else v.play().catch(() => { /* blocked */ });
        };
        sync();
        const retry = () => { if (!paused && animate && !document.hidden) v.play().catch(() => { /* still blocked */ }); };
        document.addEventListener('visibilitychange', sync);
        window.addEventListener('pointerdown', retry);
        return () => { document.removeEventListener('visibilitychange', sync); window.removeEventListener('pointerdown', retry); };
    }, [paused, animate, src]);
    if (!animate) return null;
    return <video ref={ref} className="ft-bg ft-bgvideo" style={{objectFit:fit,backgroundColor:'#101418'}} src={src} muted loop autoPlay playsInline preload="auto" aria-hidden="true" />;
});

const SceneSwatch = React.memo(function SceneSwatch({ scene, active, onPick }: { scene: SceneDef; active: boolean; onPick: () => void }) {
    const catalog=useImageUrl(scene.preview || 'catalog');const cols=scene.preview==='v2cat'?5:scene.preview==='curated'?3:8,rows=scene.preview==='v2cat'?4:scene.preview==='curated'?3:13;
    return <button type="button" className={`ft-bgswatch ft-bgswatch-named ${active ? 'is-active' : ''}`} aria-label={`${scene.name} animated scene`} onClick={onPick}>
        {posterSrc(scene) ? <img className="ft-bgswatch-img" src={posterSrc(scene)} alt="" loading="lazy" decoding="async" /> : scene.tile != null ? <span className="ft-bgswatch-img" style={{backgroundImage: catalog ? `url(${catalog})` : undefined, backgroundSize:`${cols*100}% ${rows*100}%`,backgroundPosition: `${(scene.tile % cols)*100/(cols-1)}% ${Math.floor(scene.tile/cols)*100/(rows-1)}%`}} /> : <img className="ft-bgswatch-img" src={scenePoster(scene, 'p')} alt="" loading="lazy" decoding="async" />}
        <span className="ft-bgswatch-name">{scene.name}</span>
    </button>;
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

// ---------- color wheel: any solid background color ----------
const ColorWheel = React.memo(function ColorWheel({ color, onChange }: { color: string; onChange: (hex: string) => void }) {
    const SIZE = 168;
    const canvasRef = useRef<HTMLCanvasElement | null>(null);
    const valid = /^#[0-9a-f]{6}$/i.test(color) ? color : '#101418';
    const hsl = hexToHsl(valid);
    const [light, setLight] = useState(hsl.l);
    useEffect(() => { setLight(hexToHsl(/^#[0-9a-f]{6}$/i.test(color) ? color : '#101418').l); }, [color]);
    useEffect(() => {
        const ctx = canvasRef.current?.getContext('2d');
        if (!ctx) return;
        const img = ctx.createImageData(SIZE, SIZE);
        const d = img.data;
        const half = SIZE / 2;
        for (let y = 0; y < SIZE; y++) {
            for (let x = 0; x < SIZE; x++) {
                const dx = x - half + 0.5, dy = y - half + 0.5;
                const r = Math.sqrt(dx * dx + dy * dy) / half;
                const i = (y * SIZE + x) * 4;
                if (r > 1) { d[i + 3] = 0; continue; }
                const h = ((Math.atan2(dy, dx) * 180 / Math.PI) + 360) % 360;
                const hex = hslToHex(h, r, light);
                d[i] = parseInt(hex.slice(1, 3), 16);
                d[i + 1] = parseInt(hex.slice(3, 5), 16);
                d[i + 2] = parseInt(hex.slice(5, 7), 16);
                d[i + 3] = 255;
            }
        }
        ctx.putImageData(img, 0, 0);
    }, [light]);
    const pick = (e: React.PointerEvent) => {
        const rect = canvasRef.current?.getBoundingClientRect();
        if (!rect) return;
        const dx = e.clientX - rect.left - rect.width / 2;
        const dy = e.clientY - rect.top - rect.height / 2;
        const r = Math.min(1, Math.sqrt(dx * dx + dy * dy) / (rect.width / 2));
        const h = ((Math.atan2(dy, dx) * 180 / Math.PI) + 360) % 360;
        onChange(hslToHex(h, r, light));
    };
    const ang = hsl.h * Math.PI / 180;
    const rad = hsl.s * (SIZE / 2);
    return <div className="ft-wheelwrap">
        <span className="ft-wheelbox">
            <canvas ref={canvasRef} width={SIZE} height={SIZE} className="ft-wheel" aria-label="Color wheel: drag to pick a background color"
                onPointerDown={(e) => { (e.target as HTMLElement).setPointerCapture(e.pointerId); pick(e); }}
                onPointerMove={(e) => { if (e.buttons & 1) pick(e); }} />
            <span className="ft-wheel-dot" style={{ left: SIZE / 2 + Math.cos(ang) * rad, top: SIZE / 2 + Math.sin(ang) * rad, background: valid }} />
        </span>
        <span className="ft-wheel-side">
            <span className="ft-wheel-preview" style={{ background: valid }}>{valid}</span>
            <input type="range" min={0.05} max={0.95} step={0.01} value={light} aria-label="Color lightness" onChange={(e) => { const l = parseFloat(e.target.value); setLight(l); onChange(hslToHex(hsl.h, hsl.s, l)); }} />
            <span className="ft-field-hint">Drag the wheel for hue, slide for lightness. Light colors are dimmed behind the timer so text stays readable.</span>
        </span>
    </div>;
});

// ---------- saved link backgrounds ----------
interface SavedLink { id: string; source: string; kind: 'image' | 'video'; thumb?: string; addedAt: number }
function linkThumbUrl(l: SavedLink): string {
    if (l.kind !== 'image' || !l.thumb) return '';
    return `https://images.weserv.nl/?url=${encodeURIComponent(l.thumb.replace(/^https?:\/\//, ''))}&w=200&h=200&fit=cover&q=70`;
}
function linkLabel(source: string): string {
    try {
        const u = new URL(source);
        if (/pinterest\./i.test(u.host)) return 'Pinterest pin';
        const file = decodeURIComponent(u.pathname.split('/').pop() || '');
        return file.length > 4 && /\.(jpe?g|png|gif|webp|avif|mp4|webm|mov|m4v)/i.test(file) ? file.slice(0, 26) : u.host.replace(/^www\./, '');
    } catch { return 'Saved link'; }
}
const LinkSwatch = React.memo(function LinkSwatch({ link, active, onPick, onRemove }: { link: SavedLink; active: boolean; onPick: () => void; onRemove: () => void }) {
    const thumb = linkThumbUrl(link);
    return <span className={`ft-bgswatch ft-bgswatch-named ft-linksw ${active ? 'is-active' : ''}`}>
        <button type="button" className="ft-linksw-pick" aria-label={`Use saved background ${linkLabel(link.source)}`} onClick={onPick}>
            {link.kind === 'video'
                ? <video className="ft-bgswatch-img" src={link.source} muted playsInline preload="metadata" />
                : thumb ? <img className="ft-bgswatch-img" src={thumb} alt="" loading="lazy" decoding="async" /> : null}
            <span className="ft-bgswatch-name">{linkLabel(link.source)}</span>
        </button>
        <button type="button" className="ft-linksw-del" aria-label={`Remove saved background ${linkLabel(link.source)}`} onClick={onRemove}>×</button>
    </span>;
});

// ---------- mini music player: built-in focus radio or the user's Spotify embed ----------
const MusicPlayer = React.memo(function MusicPlayer({ settings, patch, spotifySrc, onOpenSettings }: {
    settings: Settings; patch: (part: Partial<Settings>) => void; spotifySrc: string | null; onOpenSettings: () => void;
}) {
    const mode = settings.musicMode === 'spotify' ? 'spotify' : 'radio';
    const radio = settings.radio && typeof settings.radio.index === 'number' ? settings.radio : { index: 0, playing: false, volume: 0.7 };
    const track = RADIO_TRACKS[Math.min(Math.max(0, radio.index), RADIO_TRACKS.length - 1)] || RADIO_TRACKS[0];
    const radioRef = useRef(radio);
    radioRef.current = radio;
    const modeRef = useRef(mode);
    modeRef.current = mode;
    const audioRef = useRef<HTMLAudioElement | null>(null);
    const [elapsed, setElapsed] = useState(0);
    const [status, setStatus] = useState('');
    const errCountRef = useRef(0);
    const [minimized, setMinimized] = useState(false);

    // position (drag), persisted on this device
    const boxRef = useRef<HTMLDivElement | null>(null);
    const [pos, setPos] = useState<{ x: number; y: number } | null>(() => {
        try {
            const raw = window.localStorage.getItem('sft:ft-player-pos.v1');
            if (raw) { const p = JSON.parse(raw); if (p && typeof p.x === 'number' && typeof p.y === 'number') return p; }
        } catch { /* ignore */ }
        return null;
    });
    const dragRef = useRef<{ dx: number; dy: number } | null>(null);
    const clampPos = (x: number, y: number) => {
        const el = boxRef.current;
        const w = el ? el.offsetWidth : 320, h = el ? el.offsetHeight : 180;
        return { x: Math.max(4, Math.min(Math.max(4, window.innerWidth - w - 4), x)), y: Math.max(4, Math.min(Math.max(4, window.innerHeight - h - 4), y)) };
    };
    const onDragStart = (e: React.PointerEvent) => {
        const rect = boxRef.current?.getBoundingClientRect();
        if (!rect) return;
        dragRef.current = { dx: e.clientX - rect.left, dy: e.clientY - rect.top };
        (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
    };
    const onDragMove = (e: React.PointerEvent) => {
        if (!dragRef.current) return;
        setPos(clampPos(e.clientX - dragRef.current.dx, e.clientY - dragRef.current.dy));
    };
    const onDragEnd = () => {
        if (!dragRef.current) return;
        dragRef.current = null;
        setPos((p) => {
            if (!p) return p;
            const c = clampPos(p.x, p.y);
            try { window.localStorage.setItem('sft:ft-player-pos.v1', JSON.stringify(c)); } catch { /* ignore */ }
            return c;
        });
    };
    useEffect(() => {
        const onResize = () => setPos((p) => (p ? clampPos(p.x, p.y) : p));
        window.addEventListener('resize', onResize);
        return () => window.removeEventListener('resize', onResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // ----- radio engine: one audio element, tracks advance in order and loop -----
    useEffect(() => {
        const a = new Audio();
        a.preload = 'none'; // no track bytes are fetched until the user actually plays the radio
        audioRef.current = a;
        const onTime = () => { const t = a.currentTime || 0; setElapsed((prev) => (Math.floor(prev) === Math.floor(t) ? prev : t)); };
        const onEnded = () => { errCountRef.current = 0; setStatus(''); patch({ radio: { ...radioRef.current, index: (radioRef.current.index + 1) % RADIO_TRACKS.length, playing: true } }); };
        const onErr = () => {
            if (!audioRef.current || audioRef.current.dataset.track !== track.id) return;
            errCountRef.current += 1;
            if (errCountRef.current >= RADIO_TRACKS.length) {
                setStatus('Radio tracks cannot load on this connection right now.');
                patch({ radio: { ...radioRef.current, playing: false } });
            } else {
                setStatus('That track could not load - skipped it.');
                patch({ radio: { ...radioRef.current, index: (radioRef.current.index + 1) % RADIO_TRACKS.length, playing: true } });
            }
        };
        a.addEventListener('timeupdate', onTime);
        a.addEventListener('ended', onEnded);
        a.addEventListener('error', onErr);
        return () => { a.pause(); a.removeEventListener('timeupdate', onTime); a.removeEventListener('ended', onEnded); a.removeEventListener('error', onErr); audioRef.current = null; };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // load the selected track - lazily, only once the radio has actually been played
    useEffect(() => {
        const a = audioRef.current;
        if (!a) return;
        const wanted = mode === 'radio' && radio.playing;
        if (a.dataset.track !== track.id && (wanted || a.dataset.track)) {
            a.dataset.track = track.id;
            a.src = track.url;
            a.preload = 'auto';
            errCountRef.current = 0;
            setElapsed(0);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [track.id, mode, radio.playing]);
    // play / pause / volume
    useEffect(() => {
        const a = audioRef.current;
        if (!a) return;
        a.volume = radio.volume;
        if (mode === 'radio' && radio.playing) a.play().catch(() => { /* blocked until the first tap; the pointerdown listener retries */ });
        else a.pause();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode, radio.playing, radio.volume, track.id]);
    // browsers block audio autoplay after a reload: resume on the first real gesture
    useEffect(() => {
        const resume = () => { const a = audioRef.current; if (a && modeRef.current === 'radio' && radioRef.current.playing && a.paused) a.play().catch(() => { /* still blocked */ }); };
        window.addEventListener('pointerdown', resume);
        return () => window.removeEventListener('pointerdown', resume);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    // the radio never plays under the Spotify player
    useEffect(() => {
        if (mode === 'spotify' && radioRef.current.playing) patch({ radio: { ...radioRef.current, playing: false } });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [mode]);

    const seek = (e: React.MouseEvent<HTMLSpanElement>) => {
        const a = audioRef.current;
        if (!a) return;
        const rect = e.currentTarget.getBoundingClientRect();
        const ratio = Math.min(1, Math.max(0, (e.clientX - rect.left) / rect.width));
        const total = Number.isFinite(a.duration) && a.duration > 0 ? a.duration : track.seconds;
        a.currentTime = ratio * total;
        setElapsed(a.currentTime);
    };
    const dur = track.seconds;
    const pct = dur > 0 ? Math.min(100, (elapsed / dur) * 100) : 0;
    const grip = 'M9 6h.01|M15 6h.01|M9 12h.01|M15 12h.01|M9 18h.01|M15 18h.01';

    return <div ref={boxRef} className={`ft-player ${minimized ? 'is-mini' : ''}`} style={pos ? { left: pos.x, top: pos.y, right: 'auto', bottom: 'auto' } : undefined} data-testid="music-player">
        <span className="ft-player-head" title="Drag to move" onPointerDown={onDragStart} onPointerMove={onDragMove} onPointerUp={onDragEnd} onPointerCancel={onDragEnd}>
            <SvgIcon d={grip} />
            <span className="ft-player-mode">
                <button type="button" className={`ft-player-modebtn ${mode === 'radio' ? 'is-active' : ''}`} onPointerDown={(e) => e.stopPropagation()} onClick={() => patch({ musicMode: 'radio' })}>Focus radio</button>
                <button type="button" className={`ft-player-modebtn ${mode === 'spotify' ? 'is-active' : ''}`} onPointerDown={(e) => e.stopPropagation()} onClick={() => patch({ musicMode: 'spotify' })}>Spotify</button>
            </span>
            <button type="button" className="ft-player-x" aria-label={minimized ? 'Expand player' : 'Minimize player'} onPointerDown={(e) => e.stopPropagation()} onClick={() => setMinimized((m) => !m)}>{minimized ? '❐' : '–'}</button>
            <button type="button" className="ft-player-x" aria-label="Hide player" onPointerDown={(e) => e.stopPropagation()} onClick={() => patch({ musicOpen: false })}>×</button>
        </span>
        {minimized ? <div className="ft-player-minrow">
            {mode === 'radio' ? <>
                <button type="button" className="ft-player-play is-small" aria-label={radio.playing ? 'Pause radio' : 'Play radio'} onClick={() => patch({ radio: { ...radio, playing: !radio.playing } })}>{radio.playing ? '❚❚' : '▶'}</button>
                <span className="ft-player-mintitle">{track.title}</span>
            </> : <span className="ft-player-mintitle">Spotify player</span>}
        </div> : null}
        {/* The body stays mounted while minimized (hidden with CSS) so minimizing never stops the music or reloads the Spotify player. */}
        {mode === 'radio' ? <div className="ft-player-body">
            <span className="ft-player-row">
                <img className="ft-player-cover" src={track.cover} alt="" loading="lazy" decoding="async" />
                <span className="ft-player-meta">
                    <span className="ft-player-title">{track.title}</span>
                    <span className="ft-player-artist">{track.artist} · instrumental lofi</span>
                    <span className="ft-player-bar" onClick={seek} role="slider" aria-label="Track progress" aria-valuemin={0} aria-valuemax={dur} aria-valuenow={Math.round(elapsed)}>
                        <span style={{ width: `${pct}%` }} />
                    </span>
                    <span className="ft-player-times">{fmt(elapsed * 1000)} / {fmt(dur * 1000)}</span>
                </span>
            </span>
            <span className="ft-player-controls">
                <button type="button" className="ft-player-btn" aria-label="Previous track" onClick={() => patch({ radio: { ...radio, index: (radio.index - 1 + RADIO_TRACKS.length) % RADIO_TRACKS.length, playing: true } })}>⏮</button>
                <button type="button" className="ft-player-play" aria-label={radio.playing ? 'Pause' : 'Play'} onClick={() => patch({ radio: { ...radio, playing: !radio.playing } })}>{radio.playing ? '❚❚' : '▶'}</button>
                <button type="button" className="ft-player-btn" aria-label="Next track" onClick={() => patch({ radio: { ...radio, index: (radio.index + 1) % RADIO_TRACKS.length, playing: true } })}>⏭</button>
                <input type="range" className="ft-player-vol" min={0} max={1} step={0.05} value={radio.volume} aria-label="Radio volume" onChange={(e) => patch({ radio: { ...radio, volume: parseFloat(e.target.value) } })} />
            </span>
            {status ? <span className="ft-player-status">{status}</span> : null}
        </div> : <div className="ft-player-body">
            {spotifySrc
                ? <iframe className="ft-player-iframe" src={spotifySrc} width="100%" height="152" frameBorder="0" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy" title="Spotify player" />
                : <span className="ft-player-status">Pick a Spotify playlist or paste a Spotify link in Settings. <button type="button" className="ft-ghost is-compact" onClick={onOpenSettings}>Open settings</button></span>}
        </div>}
    </div>;
});

const TopBar = React.memo(function TopBar({ chip, panel, fullscreenSupported, onFullscreen, onTasks, onSettings, onMinimize, onPopout, onProfile }: {
    chip: string | null; panel: 'none' | 'tasks' | 'settings' | 'profile'; fullscreenSupported: boolean;
    onFullscreen: () => void; onTasks: () => void; onSettings: () => void; onMinimize: () => void; onPopout: () => void; onProfile: () => void;
}) {
    return <header className="ft-topbar">
        <span className="ft-brand">Study focus</span>
        {chip ? <span className="ft-chip" title="Today's completed focus time">{chip}</span> : null}
        <span className="ft-topbar-actions">
            {fullscreenSupported ? <button type="button" className="ft-iconbtn" aria-label="Fullscreen" onClick={onFullscreen}><SvgIcon d={ICON_FULLSCREEN} /></button> : null}
            <button type="button" className="ft-iconbtn" aria-label="Open timer in its own window" title="Open timer in its own window" onClick={onPopout}><SvgIcon d={ICON_POPOUT} /></button>
            <button type="button" className="ft-iconbtn" aria-label="Minimize to a small timer" title="Minimize to a small timer" onClick={onMinimize}><SvgIcon d={ICON_MINIMIZE} /></button>
            <button type="button" className={`ft-iconbtn ${panel === 'profile' ? 'is-active' : ''}`} aria-label="Profile and progress" title="Profile and progress" onClick={onProfile}><SvgIcon d={'M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9|M4 21c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5'} /></button>
            <button type="button" className={`ft-iconbtn ${panel === 'tasks' ? 'is-active' : ''}`} aria-label="Tasks" onClick={onTasks}><SvgIcon d={ICON_TASKS} /></button>
            <button type="button" className={`ft-iconbtn ${panel === 'settings' ? 'is-active' : ''}`} aria-label="Settings" onClick={onSettings}><SvgIcon d={ICON_SETTINGS} /></button>
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
        <div className="ft-sheet-head"><h2>Tasks</h2><button type="button" className="ft-sheet-close" aria-label="Close tasks" onClick={onClose}><SvgIcon d={ICON_CLOSE} /></button></div>
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
                <button type="button" className="ft-taskcheck" aria-label={t.completed ? 'Mark not done' : 'Mark done'} onClick={() => { if (!t.completed) recordTaskCompletion(t.id); setTasksState((prev) => ({ ...prev, tasks: prev.tasks.map((x) => x.id === t.id ? { ...x, completed: !x.completed } : x) })); }}>{t.completed ? '✓' : ''}</button>
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

// Compact mirror rendered inside a ?popout=1 window: shows and controls the main tab's timer
// over BroadcastChannel, so a second window never runs its own clock.
function PopoutMirror() {
    const [st, setSt] = useState<{ phase: Phase; remaining: number; running: boolean; dur: number; accent: string; at: number } | null>(null);
    const [, forceTick] = useState(0);
    const bcRef = useRef<BroadcastChannel | null>(null);
    useEffect(() => {
        const bc = new BroadcastChannel('sft-sync');
        bcRef.current = bc;
        bc.onmessage = (e) => { if (e.data?.t === 'state') setSt(e.data); };
        const iv = window.setInterval(() => forceTick((n) => n + 1), 500);
        return () => { window.clearInterval(iv); bc.close(); };
    }, []);
    const cmd = (c: string) => bcRef.current?.postMessage({ t: 'cmd', cmd: c });
    // smooth the 1s broadcasts into a live countdown
    let shown = st ? st.remaining : 0;
    if (st?.running) shown = Math.max(0, st.remaining - (Date.now() - st.at));
    const stale = !st || Date.now() - st.at > 4000;
    const pct = st && st.dur > 0 ? Math.round((1 - shown / st.dur) * 100) : 0;
    return <div className="ft-popout" style={{ ['--ft-accent' as string]: st?.accent || '#9fd8c6' } as React.CSSProperties}>
        <div className="ft-popout-phase">{st ? PHASE_LABEL[st.phase] : 'Study focus'}</div>
        <div className="ft-popout-time">{st ? fmt(shown) : '--:--'}</div>
        <div className="ft-popout-bar" aria-hidden="true"><span style={{ width: `${pct}%` }} /></div>
        <div className="ft-popout-btns">
            <button type="button" className="ft-primary is-compact" onClick={() => cmd('toggle')}>{st?.running ? 'Pause' : 'Start'}</button>
            <button type="button" className="ft-ghost is-compact" onClick={() => cmd('reset')}>Reset</button>
            <button type="button" className="ft-ghost is-compact" onClick={() => cmd('skip')}>Skip</button>
        </div>
        {stale ? <p className="ft-popout-note">Open the study timer in another tab to control it from here.</p> : null}
    </div>;
}

const SettingsSheet = React.memo(function SettingsSheet({ settings, patch, bgStatus, soundStatus, lastBgSrcRef, lastSndSrcRef, resolveLinkBg, resolveCustomSound, uploadBg, uploadSound, previewAlarm, requestNotifications, notificationsSupported, wakeLockSupported, onResetSettings, savedMessage, onClose, savedLinks, onSaveLink, onRemoveLink }: {
    settings: Settings; patch: (part: Partial<Settings>) => void;
    bgStatus: string; soundStatus: string;
    lastBgSrcRef: React.MutableRefObject<string>; lastSndSrcRef: React.MutableRefObject<string>;
    resolveLinkBg: (source: string) => Promise<false | { kind: 'image' | 'video'; finalUrl: string }>; resolveCustomSound: (source: string) => Promise<boolean>;
    uploadBg: (file: File | undefined) => void; uploadSound: (file: File | undefined) => void;
    previewAlarm: (id: string) => void; requestNotifications: (on: boolean) => void;
    notificationsSupported: boolean; wakeLockSupported: boolean;
    onResetSettings: () => void; savedMessage: string; onClose: () => void;
    savedLinks: SavedLink[]; onSaveLink: (l: SavedLink) => void; onRemoveLink: (id: string) => void;
}) {
    const [bgInput, setBgInput] = useState('');
    const [soundInput, setSoundInput] = useState('');
    const [spInput, setSpInput] = useState('');
    const [spStatus, setSpStatus] = useState('');
    const bg = settings.background;

    const applyBgLink = () => {
        const source = bgInput.trim();
        if (!source) return;
        void resolveLinkBg(source).then((info) => {
            if (info) {
                lastBgSrcRef.current = source;
                patch({ background: { kind: 'link', source } });
                if (!savedLinks.some((l) => l.source === source)) onSaveLink({ id: `l${Date.now()}`, source, kind: info.kind, thumb: info.kind === 'image' ? info.finalUrl : undefined, addedAt: Date.now() });
                setBgInput('');
            }
        });
    };
    const pickLink = (l: SavedLink) => {
        if (bg.kind === 'link' && bg.source === l.source) return;
        void resolveLinkBg(l.source).then((info) => { if (info) { lastBgSrcRef.current = l.source; patch({ background: { kind: 'link', source: l.source } }); } });
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
        <div className="ft-sheet-head"><h2>Settings</h2><button type="button" className="ft-sheet-close" aria-label="Close settings" onClick={onClose}><SvgIcon d={ICON_CLOSE} /></button></div>

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
            <Toggle label="Clock-only mode" hint="Hides the mode tabs and buttons so only the clock shows. Drag the clock anywhere and resize it from its corner handle; use the round button under it to bring the controls back." checked={settings.clockOnly === true} onChange={(v) => patch({ clockOnly: v })} />
            <Toggle label="Cycle dots" checked={settings.showDots} onChange={(v) => patch({ showDots: v })} />
            <Toggle label="Today's stats chip" checked={settings.showChip} onChange={(v) => patch({ showChip: v })} />
            <Toggle label="Shortcut hints" checked={settings.showHint} onChange={(v) => patch({ showHint: v })} />
        </section>

        <section>
            <h3>Music</h3>
            <div className="ft-chips">
                <button type="button" className={`ft-chipbtn ${settings.musicMode !== 'spotify' ? 'is-active' : ''}`} onClick={() => patch({ musicMode: 'radio', musicOpen: true })}>Focus radio</button>
                <button type="button" className={`ft-chipbtn ${settings.musicMode === 'spotify' ? 'is-active' : ''}`} onClick={() => patch({ musicMode: 'spotify', musicOpen: true })}>Spotify</button>
            </div>
            <span className="ft-field-hint">Focus radio is built-in instrumental lofi that streams from Pixabay (free license, no account needed). The mini player floats on the page - drag it anywhere by its top bar. It shows the current track and its cover live. The tracks are instrumentals, so there are no lyrics to display.</span>
            <Toggle label="Show mini player" checked={settings.musicOpen !== false} onChange={(v) => patch({ musicOpen: v })} />
            <h4 className="ft-subhead">Spotify playlists</h4>
            <div className="ft-chips">
                {SPOTIFY_PRESETS.map((p) => <button key={p.id} type="button" className={`ft-chipbtn ${settings.spotify === p.id ? 'is-active' : ''}`} onClick={() => { setSpStatus(''); patch({ spotify: p.id, spotifyOpen: true, musicMode: 'spotify', musicOpen: true }); }}>{p.name}</button>)}
            </div>
            <div className="ft-field is-stacked">
                <span className="ft-field-label">Any Spotify link</span>
                <span className="ft-field-hint">Paste an open.spotify.com playlist, album, track or podcast link (in Spotify: Share - Copy link). Music plays in Spotify's official player inside the mini player, with the album art shown by Spotify; this is not account sync. Spotify decides what plays: usually full songs when you sign in to Spotify inside the player, 30-second previews when signed out; podcast episodes usually play in full. Live lyrics are not possible here: Spotify only shares the current song with connected apps, not with an embedded player.</span>
                <span className="ft-inrow">
                    <input className="ft-textinput" value={spInput} placeholder="https://open.spotify.com/playlist/…" onChange={(e) => setSpInput(e.target.value)} inputMode="url" />
                    <button type="button" className="ft-ghost is-compact" onClick={applySpotify}>Use link</button>
                </span>
                {settings.spotify ? <span className="ft-inrow">
                    <button type="button" className="ft-ghost is-compact" onClick={() => patch({ musicMode: 'spotify', musicOpen: true })}>Show player</button>
                    <button type="button" className="ft-ghost is-compact" onClick={() => patch({ spotify: null, spotifyOpen: false, musicMode: 'radio' })}>Remove player</button>
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
            <h4 className="ft-subhead">Scenes</h4>
            <div className="ft-bggrid">
                {SCENES.map((s) => <SceneSwatch key={s.id} scene={s} active={bg.kind === 'scene' && bg.id === s.id} onPick={() => patch({ background: { kind: 'scene', id: s.id } })} />)}
            </div>
            <p className="ft-field-hint">Scenes fill the whole screen. Illustrated scenes are drawn to loop seamlessly; photographed scenes crossfade briefly over their loop point. Videos stream directly from Pixabay only when chosen. While a scene loads, your previous background stays on screen (a still photo on your first visit); a scene that cannot load keeps it rather than going black or swapping to something else.</p>
            <Toggle label="Animate backgrounds" hint="Motion starts by itself. Turn off to pause motion and save battery." checked={settings.bgAnimate !== false} onChange={(v) => patch({ bgAnimate: v })} />
            <h4 className="ft-subhead">Photos</h4>
            <div className="ft-bggrid">
                {BUILTIN_BGS.map((b) => <BgSwatch key={b.id} id={b.id} name={b.name} active={bg.kind === 'builtin' && bg.id === b.id} onPick={() => patch({ background: { kind: 'builtin', id: b.id } })} />)}
            </div>
            <h4 className="ft-subhead">Solid color</h4>
            <div className="ft-bggrid">
                {SOLID_COLORS.map((c) => <button key={c.id} type="button" className={`ft-bgswatch ${bg.kind === 'color' && (bg.id || '').toLowerCase() === c.id ? 'is-active' : ''}`} style={{ background: c.id }} aria-label={`${c.name} background color`} onClick={() => patch({ background: { kind: 'color', id: c.id } })} />)}
            </div>
            <ColorWheel color={bg.kind === 'color' && bg.id ? bg.id : '#101418'} onChange={(hex) => patch({ background: { kind: 'color', id: hex } })} />
            <div className="ft-field is-stacked">
                <span className="ft-field-label">Pinterest, image or video link</span>
                <span className="ft-field-hint">Paste a full public Pinterest pin link (pinterest.com/pin/…), a direct image link (JPG, PNG, GIF) or a direct video link (mp4, webm). Anything you add is fitted to fill the screen, cropped to match its own shape, never stretched. Every link you add is saved under My saved backgrounds below and reloads each visit - paste once, keep forever. When a direct image load is blocked, the link you paste is fetched through a public image relay (weserv.nl), so never use private boards or private URLs.</span>
                <span className="ft-inrow">
                    <input className="ft-textinput" value={bgInput} placeholder="https://www.pinterest.com/pin/…" onChange={(e) => setBgInput(e.target.value)} inputMode="url" />
                    <button type="button" className="ft-ghost is-compact" onClick={applyBgLink}>Use link</button>
                </span>
                {savedLinks.length ? <>
                    <h4 className="ft-subhead">My saved backgrounds</h4>
                    <div className="ft-bggrid">
                        {savedLinks.map((l) => <LinkSwatch key={l.id} link={l} active={bg.kind === 'link' && bg.source === l.source} onPick={() => pickLink(l)} onRemove={() => onRemoveLink(l.id)} />)}
                    </div>
                    <span className="ft-field-hint">Tap one to use it again, × to forget it. Saved on this device.</span>
                </> : null}
                <span className="ft-inrow">
                    <label className="ft-ghost is-compact ft-filebtn">Upload image or video<input type="file" accept="image/*,video/*" aria-label="Upload background image or video file" className="ft-fileinput" onChange={(e) => uploadBg(e.target.files?.[0])} /></label>
                    <span className="ft-field-hint">Lasts until the tab reloads.</span>
                </span>
                {bgStatus ? <span className="ft-field-hint">{bgStatus}</span> : null}
            </div>
            <div className="ft-field is-stacked"><span className="ft-field-label">Imported image or video fit</span><span className="ft-inrow"><button type="button" className={`ft-chipbtn ${settings.customFit !== 'contain' ? 'is-active' : ''}`} onClick={()=>patch({customFit:'cover'})}>Crop to fill</button><button type="button" className={`ft-chipbtn ${settings.customFit === 'contain' ? 'is-active' : ''}`} onClick={()=>patch({customFit:'contain'})}>Show whole image</button></span><span className="ft-field-hint">Crop fills the screen. Show whole image preserves the full composition with plain dark space where needed. No blur-fill or stretching.</span></div>
            <Toggle label="Sharpen imported images" hint="A local sharpen filter for images you paste or upload - it cannot add detail a small original never had. Runs on your device only; images never leave this browser." checked={settings.enhance !== false} onChange={(v) => patch({ enhance: v })} />
            <div className="ft-field">
                <span className="ft-field-label">Darken background</span>
                <input type="range" min={0.15} max={0.85} step={0.05} value={settings.scrim} aria-label="Background darkness" onChange={(e) => patch({ scrim: parseFloat(e.target.value) })} />
            </div>
        </section>

        <div className="ft-field">
            <span className="ft-field-label">Start over</span>
            <button type="button" className="ft-ghost is-compact" onClick={onResetSettings}>Reset settings</button>
        </div>
        <p className="ft-field-hint">Your settings, saved backgrounds, tasks and stats stay in this browser. Link backgrounds and sounds are fetched from the sites you paste, through the weserv.nl image relay when a direct load is blocked; Spotify playback happens inside Spotify's official player; selected catalog videos and focus-radio tracks stream from Pixabay's CDN. {savedMessage}</p>
    </aside>;
});

export function App() {
    // A window opened with ?popout=1 is a remote display for the main tab, not a second timer.
    if (typeof window !== 'undefined' && /[?&]popout=1/.test(window.location.search)) return <PopoutMirror />;
    return <MainApp />;
}

function MainApp() {
    const [settings, setSettings, settingsSaved] = useLocalState<Settings>('ft-settings.v2', DEFAULT_SETTINGS);
    // Clock-only mode: free position + scale of the clock, persisted so it survives reloads.
    const [clockFree, setClockFree] = useLocalState<{ x: number; y: number; s: number } | null>('ft-clockfree.v1', null);
    const clockCenterRef = useRef<HTMLDivElement | null>(null);
    const clockDragRef = useRef<{ mode: 'move' | 'resize'; id: number; sx: number; sy: number; ox: number; oy: number; ss: number } | null>(null);
    const startClockGesture = useCallback((mode: 'move' | 'resize') => (e: React.PointerEvent) => {
        const el = clockCenterRef.current; if (!el) return;
        const rect = el.getBoundingClientRect();
        setClockFree((prev) => {
            const cur = prev || { x: rect.left, y: rect.top, s: 1 };
            clockDragRef.current = { mode, id: e.pointerId, sx: e.clientX, sy: e.clientY, ox: cur.x, oy: cur.y, ss: cur.s };
            return cur;
        });
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        e.preventDefault();
    }, [setClockFree]);
    const onClockPointerMove = useCallback((e: React.PointerEvent) => {
        const d = clockDragRef.current; if (!d || d.id !== e.pointerId) return;
        if (d.mode === 'move') {
            setClockFree((prev) => prev ? { ...prev, x: Math.min(Math.max(d.ox + e.clientX - d.sx, -40), window.innerWidth - 60), y: Math.min(Math.max(d.oy + e.clientY - d.sy, 0), window.innerHeight - 60) } : prev);
        } else {
            const el = clockCenterRef.current; if (!el) return;
            const rect = el.getBoundingClientRect();
            const cx = rect.left + rect.width / 2, cy = rect.top + rect.height / 2;
            const d0 = Math.max(30, Math.hypot(d.sx - cx, d.sy - cy));
            const d1 = Math.hypot(e.clientX - cx, e.clientY - cy);
            setClockFree((prev) => prev ? { ...prev, s: Math.min(2.6, Math.max(0.45, d.ss * (d1 / d0))) } : prev);
        }
    }, [setClockFree]);
    const onClockPointerEnd = useCallback((e: React.PointerEvent) => {
        if (clockDragRef.current && clockDragRef.current.id === e.pointerId) clockDragRef.current = null;
    }, []);
    const [tasksState, setTasksState, tasksSaved] = useLocalState<TasksState>('ft-tasks.v1', { tasks: [], activeId: null });
    const [stats, setStats, statsSaved] = useLocalState<StatsState>('ft-stats.v1', { days: {} });
    const [session, setSession, sessionSaved] = useLocalState<{ phase: Phase; running: boolean; endAt: number; remainingMs: number; cycleCount: number } | null>('ft-session.v1', null);
    const [savedLinks, setSavedLinks] = useLocalState<SavedLink[]>('ft-links.v1', []);
    const saveLink = useCallback((l: SavedLink) => setSavedLinks((prev) => [l, ...prev.filter((x) => x.source !== l.source)].slice(0, 24)), [setSavedLinks]);
    const removeLink = useCallback((id: string) => setSavedLinks((prev) => prev.filter((x) => x.id !== id)), [setSavedLinks]);

    const durations = useMemo(() => ({ focus: settings.focusMin * 60000, short: settings.shortMin * 60000, long: settings.longMin * 60000 }), [settings.focusMin, settings.shortMin, settings.longMin]);

    const [phase, setPhase] = useState<Phase>('focus');
    const [running, setRunning] = useState(false);
    const [remaining, setRemaining] = useState(durations.focus);
    const [cycleCount, setCycleCount] = useState(0);
    const [panel, setPanel] = useState<'none' | 'tasks' | 'settings' | 'profile'>('none');
    const [compact, setCompact] = useState(false);
    const endAtRef = useRef(0);
    const runningRef = useRef(false);
    runningRef.current = running;
    const phaseRef = useRef(phase);
    phaseRef.current = phase;
    const remainingRef = useRef(remaining);
    remainingRef.current = remaining;
    const settingsRef = useRef(settings.accent);
    settingsRef.current = settings.accent;

    // resolved custom media (object URLs, session-scoped)
    const [linkBg, setLinkBg] = useState<BgMedia | null>(null);
    const [uploadBgMedia, setUploadBgMedia] = useState<BgMedia | null>(null);
    const [builtinSrc, setBuiltinSrc] = useState<string | null>(null);
    const [bgStatus, setBgStatus] = useState('');
    const [customAudioUrl, setCustomAudioUrl] = useState<string | null>(null);
    const [soundStatus, setSoundStatus] = useState('');

    const customAudioRef = useRef<HTMLAudioElement | null>(null);
    const ambientStopRef = useRef<(() => void) | null>(null);
    const wakeLockRef = useRef<any>(null);

    // ---------- persistence of resolved link media (re-resolve on load) ----------
    const resolveLinkBg = useCallback(async (source: string): Promise<false | { kind: 'image' | 'video'; finalUrl: string }> => {
        setBgStatus('Loading background…');
        try {
            const trimmed = source.trim();
            // Direct video links play cross-origin in a <video> element without a fetch.
            if (/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(trimmed) && !/pin(it)?\./i.test(trimmed)) {
                setLinkBg((old) => { if (old && old.url.startsWith('blob:')) URL.revokeObjectURL(old.url); return { url: trimmed, kind: 'video' }; });
                setBgStatus('Background applied.');
                return { kind: 'video', finalUrl: trimmed };
            }
            const { blob, finalUrl } = await resolveImageSource(source);
            const kind: 'image' | 'video' = blob.type.startsWith('video/') ? 'video' : 'image';
            setLinkBg((old) => { if (old && old.url.startsWith('blob:')) URL.revokeObjectURL(old.url); return { url: URL.createObjectURL(blob), kind }; });
            setBgStatus('Background applied.');
            return { kind, finalUrl };
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
            patch({ background: { kind: 'color', id: '#101418' } });
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
        if (!settings.accent || !settings.font || !settings.clockStyle || !settings.clockSize || typeof settings.showDots !== 'boolean' || typeof settings.spotifyOpen !== 'boolean' || settings.spotify === undefined || typeof settings.bgAnimate !== 'boolean') {
            setSettings((prev) => ({ ...DEFAULT_SETTINGS, ...prev }));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settingsSaved.ready]);

    // The old gradient and CSS-animated backgrounds were removed; migrate saved picks once.
    useEffect(() => {
        if (!settingsSaved.ready) return;
        const b = settings.background as { kind: string; id?: string };
        if (b.kind === 'gradient') {
            const map: Record<string, string> = { dusk: '#3b2f4a', moss: '#0f2e25', ink: '#101418', dawn: '#4a2f3d' };
            patch({ background: { kind: 'color', id: map[b.id || ''] || '#101418' } });
        } else if (b.kind === 'animated') {
            patch({ background: { kind: 'builtin', id: 'rain' } });
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [settingsSaved.ready, settings.background]);

    // One-time: anyone who had a Spotify player configured lands on Spotify mode in the mini player.
    useEffect(() => {
        if (!settingsSaved.ready) return;
        try {
            if (settings.spotify && !window.localStorage.getItem('sft:ft-musicmig.v1')) {
                window.localStorage.setItem('sft:ft-musicmig.v1', '1');
                patch({ musicMode: 'spotify', musicOpen: settings.spotifyOpen !== false });
            }
        } catch { /* storage unavailable */ }
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
    const phaseStashRef = useRef<Partial<Record<Phase, number>>>({});
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
        delete phaseStashRef.current[finished];
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

    // keep display in sync when durations are edited while idle (phase switches preserve progress instead).
    // Only a real change in the minute values may reset the display: settings re-identity on load used to
    // re-fire this effect and wipe a restored paused timer back to the full duration after a reload.
    const prevDurationsRef = useRef(durations);
    useEffect(() => {
        const prev = prevDurationsRef.current;
        prevDurationsRef.current = durations;
        if (prev.focus === durations.focus && prev.short === durations.short && prev.long === durations.long) return;
        if (!runningRef.current) {
            delete phaseStashRef.current[phaseRef.current];
            setRemaining(durations[phaseRef.current]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [durations]);

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
    const startRef = useRef(() => {});
    const pauseRef = useRef(() => {});
    const resetFnRef = useRef(() => {});
    const start = useCallback(() => {
        audioCtx();
        if (customAudioRef.current) { try { customAudioRef.current.pause(); customAudioRef.current.currentTime = 0; } catch { /* ignore */ } }
        endAtRef.current = Date.now() + remainingRef.current;
        setRunning(true);
        persistSession({ phase: phaseRef.current, running: true, endAt: endAtRef.current, remainingMs: remainingRef.current, cycleCount });
    }, [persistSession, cycleCount]);
    const pause = useCallback(() => { setRunning(false); persistSession({ phase: phaseRef.current, running: false, remainingMs: remainingRef.current, cycleCount }); }, [persistSession, cycleCount]);
    const reset = useCallback(() => { delete phaseStashRef.current[phaseRef.current]; setRunning(false); setRemaining(durationsRef.current[phaseRef.current]); persistSession({ phase: phaseRef.current, running: false, remainingMs: durationsRef.current[phaseRef.current], cycleCount }); }, [persistSession, cycleCount]);
    const skip = useCallback(() => { completePhaseRef.current(true); }, []);
    startRef.current = start;
    pauseRef.current = pause;
    resetFnRef.current = reset;
    // Switching focus/short/long never wipes progress: the phase you leave keeps its remaining
    // time, and switching back resumes it. Reset, Skip or a finished session clear it.
    const switchPhase = useCallback((p: Phase) => {
        const cur = phaseRef.current;
        if (p === cur) return;
        const left = runningRef.current ? Math.max(0, endAtRef.current - Date.now()) : remainingRef.current;
        if (left > 0 && left < durationsRef.current[cur]) phaseStashRef.current[cur] = left;
        else delete phaseStashRef.current[cur];
        const saved = phaseStashRef.current[p];
        const nextRemaining = typeof saved === 'number' && saved > 0 ? Math.min(saved, durationsRef.current[p]) : durationsRef.current[p];
        setRunning(false);
        setPhase(p);
        setRemaining(nextRemaining);
        persistSession({ phase: p, running: false, remainingMs: nextRemaining, cycleCount });
    }, [persistSession, cycleCount]);
    const toggleFullscreen = useCallback(() => {
        if (document.fullscreenElement) void document.exitFullscreen().catch(() => { /* ignore */ });
        else void document.documentElement.requestFullscreen().catch(() => { /* blocked */ });
    }, []);

    // ---------- timer in its own window ----------
    // Chrome/Edge desktop: Document Picture-in-Picture gives a small always-on-top window with no
    // address bar or bookmarks, rendered straight from this tab (no second clock). Other browsers:
    // a plain popup window with minimal browser UI that mirrors this tab over BroadcastChannel.
    const [pipWin, setPipWin] = useState<Window | null>(null);
    const popOut = useCallback(() => {
        const dpi = (window as any).documentPictureInPicture;
        if (dpi?.requestWindow) {
            dpi.requestWindow({ width: 320, height: 200 }).then((w: Window) => {
                for (const ss of Array.from(document.styleSheets)) {
                    try {
                        const css = Array.from(ss.cssRules || []).map((r) => r.cssText).join('\n');
                        const st = w.document.createElement('style');
                        st.textContent = css;
                        w.document.head.appendChild(st);
                    } catch {
                        const href = (ss as CSSStyleSheet).href;
                        if (href) { const l = w.document.createElement('link'); l.rel = 'stylesheet'; l.href = href; w.document.head.appendChild(l); }
                    }
                }
                w.document.body.className = 'ft-pip-body';
                w.addEventListener('pagehide', () => setPipWin(null));
                setPipWin(w);
            }).catch(() => { /* user dismissed the picker */ });
            return;
        }
        window.open(`${window.location.pathname}?popout=1`, 'sft-popout', 'popup=yes,width=360,height=240');
    }, []);

    // Broadcast timer state for any ?popout=1 window; accept its commands. Runs once per tab.
    useEffect(() => {
        if (typeof BroadcastChannel === 'undefined') return;
        const bc = new BroadcastChannel('sft-sync');
        const send = () => bc.postMessage({ t: 'state', phase: phaseRef.current, remaining: remainingRef.current, running: runningRef.current, dur: durationsRef.current[phaseRef.current], accent: settingsRef.current, at: Date.now() });
        send();
        const iv = window.setInterval(send, 1000);
        bc.onmessage = (e) => {
            const m = e.data;
            if (m?.t !== 'cmd') return;
            if (m.cmd === 'toggle') { if (runningRef.current) pauseRef.current(); else startRef.current(); }
            else if (m.cmd === 'reset') resetFnRef.current();
            else if (m.cmd === 'skip') completePhaseRef.current(true);
        };
        return () => { window.clearInterval(iv); bc.close(); };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const minimize = useCallback(() => { setPanel('none'); setCompact(true); }, []);
    const showTasksPanel = panel === 'tasks';
    const showSettingsPanel = panel === 'settings';
    const toggleTasks = useCallback(() => setPanel((p) => (p === 'tasks' ? 'none' : 'tasks')), []);
    const toggleSettings = useCallback(() => setPanel((p) => (p === 'settings' ? 'none' : 'settings')), []);
    // Stable identity so the memoized MusicPlayer does not re-render on every timer tick.
    const openSettingsPanel = useCallback(() => setPanel('settings'), []);
    const toggleProfile = useCallback(() => setPanel((p) => (p === 'profile' ? 'none' : 'profile')), []);

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
        const isVideo = file.type.startsWith('video/');
        if (!isVideo && !file.type.startsWith('image/')) { setBgStatus('That file is not an image or video.'); return; }
        setUploadBgMedia((old) => { if (old) URL.revokeObjectURL(old.url); return { url: URL.createObjectURL(file), kind: isVideo ? 'video' : 'image' }; });
        patch({ background: { kind: 'upload' } });
        setBgStatus('Background applied for this visit. Use a link to keep it across visits.');
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
        <Background kind={bg.kind} id={bg.id} scrim={settings.scrim} builtinSrc={builtinSrc} linkBg={linkBg} uploadBg={uploadBgMedia} paused={compact} animate={settings.bgAnimate !== false} customFit={settings.customFit || 'cover'} enhance={settings.enhance !== false} />

        <TopBar chip={chip} panel={panel} fullscreenSupported={fullscreenSupported} onFullscreen={toggleFullscreen} onTasks={toggleTasks} onSettings={toggleSettings} onMinimize={minimize} onPopout={popOut} onProfile={toggleProfile} />

        <main ref={clockCenterRef} className={`ft-center ${settings.clockOnly === true ? 'is-clockonly' : ''}`}
            style={settings.clockOnly === true && clockFree ? { left: clockFree.x, top: clockFree.y, transform: `scale(${clockFree.s})`, transformOrigin: 'top left' } : undefined}
            onPointerMove={settings.clockOnly === true ? onClockPointerMove : undefined}
            onPointerUp={settings.clockOnly === true ? onClockPointerEnd : undefined}
            onPointerCancel={settings.clockOnly === true ? onClockPointerEnd : undefined}>
            {settings.clockOnly !== true ? <nav className="ft-modes" aria-label="Timer mode">
                {(['focus', 'short', 'long'] as Phase[]).map((p) => (
                    <button key={p} type="button" className={`ft-mode ${phase === p ? 'is-active' : ''}`} onClick={() => switchPhase(p)}>{PHASE_LABEL[p]}</button>
                ))}
            </nav> : null}
            {settings.clockOnly !== true && settings.showDots ? <div className="ft-dots" aria-label="Cycle progress">
                {Array.from({ length: Math.max(1, settings.longEvery) }).map((_, i) => <span key={i} className={`ft-dot ${i < cycleCount % Math.max(1, settings.longEvery) || (cycleCount > 0 && cycleCount % Math.max(1, settings.longEvery) === 0 && phase !== 'focus') ? 'is-done' : ''}`} />)}
            </div> : null}

            <div className={`ft-clock is-${settings.clockSize} ${settings.clockOnly === true ? 'is-free' : ''}`} role="timer" aria-live="off" aria-label={`${PHASE_LABEL[phase]} timer, ${fmt(remaining)} remaining`} onPointerDown={settings.clockOnly === true ? startClockGesture('move') : undefined} title={settings.clockOnly === true ? 'Drag to move' : undefined}>
                {settings.clockStyle === 'ring' ? <svg className="ft-ring" viewBox="0 0 260 260" aria-hidden="true">
                    <circle className="ft-ring-track" cx="130" cy="130" r={R} />
                    <circle className="ft-ring-fill" cx="130" cy="130" r={R} strokeDasharray={CIRC} strokeDashoffset={CIRC * (1 - progress)} />
                </svg> : null}
                <div className="ft-time-wrap">
                    <div className="ft-time">{fmt(remaining)}</div>
                    <div className="ft-taskline">{activeTask ? activeTask.title : phase === 'focus' ? 'Pick a task or just focus' : 'Rest up'}</div>
                </div>
            </div>
            {settings.clockOnly === true ? <div className="ft-clockonly-tools">
                <button type="button" className="ft-ghost is-compact ft-clockonly-exit" aria-label="Show timer controls" onPointerDown={(e) => e.stopPropagation()} onClick={() => patch({ clockOnly: false })}>Show controls</button>
                <button type="button" className="ft-clock-resize" aria-label="Drag to resize the clock" onPointerDown={startClockGesture('resize')}>⤡</button>
            </div> : null}
            {settings.clockStyle === 'bar' ? <div className="ft-progressbar" aria-hidden="true"><span style={{ width: `${Math.round(progress * 100)}%` }} /></div> : null}

            {settings.clockOnly !== true ? <div className="ft-controls">
                <button type="button" className="ft-primary" onClick={() => (running ? pause() : start())}>{running ? 'Pause' : remaining < durations[phase] ? 'Resume' : 'Start'}</button>
                <button type="button" className="ft-ghost" onClick={reset}>Reset</button>
                <button type="button" className="ft-ghost" onClick={skip}>Skip</button>
            </div> : null}
            {settings.clockOnly !== true && settings.showHint ? <p className="ft-hint">Space start or pause · R reset · S skip · M minimize · F fullscreen</p> : null}
        </main>

        {compact ? <div className="ft-compactpill" role="dialog" aria-label="Minimized timer">
            <span className="ft-compactphase">{PHASE_LABEL[phase]}</span>
            <span className="ft-compacttime">{fmt(remaining)}</span>
            <button type="button" className="ft-compactbtn" aria-label={running ? 'Pause' : 'Start'} onClick={() => (running ? pause() : start())}>{running ? '❚❚' : '▶'}</button>
            <button type="button" className="ft-compactbtn" aria-label="Expand timer" onClick={() => setCompact(false)}>⤢</button>
        </div> : null}

        {panel === 'profile' ? <ProfilePanel onClose={() => setPanel('none')} /> : null}
        <PresenceBeacon />
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
            savedLinks={savedLinks} onSaveLink={saveLink} onRemoveLink={removeLink}
        /> : null}

        {pipWin ? createPortal(<div className="ft-pip">
            <div className="ft-pip-phase">{PHASE_LABEL[phase]}</div>
            <div className="ft-pip-time">{fmt(remaining)}</div>
            <div className="ft-pip-bar" aria-hidden="true"><span style={{ width: `${Math.round(progress * 100)}%` }} /></div>
            <div className="ft-pip-btns">
                <button type="button" className="ft-primary is-compact" onClick={() => (running ? pause() : start())}>{running ? 'Pause' : 'Start'}</button>
                <button type="button" className="ft-ghost is-compact" onClick={reset}>Reset</button>
                <button type="button" className="ft-ghost is-compact" onClick={skip}>Skip</button>
            </div>
        </div>, pipWin.document.body) : null}

        {settings.musicOpen !== false ? <MusicPlayer settings={settings} patch={patch} spotifySrc={spotifySrc} onOpenSettings={openSettingsPanel} /> : null}
    </div>;
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               }
