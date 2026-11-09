import React, { useMemo } from 'react';

// Lightweight celebration pieces. Pure CSS animation (keyframes in
// style.css), no canvas, no timers beyond the parent's removal timeout.
// Honors prefers-reduced-motion via the stylesheet (pieces just fade).

interface Piece {
    left: number; delay: number; dur: number; hue: number;
    dx: number; size: number; round: boolean; spin: number;
}

export const Confetti = React.memo(function Confetti({ count = 44 }: { count?: number }) {
    const pieces = useMemo<Piece[]>(() => Array.from({ length: count }, () => ({
        left: Math.random() * 100,
        delay: Math.random() * 0.35,
        dur: 1.5 + Math.random() * 1.1,
        hue: Math.floor(Math.random() * 360),
        dx: (Math.random() * 2 - 1) * 70,
        size: 6 + Math.random() * 6,
        round: Math.random() < 0.4,
        spin: Math.floor(Math.random() * 360),
    })), [count]);
    return <div className="pf-confetti" aria-hidden="true">
        {pieces.map((p, i) => <span key={i} style={{
            left: `${p.left}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.dur}s`,
            background: `hsl(${p.hue} 90% 65%)`,
            width: p.size,
            height: p.round ? p.size : p.size * 0.45,
            borderRadius: p.round ? '50%' : 2,
            transform: `rotate(${p.spin}deg)`,
            ['--dx' as string]: `${p.dx}px`,
        }} />)}
    </div>;
});

// Floating "+N XP" chip; the parent removes it after its animation ends.
export const XpFloater = React.memo(function XpFloater({ amount, label }: { amount: number; label?: string }) {
    return <div className="pf-xpfloat" role="status">+{amount} XP{label ? ` · ${label}` : ''}</div>;
});
