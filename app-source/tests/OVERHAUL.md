# Overhaul working notes (task todo-01M6ZF9D8TQP7XBW41J1MDXE4G)

## How to work on this
- Source: `~/study-focus-timer/app-source` (repo clone at `~/study-focus-timer`).
- Build + refresh local staging mirror: `app-source/tests/stage.sh` (tsc, vite build, rsync into `~/staging`, swap bundles).
- Run tests per feature (full suite >120s, so slice): `node tests/run.mjs --only <feature>`
  Features: timer, tasks, settings, clockonly, compact, fullscreen, bg, music, ambient, alarm, popout, mobile, shell.
- Screenshots land in /tmp/shots (pass --shots to change).
- Deployment: GitHub web editor via cloud browser (no write API in github tool; web editor needs each file <256KB). Keep old bundles in root until caches expire.

## Constraints (from main)
- Preserve saved settings/links/tasks/stats/profile, session persistence, clock-only drag/resize, media quality, mobile usability.
- No blurry fullscreen loading previews, no gradients, no media bloat; 20 curated scenes stay.
- Firebase/progression cloud stays inert. Spotify embed only. Radio = 8 Pixabay tracks.
- Keep live version until integrated replacement tested. Main owns delivery; we own build+publication.
- Background/closed-tab: honest elapsed-time recovery only, count once, no invented cycles; no OS-alarm promises.

## Stage 1 - reliability (DONE, 45/45 checks green on new build)
- Fix: "Animate backgrounds" toggle now pauses/resumes scene video immediately (sync effect on [paused, animate]).
- Fix: session that ended while tab closed is counted exactly once (into the endAt day), task incremented, cycle advanced, parks stopped on next phase with dismissible "ended while you were away" toast.
- Fix: ticking moved to Web Worker (timerWorker.ts) with setInterval fallback - hidden-tab accuracy.
- Fix: scene rAF loop stops once a hard-loop scene is playing (blend scenes keep it for crossfade).
- New: Escape closes panels; hint text updated.
- Fix: sheets now open below the topbar (top:66px) so toolbar buttons stay clickable (can switch Settings<->Tasks/Profile directly).
- Tests: fixed 2 harness bugs (field-scoped Use-link clicks; compact visibility check).

## Stage 2 - per-feature UX/visual renovation (NEXT)
Baseline screenshots: /tmp/shots/new-main.png, new-settings.png, new-away.png.
Targets (test each before moving on):
1. Visual system: refined type scale, frosted-glass sheets/player/topbar (backdrop-filter), smoother transitions, focus-visible states, accent-consistency. Verify desktop+mobile screenshots.
2. Clock: more polished ring (track/glow), tabular nums everywhere, better task line.
3. Tasks: edit task title; maybe reorder.
4. Player: polish; keep drag/minimize/spotify behavior.
5. Settings: group intro copy tightening.
6. Small adds already green-tested where relevant; consider: PWA manifest + home-screen icon, "Surprise me" scene shuffle (judge scope).
7. Keyboard: T for tasks? judge.

## Stage 3 - final
Full suite green, desktop+mobile+slow-network spot checks, live-media HEAD check of all 20 scene URLs (+ladder) and 8 radio URLs, deploy via web editor, live verification with user's own profile, closeout report to main.

## Stage 2 progress (2026-11-09 ~01:45 EST, run ending)
DONE - Visual system pass (CSS-only, all in src/style.css):
- Icon buttons: softer borders, dark glass bg, hover lift, transitions
- Mode pill: bordered glass container + shadow, active pill shadow, hover color
- Cycle dots: accent glow when done
- Progress ring: track 6px/fill 6.5px + accent drop-shadow glow
- Time numerals: weight 200, stronger text shadow
- Primary button: shadow + hover lift; ghost: refined border/bg/hover
- Sheet: slide-in keyframe animation (ft-sheet-in), border-left, thin styled scrollbars
- Away toast: slide-down animation (ft-toast-in)
- focus-visible: 2px accent outline on buttons/inputs/switches
- prefers-reduced-motion: animations/transitions disabled
Verified: desktop + mobile + settings-sheet screenshots (/tmp/shots/v2-*.png) all look right; sheet still opens below topbar.
Suite: ALL feature slices green on build index-UD9qZ8kP.js (60 checks: alarm3 ambient1 bg11 clockonly3 compact1 fullscreen1 mobile3 music7 popout2 settings5 shell2 tasks5 timer18; run per-slice, some name-substring overlap, 0 failures).
NOTE: `node tests/run.mjs --only misc` matches 0 checks - feature tags are per-check ('ambient','alarm','popout','mobile','shell','compact','fullscreen','clockonly'), not filenames. Run the tag list above for full coverage.
REMAINING Stage 2 candidates (judge value vs risk, keep suite green):
- Mobile: player panel sits very tight under Start/Reset/Skip on 390x844 (see v2-mobile.png) - check overlap when player expanded; consider defaulting player lower/minimized on small screens or nudging controls up. Verify against mobile slice after any change.
- Tasks sheet: inline edit of existing task text (currently add/done/delete only?) - check App.tsx tasks UI first
- Player polish: progress bar / track row spacing; NO backdrop-filter (deliberately removed for perf)
- Settings copy pass (clearer labels/descriptions)
- Small adds to judge: PWA manifest (MIME .webmanifest already in test server), scene shuffle option
- Then Stage 3: full regression + live-media HEAD checks (20 scenes + ladders + 8 radio, referer header for audio) + deploy via GitHub web editor in cloud browser (files <256KB, keep old bundles until caches expire) + live verification with user profile + closeout report.
Live site still UNTOUCHED (index-DnxtUKwL.js).

## Stage 2 update (~01:50 EST)
DONE - Tasks inline rename: pencil button per row swaps name into an input; Enter/blur commits (empty = keep old), Escape cancels. New check in feat-tasks.mjs ('renaming a task updates the row and active task line'). Tasks slice 6/6 green on staged build.
Reported Stage 2 progress to parent at 01:48 (no blockers).
Still remaining: mobile player spacing verify, player polish, settings copy pass, judged small adds (PWA manifest w/ icons, scene shuffle), then Stage 3 (full regression + live-media HEAD checks + deploy + live verification + closeout).

## Stage 2 complete (~02:06 EST)
- Mobile player overlap FIXED: measured expanded player overlapping Start button by ~10px on 390x844; added `@media (max-width:600px) .ft-root:has(.ft-player:not(.is-mini)) .ft-center:not(.is-clockonly) { padding-bottom: 185px }`. Re-measured: controls bottom 596 vs player top 673 (77px clear). mobile/compact/music/clockonly slices green.
- Settings copy pass: reviewed all labels/hints - already clear and honest (no changes needed; avoids breaking text-matched tests).
- PWA support ADDED: manifest.webmanifest + icon-192/512.png (generated with PIL, mint ring on dark rounded square) at REPO ROOT (vite publicDir is redirected to ../scenes with copyPublicDir:false, so public/ does NOT ship - root files rsync into staging via stage.sh). index.html links manifest + theme-color. New shell check verifies manifest + icons serve. shell 3/3 green.
- Scene shuffle: DECIDED AGAINST - adds media-loading churn and surprise; user asked for better features, not more.
- Player polish: current styling verified good in screenshots; no changes.
Stage 2 DONE. Stage 3 next: full regression on final build + live-media HEAD checks (20 scenes + ladders + 8 radio with Referer) + deploy + live verification + closeout.

## Stage 3 progress (~02:11 EST)
- Live-media check COMPLETE: all 20 scene URLs x 4 ladder variants (medium/large/small/tiny = 80) + 8 radio mp3s = 88 URLs, all 200/206 with Referer header. Zero failures.
- Full regression on final build index-D0Pzqm70.js / index-DWu0vE0R.css / timerWorker-B03v4wmZ.js: ALL 13 slices green (timer20 bg11 settings6 tasks6 music7 alarm3 ambient1 clockonly3 compact1 fullscreen1 mobile3 popout2 shell3; 0 failures).
DEPLOYMENT FILE LIST (GitHub web editor, keep old bundles):
  new: index.html, index-D0Pzqm70.js, index-DWu0vE0R.css, timerWorker-B03v4wmZ.js (NEW to live), manifest.webmanifest, icon-192.png, icon-512.png (icons are binary - use upload UI)
  unchanged/already live: vendor-B3JGZu0D.js
  keep on live until caches expire: index-DnxtUKwL.js, index-ChzMuE9y.css (and older)
After deploy: live verification at https://molhm01.github.io/study-focus-timer/ with Mj's real profile (Serif font, Night reading scene, paused short break 05:00 must survive), then closeout report to parent.

## Stage 3 deploy prep final (~02:13 EST)
- Icons switched from PNG to SVG: browser_guidance says GitHub upload-widget commits fail with HTTP 400 from this profile; web editor paste route (text-only) works reliably. PNGs can't be pasted, so manifest now uses icon.svg (single SVG, sizes "any", mint ring on dark rounded square). PNGs deleted from repo root and staging. Shell test updated (>=1 icon). shell 3/3 green. Tradeoff: Chromium install-prompt eligibility may be reduced with SVG-only icons; Add-to-Home-Screen still works. Report this honestly.
- github tool confirmed read-only for file content (issues/PRs only); vault has GitHub (Molhm01) login, password stored, no TOTP - browser sign-in possible if session expired.
- FINAL DEPLOY SET (all text, all <256KB, paste via /edit or /new + Commit changes): index.html, index-D0Pzqm70.js, index-DWu0vE0R.css, timerWorker-B03v4wmZ.js, manifest.webmanifest, icon.svg. Keep old bundles (index-DnxtUKwL.js, index-ChzMuE9y.css etc.) on live until caches expire. GitHub Pages HTML cached max-age 600: cache-bust with query string when verifying.
- Verify after deploy: page boots, Mj's profile intact (Serif font, Night reading scene, paused short break 05:00), manifest/icon serve 200, then closeout report.

## Deployment progress (~02:25 EST)
DEPLOYED + sha256-verified via raw fetch (all through GitHub web editor, lease L-kj4b2cmedkys5lv5fyhtjrwj3i):
- Root: timerWorker-B03v4wmZ.js, index-D0Pzqm70.js, index-DWu0vE0R.css, manifest.webmanifest, icon.svg, index.html (LIVE SITE FLIPPED to the overhaul at ~02:22)
- Source: app-source/index.html, package.json, src/App.tsx, src/style.css, src/timerWorker.ts
- Tests: tests/run.mjs, feat-timer.mjs, feat-tasks.mjs, feat-settings.mjs, feat-bg.mjs
REMAINING: tests/feat-music.mjs, feat-misc.mjs, stage.sh, make-media.sh, then OVERHAUL.md LAST (it keeps changing).
LEARNINGS: GitHub web editor normalizes the FINAL LINE's indentation on commit (App.tsx dedented 12 spaces, run.mjs/feat-timer.mjs indented) - whitespace-only, valid JS both ways; local files synced to deployed bytes via curl of raw URL (curl works for READING raw.githubusercontent from workspace). Verify each deploy by sha256 of raw fetch with ?cb= cache-buster (raw CDN caches briefly). form-input value-mode handles 137KB fills fine; CM virtualization makes DOM textContent partial - never verify via DOM length.
NEXT: deploy remaining 4 files + OVERHAUL.md, then live verification (Mj profile: Serif font, Night reading scene, paused short break 05:00; cache-bust Pages HTML max-age 600), browser_guidance record, release lease, closeout report.

## DEPLOYMENT COMPLETE + LIVE VERIFIED (~02:27 EST)
All 20 files deployed via GitHub web editor and sha256-verified against local bytes (raw fetch with cache-buster). Commits on main.
Live verification at https://molhm01.github.io/study-focus-timer/ (cache-busted): boots to new bundle; Mj's state fully preserved - Serif font, Night reading scene (lofi-345955) animating, paused short break at 05:00 ("Rest up"), accent #ffcf99, radio player on Chillhop Jazz Coffee Shop. manifest.webmanifest serves 200. Screenshot evidence: /downloads/cloud-browser-20261109-072647.png.
Local repo synced to deployed bytes for all files (editor final-line whitespace normalization adopted).

## Defect fix (~02:32 EST)
Parent review caught: expanded music player overlayed sheet-bottom content on mobile (settings clock-only text/toggles unreachable). Fix: `@media (max-width:600px) .ft-root:has(.ft-player:not(.is-mini)) .ft-sheet { padding-bottom: 185px }` - playback keeps running, saved player position untouched. Measured on build: settings/tasks/profile sheet bottoms all clear player (content bottom 647 vs player top 673). Full regression green. Deployed as index-FgLpsPWE.js / index-BoitPCpt.css + index.html + style.css source.
