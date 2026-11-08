import React from 'react';

// ---------- SVG avatar ----------
// Fully self-contained vector avatar: base creature + accessory layers.
// No external images, nothing uploaded anywhere, renders at any size.

export interface AvatarSpec {
    base: string;
    hat: string;
    eyes: string;
    aura: string;
    frame: string;
}

const FRAME_COLORS: Record<string, string> = {
    'frame-bronze': '#cd8b4a',
    'frame-silver': '#c9d2dc',
    'frame-gold': '#ffd700',
    'frame-emerald': '#4fce8f',
    'frame-diamond': '#a8ecff',
};

function Star({ x, y, r, fill }: { x: number; y: number; r: number; fill: string }) {
    const pts: string[] = [];
    for (let i = 0; i < 10; i++) {
        const ang = (Math.PI / 5) * i - Math.PI / 2;
        const rad = i % 2 === 0 ? r : r * 0.45;
        pts.push(`${(x + rad * Math.cos(ang)).toFixed(1)},${(y + rad * Math.sin(ang)).toFixed(1)}`);
    }
    return <polygon points={pts.join(' ')} fill={fill} />;
}

function BaseLayer({ base }: { base: string }) {
    switch (base) {
        case 'cat':
            return <g>
                <polygon points="28,26 22,8 42,20" fill="#f4a261" />
                <polygon points="68,26 74,8 54,20" fill="#f4a261" />
                <circle cx="48" cy="50" r="27" fill="#f4a261" />
                <circle cx="38" cy="46" r="3.4" fill="#26221f" />
                <circle cx="58" cy="46" r="3.4" fill="#26221f" />
                <polygon points="44,55 52,55 48,60" fill="#e76f51" />
                <path d="M48 60 q0 5 -6 5 M48 60 q0 5 6 5" stroke="#26221f" strokeWidth="1.6" fill="none" strokeLinecap="round" />
                <path d="M16 52 h12 M17 59 l11 -3 M80 52 h-12 M79 59 l-11 -3" stroke="#26221f" strokeWidth="1.4" strokeLinecap="round" />
            </g>;
        case 'owl':
            return <g>
                <polygon points="30,24 24,10 44,20" fill="#8d6e63" />
                <polygon points="66,24 72,10 52,20" fill="#8d6e63" />
                <ellipse cx="48" cy="52" rx="26" ry="28" fill="#8d6e63" />
                <circle cx="38" cy="46" r="9" fill="#fff" />
                <circle cx="58" cy="46" r="9" fill="#fff" />
                <circle cx="38" cy="46" r="3.6" fill="#26221f" />
                <circle cx="58" cy="46" r="3.6" fill="#26221f" />
                <polygon points="44,56 52,56 48,62" fill="#ffb74d" />
                <path d="M34 68 q14 8 28 0" stroke="#6d4c41" strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>;
        case 'fox':
            return <g>
                <polygon points="26,28 18,6 44,18" fill="#e76f51" />
                <polygon points="70,28 78,6 52,18" fill="#e76f51" />
                <polygon points="29,24 24,11 40,19" fill="#f4d8ce" />
                <polygon points="67,24 72,11 56,19" fill="#f4d8ce" />
                <circle cx="48" cy="50" r="27" fill="#e76f51" />
                <ellipse cx="48" cy="60" rx="13" ry="10" fill="#f4d8ce" />
                <circle cx="38" cy="45" r="3.4" fill="#26221f" />
                <circle cx="58" cy="45" r="3.4" fill="#26221f" />
                <circle cx="48" cy="56" r="3.4" fill="#26221f" />
            </g>;
        case 'robot':
            return <g>
                <line x1="48" y1="14" x2="48" y2="24" stroke="#7fd6cc" strokeWidth="3" strokeLinecap="round" />
                <circle cx="48" cy="12" r="4" fill="#7fd6cc" />
                <rect x="21" y="42" width="6" height="14" rx="3" fill="#5fb3a9" />
                <rect x="69" y="42" width="6" height="14" rx="3" fill="#5fb3a9" />
                <rect x="24" y="24" width="48" height="44" rx="10" fill="#90e0d4" />
                <rect x="32" y="38" width="12" height="10" rx="3" fill="#123f3a" />
                <rect x="52" y="38" width="12" height="10" rx="3" fill="#123f3a" />
                <rect x="36" y="56" width="24" height="4" rx="2" fill="#123f3a" opacity="0.7" />
            </g>;
        case 'star':
            return <g>
                <Star x={48} y={48} r={30} fill="#ffd166" />
                <circle cx="40" cy="46" r="3.4" fill="#5c4400" />
                <circle cx="56" cy="46" r="3.4" fill="#5c4400" />
                <path d="M41 56 q7 6 14 0" stroke="#5c4400" strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>;
        case 'sprout':
            return <g>
                <path d="M48 34 q-16 -18 -28 -6 q14 12 28 6" fill="#7fb069" />
                <path d="M48 34 q16 -18 28 -6 q-14 12 -28 6" fill="#94c77d" />
                <circle cx="48" cy="56" r="24" fill="#a3c585" />
                <circle cx="40" cy="52" r="3.2" fill="#2e4423" />
                <circle cx="56" cy="52" r="3.2" fill="#2e4423" />
                <path d="M41 62 q7 6 14 0" stroke="#2e4423" strokeWidth="2" fill="none" strokeLinecap="round" />
            </g>;
        case 'blob':
            return <g>
                <path d="M48 22 q26 0 27 24 q1 26 -25 28 q-28 2 -29 -24 q-1 -24 27 -28" fill="#b388eb" />
                <circle cx="40" cy="48" r="3.6" fill="#33204f" />
                <circle cx="57" cy="48" r="3.6" fill="#33204f" />
                <path d="M42 58 q6 5 13 0" stroke="#33204f" strokeWidth="2" fill="none" strokeLinecap="round" />
                <circle cx="33" cy="57" r="3" fill="#d3b8f5" opacity="0.8" />
                <circle cx="64" cy="57" r="3" fill="#d3b8f5" opacity="0.8" />
            </g>;
        case 'moon':
        default:
            return <g>
                <circle cx="48" cy="48" r="28" fill="#2b3a67" />
                <path d="M58 26 a26 26 0 1 0 12 44 a20 20 0 1 1 -12 -44" fill="#ffd97a" />
                <circle cx="36" cy="42" r="2.6" fill="#8fa3d9" />
                <circle cx="30" cy="56" r="1.8" fill="#8fa3d9" />
            </g>;
    }
}

function AuraLayer({ aura }: { aura: string }) {
    switch (aura) {
        case 'sparkle':
            return <g>
                <Star x={14} y={22} r={4} fill="#ffe9a8" />
                <Star x={82} y={18} r={3.2} fill="#ffe9a8" />
                <Star x={86} y={66} r={4} fill="#ffe9a8" />
                <Star x={12} y={72} r={3} fill="#ffe9a8" />
            </g>;
        case 'calm-ring':
            return <circle cx="48" cy="48" r="42" fill="none" stroke="#9fd8c6" strokeWidth="2" strokeDasharray="4 7" opacity="0.9" />;
        case 'ember':
            return <g>
                <circle cx="48" cy="48" r="41" fill="none" stroke="#ff9c5b" strokeWidth="2.4" opacity="0.35" />
                <circle cx="48" cy="48" r="37" fill="none" stroke="#ff7b3b" strokeWidth="1.6" opacity="0.5" />
                <Star x={20} y={24} r={3} fill="#ffb27b" />
                <Star x={78} y={30} r={2.6} fill="#ffb27b" />
            </g>;
        case 'galaxy':
            return <g>
                <ellipse cx="48" cy="48" rx="44" ry="16" fill="none" stroke="#c39bff" strokeWidth="1.6" opacity="0.8" transform="rotate(-18 48 48)" />
                <ellipse cx="48" cy="48" rx="44" ry="16" fill="none" stroke="#7fb6ff" strokeWidth="1.2" opacity="0.5" transform="rotate(22 48 48)" />
                <circle cx="86" cy="36" r="2.4" fill="#e3d4ff" />
                <circle cx="10" cy="62" r="2" fill="#e3d4ff" />
            </g>;
        default:
            return null;
    }
}

function EyesLayer({ eyes }: { eyes: string }) {
    switch (eyes) {
        case 'glasses':
            return <g fill="none" stroke="#f2f2f2" strokeWidth="2.2">
                <circle cx="38" cy="47" r="8" />
                <circle cx="58" cy="47" r="8" />
                <path d="M46 47 h4 M30 45 l-8 -3 M66 45 l8 -3" strokeLinecap="round" />
            </g>;
        case 'shades':
            return <g>
                <rect x="29" y="41" width="17" height="11" rx="4" fill="#15181f" />
                <rect x="50" y="41" width="17" height="11" rx="4" fill="#15181f" />
                <rect x="44" y="44" width="8" height="3" rx="1.5" fill="#15181f" />
            </g>;
        case 'monocle':
            return <g fill="none" stroke="#ffd97a" strokeWidth="2">
                <circle cx="58" cy="47" r="8.5" />
                <path d="M62 55 q3 8 -2 14" strokeLinecap="round" />
            </g>;
        case 'star-eyes':
            return <g>
                <Star x={38} y={47} r={5.4} fill="#fff3c4" />
                <Star x={58} y={47} r={5.4} fill="#fff3c4" />
            </g>;
        default:
            return null;
    }
}

function HatLayer({ hat }: { hat: string }) {
    switch (hat) {
        case 'headphones':
            return <g>
                <path d="M24 44 a24 24 0 0 1 48 0" fill="none" stroke="#e05d7a" strokeWidth="5" strokeLinecap="round" />
                <rect x="19" y="40" width="10" height="16" rx="5" fill="#e05d7a" />
                <rect x="67" y="40" width="10" height="16" rx="5" fill="#e05d7a" />
            </g>;
        case 'beanie':
            return <g>
                <path d="M23 34 a25 22 0 0 1 50 0 z" fill="#5b8def" />
                <rect x="21" y="32" width="54" height="9" rx="4.5" fill="#7ba4f4" />
                <circle cx="48" cy="11" r="5" fill="#dce7ff" />
            </g>;
        case 'halo':
            return <ellipse cx="48" cy="12" rx="16" ry="4.6" fill="none" stroke="#ffe08a" strokeWidth="3.4" />;
        case 'crown':
            return <g>
                <polygon points="30,30 33,12 42,22 48,8 54,22 63,12 66,30" fill="#ffd700" stroke="#c9a400" strokeWidth="1.4" strokeLinejoin="round" />
                <rect x="29" y="29" width="38" height="6" rx="3" fill="#ffd700" stroke="#c9a400" strokeWidth="1.4" />
                <circle cx="48" cy="18" r="2.4" fill="#e05d7a" />
            </g>;
        case 'wizard':
            return <g>
                <polygon points="48,2 30,34 66,34" fill="#5a4a8a" />
                <polygon points="40,20 48,2 52,12" fill="#6d5ba6" />
                <ellipse cx="48" cy="34" rx="27" ry="5.4" fill="#4a3d75" />
                <Star x={44} y={22} r={2.6} fill="#ffe08a" />
            </g>;
        case 'laurel':
            return <g fill="none" stroke="#7fb069" strokeWidth="3" strokeLinecap="round">
                <path d="M26 36 q6 -16 22 -20" />
                <path d="M70 36 q-6 -16 -22 -20" />
                <path d="M32 30 l-6 -2 M38 24 l-5 -4 M46 20 l-3 -5 M64 30 l6 -2 M58 24 l5 -4 M50 20 l3 -5" strokeWidth="2.2" />
            </g>;
        default:
            return null;
    }
}

function FrameLayer({ frame }: { frame: string }) {
    const color = FRAME_COLORS[frame];
    if (!color) return null;
    return <g>
        <circle cx="48" cy="48" r="45" fill="none" stroke={color} strokeWidth="3" />
        {frame === 'frame-gold' || frame === 'frame-emerald' || frame === 'frame-diamond'
            ? <circle cx="48" cy="3.4" r="2.8" fill={color} />
            : null}
        {frame === 'frame-diamond' ? <g fill={color}><circle cx="3.4" cy="48" r="2.4" /><circle cx="92.6" cy="48" r="2.4" /><circle cx="48" cy="92.6" r="2.4" /></g> : null}
    </g>;
}

export const Avatar = React.memo(function Avatar({ spec, size = 96 }: { spec: AvatarSpec; size?: number }) {
    return <svg width={size} height={size} viewBox="0 0 96 96" role="img" aria-label="Profile avatar">
        <circle cx="48" cy="48" r="45" fill="rgba(255,255,255,0.06)" />
        <AuraLayer aura={spec.aura} />
        <BaseLayer base={spec.base} />
        <EyesLayer eyes={spec.eyes} />
        <HatLayer hat={spec.hat} />
        <FrameLayer frame={spec.frame} />
    </svg>;
});
