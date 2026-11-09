// Music player (focus radio + Spotify) feature checks.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { check, newPage, sleep, assert, lget, clickByText } from './run.mjs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const MEDIA = path.join(__dirname, 'media');
const TINY_MP3 = fs.readFileSync(path.join(MEDIA, 'tiny.mp3'));
const TINY_JPG = fs.readFileSync(path.join(MEDIA, 'tiny.jpg'));

const fulfillAudio = (req) => {
    const u = req.url();
    if (u.includes('cdn.pixabay.com/download/audio/')) {
        return req.respond({ status: 200, contentType: 'audio/mpeg', headers: { 'access-control-allow-origin': '*' }, body: TINY_MP3 });
    }
    if (u.includes('cdn.pixabay.com/audio/') || u.includes('cdn.pixabay.com/gradients/')) {
        return req.respond({ status: 200, contentType: 'image/jpeg', headers: { 'access-control-allow-origin': '*' }, body: TINY_JPG });
    }
    return req.continue();
};

check('music', 'player renders with radio mode by default', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.waitForSelector('[data-testid="music-player"]');
    const title = await page.$eval('.ft-player-title', (el) => el.textContent);
    assert(title.length > 2, `track title: ${title}`);
    const mode = await page.$eval('.ft-player-modebtn.is-active', (el) => el.textContent);
    assert(mode === 'Focus radio', `mode: ${mode}`);
    await close();
});

check('music', 'radio play, auto-advance on track end, next/prev, volume persist', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, { intercept: fulfillAudio });
    await page.waitForSelector('[data-testid="music-player"]');
    await page.click('[aria-label="Play"]');
    await sleep(500);
    let s = await lget(page, 'ft-settings.v2');
    assert(s.radio.playing === true && s.radio.index === 0, `radio state: ${JSON.stringify(s.radio)}`);
    // tiny.mp3 is 2s: should auto-advance to track 2
    await page.waitForFunction(() => JSON.parse(window.localStorage.getItem('sft:ft-settings.v2')).radio.index === 1, { timeout: 15000 });
    const title = await page.$eval('.ft-player-title', (el) => el.textContent);
    assert(title === 'Lofi', `after advance title: ${title}`);
    await page.click('[aria-label="Next track"]');
    await sleep(300);
    s = await lget(page, 'ft-settings.v2');
    assert(s.radio.index === 2, `next: ${s.radio.index}`);
    await page.click('[aria-label="Previous track"]');
    await page.click('[aria-label="Previous track"]');
    await sleep(300);
    s = await lget(page, 'ft-settings.v2');
    assert(s.radio.index === 0, `prev wrap: ${s.radio.index}`);
    // volume
    await page.evaluate(() => {
        const el = document.querySelector('.ft-player-vol');
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        setter.call(el, '0.35');
        el.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await sleep(300);
    s = await lget(page, 'ft-settings.v2');
    assert(Math.abs(s.radio.volume - 0.35) < 0.01, `volume: ${s.radio.volume}`);
    await close();
});

check('music', 'radio playing state survives reload (resumes after tap)', async ({ browser, base }) => {
    const seed = { 'ft-settings.v2': { radio: { index: 1, playing: true, volume: 0.7 }, musicMode: 'radio', musicOpen: true } };
    const { page, close } = await newPage(browser, base, { seed, intercept: fulfillAudio });
    await page.waitForSelector('[data-testid="music-player"]');
    await page.mouse.click(700, 400); // first gesture resumes
    await sleep(1200);
    const title = await page.$eval('.ft-player-title', (el) => el.textContent);
    assert(title === 'Lofi', `resumed track: ${title}`);
    await close();
});

check('music', 'minimize keeps playing state; hide and reopen via settings', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, { intercept: fulfillAudio });
    await page.waitForSelector('[data-testid="music-player"]');
    await page.click('[aria-label="Play"]');
    await sleep(300);
    await page.click('[aria-label="Minimize player"]');
    await sleep(200);
    assert(await page.$('.ft-player.is-mini'), 'not minimized');
    let s = await lget(page, 'ft-settings.v2');
    assert(s.radio.playing === true, 'minimize stopped playback');
    await page.click('[aria-label="Expand player"]');
    await sleep(200);
    assert(!(await page.$('.ft-player.is-mini')), 'did not expand');
    await page.click('[aria-label="Hide player"]');
    await sleep(200);
    assert(!(await page.$('[data-testid="music-player"]')), 'player still visible');
    s = await lget(page, 'ft-settings.v2');
    assert(s.musicOpen === false, 'musicOpen not false');
    // reopen from settings
    await page.click('[aria-label="Settings"]');
    await page.waitForSelector('.ft-sheet');
    await page.evaluate(() => {
        const el = [...document.querySelectorAll('.ft-toggle')].find((t) => t.textContent.includes('Show mini player'));
        el.click();
    });
    await page.click('[aria-label="Close settings"]');
    await sleep(300);
    assert(await page.$('[data-testid="music-player"]'), 'player did not reopen');
    await close();
});

check('music', 'player drag repositions and persists across reload', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.waitForSelector('.ft-player-head');
    const before = await page.$eval('[data-testid="music-player"]', (el) => el.getBoundingClientRect().toJSON());
    await page.mouse.move(before.x + 16, before.y + 16); // grip icon area, left of the mode buttons
    await page.mouse.down();
    await page.mouse.move(before.x + 416, before.y - 184, { steps: 12 });
    await page.mouse.up();
    await sleep(300);
    const after = await page.$eval('[data-testid="music-player"]', (el) => el.getBoundingClientRect().toJSON());
    assert(Math.abs(after.x - before.x) > 100, `drag failed: ${JSON.stringify({ before, after })}`);
    await page.reload({ waitUntil: 'networkidle2' });
    await page.waitForSelector('[data-testid="music-player"]');
    const afterReload = await page.$eval('[data-testid="music-player"]', (el) => el.getBoundingClientRect().toJSON());
    assert(Math.abs(afterReload.x - after.x) < 30 && Math.abs(afterReload.y - after.y) < 30, `position not restored: ${JSON.stringify({ after, afterReload })}`);
    await close();
});

check('music', 'spotify mode: presets set embed iframe, bad link rejected, good link applied', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.waitForSelector('[data-testid="music-player"]');
    // switch to spotify without playlist -> hint with settings button
    await page.click('.ft-player-modebtn:nth-child(2)');
    await sleep(300);
    let body = await page.$eval('.ft-player-body', (el) => el.textContent);
    assert(/Pick a Spotify playlist/.test(body), `spotify empty state: ${body}`);
    // preset
    await page.click('[aria-label="Settings"]');
    await page.waitForSelector('.ft-sheet');
    await clickByText(page, 'Deep Focus');
    await sleep(400);
    let s = await lget(page, 'ft-settings.v2');
    assert(s.spotify === 'deep' && s.musicMode === 'spotify', `spotify preset: ${JSON.stringify({ sp: s.spotify, m: s.musicMode })}`);
    await page.click('[aria-label="Close settings"]');
    await sleep(400);
    const src = await page.$eval('.ft-player-iframe', (el) => el.src);
    assert(src === 'https://open.spotify.com/embed/playlist/37i9dQZF1DWZeKCadgRdKQ?theme=0', `iframe src: ${src}`);
    // bad link
    await page.click('[aria-label="Settings"]');
    await page.waitForSelector('.ft-sheet');
    await page.type('input[placeholder="https://open.spotify.com/playlist/…"]', 'https://example.com/not-spotify');
    await clickByText(page, 'Use link');
    await sleep(300);
    const err = await page.$eval('.ft-sheet', (el) => el.textContent);
    assert(/not a Spotify link/.test(err), 'bad spotify link not rejected');
    s = await lget(page, 'ft-settings.v2');
    assert(s.spotify === 'deep', 'bad link overwrote playlist');
    // good link
    await page.evaluate(() => { document.querySelector('input[placeholder="https://open.spotify.com/playlist/…"]').value = ''; });
    await page.type('input[placeholder="https://open.spotify.com/playlist/…"]', 'https://open.spotify.com/album/4LH4d3cOWNNsVw41Gqt2kv?si=xyz');
    await clickByText(page, 'Use link');
    await sleep(400);
    s = await lget(page, 'ft-settings.v2');
    assert(s.spotify.includes('album/4LH4d3cOWNNsVw41Gqt2kv'), `good link: ${s.spotify}`);
    await close();
});

check('music', 'switching to spotify stops the radio', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, { intercept: fulfillAudio });
    await page.waitForSelector('[data-testid="music-player"]');
    await page.click('[aria-label="Play"]');
    await sleep(400);
    await page.click('.ft-player-modebtn:nth-child(2)');
    await sleep(400);
    const s = await lget(page, 'ft-settings.v2');
    assert(s.radio.playing === false, `radio still playing under spotify: ${JSON.stringify(s.radio)}`);
    await close();
});
