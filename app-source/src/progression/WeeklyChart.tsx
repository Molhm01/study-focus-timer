import React, { useMemo, useState } from 'react';
import { DayStat, todayKey } from './engine';

// Last-7-days focus chart. Plain SVG, no dependencies. Tapping a bar (or
// keyboard-selecting it) pins its exact value below the chart.

interface DayPoint { key: string; label: string; min: number; isToday: boolean }

const WEEKDAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export const WeeklyChart = React.memo(function WeeklyChart({ days }: { days: Record<string, DayStat> }) {
    const data = useMemo<DayPoint[]>(() => {
        const out: DayPoint[] = [];
        for (let i = 6; i >= 0; i--) {
            const d = new Date();
            d.setDate(d.getDate() - i);
            const key = todayKey(d);
            out.push({
                key,
                label: WEEKDAYS[d.getDay()],
                min: Math.round((days[key]?.focusSec || 0) / 60),
                isToday: i === 0,
            });
        }
        return out;
    }, [days]);
    const [sel, setSel] = useState(6);
    const max = Math.max(30, ...data.map((d) => d.min));
    const chosen = data[sel] || data[data.length - 1];
    const best = Math.max(...data.map((d) => d.min));
    const fmt = (m: number) => (m >= 60 ? `${Math.floor(m / 60)}h${m % 60 ? ` ${m % 60}m` : ''}` : `${m} min`);

    return <div className="pf-week">
        <div className="pf-week-bars" role="group" aria-label="Focus minutes, last 7 days">
            {data.map((d, i) => <button key={d.key} type="button"
                className={`pf-week-bar ${i === sel ? 'is-active' : ''} ${d.min === best && best > 0 ? 'is-best' : ''}`}
                aria-label={`${d.label}${d.isToday ? ' (today)' : ''}: ${fmt(d.min)}`}
                onClick={() => setSel(i)}>
                <span className="pf-week-fill" style={{ height: `${Math.max(3, Math.round((d.min / max) * 100))}%` }} />
                <span className="pf-week-day">{d.label}</span>
            </button>)}
        </div>
        <div className="pf-week-caption">
            {chosen.isToday ? 'Today' : chosen.label}: <strong>{fmt(chosen.min)}</strong>
            {chosen.min === best && best > 0 ? ' · best this week' : ''}
        </div>
    </div>;
});
