// Feature test runner for the study focus timer.
// Usage: node tests/run.mjs [--root DIR] [--only substring] [--headed] [--keep]
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const arg = (name, dflt) => {
    const i = process.argv.indexOf(name);
    return i >= 0 ? process.argv[i + 1] : dflt;
};
const ROOT = path.resolve(arg('--root', path.join(process.env.HOME || '/home/sandbox', 'staging')));
const ONLY = arg('--only', '');
const SHOTS = path.resolve(arg('--shots', '/tmp/shots'));
fs.mkdirSync(SHOTS, { recursive: true });

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.mjs': 'text/javascript', '.css': 'text/css', '.txt': 'text/plain', '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.png': 'image/png', '.svg': 'image/svg+xml', '.json': 'application/json', '.mp4': 'video/mp4', '.webm': 'video/webm', '.mp3': 'audio/mpeg', '.m4a': 'audio/mp4', '.wav': 'audio/wav', '.webmanifest': 'application/manifest+json', '.ico': 'image/x-icon' };

export function serve(root) {
    const server = http.createServer((req, res) => {
        const u = new URL(req.url, 'http://x');
        let p = decodeURIComponent(u.pathname);
        if (p.endsWith('/')) p += 'index.html';
        const file = path.join(root, p);
        if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
            res.writeHead(404); res.end('nf'); return;
        }
        res.writeHead(200, { 'content-type': MIME[path.extname(file).toLowerCase()] || 'application/octet-stream', 'cache-control': 'no-store' });
        fs.createReadStream(file).pipe(res);
    });
    return new Promise((resolve) => server.listen(0, '127.0.0.1', () => resolve({ server, port: server.address().port })));
}

// ---------- check registry ----------
export const checks = [];
export function check(feature, name, fn) { checks.push({ feature, name, fn }); }

// ---------- shared helpers ----------
export const DESKTOP = { width: 1440, height: 900, deviceScaleFactor: 1 };
export const MOBILE = { width: 390, height: 844, deviceScaleFactor: 2, isMobile: true, hasTouch: true };

export async function newPage(browser, base, opts = {}) {
    const ctx = await browser.createBrowserContext();
    const page = await ctx.newPage();
    await page.setViewport(opts.mobile ? MOBILE : DESKTOP);
    const errors = [];
    page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
    page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
    if (opts.seed) {
        await page.evaluateOnNewDocument((seed) => {
            for (const [k, v] of Object.entries(seed)) window.localStorage.setItem('sft:' + k, JSON.stringify(v));
        }, opts.seed);
    }
    if (opts.intercept) {
        await page.setRequestInterception(true);
        page.on('request', opts.intercept);
    }
    await page.goto(base + (opts.path || '/'), { waitUntil: 'networkidle2', timeout: 30000 });
    const shot = (name) => page.screenshot({ path: path.join(SHOTS, name + '.png') });
    const close = async () => { await ctx.close(); };
    return { page, errors, shot, close, ctx };
}

export const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export async function timeText(page) {
    await page.waitForSelector('.ft-time', { timeout: 10000 });
    return page.$eval('.ft-time', (el) => el.textContent.trim());
}
export function parseClock(t) { const [m, s] = t.split(':').map(Number); return m * 60 + s; }

export async function waitClock(page, re, timeout = 10000) {
    await page.waitForFunction((src) => {
        const el = document.querySelector('.ft-time');
        return el && new RegExp(src).test(el.textContent);
    }, { timeout }, re.source);
}

export async function lget(page, key) {
    return page.evaluate((k) => { const r = window.localStorage.getItem('sft:' + k); return r ? JSON.parse(r) : null; }, key);
}

export async function clickByAria(page, label, parent = 'body') {
    const ok = await page.evaluate((label, parent) => {
        const root = document.querySelector(parent) || document.body;
        const el = [...root.querySelectorAll('[aria-label]')].find((e) => e.getAttribute('aria-label') === label);
        if (!el) return false;
        el.click(); return true;
    }, label, parent).catch(() => false);
    if (!ok) throw new Error(`no aria-label element: ${label}`);
}

// Click a button by visible text within a selector scope.
export async function clickByText(page, text, sel = 'button') {
    const ok = await page.evaluate((text, sel) => {
        const els = [...document.querySelectorAll(sel)];
        const el = els.find((e) => e.textContent.trim() === text || e.textContent.trim().startsWith(text));
        if (!el) return false;
        el.click(); return true;
    }, text, sel);
    if (!ok) throw new Error(`no button with text: ${text}`);
}

export function assert(cond, msg) { if (!cond) throw new Error(msg); }

// Click a button inside the same settings field as the input with the given placeholder.
export async function clickFieldButton(page, placeholder, buttonText) {
    const ok = await page.evaluate((placeholder, buttonText) => {
        const input = [...document.querySelectorAll('input')].find((i) => i.placeholder === placeholder);
        if (!input) return 'no-input';
        const field = input.closest('.ft-field') || input.parentElement;
        const btn = [...field.querySelectorAll('button')].find((b) => b.textContent.trim() === buttonText);
        if (!btn) return 'no-button';
        btn.click(); return true;
    }, placeholder, buttonText);
    if (ok !== true) throw new Error(`clickFieldButton ${placeholder} -> ${buttonText}: ${ok}`);
}

// ---------- runner ----------
const featureModules = [
    './feat-timer.mjs', './feat-tasks.mjs', './feat-settings.mjs',
    './feat-bg.mjs', './feat-music.mjs', './feat-misc.mjs',
];

const isMain = process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isMain) {
    (async () => {
        for (const m of featureModules) await import(m).catch((e) => { console.log('MODULE-SKIP', m, e.message); });
        const { server, port } = await serve(ROOT);
        const base = `http://127.0.0.1:${port}`;
        console.log('serving', ROOT, 'on', base);
        const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--autoplay-policy=no-user-gesture-required', '--window-size=1440,900'] });
        const wanted = checks.filter((c) => !ONLY || c.feature.includes(ONLY) || (c.feature + ' ' + c.name).includes(ONLY));
        let pass = 0, fail = 0;
        const failures = [];
        for (const c of wanted) {
            const t0 = Date.now();
            try {
                await c.fn({ browser, base });
                pass++;
                console.log(`PASS [${c.feature}] ${c.name} (${Date.now() - t0}ms)`);
            } catch (e) {
                fail++;
                failures.push({ c, e });
                console.log(`FAIL [${c.feature}] ${c.name}: ${e.message.split('\n')[0]}`);
            }
        }
        console.log(`\n=== ${pass} passed, ${fail} failed of ${pass + fail} ===`);
        await browser.close();
        server.close();
        process.exit(fail ? 1 : 0);
    })().catch((e) => { console.error('RUNNER ERROR', e); process.exit(2); });
          }
