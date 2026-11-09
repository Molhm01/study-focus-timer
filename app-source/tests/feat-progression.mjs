// Progression 2.0 feature checks: daily quests, bonus XP, celebrations,
// weekly chart, achievement progress, new cosmetics, data preservation.
import { check, newPage, sleep, assert, lget, clickByAria } from './run.mjs';

const dayKey = (d = new Date()) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

// Seed where every quest type is already complete today: 90 focus minutes,
// 3 sessions, 3 tasks completed today, 3-day streak through yesterday.
function maxedSeed() {
    const days = {};
    const now = Date.now();
    for (let i = 0; i < 3; i++) {
        const d = new Date(); d.setDate(d.getDate() - i - 1);
        days[dayKey(d)] = { focusSec: 1800, sessions: 1 };
    }
    days[dayKey()] = { focusSec: 5400, sessions: 3 };
    return {
        'ft-stats.v1': { days },
        'ft-tasks.v1': { tasks: [], activeId: null },
        'ft-progress-ledger.v1': { v: 1, tasks: { qa: now, qb: now - 1000, qc: now - 2000 }, migratedAt: now - 5000 },
    };
}

async function openProfile(page) {
    await page.click('[aria-label="Profile and progress"]');
    await page.waitForSelector('.pf-sheet .pf-quest', { timeout: 8000 });
}

check('progression', 'panel shows three daily quests with progress', async ({ browser, base }) => {
    const { page, errors, close } = await newPage(browser, base, { seed: maxedSeed() });
    await openProfile(page);
    const quests = await page.$$('.pf-quest');
    assert(quests.length === 3, `expected 3 quests, got ${quests.length}`);
    const names = await page.$$eval('.pf-quest strong', (els) => els.map((e) => e.textContent));
    assert(new Set(names).size === 3, `quest names not distinct: ${names}`);
    assert(!errors.length, `page errors: ${errors.join(' | ')}`);
    await close();
});

check('progression', 'claiming a quest awards bonus XP once and updates level bar', async ({ browser, base }) => {
    const { page, errors, close } = await newPage(browser, base, { seed: maxedSeed() });
    await openProfile(page);
    await sleep(300);
    // 555 base XP (today 300 + 3 prior days 255) -> Lv 4, 105/250 into level.
    const xpBefore = await page.$eval('.pf-xpnum', (el) => el.textContent.trim());
    assert(xpBefore === '105 / 250 XP', `base XP wrong: ${xpBefore}`);
    const btns = await page.$$('.pf-quest .ft-primary');
    assert(btns.length >= 2, `expected claimable quests, got ${btns.length}`);
    const label = await btns[0].evaluate((b) => b.textContent);
    const xp = parseInt(label.match(/\+(\d+)/)[1], 10);
    await btns[0].click();
    await sleep(400);
    const bonus = await lget(page, 'ft-xp-bonus.v1');
    assert(bonus.total === xp && bonus.questsClaimed === 1, `bonus wrong: ${JSON.stringify(bonus)}`);
    const xpAfter = await page.$eval('.pf-xpnum', (el) => el.textContent.trim());
    assert(xpAfter === `${105 + xp} / 250 XP`, `XP after claim: ${xpAfter} (expected ${105 + xp} / 250)`);
    // Claim button replaced by claimed marker; claims key written for today.
    const claims = await lget(page, 'ft-quests.v1');
    assert(claims.day === dayKey() && claims.claimed.length === 1, `claims wrong: ${JSON.stringify(claims)}`);
    const remaining = await page.$$('.pf-quest .ft-primary');
    assert(remaining.length === btns.length - 1, 'claim did not consume the button');
    // XP floater appeared
    assert(await page.$('.pf-xpfloat'), 'no XP floater after claim');
    assert(!errors.length, `page errors: ${errors.join(' | ')}`);
    await close();
});

check('progression', 'bonus XP and claims survive reload and cannot be double-claimed', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, { seed: maxedSeed() });
    await openProfile(page);
    await sleep(300);
    await page.click('.pf-quest .ft-primary');
    await sleep(400);
    const xpBefore = await page.$eval('.pf-xpnum', (el) => el.textContent.trim());
    await page.reload({ waitUntil: 'networkidle2' });
    await openProfile(page);
    await sleep(300);
    const xp = await page.$eval('.pf-xpnum', (el) => el.textContent.trim());
    assert(xp === xpBefore, `reloaded XP wrong: ${xp} vs ${xpBefore}`);
    const claimedRow = await page.$$eval('.pf-quest.is-claimed', (els) => els.length);
    assert(claimedRow === 1, `expected 1 claimed quest, got ${claimedRow}`);
    const bonus = await lget(page, 'ft-xp-bonus.v1');
    assert(bonus.questsClaimed === 1, `double claim detected: ${JSON.stringify(bonus)}`);
    await close();
});

check('progression', 'existing guest data preserved: level, profile, ledger all carry over', async ({ browser, base }) => {
    const days = {};
    days[dayKey()] = { focusSec: 36000, sessions: 10 }; // 600 min*2 + 10*25 = 1450 XP -> Lv 7
    const now = Date.now();
    const seed = {
        'ft-stats.v1': { days },
        'ft-tasks.v1': { tasks: [{ id: 't1', title: 'Old task', est: 1, done: 1, completed: true }], activeId: null },
        'ft-profile.v1': { name: 'Mj', base: 'cat', hat: 'headphones', eyes: 'none-eyes', aura: 'none-aura', frame: 'none-frame', updatedAt: now - 1000 },
        'ft-progress-meta.v1': { seenAchievements: [], celebratedLevel: 7 },
    };
    const { page, errors, close } = await newPage(browser, base, { seed });
    await openProfile(page);
    await sleep(400);
    const text = await page.$eval('.pf-sheet', (el) => el.textContent);
    assert(text.includes('Lv 7'), `level wrong: ${text.slice(0, 200)}`);
    assert(text.includes('Mj'), 'profile name lost');
    assert(text.includes('Graduation cap'), 'new Lv7 gear missing');
    // ledger migration: the pre-existing completed task is credited once
    const ledger = await lget(page, 'ft-progress-ledger.v1');
    assert(ledger.tasks.t1, 'pre-existing completed task not migrated');
    assert(text.includes('1'), 'task count missing');
    assert(!errors.length, `page errors: ${errors.join(' | ')}`);
    await close();
});

check('progression', 'synchronous task ledger capture still fires on complete', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await page.click('[aria-label="Tasks"]');
    await page.waitForSelector('.ft-addtask input');
    await page.type('.ft-addtask input', 'Ledger check');
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => [...document.querySelectorAll('.ft-taskname')].some((b) => b.textContent === 'Ledger check'));
    await page.evaluate(() => [...document.querySelectorAll('.ft-tasklist li')].find((li) => li.textContent.includes('Ledger check')).querySelector('.ft-taskcheck').click());
    const ledger = await lget(page, 'ft-progress-ledger.v1');
    assert(ledger && Object.keys(ledger.tasks).length === 1, `ledger not written synchronously: ${JSON.stringify(ledger)}`);
    await close();
});

check('progression', 'weekly chart renders 7 days and bar click updates caption', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, { seed: maxedSeed() });
    await openProfile(page);
    const bars = await page.$$('.pf-week-bar');
    assert(bars.length === 7, `expected 7 bars, got ${bars.length}`);
    await bars[3].click(); // 3 days ago: seeded 30 min
    const caption = await page.$eval('.pf-week-caption', (el) => el.textContent);
    assert(/30 min/.test(caption), `caption wrong after click: ${caption}`);
    await close();
});

check('progression', 'locked achievements show progress toward target', async ({ browser, base }) => {
    const days = {};
    days[dayKey()] = { focusSec: 600, sessions: 4 }; // 4/10 sessions toward Getting serious
    const { page, close } = await newPage(browser, base, { seed: { 'ft-stats.v1': { days } } });
    await openProfile(page);
    const progBars = await page.$$('.pf-ach-prog');
    assert(progBars.length > 0, 'no achievement progress bars');
    const text = await page.$eval('.pf-achievements', (el) => el.textContent);
    assert(text.includes('4/10'), `session progress missing: ${text.slice(0, 300)}`);
    await close();
});

check('progression', 'topbar alert dot shows when a quest is ready to claim', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, { seed: maxedSeed() });
    await page.waitForSelector('.pf-dot', { timeout: 8000 });
    await close();
});

check('progression', 'no alert dot when everything claimed and no new achievements', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base); // fresh guest: nothing claimable, nothing unlocked
    await sleep(1200);
    assert(!(await page.$('.pf-dot')), 'dot visible for fresh guest');
    await close();
});

check('progression', 'new avatar bases render and selection persists', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await openProfile(page);
    await page.click('[aria-label="Avatar Penguin"]');
    await sleep(300);
    const profile = await lget(page, 'ft-profile.v1');
    assert(profile.base === 'penguin', `base not saved: ${JSON.stringify(profile)}`);
    await page.reload({ waitUntil: 'networkidle2' });
    await openProfile(page);
    const active = await page.$eval('[aria-label="Avatar Penguin"]', (el) => el.className);
    assert(active.includes('is-active'), 'penguin not active after reload');
    await close();
});

check('progression', 'level-gated gear: gradcap unlocked at 7, astro locked before 24', async ({ browser, base }) => {
    const days = {};
    days[dayKey()] = { focusSec: 36000, sessions: 10 }; // 1450 XP -> Lv 7
    const { page, close } = await newPage(browser, base, { seed: { 'ft-stats.v1': { days } } });
    await openProfile(page);
    const buttons = await page.$$eval('.pf-gearbtn', (els) => els.map((e) => ({ t: e.textContent, locked: e.className.includes('is-locked') })));
    const gradcap = buttons.find((b) => b.t.includes('Graduation cap'));
    const astro = buttons.find((b) => b.t.includes('Astro helmet'));
    assert(gradcap && !gradcap.locked, 'gradcap should be unlocked at Lv7');
    assert(astro && astro.locked, 'astro should be locked at Lv7');
    // equip gradcap
    await page.evaluate(() => [...document.querySelectorAll('.pf-gearbtn')].find((b) => b.textContent.includes('Graduation cap')).click());
    await sleep(300);
    const profile = await lget(page, 'ft-profile.v1');
    assert(profile.hat === 'gradcap', `hat not saved: ${JSON.stringify(profile)}`);
    await close();
});

check('progression', 'mobile: quests and chart render without errors', async ({ browser, base }) => {
    const { page, errors, close } = await newPage(browser, base, { seed: maxedSeed(), mobile: true });
    await openProfile(page);
    assert((await page.$$('.pf-quest')).length === 3, 'quests missing on mobile');
    assert((await page.$$('.pf-week-bar')).length === 7, 'chart missing on mobile');
    assert(!(await page.$('.pf-sheet h3') === null), 'sheet structure missing');
    assert(!errors.length, `page errors: ${errors.join(' | ')}`);
    await close();
});

check('progression', 'quest set is deterministic within a day and streak quest appears with streak', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, { seed: maxedSeed() });
    await openProfile(page);
    const names1 = await page.$$eval('.pf-quest strong', (els) => els.map((e) => e.textContent).join('|'));
    // streak quest expected: 3-day streak through yesterday
    assert(names1.includes('streak'), `streak quest missing: ${names1}`);
    await page.reload({ waitUntil: 'networkidle2' });
    await openProfile(page);
    const names2 = await page.$$eval('.pf-quest strong', (els) => els.map((e) => e.textContent).join('|'));
    assert(names1 === names2, 'quest set changed across reload');
    await close();
});
