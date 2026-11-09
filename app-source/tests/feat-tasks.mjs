// Tasks + stats + profile feature checks.
import { check, newPage, timeText, sleep, assert, lget, clickByText } from './run.mjs';

async function openTasks(page) {
    await page.click('[aria-label="Tasks"]');
    await page.waitForSelector('.ft-sheet .ft-addtask input', { timeout: 8000 });
}

check('tasks', 'add task via Enter, becomes active; persists across reload', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await openTasks(page);
    await page.type('.ft-addtask input', 'Multisim lab 3');
    await page.keyboard.press('Enter');
    await page.waitForFunction(() => [...document.querySelectorAll('.ft-taskname')].some((b) => b.textContent === 'Multisim lab 3'));
    const line = await page.$eval('.ft-taskline', (el) => el.textContent.trim());
    assert(line === 'Multisim lab 3', `active task line: ${line}`);
    const stored = await lget(page, 'ft-tasks.v1');
    assert(stored.tasks.length === 1 && stored.activeId === stored.tasks[0].id, 'not persisted');
    await page.reload({ waitUntil: 'networkidle2' });
    assert((await page.$eval('.ft-taskline', (el) => el.textContent.trim())) === 'Multisim lab 3', 'task lost on reload');
    await close();
});

check('tasks', 'est stepper bounds and Add button', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base);
    await openTasks(page);
    await page.click('[aria-label="More pomodoros"]');
    await page.click('[aria-label="More pomodoros"]');
    assert((await page.$eval('.ft-stepper-value', (el) => el.textContent)).startsWith('3'), 'est not 3');
    await page.click('[aria-label="Fewer pomodoros"]');
    await page.type('.ft-addtask input', 'Reading');
    await clickByText(page, 'Add');
    await page.waitForFunction(() => [...document.querySelectorAll('.ft-taskname')].some((b) => b.textContent === 'Reading'));
    const stored = await lget(page, 'ft-tasks.v1');
    assert(stored.tasks[0].est === 2, `est stored wrong: ${stored.tasks[0].est}`);
    await close();
});

check('tasks', 'complete toggle, clear completed, delete', async ({ browser, base }) => {
    const seed = { 'ft-tasks.v1': { tasks: [
        { id: 't1', title: 'Alpha', est: 1, done: 0, completed: false },
        { id: 't2', title: 'Beta', est: 1, done: 0, completed: false },
        { id: 't3', title: 'Gamma', est: 1, done: 0, completed: false },
    ], activeId: 't2' } };
    const { page, close } = await newPage(browser, base, { seed });
    await openTasks(page);
    // complete Alpha
    await page.evaluate(() => [...document.querySelectorAll('.ft-tasklist li')].find((li) => li.textContent.includes('Alpha')).querySelector('.ft-taskcheck').click());
    await sleep(200);
    let stored = await lget(page, 'ft-tasks.v1');
    assert(stored.tasks.find((t) => t.id === 't1').completed, 'toggle complete failed');
    // clear completed removes only Alpha
    await clickByText(page, 'Clear completed');
    await sleep(200);
    stored = await lget(page, 'ft-tasks.v1');
    assert(stored.tasks.length === 2 && !stored.tasks.find((t) => t.id === 't1'), 'clear completed wrong');
    // delete Beta (active) clears activeId
    await page.evaluate(() => [...document.querySelectorAll('.ft-tasklist li')].find((li) => li.textContent.includes('Beta')).querySelector('.ft-taskdel').click());
    await sleep(200);
    stored = await lget(page, 'ft-tasks.v1');
    assert(stored.tasks.length === 1 && stored.activeId === null, `delete wrong: ${JSON.stringify(stored)}`);
    assert((await page.$eval('.ft-taskline', (el) => el.textContent.trim())) === 'Pick a task or just focus', 'taskline after active delete');
    await close();
});

check('tasks', 'weekly bars render seven days', async ({ browser, base }) => {
    const days = {};
    const today = new Date();
    for (let i = 0; i < 7; i++) {
        const d = new Date(today); d.setDate(d.getDate() - i);
        const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
        days[k] = { focusSec: (i + 1) * 600, sessions: 1 };
    }
    const { page, close } = await newPage(browser, base, { seed: { 'ft-stats.v1': { days } } });
    await openTasks(page);
    const bars = await page.$$eval('.ft-weekbar', (els) => els.map((e) => parseInt(e.style.height)));
    assert(bars.length === 7, `expected 7 bars, got ${bars.length}`);
    assert(Math.max(...bars) === 64, 'max bar not full height');
    const chip = await page.$eval('.ft-chip', (el) => el.textContent);
    assert(/1 session · 10 min · 7-day streak/.test(chip), `chip: ${chip}`);
    await close();
});

check('tasks', 'profile panel shows snapshot from stats and tasks', async ({ browser, base }) => {
    const days = {};
    const d = new Date();
    const k = `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
    days[k] = { focusSec: 3000, sessions: 2 };
    const seed = {
        'ft-stats.v1': { days },
        'ft-tasks.v1': { tasks: [{ id: 't1', title: 'Done task', est: 1, done: 1, completed: true }], activeId: null },
    };
    const { page, errors, close } = await newPage(browser, base, { seed });
    await page.click('[aria-label="Profile and progress"]');
    await page.waitForSelector('.pf-stat', { timeout: 8000 });
    await sleep(500);
    const text = await page.$eval('.ft-sheet', (el) => el.textContent);
    assert(/50 min|50m/.test(text) || text.includes('50'), `profile totals missing focus minutes: ${text.slice(0, 400)}`);
    assert(!errors.length, `page errors: ${errors.join(' | ')}`);
    await close();
});

check('tasks', 'renaming a task updates the row and active task line', async ({ browser, base }) => {
    const { page, close } = await newPage(browser, base, {});
    await page.click('[aria-label="Tasks"]');
    await page.waitForSelector('.ft-sheet');
    await page.type('.ft-addtask input', 'Alpha');
    await page.click('.ft-addtask .ft-primary');
    await page.waitForSelector('[aria-label="Rename Alpha"]');
    await page.click('[aria-label="Rename Alpha"]');
    await page.waitForSelector('.ft-taskedit');
    await page.evaluate(() => { const i = document.querySelector('.ft-taskedit'); i.value = ''; });
    await page.type('.ft-taskedit', 'Beta');
    await page.keyboard.press('Enter');
    await page.waitForSelector('[aria-label="Rename Beta"]');
    const line = await page.$eval('.ft-taskline', (el) => el.textContent);
    assert(/Beta/.test(line), `taskline: ${line}`);
    await close();
});
