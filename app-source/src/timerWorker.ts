/// <reference lib="webworker" />
// Ticking from a worker: hidden tabs throttle page timers (after ~5 minutes hidden,
// Chrome can delay them a minute or more), while a worker keeps its cadence, so a
// running session completes on time as long as the tab is alive. A suspended or
// closed browser cannot tick at all - that elapsed time is recovered on the next
// visit by the session-restore path instead.
let iv: ReturnType<typeof setInterval> | null = null;
(self as unknown as Worker).onmessage = (e: MessageEvent) => {
    if (e.data === 'start') {
        if (!iv) iv = setInterval(() => (self as unknown as Worker).postMessage('tick'), 500);
    } else if (e.data === 'stop' && iv) {
        clearInterval(iv);
        iv = null;
    }
};
export {};
