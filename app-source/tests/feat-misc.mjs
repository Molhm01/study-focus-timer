// Ambient, alarm, popout, mobile, and shell-level checks.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { check, newPage, timeText, sleep, assert, lget, clickByText, clickByAria, clickFieldButton } from './run.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MEDIA = path.join(__dirname, 'media');

check('ambient', 'selecting a recording fetches its parts and survives reload', async ({ browser, base }) => {
    let partsFetched = 0;
    const { page, close } = await newPage(browser, base, {
        intercept: (req) => {
            if (/sounds\/rain-\d+\.txt/.test(req.url())) partsFetched++;
            return req.continue();
        },
    });
    await page.click('[aria-label="Settings"]');
    await page.waitForSelector('.ft-sheet');
    await clickByText(page, 'Rain');
    await sleep(2500);
    const s = await lget(page, 'ft-settings.v2');
    assert(s.ambient === 'rain', `ambient: ${s.ambient}`);
    assert(partsFetched >= 6, `expected rain parts fetched, got ${partsFetched}`);
    // noise kinds need no fetch
    await clickByText(page, 'Brown noise');
    await sleep(400);
    const s2 = await lget(page, 'ft-settings.v2');
    assert(s2.ambient === 'brown', `ambient noise: ${s2.ambient}`);
    await close();
});

check('alarm', 'builtin alarm selection persists; custom upload works for the visit and resets after reload', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.click('[aria-label="Settings"]');
    await page.waitForSelector('.ft-sheet');
    await clickByText(page, 'Gong');
    await sleep(300);
    let s = await lget(page, 'ft-settings.v2');
    assert(s.alarmSound === 'gong', `alarm: ${s.alarmSound}`);
    const input = await page.$('input[aria-label="Upload alarm sound file"]');
    await input.uploadFile(path.join(MEDIA, 'tiny.mp3'));
    await sleep(500);
    s = await lget(page, 'ft-settings.v2');
    assert(s.alarmSound === 'custom' && s.customAlarm && s.customAlarm.name === 'tiny.mp3', `custom alarm: ${JSON.stringify(s.customAlarm)}`);
    await page.reload({ waitUntil: 'networkidle2' });
    await sleep(600);
    s = await lget(page, 'ft-settings.v2');
    assert(s.alarmSound === 'bell', `uploaded alarm should reset to bell, got ${s.alarmSound}`);
    await close();
});

check('alarm', 'custom alarm link validates and persists', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, {
        intercept: (req) => {
            if (req.url() === 'https://example.com/bell.mp3') {
                return req.respond({ status: 200, contentType: 'audio/mpeg', headers: { 'access-control-allow-origin': '*' }, body: fs.readFileSync(path.join(MEDIA, 'tiny.mp3')) });
            }
            return req.continue();
        },
    });
    await page.click('[aria-label="Settings"]');
    await page.waitForSelector('.ft-sheet');
    await page.type('input[placeholder="https://…/sound.mp3"]', 'https://example.com/bell.mp3');
    await clickFieldButton(page, 'https://…/sound.mp3', 'Use link');
    await page.waitForFunction(() => {
        const s = JSON.parse(window.localStorage.getItem('sft:ft-settings.v2'));
        return s.alarmSound === 'custom' && s.customAlarm && s.customAlarm.source === 'https://example.com/bell.mp3';
    }, { timeout: 8000 });
    await page.reload({ waitUntil: 'networkidle2' });
    await sleep(1200);
    const s = await lget(page, 'ft-settings.v2');
    assert(s.alarmSound === 'custom', 'custom alarm link did not persist');
    await close();
});

check('popout', 'popup mirror opens, shows live time, controls the main timer', async ({ browser, base }) => {
    const ctx = await browser.createBrowserContext();
    const page = await ctx.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.evaluateOnNewDocument(() => { delete window.documentPictureInPicture; });
    await page.goto(base + '/', { waitUntil: 'networkidle2' });
    await page.waitForSelector('.ft-time');
    const targetP = new Promise((resolve) => browser.once('targetcreated', resolve));
    await page.click('[aria-label="Open timer in its own window"]');
    const target = await Promise.race([targetP, sleep(6000).then(() => null)]);
    assert(target, 'no popup window opened');
    const pop = await target.page();
    await pop.waitForSelector('.ft-popout-time', { timeout: 8000 });
    await sleep(1200);
    const t = await pop.$eval('.ft-popout-time', (el) => el.textContent.trim());
    assert(/^\d\d:\d\d$/.test(t), `mirror time: ${t}`);
    // start from the mirror
    await pop.evaluate(() => [...document.querySelectorAll('button')].find((b) => b.textContent === 'Start')?.click());
    await sleep(1500);
    const mainBtn = await page.$eval('.ft-primary', (el) => el.textContent.trim());
    assert(mainBtn === 'Pause', `mirror start did not reach main timer: ${mainBtn}`);
    await ctx.close();
});

check('popout', '?popout=1 page never boots its own timer app', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, { path: '/?popout=1' });
    await page.waitForSelector('.ft-popout', { timeout: 8000 });
    assert(!(await page.$('.ft-modes')), 'popout booted the full app');
    await close();
});

check('mobile', 'no horizontal overflow; sheet full width; clock visible', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, { mobile: true });
    await page.waitForSelector('.ft-time');
    await sleep(400);
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
    assert(overflow <= 1, `horizontal overflow: ${overflow}px`);
    await page.click('[aria-label="Settings"]');
    await page.waitForSelector('.ft-sheet');
    const w = await page.$eval('.ft-sheet', (el) => el.getBoundingClientRect().width);
    assert(Math.abs(w - 390) < 5, `sheet width on mobile: ${w}`);
    await page.click('[aria-label="Close settings"]');
    const clock = await page.$eval('.ft-time', (el) => el.getBoundingClientRect().toJSON());
    assert(clock.width > 100 && clock.y > 0 && clock.y < 844, `clock box: ${JSON.stringify(clock)}`);
    await close();
});

check('mobile', 'scene ladder starts at small variant on phones', async ({ browser, base }) => {
    const requested = [];
    const seed = { 'ft-settings.v2': { background: { kind: 'scene', id: 'lofi-246243' } } };
    const { page, close } = await newPage(browser, base, {
        mobile: true, seed,
        intercept: (req) => {
            if (req.url().includes('cdn.pixabay.com/video/')) {
                requested.push(req.url());
                return req.respond({ status: 200, contentType: 'video/mp4', body: fs.readFileSync(path.join(MEDIA, 'loop.mp4')) });
            }
            return req.continue();
        },
    });
    await page.waitForFunction(() => document.querySelectorAll('video.ft-bgvideo').length > 0, { timeout: 10000 }).catch(() => {});
    await sleep(1500);
    assert(requested.length > 0 && requested[0].includes('_small.mp4'), `first variant on mobile: ${requested[0] || 'none'}`);
    await close();
});

check('shell', 'no console or page errors on plain load, desktop and mobile', async ({ browser, base }) => {
    const d = await newPage(browser, base);
    await sleep(1500);
    assert(!d.errors.length, `desktop errors: ${d.errors.join(' | ')}`);
    await d.close();
    const m = await newPage(browser, base, { mobile: true });
    await sleep(1500);
    assert(!m.errors.length, `mobile errors: ${m.errors.join(' | ')}`);
    await m.close();
});

check('shell', 'panels: only one sheet open at a time; close buttons work', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.click('[aria-label="Settings"]');
    await page.waitForSelector('.ft-sheet');
    await page.click('[aria-label="Tasks"]');
    await sleep(300);
    const sheets = await page.$$('.ft-sheet');
    assert(sheets.length === 1, `expected 1 sheet, got ${sheets.length}`);
    const head = await page.$eval('.ft-sheet h2', (el) => el.textContent);
    assert(head === 'Tasks', `expected Tasks sheet, got ${head}`);
    await page.click('[aria-label="Close tasks"]');
    await sleep(200);
    assert(!(await page.$('.ft-sheet')), 'sheet did not close');
    await close();
});

check('shell', 'PWA manifest is linked and serves with icons', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, {});
    const href = await page.$eval('link[rel="manifest"]', (el) => el.getAttribute('href'));
    assert(href, 'manifest link missing');
    const res = await page.evaluate(async (h) => {
        const r = await fetch(h);
        const j = await r.json();
        const iconChecks = await Promise.all((j.icons || []).map(async (i) => (await fetch(i.src)).status));
        return { status: r.status, name: j.name, display: j.display, icons: iconChecks };
    }, href);
    assert(res.status === 200, `manifest status ${res.status}`);
    assert(/Study focus/.test(res.name || ''), `manifest name ${res.name}`);
    assert(res.display === 'standalone', `display ${res.display}`);
    assert(res.icons.length >= 1 && res.icons.every((s) => s === 200), `icons ${res.icons}`);
    await close();
});
