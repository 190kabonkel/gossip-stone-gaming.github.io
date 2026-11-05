// timer.js - customisable countdown
// Needs an element like <div id="timer"></div> on your page.
(function () {
    const CONFIG = {
        end: "2026-08-29T11:30:00", // target date and time
        id: "timer",                // id of the element to write into
        doneText: "0d 0h 0m 0s",    // shown when the countdown ends ("" keeps counting at zero)
        separator: " ",             // text between the parts
        show: { d: true, h: true, m: true, s: true },
        pad: false                  // true gives 05h 03m instead of 5h 3m
    };

    const end = new Date(CONFIG.end).getTime();
    const fmt = n => CONFIG.pad ? String(n).padStart(2, "0") : String(n);

    function tick() {
        const el = document.getElementById(CONFIG.id);
        if (!el) return;
        const time = Math.max(0, end - Date.now());
        if (time === 0 && CONFIG.doneText !== "") { el.textContent = CONFIG.doneText; return; }
        const parts = [];
        if (CONFIG.show.d) parts.push(fmt(Math.floor(time / 86400000)) + "d");
        if (CONFIG.show.h) parts.push(fmt(Math.floor(time / 3600000) % 24) + "h");
        if (CONFIG.show.m) parts.push(fmt(Math.floor(time / 60000) % 60) + "m");
        if (CONFIG.show.s) parts.push(fmt(Math.floor(time / 1000) % 60) + "s");
        el.textContent = parts.join(CONFIG.separator);
    }

    tick();
    setInterval(tick, 1000);
})();
