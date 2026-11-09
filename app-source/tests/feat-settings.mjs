// Settings + appearance + clock-only + compact feature checks.
import { check, newPage, timeText, sleep, assert, lget, clickByText, clickByAria } from './run.mjs';

async function openSettings(page) {
    await page.click('[aria-label="Settings"]');
    await page.waitForSelector('.ft-sheet', { timeout: 8000 });
}

check('settings', 'accent, font, clock style and size apply and persist', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await openSettings(page);
    await page.click('[aria-label="Sky accent"]');
    await clickByText(page, 'Mono');
    await clickByText(page, 'Bar');
    await clickByText(page, 'Large');
    await sleep(300);
    let s = await lget(page, 'ft-settings.v2');
    assert(s.accent === '#9cc7ff' && s.font === 'mono' && s.clockStyle === 'bar' && s.clockSize === 'l', `settings: ${JSON.stringify({ a: s.accent, f: s.font, c: s.clockStyle, z: s.clockSize })}`);
    assert(await page.$('.ft-progressbar'), 'bar style not rendered');
    assert(await page.$('.ft-clock.is-l'), 'large size not applied');
    await page.reload({ waitUntil: 'networkidle2' });
    s = await lget(page, 'ft-settings.v2');
    assert(s.accent === '#9cc7ff' && s.clockStyle === 'bar', 'settings lost on reload');
    assert(await page.$('.ft-progressbar'), 'bar style not rendered after reload');
    await close();
});

check('settings', 'theme chip applies accent+font+background together', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await openSettings(page);
    await clickByText(page, 'Dusk theme');
    await sleep(300);
    const s = await lget(page, 'ft-settings.v2');
    assert(s.accent === '#ffcf99' && s.font === 'serif' && s.background.kind === 'color' && s.background.id === '#3b2f4a', `theme wrong: ${JSON.stringify({ a: s.accent, f: s.font, b: s.background })}`);
    await close();
});

check('settings', 'reset settings restores defaults', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await openSettings(page);
    await clickByText(page, 'Mono');
    await clickByText(page, 'Reset settings');
    await sleep(300);
    const s = await lget(page, 'ft-settings.v2');
    assert(s.font === 'sans' && s.focusMin === 25 && s.background.kind === 'builtin', `reset failed: font ${s.font} focus ${s.focusMin} bg ${s.background.kind}`);
    await close();
});

check('settings', 'toggles: cycle dots, stats chip, hints hide and show', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await openSettings(page);
    const toggle = async (label) => {
        const ok = await page.evaluate((label) => {
            const el = [...document.querySelectorAll('.ft-toggle')].find((t) => t.textContent.includes(label));
            if (!el) return false; el.click(); return true;
        }, label);
        if (!ok) throw new Error('no toggle ' + label);
    };
    await toggle('Cycle dots');
    await toggle("Today's stats chip");
    await toggle('Shortcut hints');
    await page.click('[aria-label="Close settings"]');
    await sleep(200);
    assert(!(await page.$('.ft-dots')), 'dots still visible');
    assert(!(await page.$('.ft-chip')), 'chip still visible');
    assert(!(await page.$('.ft-hint')), 'hint still visible');
    await openSettings(page);
    await toggle('Cycle dots');
    await toggle("Today's stats chip");
    await toggle('Shortcut hints');
    await page.click('[aria-label="Close settings"]');
    await sleep(200);
    assert(await page.$('.ft-dots'), 'dots did not return');
    assert(await page.$('.ft-chip'), 'chip did not return');
    assert(await page.$('.ft-hint'), 'hint did not return');
    await close();
});

check('settings', 'settings persist across reload incl. durations and toggles', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await openSettings(page);
    await page.evaluate(() => {
        const input = [...document.querySelectorAll('.ft-stepper-input')].find((i) => i.getAttribute('aria-label') === 'Short break value');
        const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
        setter.call(input, '7');
        input.dispatchEvent(new Event('input', { bubbles: true }));
    });
    await sleep(300);
    await page.reload({ waitUntil: 'networkidle2' });
    const s = await lget(page, 'ft-settings.v2');
    assert(s.shortMin === 7, `shortMin not persisted: ${s.shortMin}`);
    await close();
});

check('clockonly', 'clock-only mode hides controls, show-controls returns them', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await openSettings(page);
    const ok = await page.evaluate(() => {
        const el = [...document.querySelectorAll('.ft-toggle')].find((t) => t.textContent.includes('Clock-only mode'));
        if (!el) return false; el.click(); return true;
    });
    assert(ok, 'no clock-only toggle');
    await page.click('[aria-label="Close settings"]');
    await sleep(300);
    assert(!(await page.$('.ft-modes')), 'mode tabs still visible');
    assert(!(await page.$('.ft-controls')), 'controls still visible');
    assert(await page.$('.ft-center.is-clockonly'), 'clock-only class missing');
    await clickByText(page, 'Show controls');
    await sleep(200);
    assert(await page.$('.ft-modes'), 'mode tabs did not return');
    assert(await page.$('.ft-controls'), 'controls did not return');
    await close();
});

check('clockonly', 'drag moves clock and position persists across reload', async ({ browser, base }) => {
    const seed = { 'ft-settings.v2': { clockOnly: true, background: { kind: 'color', id: '#101418' } } };
    const { page, close } = await newPage(browser, base, { seed });
    await page.waitForSelector('.ft-center.is-clockonly');
    const before = await page.$eval('.ft-clock', (el) => el.getBoundingClientRect().toJSON());
    // drag clock body by pointer events on .ft-clock
    const cx = before.x + before.width / 2, cy = before.y + before.height / 2;
    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx - 300, cy - 150, { steps: 12 });
    await page.mouse.up();
    await sleep(300);
    const after = await page.$eval('.ft-clock', (el) => el.getBoundingClientRect().toJSON());
    assert(Math.abs(after.x - (before.x - 300)) < 40 && Math.abs(after.y - (before.y - 150)) < 40, `drag failed: ${JSON.stringify({ before, after })}`);
    const stored = await lget(page, 'ft-clockfree.v1');
    assert(stored && typeof stored.x === 'number', 'position not persisted');
    await page.reload({ waitUntil: 'networkidle2' });
    await page.waitForSelector('.ft-center.is-clockonly');
    const afterReload = await page.$eval('.ft-clock', (el) => el.getBoundingClientRect().toJSON());
    assert(Math.abs(afterReload.x - after.x) < 40 && Math.abs(afterReload.y - after.y) < 40, `position not restored: ${JSON.stringify({ after, afterReload })}`);
    await close();
});

check('clockonly', 'resize handle changes scale and persists', async ({ browser, base }) => {
    const seed = { 'ft-settings.v2': { clockOnly: true, background: { kind: 'color', id: '#101418' } } };
    const { page, close } = await newPage(browser, base, { seed });
    await page.waitForSelector('.ft-clock-resize');
    const handle = await page.$eval('.ft-clock-resize', (el) => el.getBoundingClientRect().toJSON());
    const cx = handle.x + handle.width / 2, cy = handle.y + handle.height / 2;
    await page.mouse.move(cx, cy);
    await page.mouse.down();
    await page.mouse.move(cx + 120, cy + 120, { steps: 10 });
    await page.mouse.up();
    await sleep(300);
    const stored = await lget(page, 'ft-clockfree.v1');
    assert(stored && stored.s > 1.05, `scale not increased: ${JSON.stringify(stored)}`);
    await page.reload({ waitUntil: 'networkidle2' });
    await page.waitForSelector('.ft-center.is-clockonly');
    const stored2 = await lget(page, 'ft-clockfree.v1');
    assert(stored2.s > 1.05, 'scale not restored');
    await close();
});

check('compact', 'minimize shows pill with working controls, expand returns', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await clickByAria(page, 'Minimize to a small timer');
    await page.waitForSelector('.ft-compactpill');
    const disp = await page.$eval('.ft-center', (el) => getComputedStyle(el).display);
    assert(disp === 'none', `center still visible in compact: display ${disp}`);
    await page.click('[aria-label="Start"]');
    await sleep(1600);
    const t = await page.$eval('.ft-compacttime', (el) => el.textContent.trim());
    assert(t !== '25:00', `compact timer not ticking: ${t}`);
    await page.click('[aria-label="Expand timer"]');
    await sleep(200);
    assert(await page.$('.ft-center'), 'center did not return');
    await close();
});

check('fullscreen', 'fullscreen toggle enters and exits', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await clickByAria(page, 'Fullscreen');
    await sleep(400);
    let fs = await page.evaluate(() => !!document.fullscreenElement);
    assert(fs, 'did not enter fullscreen');
    await clickByAria(page, 'Fullscreen');
    await sleep(400);
    fs = await page.evaluate(() => !!document.fullscreenElement);
    assert(!fs, 'did not exit fullscreen');
    await close();
});
