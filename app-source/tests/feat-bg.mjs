// Background feature checks: colors, photos, scenes, saved links, uploads, fit/scrim.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { check, newPage, sleep, assert, lget, clickByText, clickFieldButton } from './run.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MEDIA = path.join(__dirname, 'media');
const LOOP_MP4 = fs.readFileSync(path.join(MEDIA, 'loop.mp4'));
const TINY_JPG = fs.readFileSync(path.join(MEDIA, 'tiny.jpg'));

const fulfillVideo = (req) => {
    const u = req.url();
    if (u.includes('cdn.pixabay.com/video/')) {
        return req.respond({ status: 200, contentType: 'video/mp4', headers: { 'access-control-allow-origin': '*' }, body: LOOP_MP4 });
    }
    if (u.includes('images.weserv.nl')) {
        if (u.includes('pic.jpg')) return req.respond({ status: 200, contentType: 'image/jpeg', headers: { 'access-control-allow-origin': '*' }, body: TINY_JPG });
        return req.respond({ status: 404, contentType: 'text/plain', body: 'nf' });
    }
    if (u === 'https://example.com/pic.jpg') {
        return req.respond({ status: 200, contentType: 'image/jpeg', headers: { 'access-control-allow-origin': '*' }, body: TINY_JPG });
    }
    return req.continue();
};
const failVideo = (req) => {
    if (req.url().includes('cdn.pixabay.com/video/')) return req.abort();
    return fulfillVideo(req);
};

async function openSettings(page) {
    await page.click('[aria-label="Settings"]');
    await page.waitForSelector('.ft-sheet', { timeout: 8000 });
}
async function pickScene(page, name) {
    const ok = await page.evaluate((name) => {
        const el = [...document.querySelectorAll('[aria-label$="animated scene"]')].find((b) => b.getAttribute('aria-label').startsWith(name));
        if (!el) return false; el.click(); return true;
    }, name);
    if (!ok) throw new Error('no scene swatch ' + name);
}
const videoCount = (page) => page.$$eval('video.ft-bgvideo', (v) => v.length);
const playingVideos = (page) => page.$$eval('video.ft-bgvideo', (vs) => vs.filter((v) => !v.paused && v.readyState >= 2).length);

check('bg', 'solid color preset and wheel set a color background', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await openSettings(page);
    await page.click('[aria-label="Midnight background color"]');
    await sleep(300);
    let s = await lget(page, 'ft-settings.v2');
    assert(s.background.kind === 'color' && s.background.id === '#16213a', `color pick: ${JSON.stringify(s.background)}`);
    // wheel pick
    await page.click('.ft-wheel', { offset: { x: 84, y: 10 } });
    await sleep(300);
    s = await lget(page, 'ft-settings.v2');
    assert(s.background.kind === 'color' && /^#[0-9a-f]{6}$/i.test(s.background.id) && s.background.id !== '#16213a', `wheel pick: ${JSON.stringify(s.background)}`);
    await close();
});

check('bg', 'builtin photo loads and swaps', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.waitForFunction(() => {
        const el = document.querySelector('.ft-bg');
        return el && (el.style.backgroundImage || '').startsWith('url("data:image/jpeg');
    }, { timeout: 15000 });
    await openSettings(page);
    await page.click('[aria-label="Ocean"]');
    await sleep(500);
    const s = await lget(page, 'ft-settings.v2');
    assert(s.background.kind === 'builtin' && s.background.id === 'ocean', `photo pick: ${JSON.stringify(s.background)}`);
    await close();
});

check('bg', 'scene pick mounts video, old scene visible during switch, settles to one playing', async ({ browser, base }) => {
    const seed = { 'ft-settings.v2': { background: { kind: 'scene', id: 'lofi-246243' } } };
    const { page, close } = await newPage(browser, base, { seed, intercept: fulfillVideo });
    await page.waitForFunction(() => [...document.querySelectorAll('video.ft-bgvideo')].some((v) => !v.paused && v.readyState >= 2), { timeout: 15000 });
    await openSettings(page);
    await pickScene(page, 'Rainy study desk');
    // mid-switch: two stages, old one still playing
    await page.waitForFunction(() => document.querySelectorAll('.ft-scene-stage').length >= 1, { timeout: 4000 });
    const mid = await page.evaluate(() => ({
        stages: document.querySelectorAll('.ft-scene-stage').length,
        playing: [...document.querySelectorAll('video.ft-bgvideo')].filter((v) => !v.paused && v.readyState >= 2).length,
        cover: !!document.querySelector('.ft-scene-switching'),
    }));
    assert(mid.playing >= 1, `old scene not playing during switch: ${JSON.stringify(mid)}`);
    // settles: exactly one stage, one video, playing, and it is the picked scene
    await page.waitForFunction(() => document.querySelectorAll('.ft-scene-stage').length === 1 && [...document.querySelectorAll('video.ft-bgvideo')].filter((v) => !v.paused && v.readyState >= 2).length === 1, { timeout: 15000 });
    const s = await lget(page, 'ft-settings.v2');
    assert(s.background.kind === 'scene' && s.background.id === 'lofi-215407', `scene not saved: ${JSON.stringify(s.background)}`);
    await close();
});

check('bg', 'rapid A->B->C scene picks settle to exactly the final scene playing', async ({ browser, base }) => {
    const seed = { 'ft-settings.v2': { background: { kind: 'scene', id: 'lofi-246243' } } };
    const { page, close } = await newPage(browser, base, { seed, intercept: fulfillVideo });
    await page.waitForFunction(() => [...document.querySelectorAll('video.ft-bgvideo')].some((v) => !v.paused && v.readyState >= 2), { timeout: 15000 });
    await openSettings(page);
    await pickScene(page, 'Fireplace cat');
    await sleep(250);
    await pickScene(page, 'Alpine lake');
    await sleep(250);
    await pickScene(page, 'Night reading');
    await page.waitForFunction(() => document.querySelectorAll('.ft-scene-stage').length === 1 && [...document.querySelectorAll('video.ft-bgvideo')].filter((v) => !v.paused && v.readyState >= 2).length === 1, { timeout: 20000 });
    const s = await lget(page, 'ft-settings.v2');
    assert(s.background.id === 'lofi-345955', `final scene wrong: ${s.background.id}`);
    const stages = await page.$$('.ft-scene-stage');
    assert(stages.length === 1, `stages: ${stages.length}`);
    await close();
});

check('bg', 'scene failure keeps previous scene and shows a note', async ({ browser, base }) => {
    const seed = { 'ft-settings.v2': { background: { kind: 'scene', id: 'lofi-246243' } } };
    let fail = false;
    const { page, close } = await newPage(browser, base, {
        seed,
        intercept: (req) => (fail ? failVideo(req) : fulfillVideo(req)),
    });
    await page.waitForFunction(() => [...document.querySelectorAll('video.ft-bgvideo')].some((v) => !v.paused && v.readyState >= 2), { timeout: 15000 });
    fail = true;
    await openSettings(page);
    await pickScene(page, 'Golden surf');
    await page.waitForSelector('.ft-scene-error', { timeout: 20000 });
    // previous scene still playing
    const playing = await playingVideos(page);
    assert(playing === 1, `previous scene not playing after failure: ${playing}`);
    await close();
});

check('bg', 'first-load scene failure shows readable message, no crash', async ({ browser, base }) => {
    const seed = { 'ft-settings.v2': { background: { kind: 'scene', id: 'lofi-246243' } } };
    const { page, errors, close } = await newPage(browser, base, { seed, intercept: failVideo });
    await page.waitForSelector('.ft-scene-error', { timeout: 20000 });
    const msg = await page.$eval('.ft-scene-error', (el) => el.textContent);
    assert(/Could not load/.test(msg), `message: ${msg}`);
    assert(!errors.filter((e) => !e.includes('net::ERR')).length, `page errors: ${errors.join(' | ')}`);
    await close();
});

check('bg', 'saved image link applies, is remembered, re-resolves after reload, removable', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, { intercept: fulfillVideo });
    await openSettings(page);
    await page.type('input[placeholder="https://www.pinterest.com/pin/…"]', 'https://example.com/pic.jpg');
    await clickFieldButton(page, 'https://www.pinterest.com/pin/…', 'Use link');
    await page.waitForFunction(() => {
        const el = document.querySelector('.ft-bg');
        return el && (el.style.backgroundImage || '').includes('blob:');
    }, { timeout: 10000 });
    let links = await lget(page, 'ft-links.v1');
    assert(links.length === 1 && links[0].source === 'https://example.com/pic.jpg', `saved links: ${JSON.stringify(links)}`);
    await page.reload({ waitUntil: 'networkidle2' });
    await page.waitForFunction(() => {
        const el = document.querySelector('.ft-bg');
        return el && (el.style.backgroundImage || '').includes('blob:');
    }, { timeout: 10000 });
    // remove it
    await openSettings(page);
    await page.click('.ft-linksw-del');
    await sleep(300);
    links = await lget(page, 'ft-links.v1');
    assert(links.length === 0, 'link not removed');
    await close();
});

check('bg', 'bad link keeps previous background and explains', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, { intercept: fulfillVideo });
    await openSettings(page);
    await page.type('input[placeholder="https://www.pinterest.com/pin/…"]', 'https://example.com/broken.png');
    await clickFieldButton(page, 'https://www.pinterest.com/pin/…', 'Use link');
    await page.waitForFunction(() => [...document.querySelectorAll('.ft-field-hint')].some((h) => /Could not load that pin or link/.test(h.textContent)), { timeout: 10000 });
    const s = await lget(page, 'ft-settings.v2');
    assert(s === null || s.background.kind === 'builtin', `background changed on failure: ${JSON.stringify(s && s.background)}`);
    await close();
});

check('bg', 'upload image applies for the visit and resets with a notice after reload', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await openSettings(page);
    const input = await page.$('input[aria-label="Upload background image or video file"]');
    await input.uploadFile(path.join(MEDIA, 'tiny.jpg'));
    await page.waitForFunction(() => {
        const el = document.querySelector('.ft-bg');
        return el && (el.style.backgroundImage || '').includes('blob:');
    }, { timeout: 8000 });
    await page.reload({ waitUntil: 'networkidle2' });
    await sleep(800);
    const s = await lget(page, 'ft-settings.v2');
    assert(s.background.kind === 'color', `upload did not reset: ${JSON.stringify(s.background)}`);
    await close();
});

check('bg', 'fit toggle and scrim slider apply to imported images', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, { intercept: fulfillVideo });
    await openSettings(page);
    await page.type('input[placeholder="https://www.pinterest.com/pin/…"]', 'https://example.com/pic.jpg');
    await clickFieldButton(page, 'https://www.pinterest.com/pin/…', 'Use link');
    await page.waitForFunction(() => (document.querySelector('.ft-bg')?.style.backgroundImage || '').includes('blob:'), { timeout: 10000 });
    await clickByText(page, 'Show whole image');
    await sleep(300);
    let size = await page.$eval('.ft-bg', (el) => el.style.backgroundSize);
    assert(size === 'contain', `fit contain: ${size}`);
    await clickByText(page, 'Crop to fill');
    await sleep(300);
    size = await page.$eval('.ft-bg', (el) => el.style.backgroundSize);
    assert(size === 'cover', `fit cover: ${size}`);
    // scrim slider to max
    await page.evaluate(() => {
        const el = [...document.querySelectorAll('input[type="range"]')].find((r) => r.getAttribute('aria-label') === 'Background darkness');
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        setter.call(el, '0.85');
        el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await sleep(300);
    const op = await page.$eval('.ft-scrim', (el) => parseFloat(el.style.opacity));
    assert(Math.abs(op - 0.85) < 0.01, `scrim opacity: ${op}`);
    await close();
});

check('bg', 'animate toggle pauses and resumes scene video', async ({ browser, base }) => {
    const seed = { 'ft-settings.v2': { background: { kind: 'scene', id: 'lofi-246243' } } };
    const { page, close } = await newPage(browser, base, { seed, intercept: fulfillVideo });
    await page.waitForFunction(() => [...document.querySelectorAll('video.ft-bgvideo')].some((v) => !v.paused && v.readyState >= 2), { timeout: 15000 });
    await openSettings(page);
    await page.evaluate(() => {
        const el = [...document.querySelectorAll('.ft-toggle')].find((t) => t.textContent.includes('Animate backgrounds'));
        el.click();
    });
    await sleep(600);
    let paused = await page.$$eval('video.ft-bgvideo', (vs) => vs.every((v) => v.paused));
    assert(paused, 'video still playing with animation off');
    await page.evaluate(() => {
        const el = [...document.querySelectorAll('.ft-toggle')].find((t) => t.textContent.includes('Animate backgrounds'));
        el.click();
    });
    await sleep(800);
    paused = await page.$$eval('video.ft-bgvideo', (vs) => vs.every((v) => v.paused));
    assert(!paused, 'video did not resume');
    await close();
});
