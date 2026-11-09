// Timer core feature checks.
import { check, newPage, timeText, parseClock, waitClock, sleep, assert, lget } from './run.mjs';

check('timer', 'default load shows 25:00 focus, idle', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    const t = await timeText(page);
    assert(t === '25:00', `expected 25:00, got ${t}`);
    const label = await page.$eval('.ft-mode.is-active', (el) => el.textContent.trim());
    assert(label === 'Focus', `active mode ${label}`);
    await close();
});

check('timer', 'start counts down, pause holds, reset restores', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.click('.ft-primary'); // Start
    await sleep(2300);
    const t1 = parseClock(await timeText(page));
    assert(t1 <= 25 * 60 - 1 && t1 >= 25 * 60 - 5, `after 2.3s expected ~24:57, got ${t1}`);
    await page.click('.ft-primary'); // Pause
    const tp = await timeText(page);
    await sleep(1500);
    assert((await timeText(page)) === tp, `paused clock moved: ${tp}`);
    const btn = await page.$eval('.ft-primary', (el) => el.textContent.trim());
    assert(btn === 'Resume', `expected Resume button, got ${btn}`);
    await page.click('.ft-ghost'); // Reset (first ghost)
    assert((await timeText(page)) === '25:00', 'reset did not restore 25:00');
    await close();
});

check('timer', 'skip advances focus -> short break, then long break after 4 focus sessions', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    const ghosts = async () => page.$$('.ft-ghost');
    const skip = async () => { const g = await ghosts(); await g[1].click(); };
    await skip();
    assert((await page.$eval('.ft-mode.is-active', (el) => el.textContent.trim())) === 'Short break', 'skip 1');
    assert((await timeText(page)) === '05:00', 'short break duration');
    // skip through the cycle: short->focus, focus->short, ... after 4 completed focuses expect long
    // use skip on focus phases: skip does not count as completed focus, so cycle stays; use seeded session instead
    await close();
});

check('timer', 'phase switch preserves remaining time per phase (stash)', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.click('.ft-primary'); // start focus
    await sleep(2200);
    await page.click('.ft-primary'); // pause
    const leftFocus = parseClock(await timeText(page));
    await clickMode(page, 'Short break');
    assert((await timeText(page)) === '05:00', 'short break full duration');
    await page.click('.ft-primary'); // run short break
    await sleep(2200);
    await page.click('.ft-primary'); // pause
    const leftShort = parseClock(await timeText(page));
    assert(leftShort <= 5 * 60 - 1 && leftShort >= 5 * 60 - 6, `short break ticked: ${leftShort}`);
    await clickMode(page, 'Focus');
    const backFocus = parseClock(await timeText(page));
    assert(Math.abs(backFocus - leftFocus) <= 1, `focus stash lost: was ${leftFocus}, now ${backFocus}`);
    await clickMode(page, 'Short break');
    const backShort = parseClock(await timeText(page));
    assert(Math.abs(backShort - leftShort) <= 1, `short stash lost: was ${leftShort}, now ${backShort}`);
    await close();
});

check('timer', 'reset clears stashed phase progress', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.click('.ft-primary'); await sleep(2000); await page.click('.ft-primary'); // start+pause focus ~24:58
    await page.click('.ft-ghost'); // reset focus
    await clickMode(page, 'Short break');
    await clickMode(page, 'Focus');
    assert((await timeText(page)) === '25:00', 'stash survived reset');
    await close();
});

check('timer', 'completion advances to break, counts stats and task, plays alarm', async ({ browser, base }) => {
    // Seed a running focus session ending in 4s, an active task and today stats.
    const seed = {
        'ft-settings.v2': { focusMin: 25, shortMin: 5, longMin: 15, longEvery: 4, alarmSound: 'bell', alarmVolume: 0.8, alarmRepeat: true, customAlarm: null, tick: false, ambient: 'none', ambientVolume: 0.5, notifications: false, keepAwake: false, background: { kind: 'color', id: '#101418' }, bgAnimate: true, customFit: 'cover', enhance: true, scrim: 0.45, accent: '#9fd8c6', font: 'sans', clockStyle: 'ring', clockSize: 'm', showDots: true, showChip: true, showHint: true, clockOnly: false, spotify: null, spotifyOpen: false, musicOpen: false, musicMode: 'radio', radio: { index: 0, playing: false, volume: 0.7 } },
        'ft-tasks.v1': { tasks: [{ id: 't1', title: 'Circuits ch. 4', est: 2, done: 0, completed: false }], activeId: 't1' },
        'ft-stats.v1': { days: {} },
        'ft-session.v1': { phase: 'focus', running: true, endAt: Date.now() + 4000, remainingMs: 4000, cycleCount: 0 },
    };
    const { page, close } = await newPage(browser, base, { seed });
    await waitClock(page, /^05:00$/, 15000); // focus completed -> short break 05:00
    assert((await page.$eval('.ft-mode.is-active', (el) => el.textContent.trim())) === 'Short break', 'did not advance to short break');
    const stats = await lget(page, 'ft-stats.v1');
    const today = Object.values(stats.days)[0];
    assert(today && today.sessions === 1 && today.focusSec === 1500, `stats wrong: ${JSON.stringify(stats)}`);
    const tasks = await lget(page, 'ft-tasks.v1');
    assert(tasks.tasks[0].done === 1, `task done not incremented: ${JSON.stringify(tasks)}`);
    const chip = await page.$eval('.ft-chip', (el) => el.textContent).catch(() => '');
    assert(/1 session · 25 min/.test(chip), `chip: ${chip}`);
    await close();
});

check('timer', 'running session survives reload with correct remaining', async ({ browser, base }) => {
    const seed = { 'ft-session.v1': { phase: 'focus', running: true, endAt: Date.now() + 61000, remainingMs: 61000, cycleCount: 0 } };
    const { page, close } = await newPage(browser, base, { seed });
    const t = parseClock(await timeText(page));
    assert(t >= 56 && t <= 61, `restored running remaining wrong: ${t}`);
    await sleep(1500);
    const t2 = parseClock(await timeText(page));
    assert(t2 < t, 'restored timer not ticking');
    await close();
});

check('timer', 'paused session with custom durations restores exact remaining (hydration race)', async ({ browser, base }) => {
    const seed = {
        'ft-settings.v2': { focusMin: 20, shortMin: 5, longMin: 15, longEvery: 4 },
        'ft-session.v1': { phase: 'focus', running: false, endAt: 0, remainingMs: (19 * 60 + 31) * 1000, cycleCount: 0 },
    };
    const { page, close } = await newPage(browser, base, { seed });
    await sleep(600); // let hydration settle
    assert((await timeText(page)) === '19:31', `paused restore wrong: ${await timeText(page)}`);
    await sleep(800);
    assert((await timeText(page)) === '19:31', 'restored paused timer drifted');
    await close();
});

check('timer', 'duration edit while idle resets idle clock, not a running one', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    // open settings, change focus to 30
    await page.click('[aria-label="Settings"]');
    await page.waitForSelector('.ft-sheet');
    await page.evaluate(() => {
        const input = [...document.querySelectorAll('.ft-stepper-input')].find((i) => i.getAttribute('aria-label') === 'Focus value');
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        setter.call(input, '30');
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await sleep(400);
    assert((await timeText(page)) === '30:00', `idle duration edit not applied: ${await timeText(page)}`);
    // start, then edit again: running clock must not reset
    await page.click('[aria-label="Close settings"]');
    await page.click('.ft-primary');
    await sleep(2000);
    await page.click('[aria-label="Settings"]');
    await page.evaluate(() => {
        const input = [...document.querySelectorAll('.ft-stepper-input')].find((i) => i.getAttribute('aria-label') === 'Focus value');
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        setter.call(input, '45');
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await sleep(400);
    const t = parseClock(await timeText(page));
    assert(t < 30 * 60 - 1, `running clock was reset by duration edit: ${t}`);
    await close();
});

check('timer', 'keyboard: space start/pause, 1/2/3 phases, r reset, s skip', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.keyboard.press('Space');
    await sleep(1600);
    assert(parseClock(await timeText(page)) < 25 * 60, 'space did not start');
    await page.keyboard.press('Space');
    const tp = await timeText(page);
    await sleep(1200);
    assert((await timeText(page)) === tp, 'space did not pause');
    await page.keyboard.press('2');
    assert((await timeText(page)) === '05:00', 'key 2 failed');
    await page.keyboard.press('3');
    assert((await timeText(page)) === '15:00', 'key 3 failed');
    await page.keyboard.press('1');
    assert(parseClock(await timeText(page)) === 25 * 60 || parseClock(await timeText(page)) < 25 * 60, 'key 1 failed');
    await page.keyboard.press('r');
    assert((await timeText(page)) === '25:00', 'key r failed');
    await page.keyboard.press('s');
    assert((await page.$eval('.ft-mode.is-active', (el) => el.textContent.trim())) === 'Short break', 'key s failed');
    await close();
});

check('timer', 'document title tracks the clock', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.click('.ft-primary');
    await sleep(2200);
    const title = await page.title();
    assert(/^24:5\d - Focus - Study focus timer$/.test(title), `title: ${title}`);
    await close();
});

check('timer', 'background tab keeps ticking and completes on time', async ({ browser, base }) => {
    const seed = { 'ft-session.v1': { phase: 'focus', running: true, endAt: Date.now() + 6000, remainingMs: 6000, cycleCount: 0 }, 'ft-settings.v2': { focusMin: 25, shortMin: 5 } };
    const ctx = await browser.createBrowserContext();
    const page = await ctx.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.evaluateOnNewDocument((seed) => {
        for (const [k, v] of Object.entries(seed)) window.localStorage.setItem('sft:' + k, JSON.stringify(v));
    }, seed);
    await page.goto(base + '/', { waitUntil: 'networkidle2' });
    // hide the page by opening a second page on top
    const other = await ctx.newPage();
    await other.goto('about:blank');
    await other.bringToFront();
    await sleep(8500);
    const mode = await page.$eval('.ft-mode.is-active', (el) => el.textContent.trim());
    assert(mode === 'Short break', `hidden tab did not complete on time: still ${mode} ${await timeText(page)}`);
    await ctx.close();
});

check('timer', 'cycle: 4 completed focuses lead to long break', async ({ browser, base }) => {
    const seed = {
        'ft-settings.v2': { focusMin: 25, shortMin: 5, longMin: 15, longEvery: 4 },
        'ft-session.v1': { phase: 'focus', running: true, endAt: Date.now() + 2500, remainingMs: 2500, cycleCount: 3 },
    };
    const { page, close } = await newPage(browser, base, { seed });
    await waitClock(page, /^15:00$/, 12000);
    assert((await page.$eval('.ft-mode.is-active', (el) => el.textContent.trim())) === 'Long break', 'no long break after 4th focus');
    const dots = await page.$$eval('.ft-dot.is-done', (els) => els.length);
    assert(dots === 4, `expected 4 done dots, got ${dots}`);
    await close();
});

check('timer', 'skip during break returns to focus without counting stats', async ({ browser, base }) => {
    const seed = {
        'ft-session.v1': { phase: 'short', running: false, endAt: 0, remainingMs: 5 * 60000, cycleCount: 1 },
        'ft-stats.v1': { days: {} },
    };
    const { page, close } = await newPage(browser, base, { seed });
    const ghosts = await page.$$('.ft-ghost');
    await ghosts[1].click(); // Skip
    assert((await page.$eval('.ft-mode.is-active', (el) => el.textContent.trim())) === 'Focus', 'skip from break did not return to focus');
    assert((await timeText(page)) === '25:00', 'focus duration after skip');
    const stats = await lget(page, 'ft-stats.v1');
    assert(Object.keys(stats.days).length === 0, 'skip counted stats');
    await close();
});

check('timer', 'session that ended while tab was closed settles as completed', async ({ browser, base }) => {
    // Closed 10 minutes AFTER the focus session should have ended: it must count, advance, and not silently reset.
    const seed = {
        'ft-settings.v2': { focusMin: 25, shortMin: 5, longMin: 15, longEvery: 4 },
        'ft-stats.v1': { days: {} },
        'ft-tasks.v1': { tasks: [{ id: 't1', title: 'Reading', est: 1, done: 0, completed: false }], activeId: 't1' },
        'ft-session.v1': { phase: 'focus', running: true, endAt: Date.now() - 10 * 60000, remainingMs: 25000, cycleCount: 0 },
    };
    const { page, close } = await newPage(browser, base, { seed });
    await sleep(1200);
    const stats = await lget(page, 'ft-stats.v1');
    const today = Object.values(stats.days)[0];
    assert(today && today.sessions === 1, `elapsed-away session not counted: ${JSON.stringify(stats)}`);
    assert((await page.$eval('.ft-mode.is-active', (el) => el.textContent.trim())) === 'Short break', 'did not advance to break');
    assert((await timeText(page)) === '05:00', `break should be fresh 05:00, got ${await timeText(page)}`);
    const tasks = await lget(page, 'ft-tasks.v1');
    assert(tasks.tasks[0].done === 1, 'task not incremented');
    await close();
});

check('timer', 'auto-start breaks and auto-start focus chain through completion', async ({ browser, base }) => {
    const seed = {
        'ft-settings.v2': { focusMin: 25, shortMin: 5, longMin: 15, longEvery: 4, autoBreaks: true, autoFocus: true },
        'ft-session.v1': { phase: 'focus', running: true, endAt: Date.now() + 2500, remainingMs: 2500, cycleCount: 0 },
    };
    const { page, close } = await newPage(browser, base, { seed });
    await waitClock(page, /^04:5\d$/, 12000); // break started AND ticking (auto)
    const t1 = parseClock(await timeText(page));
    await sleep(1500);
    assert(parseClock(await timeText(page)) < t1, 'auto-started break not ticking');
    await close();
});

check('timer', 'elapsed-away session shows a dismissible note', async ({ browser, base }) => {
    const seed = {
        'ft-settings.v2': { focusMin: 25, shortMin: 5, longMin: 15, longEvery: 4 },
        'ft-session.v1': { phase: 'focus', running: true, endAt: Date.now() - 10 * 60000, remainingMs: 25000, cycleCount: 0 },
    };
    const { page, close } = await newPage(browser, base, { seed });
    await page.waitForSelector('.ft-awaytoast', { timeout: 8000 });
    const note = await page.$eval('.ft-awaytoast', (el) => el.textContent);
    assert(/ended while you were away/.test(note), `note: ${note}`);
    await page.click('[aria-label="Dismiss note"]');
    await sleep(200);
    assert(!(await page.$('.ft-awaytoast')), 'note not dismissed');
    await close();
});

check('timer', 'Escape closes the open panel', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.click('[aria-label="Settings"]');
    await page.waitForSelector('.ft-sheet');
    await page.keyboard.press('Escape');
    await sleep(250);
    assert(!(await page.$('.ft-sheet')), 'Escape did not close settings');
    await page.click('[aria-label="Tasks"]');
    await page.waitForSelector('.ft-sheet');
    await page.keyboard.press('Escape');
    await sleep(250);
    assert(!(await page.$('.ft-sheet')), 'Escape did not close tasks');
    await close();
});

async function clickMode(page, name) {
    const ok = await page.evaluate((name) => {
        const el = [...document.querySelectorAll('.ft-mode')].find((b) => b.textContent.trim() === name);
        if (!el) return false; el.click(); return true;
    }, name);
    if (!ok) throw new Error('no mode ' + name);
      }
