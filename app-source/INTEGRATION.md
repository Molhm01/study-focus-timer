# Integrating the progression module into App.tsx

The progression feature is self-contained under `src/progression/`. It reads
the app's existing localStorage keys (`sft:ft-stats.v1`, `sft:ft-tasks.v1`,
`sft:ft-session.v1`) read-only and adds three new keys (`sft:ft-profile.v1`,
`sft:ft-progress-meta.v1`, `sft:ft-progress-ledger.v1`). No existing state
shape changes; guest mode, tasks, stats and settings are untouched. The
ledger records each completed task's id once, so lifetime task XP survives
unticking, deleting and clearing completed tasks.

Integration is four small edits. Apply them to the current repaired source,
not to any older base.

## 1. Import the styles

In `src/style.css`, append the contents of
`src/progression/progression.css` (or `@import './progression/progression.css';`
at the top).

## 2. Import the components

In `src/App.tsx`, near the top:

```ts
import { ProfilePanel, PresenceBeacon } from './progression/ProfilePanel';
import { recordTaskCompletion } from './progression/useProgression';
```

## 3. Widen the panel state and add the top-bar button

In `MainApp`, change:

```ts
const [panel, setPanel] = useState<'none' | 'tasks' | 'settings'>('none');
```

to:

```ts
const [panel, setPanel] = useState<'none' | 'tasks' | 'settings' | 'profile'>('none');
```

In `TopBar`'s props type, widen `panel` the same way and add
`onProfile: () => void;` to the props. Add this button inside
`ft-topbar-actions` (before the tasks button reads well):

```tsx
<button type="button" className={`ft-iconbtn ${panel === 'profile' ? 'is-active' : ''}`} aria-label="Profile and progress" title="Profile and progress" onClick={onProfile}>
    <SvgIcon d={'M12 12a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9|M4 21c0-4 3.5-6.5 8-6.5s8 2.5 8 6.5'} />
</button>
```

In `MainApp`, next to `toggleTasks` / `toggleSettings`, add:

```ts
const toggleProfile = () => setPanel((p) => (p === 'profile' ? 'none' : 'profile'));
```

and pass `onProfile={toggleProfile}` to `<TopBar ... />`.

## 4. Render the panel and the presence beacon

Inside the root `<div className="ft-root ...">`, next to the other sheets:

```tsx
{panel === 'profile' ? <ProfilePanel onClose={() => setPanel('none')} /> : null}
```

and once, anywhere inside the same root (it renders nothing and is inert
until the backend config is filled in):

```tsx
<PresenceBeacon />
```

## 5. Capture task completions synchronously (closes the complete-then-delete race)

Polling alone can miss a task that is completed and then deleted or cleared
within the poll interval. In `TasksSheet`, the completed-toggle onClick
currently starts `onClick={() => setTasksState((prev) => ...`. Change it to
record the completion BEFORE the state update:

```tsx
onClick={() => { if (!t.completed) recordTaskCompletion(t.id); setTasksState((prev) => ({ ...prev, tasks: prev.tasks.map((x) => x.id === t.id ? { ...x, completed: !x.completed } : x) })); }}
```

With this hook the ledger entry is written in the same gesture, so an
immediate delete or "Clear completed" cannot lose it. The beacon/panel
polling stays as migration for pre-existing completed tasks and as a
fallback.

## Optional: instant refresh on session completion

The panel re-reads saved stats every 2 seconds while open, so this is not
required. For immediate updates after a focus session completes, add one
line inside `completePhase` right after `setStats(...)`:

```ts
window.dispatchEvent(new Event('sft:progress'));
```

## What stays off until Firebase is connected

`src/progression/backend.ts` ships with an empty `FIREBASE_CONFIG`. Until
`backend/SETUP.md` is followed, the panel shows the honest "not connected"
state: full local progression, no sign-in button, no live counter, zero
network calls. Do not remove that gate.
