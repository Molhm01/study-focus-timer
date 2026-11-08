import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

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

const IMAGE_PARTS: Record<string,string[]> = {"longer":["images/images/longer-0.txt", "images/images/longer-1.txt", "images/images/longer-2.txt", "images/images/longer-3.txt", "images/images/longer-4.txt", "images/images/longer-5.txt"],"curated":["images/images/curated-0.txt"],"rain": ["images/images/rain-0.txt", "images/images/rain-1.txt"], "thumb-rain": ["images/images/thumb-rain-0.txt"], "library": ["images/images/library-0.txt", "images/images/library-1.txt", "images/images/library-2.txt", "images/images/library-3.txt", "images/images/library-4.txt"], "thumb-library": ["images/images/thumb-library-0.txt"], "coffee": ["images/images/coffee-0.txt", "images/images/coffee-1.txt", "images/images/coffee-2.txt"], "thumb-coffee": ["images/images/thumb-coffee-0.txt"], "desk": ["images/images/desk-0.txt", "images/images/desk-1.txt", "images/images/desk-2.txt"], "thumb-desk": ["images/images/thumb-desk-0.txt"], "mountains": ["images/images/mountains-0.txt", "images/images/mountains-1.txt", "images/images/mountains-2.txt", "images/images/mountains-3.txt", "images/images/mountains-4.txt", "images/images/mountains-5.txt"], "thumb-mountains": ["images/images/thumb-mountains-0.txt"], "forest": ["images/images/forest-0.txt", "images/images/forest-1.txt", "images/images/forest-2.txt", "images/images/forest-3.txt"], "thumb-forest": ["images/images/thumb-forest-0.txt"], "stars": ["images/images/stars-0.txt"], "thumb-stars": ["images/images/thumb-stars-0.txt"], "ocean": ["images/images/ocean-0.txt", "images/images/ocean-1.txt", "images/images/ocean-2.txt"], "thumb-ocean": ["images/images/thumb-ocean-0.txt"], "catalog": ["images/images/catalog-0.txt", "images/images/catalog-1.txt", "images/images/catalog-2.txt", "images/images/catalog-3.txt", "images/images/catalog-4.txt", "images/images/catalog-5.txt", "images/images/catalog-6.txt"]};
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
    bgAnimate: boolean; customFit: 'cover' | 'contain';
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
    bgAnimate: true, customFit: 'cover',
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

// Animated source videos stream only when selected. Picker previews are composed, labelled atlases.
// New longer scenes preserve their native wide composition with dark margins where needed.
// Sources: Pixabay Content License video embeddings; source links and notices in README. No Mixkit assets.
interface SceneDef { id: string; name: string; url?: string; tile?: number; preview?: string; duration?: number }
const SCENES: SceneDef[] = [
    {"id": "shrine", "name": "Moonlit shrine", "url": "https://cdn.pixabay.com/video/2026/04/22/348164_large.mp4", "tile": 0, "preview": "curated", "duration": 5.0},
    {"id": "rainy-window", "name": "Rainy window", "url": "https://cdn.pixabay.com/video/2026/09/15/376433_medium.mp4", "tile": 1, "preview": "curated", "duration": 8.0},
    {"id": "misty-river", "name": "Misty river", "url": "https://cdn.pixabay.com/video/2026/04/05/344726_medium.mp4", "tile": 2, "preview": "curated", "duration": 24.0},
    {"id": "water-garden", "name": "Water garden", "url": "https://cdn.pixabay.com/video/2025/07/12/290959_medium.mp4", "tile": 3, "preview": "curated", "duration": 9.633333},
    {"id": "sakura-night", "name": "Island moon", "url": "https://cdn.pixabay.com/video/2023/03/22/155672-810706799_large.mp4", "tile": 4, "preview": "curated", "duration": 60.116667},
    {"id": "night-train", "name": "Night train", "url": "https://cdn.pixabay.com/video/2025/10/23/311602_medium.mp4", "tile": 5, "preview": "curated", "duration": 64.0},
    {"id": "japan-street", "name": "Sakura street", "url": "https://cdn.pixabay.com/video/2025/04/07/270367_medium.mp4", "tile": 6, "preview": "curated", "duration": 10.36},
    {"id": "cozy-window", "name": "Rainy desk", "url": "https://cdn.pixabay.com/video/2026/09/13/376049_large.mp4", "tile": 7, "preview": "curated", "duration": 6.0},
    {"id": "balcony-dusk", "name": "Evening balcony", "url": "https://cdn.pixabay.com/video/2026/09/15/376434_medium.mp4", "tile": 8, "preview": "curated", "duration": 8.0},
];
const SCENES_LONG: SceneDef[] = [
    {"id": "long-215407", "name": "Rainy study window", "url": "https://cdn.pixabay.com/video/2024/06/05/215407_medium.mp4", "tile": 0, "preview": "longer", "duration": 60.093367},
    {"id": "long-297863", "name": "Rainlit reading nook", "url": "https://cdn.pixabay.com/video/2025/08/17/297863_medium.mp4", "tile": 1, "preview": "longer", "duration": 64.0},
    {"id": "long-265906", "name": "Neon rainy lounge", "url": "https://cdn.pixabay.com/video/2025/03/19/265906_medium.mp4", "tile": 2, "preview": "longer", "duration": 60.0},
    {"id": "long-276498", "name": "Night desk journal", "url": "https://cdn.pixabay.com/video/2025/05/03/276498_medium.mp4", "tile": 3, "preview": "longer", "duration": 52.066667},
    {"id": "long-311563", "name": "Umbrella city", "url": "https://cdn.pixabay.com/video/2025/10/23/311563_medium.mp4", "tile": 4, "preview": "longer", "duration": 61.166667},
    {"id": "long-180170", "name": "Neon alley puddles", "url": "https://cdn.pixabay.com/video/2023/09/11/180170-863654648_medium.mp4", "tile": 5, "preview": "longer", "duration": 24.875},
    {"id": "long-229537", "name": "Moonlit river window", "url": "https://cdn.pixabay.com/video/2024/09/03/229537_medium.mp4", "tile": 6, "preview": "longer", "duration": 30.03},
    {"id": "long-211097", "name": "Cabin porch fire", "url": "https://cdn.pixabay.com/video/2024/05/07/211097_medium.mp4", "tile": 7, "preview": "longer", "duration": 30.0},
    {"id": "long-246535", "name": "Window cat at dusk", "url": "https://cdn.pixabay.com/video/2024/12/13/246535_medium.mp4", "tile": 8, "preview": "longer", "duration": 58.5585},
    {"id": "long-246241", "name": "Rainy sofa cat", "url": "https://cdn.pixabay.com/video/2024/12/11/246241_medium.mp4", "tile": 9, "preview": "longer", "duration": 75.341933},
    {"id": "long-204116", "name": "Firelit cabin", "url": "https://cdn.pixabay.com/video/2024/03/14/204116-923594064_medium.mp4", "tile": 10, "preview": "longer", "duration": 30.0},
    {"id": "long-248668", "name": "Lavender lounge", "url": "https://cdn.pixabay.com/video/2024/12/25/248668_medium.mp4", "tile": 11, "preview": "longer", "duration": 20.0},
    {"id": "long-371447", "name": "City cat companion", "url": "https://cdn.pixabay.com/video/2026/08/19/371447_medium.mp4", "tile": 12, "preview": "longer", "duration": 60.165704},
    {"id": "long-379222", "name": "City blues", "url": "https://cdn.pixabay.com/video/2026/09/27/379222_medium.mp4", "tile": 13, "preview": "longer", "duration": 20.1201},
    {"id": "long-345856", "name": "Sleepy desk cat", "url": "https://cdn.pixabay.com/video/2026/04/11/345856_medium.mp4", "tile": 14, "preview": "longer", "duration": 64.0},
    {"id": "long-312345", "name": "Lamp and sleeping cat", "url": "https://cdn.pixabay.com/video/2025/10/27/312345_medium.mp4", "tile": 15, "preview": "longer", "duration": 64.0},
    {"id": "long-271841", "name": "Rainy study companion", "url": "https://cdn.pixabay.com/video/2025/04/13/271841_medium.mp4", "tile": 16, "preview": "longer", "duration": 67.8},
    {"id": "long-297736", "name": "Rooftop study", "url": "https://cdn.pixabay.com/video/2025/08/16/297736_medium.mp4", "tile": 17, "preview": "longer", "duration": 72.0},
    {"id": "long-246242", "name": "Sleeping hearth cat", "url": "https://cdn.pixabay.com/video/2024/12/11/246242_medium.mp4", "tile": 18, "preview": "longer", "duration": 58.691967},
    {"id": "long-246243", "name": "Dusk window cat", "url": "https://cdn.pixabay.com/video/2024/12/11/246243_medium.mp4", "tile": 19, "preview": "longer", "duration": 76.709967},
    {"id": "long-202823", "name": "Candlelit library", "url": "https://cdn.pixabay.com/video/2024/03/03/202823-919000176_medium.mp4", "tile": 20, "preview": "longer", "duration": 30.0},
    {"id": "long-75368", "name": "Old-town rain", "url": "https://cdn.pixabay.com/video/2021/05/26/75368-555547951_medium.mp4", "tile": 21, "preview": "longer", "duration": 32.873333},
    {"id": "long-38271", "name": "Storm at sea", "url": "https://cdn.pixabay.com/video/2020/05/06/38271-415950897_medium.mp4", "tile": 22, "preview": "longer", "duration": 58.516667},
    {"id": "long-360380", "name": "Library afternoon", "url": "https://cdn.pixabay.com/video/2026/06/23/360380_medium.mp4", "tile": 23, "preview": "longer", "duration": 22.208333},
    {"id": "long-310025", "name": "Night study wall", "url": "https://cdn.pixabay.com/video/2025/10/15/310025_medium.mp4", "tile": 24, "preview": "longer", "duration": 64.0},
    {"id": "long-330062", "name": "City laptop glow", "url": "https://cdn.pixabay.com/video/2026/01/24/330062_medium.mp4", "tile": 25, "preview": "longer", "duration": 63.533333},
    {"id": "long-345838", "name": "Library dog", "url": "https://cdn.pixabay.com/video/2026/04/11/345838_medium.mp4", "tile": 26, "preview": "longer", "duration": 61.4},
    {"id": "long-211089", "name": "Autumn porch", "url": "https://cdn.pixabay.com/video/2024/05/07/211089_medium.mp4", "tile": 27, "preview": "longer", "duration": 30.0},
    {"id": "long-301247", "name": "Retro train cat", "url": "https://cdn.pixabay.com/video/2025/09/02/301247_medium.mp4", "tile": 28, "preview": "longer", "duration": 29.866667},
    {"id": "long-208856", "name": "Cottage candlelight", "url": "https://cdn.pixabay.com/video/2024/04/21/208856_medium.mp4", "tile": 29, "preview": "longer", "duration": 30.0},
    {"id": "long-257953", "name": "Rainy woodland lounge", "url": "https://cdn.pixabay.com/video/2025/02/13/257953_medium.mp4", "tile": 30, "preview": "longer", "duration": 30.03},
    {"id": "long-258729", "name": "Red rainy room", "url": "https://cdn.pixabay.com/video/2025/02/17/258729_medium.mp4", "tile": 31, "preview": "longer", "duration": 30.03},
    {"id": "long-251562", "name": "Ancient forest", "url": "https://cdn.pixabay.com/video/2025/01/09/251562_medium.mp4", "tile": 32, "preview": "longer", "duration": 60.266667},
    {"id": "long-243696", "name": "Mountain lodge window", "url": "https://cdn.pixabay.com/video/2024/11/28/243696_medium.mp4", "tile": 33, "preview": "longer", "duration": 30.0},
    {"id": "long-247096", "name": "Classic hearth room", "url": "https://cdn.pixabay.com/video/2024/12/17/247096_medium.mp4", "tile": 34, "preview": "longer", "duration": 30.0},
    {"id": "long-168104", "name": "Moonlit lounge", "url": "https://cdn.pixabay.com/video/2023/06/20/168104-838533643_medium.mp4", "tile": 35, "preview": "longer", "duration": 60.06},
    {"id": "long-205001", "name": "Candlelit studio", "url": "https://cdn.pixabay.com/video/2024/03/21/205001-926015670_medium.mp4", "tile": 36, "preview": "longer", "duration": 30.058333},
    {"id": "long-182592", "name": "Round-door library", "url": "https://cdn.pixabay.com/video/2023/09/27/182592-868916643_medium.mp4", "tile": 37, "preview": "longer", "duration": 39.833333},
    {"id": "long-166272", "name": "Ember-lit room", "url": "https://cdn.pixabay.com/video/2023/06/08/166272-834580690_medium.mp4", "tile": 38, "preview": "longer", "duration": 60.116667},
    {"id": "long-120583", "name": "Rainy bedroom", "url": "https://cdn.pixabay.com/video/2022/06/17/120583-721287175_medium.mp4", "tile": 39, "preview": "longer", "duration": 29.631667},
    {"id": "long-236040", "name": "Mountain lake bedroom", "url": "https://cdn.pixabay.com/video/2024/10/12/236040_medium.mp4", "tile": 40, "preview": "longer", "duration": 30.03},
    {"id": "long-181971", "name": "Hilltop sunset", "url": "https://cdn.pixabay.com/video/2023/09/23/181971-867576062_medium.mp4", "tile": 41, "preview": "longer", "duration": 60.06},
    {"id": "long-259293", "name": "Round-door fire", "url": "https://cdn.pixabay.com/video/2025/02/18/259293_medium.mp4", "tile": 42, "preview": "longer", "duration": 30.03},
    {"id": "long-253904", "name": "Snowy city window", "url": "https://cdn.pixabay.com/video/2025/01/22/253904_medium.mp4", "tile": 43, "preview": "longer", "duration": 60.0},
    {"id": "long-267347", "name": "Sunset city lounge", "url": "https://cdn.pixabay.com/video/2025/03/25/267347_medium.mp4", "tile": 44, "preview": "longer", "duration": 60.0},
    {"id": "long-208105", "name": "Forest library", "url": "https://cdn.pixabay.com/video/2024/04/15/208105_medium.mp4", "tile": 45, "preview": "longer", "duration": 30.0},
    {"id": "long-156473", "name": "Rainy sunset room", "url": "https://cdn.pixabay.com/video/2023/03/28/156473-812592018_medium.mp4", "tile": 46, "preview": "longer", "duration": 60.138333},
    {"id": "long-201968", "name": "Fireside tabby", "url": "https://cdn.pixabay.com/video/2024/02/25/201968-916877887_medium.mp4", "tile": 47, "preview": "longer", "duration": 30.08},
    {"id": "long-108292", "name": "Victorian fire", "url": "https://cdn.pixabay.com/video/2022/02/20/108292-680195115_medium.mp4", "tile": 48, "preview": "longer", "duration": 60.01},
    {"id": "long-201179", "name": "Rainy mountain retreat", "url": "https://cdn.pixabay.com/video/2024/02/20/201179-914924544_medium.mp4", "tile": 49, "preview": "longer", "duration": 58.123333},
    {"id": "long-208621", "name": "Blue mountain bedroom", "url": "https://cdn.pixabay.com/video/2024/04/19/208621_medium.mp4", "tile": 50, "preview": "longer", "duration": 20.04},
    {"id": "long-204238", "name": "Sunlit bookcase", "url": "https://cdn.pixabay.com/video/2024/03/15/204238-923909572_medium.mp4", "tile": 51, "preview": "longer", "duration": 31.978333},
    {"id": "long-205644", "name": "Warm timber library", "url": "https://cdn.pixabay.com/video/2024/03/25/205644-927347938_medium.mp4", "tile": 52, "preview": "longer", "duration": 30.0},
    {"id": "long-205634", "name": "Indoor garden library", "url": "https://cdn.pixabay.com/video/2024/03/25/205634-927347905_medium.mp4", "tile": 53, "preview": "longer", "duration": 30.0},
    {"id": "long-209220", "name": "Snowy fireplace bedroom", "url": "https://cdn.pixabay.com/video/2024/04/24/209220_medium.mp4", "tile": 54, "preview": "longer", "duration": 30.0},
    {"id": "long-337559", "name": "Rainy high-rise", "url": "https://cdn.pixabay.com/video/2026/03/02/337559_medium.mp4", "tile": 55, "preview": "longer", "duration": 64.8},
    {"id": "long-210278", "name": "Quiet bookshelf nook", "url": "https://cdn.pixabay.com/video/2024/05/01/210278_medium.mp4", "tile": 56, "preview": "longer", "duration": 30.0},
    {"id": "long-219025", "name": "Sunlit mountain lounge", "url": "https://cdn.pixabay.com/video/2024/07/01/219025_medium.mp4", "tile": 57, "preview": "longer", "duration": 30.03},
    {"id": "long-267920", "name": "Classic book room", "url": "https://cdn.pixabay.com/video/2025/03/27/267920_medium.mp4", "tile": 58, "preview": "longer", "duration": 30.03},
    {"id": "long-208089", "name": "Golden reading room", "url": "https://cdn.pixabay.com/video/2024/04/15/208089_medium.mp4", "tile": 59, "preview": "longer", "duration": 30.0},
    {"id": "long-258614", "name": "Rain on glass", "url": "https://cdn.pixabay.com/video/2025/02/16/258614_medium.mp4", "tile": 60, "preview": "longer", "duration": 30.9},
    {"id": "long-181977", "name": "Sunset forest lounge", "url": "https://cdn.pixabay.com/video/2023/09/23/181977-867576065_medium.mp4", "tile": 61, "preview": "longer", "duration": 60.06},
    {"id": "long-167688", "name": "Forest rain windows", "url": "https://cdn.pixabay.com/video/2023/06/18/167688-837428971_medium.mp4", "tile": 62, "preview": "longer", "duration": 60.138333},
    {"id": "long-188977", "name": "Round-window lounge", "url": "https://cdn.pixabay.com/video/2023/11/13/188977-884185356_medium.mp4", "tile": 63, "preview": "longer", "duration": 60.116667},
    {"id": "long-208106", "name": "Sunbeam lodge", "url": "https://cdn.pixabay.com/video/2024/04/15/208106_medium.mp4", "tile": 64, "preview": "longer", "duration": 30.0},
    {"id": "long-181947", "name": "Warm sunset lounge", "url": "https://cdn.pixabay.com/video/2023/09/23/181947-867576048_medium.mp4", "tile": 65, "preview": "longer", "duration": 60.06},
    {"id": "long-298922", "name": "Mountain study lounge", "url": "https://cdn.pixabay.com/video/2025/08/21/298922_medium.mp4", "tile": 66, "preview": "longer", "duration": 30.033333},
    {"id": "long-209881", "name": "Sunlit green room", "url": "https://cdn.pixabay.com/video/2024/04/29/209881_medium.mp4", "tile": 67, "preview": "longer", "duration": 30.0},
    {"id": "long-261757", "name": "Rainy city apartment", "url": "https://cdn.pixabay.com/video/2025/03/01/261757_medium.mp4", "tile": 68, "preview": "longer", "duration": 60.0},
    {"id": "long-324169", "name": "Rainy timber bedroom", "url": "https://cdn.pixabay.com/video/2025/12/24/324169_medium.mp4", "tile": 69, "preview": "longer", "duration": 30.0},
    {"id": "long-340848", "name": "Mountain night retreat", "url": "https://cdn.pixabay.com/video/2026/03/18/340848_medium.mp4", "tile": 70, "preview": "longer", "duration": 60.0},
    {"id": "long-184370", "name": "Twilight pagoda", "url": "https://cdn.pixabay.com/video/2023/10/10/184370-873181596_medium.mp4", "tile": 71, "preview": "longer", "duration": 24.213333},
    {"id": "long-266428", "name": "Snowy shrine lantern", "url": "https://cdn.pixabay.com/video/2025/03/21/266428_medium.mp4", "tile": 72, "preview": "longer", "duration": 27.483333},
    {"id": "long-225944", "name": "Lantern street", "url": "https://cdn.pixabay.com/video/2024/08/11/225944_medium.mp4", "tile": 73, "preview": "longer", "duration": 30.0},
    {"id": "long-265909", "name": "Anime river sunset", "url": "https://cdn.pixabay.com/video/2025/03/19/265909_medium.mp4", "tile": 74, "preview": "longer", "duration": 60.0},
    {"id": "long-281165", "name": "Violet Mount Fuji", "url": "https://cdn.pixabay.com/video/2025/05/23/281165_medium.mp4", "tile": 75, "preview": "longer", "duration": 30.0},
    {"id": "long-153086", "name": "Snowy Kyoto lane", "url": "https://cdn.pixabay.com/video/2023/03/04/153086-846385128_medium.mp4", "tile": 76, "preview": "longer", "duration": 52.51},
    {"id": "long-185425", "name": "Stormy mountain garden", "url": "https://cdn.pixabay.com/video/2023/10/17/185425-875362672_medium.mp4", "tile": 77, "preview": "longer", "duration": 25.0},
    {"id": "long-158195", "name": "Moonlit cherry pond", "url": "https://cdn.pixabay.com/video/2023/04/10/158195-816372976_medium.mp4", "tile": 78, "preview": "longer", "duration": 60.053333},
    {"id": "long-189472", "name": "Snowy shrine gate", "url": "https://cdn.pixabay.com/video/2023/11/17/189472-885804489_medium.mp4", "tile": 79, "preview": "longer", "duration": 60.053333},
    {"id": "long-214500", "name": "Night library student", "url": "https://cdn.pixabay.com/video/2024/05/30/214500_medium.mp4", "tile": 80, "preview": "longer", "duration": 63.229833},
    {"id": "long-314688", "name": "Sunset headphones", "url": "https://cdn.pixabay.com/video/2025/11/08/314688_medium.mp4", "tile": 81, "preview": "longer", "duration": 64.0},
    {"id": "long-345955", "name": "Cozy room companion", "url": "https://cdn.pixabay.com/video/2026/04/12/345955_medium.mp4", "tile": 82, "preview": "longer", "duration": 64.0},
    {"id": "long-208093", "name": "Coffee shop hearth", "url": "https://cdn.pixabay.com/video/2024/04/15/208093_medium.mp4", "tile": 83, "preview": "longer", "duration": 30.0},
    {"id": "long-209201", "name": "Garden porch", "url": "https://cdn.pixabay.com/video/2024/04/24/209201_medium.mp4", "tile": 84, "preview": "longer", "duration": 20.0},
    {"id": "long-204117", "name": "Tea by the fire", "url": "https://cdn.pixabay.com/video/2024/03/14/204117-923594068_medium.mp4", "tile": 85, "preview": "longer", "duration": 30.0},
    {"id": "long-246984", "name": "Covered forest porch", "url": "https://cdn.pixabay.com/video/2024/12/16/246984_medium.mp4", "tile": 86, "preview": "longer", "duration": 30.0},
    {"id": "long-267296", "name": "Round-door storybook", "url": "https://cdn.pixabay.com/video/2025/03/25/267296_medium.mp4", "tile": 87, "preview": "longer", "duration": 60.0},
    {"id": "long-301045", "name": "Rainy fireside study", "url": "https://cdn.pixabay.com/video/2025/09/01/301045_medium.mp4", "tile": 88, "preview": "longer", "duration": 60.5},
    {"id": "long-297472", "name": "Moonclock lounge", "url": "https://cdn.pixabay.com/video/2025/08/14/297472_medium.mp4", "tile": 89, "preview": "longer", "duration": 30.0},
    {"id": "long-242924", "name": "Snowy coffee shop", "url": "https://cdn.pixabay.com/video/2024/11/23/242924_medium.mp4", "tile": 90, "preview": "longer", "duration": 60.0},
    {"id": "long-243342", "name": "Winter cafe", "url": "https://cdn.pixabay.com/video/2024/11/26/243342_medium.mp4", "tile": 91, "preview": "longer", "duration": 60.0},
    {"id": "long-286806", "name": "Open book garden", "url": "https://cdn.pixabay.com/video/2025/06/20/286806_medium.mp4", "tile": 92, "preview": "longer", "duration": 30.03},
    {"id": "long-244452", "name": "Snowy porch chair", "url": "https://cdn.pixabay.com/video/2024/12/02/244452_medium.mp4", "tile": 93, "preview": "longer", "duration": 30.0},
    {"id": "long-244362", "name": "Snowy cabin deck", "url": "https://cdn.pixabay.com/video/2024/12/02/244362_medium.mp4", "tile": 94, "preview": "longer", "duration": 30.0},
    {"id": "long-210707", "name": "Autumn porch hearth", "url": "https://cdn.pixabay.com/video/2024/05/05/210707_medium.mp4", "tile": 95, "preview": "longer", "duration": 30.0},
    {"id": "long-309388", "name": "Dusk window reader", "url": "https://cdn.pixabay.com/video/2025/10/12/309388_medium.mp4", "tile": 96, "preview": "longer", "duration": 64.0},
    {"id": "long-265815", "name": "Neon headphones", "url": "https://cdn.pixabay.com/video/2025/03/18/265815_medium.mp4", "tile": 97, "preview": "longer", "duration": 59.993267},
    {"id": "long-266042", "name": "Pale winter lounge", "url": "https://cdn.pixabay.com/video/2025/03/19/266042_medium.mp4", "tile": 98, "preview": "longer", "duration": 30.03},
    {"id": "long-325442", "name": "Pink-haired study", "url": "https://cdn.pixabay.com/video/2026/01/01/325442_medium.mp4", "tile": 99, "preview": "longer", "duration": 30.0},
    {"id": "long-265816", "name": "Night laptop study", "url": "https://cdn.pixabay.com/video/2025/03/18/265816_medium.mp4", "tile": 100, "preview": "longer", "duration": 59.993267},
];
const SCENES_EXTRA: SceneDef[] = [
    {"id": "anime-lofi-rain-363709", "name": "Rainy bus stop", "url": "https://cdn.pixabay.com/video/2026/07/13/363709_medium.mp4", "tile": 0, "duration": 10.0},
    {"id": "anime-lofi-record-363710", "name": "Record shop", "url": "https://cdn.pixabay.com/video/2026/07/13/363710_medium.mp4", "tile": 1, "duration": 10.0},
    {"id": "aurora-borealis-northern-186969-879222062", "name": "Aurora lake", "url": "https://cdn.pixabay.com/video/2023/10/29/186969-879222062_medium.mp4", "tile": 2, "duration": 7.615},
    {"id": "autumn-forest-trees-313784", "name": "Autumn nook", "url": "https://cdn.pixabay.com/video/2025/11/04/313784_medium.mp4", "tile": 3, "duration": 30.0},
    {"id": "autumn-forest-trees-313787", "name": "Lakeside campfire", "url": "https://cdn.pixabay.com/video/2025/11/04/313787_medium.mp4", "tile": 4, "duration": 30.0},
    {"id": "autumn-nature-cabin-324160", "name": "Cabin bedroom", "url": "https://cdn.pixabay.com/video/2025/12/24/324160_medium.mp4", "tile": 5, "duration": 30.0},
    {"id": "autumn-nature-cabin-324164", "name": "Forest cabin", "url": "https://cdn.pixabay.com/video/2025/12/24/324164_medium.mp4", "tile": 6, "duration": 30.0},
    {"id": "autumn-relaxation-forest-309119", "name": "Autumn lake", "url": "https://cdn.pixabay.com/video/2025/10/10/309119_medium.mp4", "tile": 7, "duration": 10.55},
    {"id": "beach-ocean-night-384362", "name": "Stormy coast", "url": "https://cdn.pixabay.com/video/2026/10/22/384362_medium.mp4", "tile": 8, "duration": 10.066667},
    {"id": "bioluminescence-beach-waves-343671", "name": "Starlit shore", "url": "https://cdn.pixabay.com/video/2026/03/31/343671_medium.mp4", "tile": 9, "duration": 20.125},
    {"id": "bioluminescence-beach-waves-346010", "name": "Midnight waves", "url": "https://cdn.pixabay.com/video/2026/04/12/346010_medium.mp4", "tile": 10, "duration": 15.0},
    {"id": "bioluminescence-bioluminescent-ocean-381552", "name": "Glowing ocean", "url": "https://cdn.pixabay.com/video/2026/10/08/381552_medium.mp4", "tile": 11, "duration": 15.041667},
    {"id": "bioluminescent-beach-375118-375118", "name": "Aurora coast", "url": "https://cdn.pixabay.com/video/2026/09/08/375118_medium.mp4", "tile": 12, "duration": 15.041667},
    {"id": "boats-moon-moonlight-381338", "name": "Moonlit boats", "url": "https://cdn.pixabay.com/video/2026/10/07/381338_medium.mp4", "tile": 13, "duration": 15.041667},
    {"id": "bonfire-flames-fire-201688-916116512", "name": "Bonfire", "url": "https://cdn.pixabay.com/video/2024/02/23/201688-916116512_medium.mp4", "tile": 14, "duration": 44.223333},
    {"id": "book-candle-stars-184469-873483892", "name": "Candlelit book", "url": "https://cdn.pixabay.com/video/2023/10/10/184469-873483892_medium.mp4", "tile": 15, "duration": 30.08},
    {"id": "book-study-books-347655", "name": "Library fire", "url": "https://cdn.pixabay.com/video/2026/04/19/347655_medium.mp4", "tile": 16, "duration": 6.3},
    {"id": "campfire-bonfire-flames-225422", "name": "Campfire embers", "url": "https://cdn.pixabay.com/video/2024/08/08/225422_medium.mp4", "tile": 17, "duration": 11.9},
    {"id": "candle-flame-advent-311235", "name": "Rainy candle", "url": "https://cdn.pixabay.com/video/2025/10/21/311235_medium.mp4", "tile": 18, "duration": 19.291667},
    {"id": "candle-flame-advent-312390", "name": "Candlelight", "url": "https://cdn.pixabay.com/video/2025/10/28/312390_medium.mp4", "tile": 19, "duration": 13.6},
    {"id": "candle-flame-candlelight-312404", "name": "Snowy window", "url": "https://cdn.pixabay.com/video/2025/10/28/312404_medium.mp4", "tile": 20, "duration": 15.88},
    {"id": "cedar-tree-line-211013", "name": "Cedar trail", "url": "https://cdn.pixabay.com/video/2024/05/07/211013_medium.mp4", "tile": 21, "duration": 37.65},
    {"id": "city-starry-sky-310146", "name": "Purple night", "url": "https://cdn.pixabay.com/video/2025/10/15/310146_medium.mp4", "tile": 22, "duration": 8.083333},
    {"id": "coffee-cup-rest-309872", "name": "Rainy coffee", "url": "https://cdn.pixabay.com/video/2025/10/14/309872_medium.mp4", "tile": 23, "duration": 12.0},
    {"id": "coffee-living-room-237103", "name": "Fireside coffee", "url": "https://cdn.pixabay.com/video/2024/10/19/237103_medium.mp4", "tile": 24, "duration": 17.666667},
    {"id": "coffee-tea-steam-285759", "name": "Morning steam", "url": "https://cdn.pixabay.com/video/2025/06/13/285759_medium.mp4", "tile": 25, "duration": 5.64},
    {"id": "cottage-cabin-house-180939-865223880", "name": "Garden cottage", "url": "https://cdn.pixabay.com/video/2023/09/16/180939-865223880_medium.mp4", "tile": 26, "duration": 7.593333},
    {"id": "couch-sofa-rain-185888-876579680", "name": "Forest lounge", "url": "https://cdn.pixabay.com/video/2023/10/20/185888-876579680_medium.mp4", "tile": 27, "duration": 6.0},
    {"id": "cozy-bedroom-289797-289797", "name": "Cozy bedroom", "url": "https://cdn.pixabay.com/video/2025/07/06/289797_medium.mp4", "tile": 28, "duration": 30.0},
    {"id": "cozy-bedroom-modern-290857", "name": "Rainy bedroom", "url": "https://cdn.pixabay.com/video/2025/07/12/290857_medium.mp4", "tile": 29, "duration": 24.0},
    {"id": "cozy-bedroom-modern-290943", "name": "Quiet suite", "url": "https://cdn.pixabay.com/video/2025/07/12/290943_medium.mp4", "tile": 30, "duration": 24.0},
    {"id": "cozy-bedroom-modern-290944", "name": "Window retreat", "url": "https://cdn.pixabay.com/video/2025/07/12/290944_medium.mp4", "tile": 31, "duration": 24.0},
    {"id": "cozy-winter-autumn-253056", "name": "Winter fire", "url": "https://cdn.pixabay.com/video/2025/01/17/253056_medium.mp4", "tile": 32, "duration": 10.583333},
    {"id": "creek-snow-winter-190915-888878158", "name": "Snowy creek", "url": "https://cdn.pixabay.com/video/2023/11/27/190915-888878158_medium.mp4", "tile": 33, "duration": 50.133333},
    {"id": "dark-ocean-ocean-372868", "name": "Ocean doorway", "url": "https://cdn.pixabay.com/video/2026/08/27/372868_medium.mp4", "tile": 34, "duration": 10.3},
    {"id": "dark-ocean-ocean-372869", "name": "Stormy pier", "url": "https://cdn.pixabay.com/video/2026/08/27/372869_medium.mp4", "tile": 35, "duration": 12.633333},
    {"id": "dark-room-storm-369507", "name": "Rainy room", "url": "https://cdn.pixabay.com/video/2026/08/09/369507_medium.mp4", "tile": 36, "duration": 10.0},
    {"id": "dream-nature-fantasy-297586", "name": "Winter cottage", "url": "https://cdn.pixabay.com/video/2025/08/15/297586_medium.mp4", "tile": 37, "duration": 7.733333},
    {"id": "fireplace-fire-heat-327084", "name": "Fireplace", "url": "https://cdn.pixabay.com/video/2026/01/11/327084_medium.mp4", "tile": 38, "duration": 12.04},
    {"id": "fireplace-winter-snow-347140", "name": "Snowy lounge", "url": "https://cdn.pixabay.com/video/2026/04/17/347140_medium.mp4", "tile": 39, "duration": 16.0},
    {"id": "flowers-tree-moon-179020-861022089", "name": "Moonlit blossoms", "url": "https://cdn.pixabay.com/video/2023/09/03/179020-861022089_medium.mp4", "tile": 40, "duration": 7.21},
    {"id": "forest-nature-wood-329836", "name": "Moonlit forest", "url": "https://cdn.pixabay.com/video/2026/01/23/329836_medium.mp4", "tile": 41, "duration": 9.6},
    {"id": "ice-forest-frozen-254850", "name": "Frozen river", "url": "https://cdn.pixabay.com/video/2025/01/27/254850_medium.mp4", "tile": 42, "duration": 50.5505},
    {"id": "landscape-cute-heaven-371729", "name": "Castle at night", "url": "https://cdn.pixabay.com/video/2026/08/21/371729_medium.mp4", "tile": 43, "duration": 24.716667},
    {"id": "landscape-waterfall-water-298040", "name": "Forest falls", "url": "https://cdn.pixabay.com/video/2025/08/18/298040_medium.mp4", "tile": 44, "duration": 33.383333},
    {"id": "library-books-363706-363706", "name": "Library desk", "url": "https://cdn.pixabay.com/video/2026/07/13/363706_medium.mp4", "tile": 45, "duration": 10.0},
    {"id": "lighthouse-landscape-nature-325141", "name": "Coastal lighthouse", "url": "https://cdn.pixabay.com/video/2025/12/31/325141_medium.mp4", "tile": 46, "duration": 9.8},
    {"id": "lighthouse-storm-ocean-373895", "name": "Midnight lighthouse", "url": "https://cdn.pixabay.com/video/2026/09/01/373895_medium.mp4", "tile": 47, "duration": 15.0},
    {"id": "lighthouse-wave-ocean-358853", "name": "Storm lighthouse", "url": "https://cdn.pixabay.com/video/2026/06/16/358853_medium.mp4", "tile": 48, "duration": 20.0},
    {"id": "loop-ocean-nature-358453", "name": "Silver waves", "url": "https://cdn.pixabay.com/video/2026/06/14/358453_medium.mp4", "tile": 49, "duration": 15.041667},
    {"id": "luxury-bedroom-cozy-290401", "name": "Night lounge", "url": "https://cdn.pixabay.com/video/2025/07/09/290401_medium.mp4", "tile": 50, "duration": 30.0},
    {"id": "moon-clouds-stars-209264", "name": "Clouds and moon", "url": "https://cdn.pixabay.com/video/2024/04/24/209264_medium.mp4", "tile": 51, "duration": 5.0},
    {"id": "moon-full-moon-370403", "name": "Sunset ocean", "url": "https://cdn.pixabay.com/video/2026/08/13/370403_medium.mp4", "tile": 52, "duration": 5.0},
    {"id": "moon-nature-night-290116", "name": "Crimson moon", "url": "https://cdn.pixabay.com/video/2025/07/08/290116_medium.mp4", "tile": 53, "duration": 8.4},
    {"id": "moon-night-sky-256347", "name": "Still moonlight", "url": "https://cdn.pixabay.com/video/2025/02/04/256347_medium.mp4", "tile": 54, "duration": 15.133182},
    {"id": "moon-trees-forest-183967-872226594", "name": "Forest moon", "url": "https://cdn.pixabay.com/video/2023/10/07/183967-872226594_medium.mp4", "tile": 55, "duration": 7.615},
    {"id": "moonlight-patrol-boat-290456", "name": "Moonlit sail", "url": "https://cdn.pixabay.com/video/2025/07/10/290456_medium.mp4", "tile": 56, "duration": 5.066667},
    {"id": "mountains-lake-water-124774-732319023", "name": "Alpine lake", "url": "https://cdn.pixabay.com/video/2022/07/20/124774-732319023_medium.mp4", "tile": 57, "duration": 20.01},
    {"id": "nature-night-moonlight-313411", "name": "Golden moon", "url": "https://cdn.pixabay.com/video/2025/11/02/313411_medium.mp4", "tile": 58, "duration": 7.6},
    {"id": "night-old-capital-182475-868496329", "name": "Kyoto sunset", "url": "https://cdn.pixabay.com/video/2023/09/26/182475-868496329_medium.mp4", "tile": 59, "duration": 17.321667},
    {"id": "night-view-moon-143565-782758320", "name": "City moon", "url": "https://cdn.pixabay.com/video/2022/12/19/143565-782758320_medium.mp4", "tile": 60, "duration": 12.011667},
    {"id": "night-view-yamadas-283431", "name": "Night sky", "url": "https://cdn.pixabay.com/video/2025/06/03/283431_medium.mp4", "tile": 61, "duration": 8.966667},
    {"id": "ocean-night-stars-377557", "name": "Ship at night", "url": "https://cdn.pixabay.com/video/2026/09/19/377557_medium.mp4", "tile": 62, "duration": 30.066667},
    {"id": "ocean-scene-cinemagraph-372866", "name": "Coastal cabin", "url": "https://cdn.pixabay.com/video/2026/08/27/372866_medium.mp4", "tile": 63, "duration": 11.3},
    {"id": "ocean-sea-fog-299418", "name": "Misty ocean", "url": "https://cdn.pixabay.com/video/2025/08/24/299418_medium.mp4", "tile": 64, "duration": 10.4},
    {"id": "ocean-sea-waves-174033-850286651", "name": "Blue moon coast", "url": "https://cdn.pixabay.com/video/2023/07/31/174033-850286651_medium.mp4", "tile": 65, "duration": 7.04},
    {"id": "ocean-sea-waves-232793", "name": "Rocky sea", "url": "https://cdn.pixabay.com/video/2024/09/23/232793_medium.mp4", "tile": 66, "duration": 60.026633},
    {"id": "purple-cosmic-space-278396", "name": "Purple cosmos", "url": "https://cdn.pixabay.com/video/2025/05/12/278396_medium.mp4", "tile": 67, "duration": 52.2},
    {"id": "radio-tower-night-211067", "name": "Tokyo tower", "url": "https://cdn.pixabay.com/video/2024/05/07/211067_medium.mp4", "tile": 68, "duration": 31.08105},
    {"id": "rain-cobblestone-puddle-380412", "name": "Rainy cobbles", "url": "https://cdn.pixabay.com/video/2026/10/02/380412_medium.mp4", "tile": 69, "duration": 14.166667},
    {"id": "rain-leaves-foliage-227700", "name": "Rainy leaves", "url": "https://cdn.pixabay.com/video/2024/08/21/227700_medium.mp4", "tile": 70, "duration": 24.0},
    {"id": "rain-nature-water-289712", "name": "Rainy path", "url": "https://cdn.pixabay.com/video/2025/07/05/289712_medium.mp4", "tile": 71, "duration": 16.9},
    {"id": "rain-outside-372862-372862", "name": "Storm lounge", "url": "https://cdn.pixabay.com/video/2026/08/27/372862_medium.mp4", "tile": 72, "duration": 10.0},
    {"id": "rain-raining-raindrops-199501-910530342", "name": "Rainy puddles", "url": "https://cdn.pixabay.com/video/2024/02/06/199501-910530342_medium.mp4", "tile": 73, "duration": 11.36},
    {"id": "rain-train-window-363703", "name": "Neon train", "url": "https://cdn.pixabay.com/video/2026/07/13/363703_medium.mp4", "tile": 74, "duration": 10.0},
    {"id": "rain-umbrella-night-368211", "name": "Rainy street", "url": "https://cdn.pixabay.com/video/2026/08/02/368211_medium.mp4", "tile": 75, "duration": 22.8},
    {"id": "sea-coast-japan-197525-905005651", "name": "Quiet coast", "url": "https://cdn.pixabay.com/video/2024/01/21/197525-905005651_medium.mp4", "tile": 76, "duration": 37.845},
    {"id": "sea-full-moon-227600", "name": "Moonlit surf", "url": "https://cdn.pixabay.com/video/2024/08/20/227600_medium.mp4", "tile": 77, "duration": 15.041783},
    {"id": "sea-ocean-waves-269357", "name": "Moonlit boat", "url": "https://cdn.pixabay.com/video/2025/04/02/269357_medium.mp4", "tile": 78, "duration": 6.366667},
    {"id": "sky-clouds-moon-243117", "name": "Violet sky", "url": "https://cdn.pixabay.com/video/2024/11/24/243117_medium.mp4", "tile": 79, "duration": 10.033333},
    {"id": "snow-cold-scenery-167736-837429014", "name": "Snowy shrine", "url": "https://cdn.pixabay.com/video/2023/06/18/167736-837429014_medium.mp4", "tile": 80, "duration": 10.046667},
    {"id": "starry-sky-milky-170888-844432955", "name": "Starry pines", "url": "https://cdn.pixabay.com/video/2023/07/10/170888-844432955_medium.mp4", "tile": 81, "duration": 7.55},
    {"id": "starry-sky-milky-285663", "name": "Starry cottage", "url": "https://cdn.pixabay.com/video/2025/06/13/285663_medium.mp4", "tile": 82, "duration": 27.05},
    {"id": "steaming-mug-hot-322244", "name": "Warm coffee", "url": "https://cdn.pixabay.com/video/2025/12/16/322244_medium.mp4", "tile": 83, "duration": 15.3},
    {"id": "table-epoxy-lounge-298514", "name": "Alpine table", "url": "https://cdn.pixabay.com/video/2025/08/19/298514_medium.mp4", "tile": 84, "duration": 20.833333},
    {"id": "train-commuting-train-170887-844432947", "name": "City commute", "url": "https://cdn.pixabay.com/video/2023/07/10/170887-844432947_medium.mp4", "tile": 85, "duration": 12.583333},
    {"id": "train-silence-anime-286593", "name": "Sunset train", "url": "https://cdn.pixabay.com/video/2025/06/19/286593_medium.mp4", "tile": 86, "duration": 10.433333},
    {"id": "tree-foliage-rain-176026-854526263", "name": "Green leaves", "url": "https://cdn.pixabay.com/video/2023/08/14/176026-854526263_medium.mp4", "tile": 87, "duration": 15.266667},
    {"id": "tree-forest-rain-205213-926480936", "name": "Rainy woodland", "url": "https://cdn.pixabay.com/video/2024/03/22/205213-926480936_medium.mp4", "tile": 88, "duration": 15.033333},
    {"id": "tree-leaves-rain-172759-847869814", "name": "Wet leaves", "url": "https://cdn.pixabay.com/video/2023/07/22/172759-847869814_medium.mp4", "tile": 89, "duration": 10.133333},
    {"id": "tree-stars-starry-176198-855206384", "name": "Violet branches", "url": "https://cdn.pixabay.com/video/2023/08/15/176198-855206384_medium.mp4", "tile": 90, "duration": 7.566667},
    {"id": "trees-foliage-forest-171443-845465129", "name": "Mountain forest", "url": "https://cdn.pixabay.com/video/2023/07/13/171443-845465129_medium.mp4", "tile": 91, "duration": 15.266667},
    {"id": "trees-forest-moon-183969-872226597", "name": "Night blossoms", "url": "https://cdn.pixabay.com/video/2023/10/07/183969-872226597_medium.mp4", "tile": 92, "duration": 7.658333},
    {"id": "trees-leaves-snow-190667-888333548", "name": "Winter branches", "url": "https://cdn.pixabay.com/video/2023/11/25/190667-888333548_medium.mp4", "tile": 93, "duration": 6.228333},
    {"id": "turtle-moon-night-289572", "name": "Turtles at night", "url": "https://cdn.pixabay.com/video/2025/07/04/289572_medium.mp4", "tile": 94, "duration": 5.875},
    {"id": "wallpaper-pixel-anime-247738", "name": "Neon city", "url": "https://cdn.pixabay.com/video/2024/12/19/247738_medium.mp4", "tile": 95, "duration": 10.2},
    {"id": "wallpaper-pixel-anime-247740", "name": "Sunset crossing", "url": "https://cdn.pixabay.com/video/2024/12/19/247740_medium.mp4", "tile": 96, "duration": 19.0},
    {"id": "wallpaper-pixel-anime-247741", "name": "Kyoto evening", "url": "https://cdn.pixabay.com/video/2024/12/19/247741_medium.mp4", "tile": 97, "duration": 6.0},
    {"id": "waterfall-trees-forest-208570", "name": "Forest waterfall", "url": "https://cdn.pixabay.com/video/2024/04/19/208570_medium.mp4", "tile": 98, "duration": 15.533333},
    {"id": "waves-ocean-sea-372255", "name": "Moonlit ocean", "url": "https://cdn.pixabay.com/video/2026/08/23/372255_medium.mp4", "tile": 99, "duration": 15.041667},
    {"id": "winter-snow-nature-336603", "name": "Snowy walk", "url": "https://cdn.pixabay.com/video/2026/02/25/336603_medium.mp4", "tile": 100, "duration": 18.083333},
];
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
const SceneVideo = React.memo(function SceneVideo({ scene, paused, animate }: { scene: SceneDef; paused: boolean; animate: boolean }) {
    const root = useRef<HTMLDivElement | null>(null);
    const [error,setError]=useState(false);
    const fallback=useImageUrl('rain');
    const control = useRef({ paused, animate }); control.current = { paused, animate };
    const [portrait, setPortrait] = useState(() => window.matchMedia('(orientation: portrait)').matches);
    useEffect(() => { const q=window.matchMedia('(orientation: portrait)');const f=()=>setPortrait(q.matches);q.addEventListener('change',f);return()=>q.removeEventListener('change',f); }, []);
    const o=portrait?'p':'l';const src=scene.url ? (portrait ? scene.url : scene.url.replace('_medium.mp4','_large.mp4')) : sceneMedia(scene.id,o,'mp4');
    useEffect(() => {
        setError(false);const vs=Array.from<HTMLVideoElement>(root.current!.querySelectorAll('video'));let active=0,blending=false,dead=false,raf=0,started=false;
        const play=(v:HTMLVideoElement)=>v.play().catch(()=>{});
        const sync=()=>{if(control.current.paused||!control.current.animate||document.hidden){vs.forEach(v=>v.pause());}else{play(vs[active]);if(blending)play(vs[1-active]);}};
        const paint=()=>{if(dead)return;const a=vs[active],b=vs[1-active];
            if(!started&&a.readyState>=2){started=true;sync();}
            const run=!control.current.paused&&control.current.animate&&!document.hidden;
            if(!run){vs.forEach(v=>{if(!v.paused)v.pause();});}
            else if(started){if(a.paused&&!a.ended)play(a);
                const end=scene.duration || a.duration;
                const d=Math.min(1.5,end/4);
                if(!blending&&Number.isFinite(end)&&a.currentTime>=end-d&&b.readyState>=2){blending=true;b.currentTime=0;play(b);}
                if(blending){if(b.paused)play(b);const mix=Math.min(1,b.currentTime/d);a.style.opacity=String(1-mix);b.style.opacity='1';
                    if(mix>=1){a.pause();a.currentTime=0;a.style.zIndex='0';a.style.opacity='1';b.style.zIndex='1';active=1-active;blending=false;root.current!.dataset.wraps=String(Number(root.current!.dataset.wraps||0)+1);}
                }
            }raf=requestAnimationFrame(paint);
        };
        vs[0].style.zIndex='1';vs[1].style.zIndex='0';raf=requestAnimationFrame(paint);
        document.addEventListener('visibilitychange',sync);window.addEventListener('pointerdown',sync);
        return()=>{dead=true;cancelAnimationFrame(raf);vs.forEach(v=>v.pause());document.removeEventListener('visibilitychange',sync);window.removeEventListener('pointerdown',sync);};
    },[src]);
    return <div ref={root} className="ft-scene-stage" key={src} style={{backgroundImage:error&&fallback?`url(${fallback})`:'linear-gradient(135deg,#182226,#090d13)',backgroundSize:'cover',backgroundPosition:'center'}}>{error&&<span className="ft-stream-status">This scene couldn't load. Choose another background in Settings.</span>}{[0,1].map(n=><video onError={()=>setError(true)} style={{objectFit:scene.preview==='longer'?'contain':portrait?'cover':'contain'}} key={n} className="ft-bg ft-bgvideo" src={src} muted playsInline disablePictureInPicture disableRemotePlayback preload="auto" aria-hidden="true" />)}</div>;
});

interface BgMedia { url: string; kind: 'image' | 'video' }
const Background = React.memo(function Background({ kind, id, scrim, builtinSrc, linkBg, uploadBg, paused, animate, customFit }: {
    kind: BgKind; id?: string; scrim: number;
    builtinSrc: string | null; linkBg: BgMedia | null; uploadBg: BgMedia | null; paused?: boolean; animate: boolean; customFit: 'cover' | 'contain';
}) {
    let style: React.CSSProperties = {};
    if (kind === 'builtin' && builtinSrc) style = { backgroundImage: `url(${builtinSrc})` };
    else if (kind === 'gradient') style = { backgroundImage: (GRADIENTS.find((g) => g.id === id) || GRADIENTS[0]).css };
    else if (kind === 'link' && linkBg?.kind === 'image') style = { backgroundImage: `url(${linkBg.url})` };
    else if (kind === 'upload' && uploadBg?.kind === 'image') style = { backgroundImage: `url(${uploadBg.url})` };
    else if (kind === 'link' || kind === 'upload' || kind === 'builtin') style = { backgroundImage: GRADIENTS[0].css };
    if ((kind === 'link' || kind === 'upload') && style.backgroundImage) style = {...style, backgroundSize: customFit, backgroundRepeat:'no-repeat',backgroundColor:'#101418'};
    const animId = ANIMATED_BGS.some((a) => a.id === id) ? id! : 'aurora';
    const scene = kind === 'scene' ? [...SCENES, ...SCENES_LONG, ...SCENES_EXTRA].find((s) => s.id === id) : undefined;
    const linkVideo = kind === 'link' && linkBg?.kind === 'video' ? linkBg.url : kind === 'upload' && uploadBg?.kind === 'video' ? uploadBg.url : null;
    return <>
        {scene
            ? <SceneVideo scene={scene} paused={!!paused} animate={animate} />
            : linkVideo
                ? <CustomVideo src={linkVideo} paused={!!paused} animate={animate} fit={customFit} />
                : kind === 'animated'
                    ? <div className={`ft-anim ft-anim-${animId}`} aria-hidden="true"><i /><i /><i /></div>
                    : <div className="ft-bg" style={style} />}
        <div className="ft-scrim" style={{ opacity: scrim }} />
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
    const catalog=useImageUrl(scene.preview || 'catalog');const cols=scene.preview==='curated'?3:8,rows=scene.preview==='curated'?3:13;
    return <button type="button" className={`ft-bgswatch ft-bgswatch-named ${active ? 'is-active' : ''}`} aria-label={`${scene.name} animated scene`} onClick={onPick}>
        {scene.tile != null ? <span className="ft-bgswatch-img" style={{backgroundImage: catalog ? `url(${catalog})` : undefined, backgroundSize:`${cols*100}% ${rows*100}%`,backgroundPosition: `${(scene.tile % cols)*100/(cols-1)}% ${Math.floor(scene.tile/cols)*100/(rows-1)}%`}} /> : <img className="ft-bgswatch-img" src={scenePoster(scene, 'p')} alt="" loading="lazy" decoding="async" />}
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

const TopBar = React.memo(function TopBar({ chip, panel, fullscreenSupported, onFullscreen, onTasks, onSettings, onMinimize, onPopout }: {
    chip: string | null; panel: 'none' | 'tasks' | 'settings'; fullscreenSupported: boolean;
    onFullscreen: () => void; onTasks: () => void; onSettings: () => void; onMinimize: () => void; onPopout: () => void;
}) {
    return <header className="ft-topbar">
        <span className="ft-brand">Study focus</span>
        {chip ? <span className="ft-chip" title="Today's completed focus time">{chip}</span> : null}
        <span className="ft-topbar-actions">
            {fullscreenSupported ? <button type="button" className="ft-iconbtn" aria-label="Fullscreen" onClick={onFullscreen}><SvgIcon d={ICON_FULLSCREEN} /></button> : null}
            <button type="button" className="ft-iconbtn" aria-label="Open timer in its own window" title="Open timer in its own window" onClick={onPopout}><SvgIcon d={ICON_POPOUT} /></button>
            <button type="button" className="ft-iconbtn" aria-label="Minimize to a small timer" title="Minimize to a small timer" onClick={onMinimize}><SvgIcon d={ICON_MINIMIZE} /></button>
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
                {SCENES.map((s) => <SceneSwatch key={s.id} scene={s} active={bg.kind === 'scene' && bg.id === s.id} onPick={() => patch({ background: { kind: 'scene', id: s.id } })} />)}
                </div><details className="ft-extra-scenes"><summary>Longer study scenes ({SCENES_LONG.length})</summary><p className="ft-field-hint">20-77 seconds of source footage per scene, with a soft end-to-start dissolve. Wide scenes keep their whole composition on phones with plain dark space.</p><div className="ft-bggrid">{SCENES_LONG.map((s) => <SceneSwatch key={s.id} scene={s} active={bg.kind === 'scene' && bg.id === s.id} onPick={() => patch({ background: { kind: 'scene', id: s.id } })} />)}</div></details><details className="ft-extra-scenes"><summary>Earlier scenes ({SCENES_EXTRA.length})</summary><p className="ft-field-hint">Videos stream only when chosen. If a source is unavailable, choose another scene. Animation and pop-out support depend on your browser.</p><div className="ft-bggrid">{SCENES_EXTRA.map((s) => <SceneSwatch key={s.id} scene={s} active={bg.kind === 'scene' && bg.id === s.id} onPick={() => patch({ background: { kind: 'scene', id: s.id } })} />)}</div></details><div style={{display:'none'}}>
            </div>
            <Toggle label="Animate backgrounds" hint="Motion starts by itself. Turn off to pause motion and save battery." checked={settings.bgAnimate !== false} onChange={(v) => patch({ bgAnimate: v })} />
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
                <span className="ft-field-label">Pinterest, image or video link</span>
                <span className="ft-field-hint">Paste a full public Pinterest pin link (pinterest.com/pin/…), a direct image link (JPG, PNG, GIF) or a direct video link (mp4, webm). Anything you add is fitted to fill the screen, cropped to match its own shape, never stretched. Saved links reload each visit. When a direct image load is blocked, the link you paste is fetched through a public image relay (weserv.nl), so never use private boards or private URLs.</span>
                <span className="ft-inrow">
                    <input className="ft-textinput" value={bgInput} placeholder="https://www.pinterest.com/pin/…" onChange={(e) => setBgInput(e.target.value)} inputMode="url" />
                    <button type="button" className="ft-ghost is-compact" onClick={applyBgLink}>Use link</button>
                </span>
                <span className="ft-inrow">
                    <label className="ft-ghost is-compact ft-filebtn">Upload image or video<input type="file" accept="image/*,video/*" aria-label="Upload background image or video file" className="ft-fileinput" onChange={(e) => uploadBg(e.target.files?.[0])} /></label>
                    <span className="ft-field-hint">Lasts until the tab reloads.</span>
                </span>
                {bgStatus ? <span className="ft-field-hint">{bgStatus}</span> : null}
            </div>
            <div className="ft-field is-stacked"><span className="ft-field-label">Imported image or video fit</span><span className="ft-inrow"><button type="button" className={`ft-chipbtn ${settings.customFit !== 'contain' ? 'is-active' : ''}`} onClick={()=>patch({customFit:'cover'})}>Crop to fill</button><button type="button" className={`ft-chipbtn ${settings.customFit === 'contain' ? 'is-active' : ''}`} onClick={()=>patch({customFit:'contain'})}>Show whole image</button></span><span className="ft-field-hint">Crop fills the screen. Show whole image preserves the full composition with plain dark space where needed. No blur-fill or stretching.</span></div>
            <div className="ft-field">
                <span className="ft-field-label">Darken background</span>
                <input type="range" min={0.15} max={0.85} step={0.05} value={settings.scrim} aria-label="Background darkness" onChange={(e) => patch({ scrim: parseFloat(e.target.value) })} />
            </div>
        </section>

        <div className="ft-field">
            <span className="ft-field-label">Start over</span>
            <button type="button" className="ft-ghost is-compact" onClick={onResetSettings}>Reset settings</button>
        </div>
        <p className="ft-field-hint">Your settings, tasks and stats stay in this browser. Link backgrounds and sounds are fetched from the sites you paste, through the weserv.nl image relay when a direct load is blocked; Spotify playback happens inside Spotify's official player; selected catalog videos stream from Pixabay's CDN. {savedMessage}</p>
    </aside>;
});

export function App() {
    // A window opened with ?popout=1 is a remote display for the main tab, not a second timer.
    if (typeof window !== 'undefined' && /[?&]popout=1/.test(window.location.search)) return <PopoutMirror />;
    return <MainApp />;
}

function MainApp() {
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
    const resolveLinkBg = useCallback(async (source: string): Promise<boolean> => {
        setBgStatus('Loading background…');
        try {
            const trimmed = source.trim();
            // Direct video links play cross-origin in a <video> element without a fetch.
            if (/\.(mp4|webm|mov|m4v)(\?|#|$)/i.test(trimmed) && !/pin(it)?\./i.test(trimmed)) {
                setLinkBg((old) => { if (old && old.url.startsWith('blob:')) URL.revokeObjectURL(old.url); return { url: trimmed, kind: 'video' }; });
                setBgStatus('Background applied.');
                return true;
            }
            const blob = await resolveImageSource(source);
            if (blob.type.startsWith('video/')) {
                setLinkBg((old) => { if (old && old.url.startsWith('blob:')) URL.revokeObjectURL(old.url); return { url: URL.createObjectURL(blob), kind: 'video' }; });
            } else {
                setLinkBg((old) => { if (old && old.url.startsWith('blob:')) URL.revokeObjectURL(old.url); return { url: URL.createObjectURL(blob), kind: 'image' }; });
            }
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
        if (!settings.accent || !settings.font || !settings.clockStyle || !settings.clockSize || typeof settings.showDots !== 'boolean' || typeof settings.spotifyOpen !== 'boolean' || settings.spotify === undefined || typeof settings.bgAnimate !== 'boolean') {
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

    // keep display in sync when durations are edited while idle (phase switches preserve progress instead)
    useEffect(() => {
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
        <Background kind={bg.kind} id={bg.id} scrim={settings.scrim} builtinSrc={builtinSrc} linkBg={linkBg} uploadBg={uploadBgMedia} paused={compact} animate={settings.bgAnimate !== false} customFit={settings.customFit || 'cover'} />

        <TopBar chip={chip} panel={panel} fullscreenSupported={fullscreenSupported} onFullscreen={toggleFullscreen} onTasks={toggleTasks} onSettings={toggleSettings} onMinimize={minimize} onPopout={popOut} />

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
