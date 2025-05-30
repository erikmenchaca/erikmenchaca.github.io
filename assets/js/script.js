document.addEventListener('DOMContentLoaded', () => {
    /* ---------- Quick helpers ---------- */
    const $ = id => document.getElementById(id);
    const ls = localStorage;
    const body = document.body;

    /* ---------- Cached elements ---------- */
    const els = {
        year: $('year'),
        toast: $('toast'),
        accessibilityToggle: $('accessibilityToggle'),
        accessibilityPanel: $('accessibilityPanel'),
        darkModeBtn: $('darkModeToggle'),
        resetBtn: $('resetSettings'),
        closePanelBtn: $('closePanel'),
        incFontBtn: $('increaseText'),
        decFontBtn: $('decreaseText'),
        coursesList: $('courses-list'),
        upcomingList: $('upcoming-courses-list'),
        lastUpdated: $('last-updated')
    };

    /* ---------- Persistent state ---------- */
    let fontSize = parseInt(ls.getItem('fontSize'), 10) || 16;
    const THEME_KEY = 'theme';

    /* ---------- UI utilities ---------- */
    const ui = {
        showToast(msg) {
            if (!els.toast) return;
            clearTimeout(ui.toastTimer);
            els.toast.textContent = msg;
            els.toast.classList.add('show');
            ui.toastTimer = setTimeout(() => els.toast.classList.remove('show'), 3000);
        },
        applyFont() {
            body.style.fontSize = `${fontSize}px`;
        },
        changeFont(delta) {
            const MAX = window.innerWidth < 768 ? 30 : 48;
            fontSize = Math.min(Math.max(fontSize + delta, 14), MAX);
            ui.applyFont();
            ls.setItem('fontSize', fontSize);
        },
        toggleDarkMode() {
            body.classList.add('no-transition');
            body.classList.toggle('dark-mode');
            ls.setItem(THEME_KEY, body.classList.contains('dark-mode') ? 'dark' : 'light');
            els.darkModeBtn.textContent = body.classList.contains('dark-mode')
                ? 'Switch to Light Mode'
                : 'Switch to Dark Mode';
            setTimeout(() => body.classList.remove('no-transition'), 50);
        },
        togglePanel(forceClose = false) {
            const { accessibilityPanel: p, accessibilityToggle: t } = els;
            if (!p || !t) return;
            const open = !forceClose && !p.classList.contains('active');
            p.classList.toggle('active', open);
            p.classList.toggle('hidden', !open);
            t.style.display = open ? 'none' : 'flex';
        },
        reset() {
            body.classList.remove('dark-mode');
            ls.setItem(THEME_KEY, 'light');
            fontSize = 16;
            ui.applyFont();
            ls.setItem('fontSize', fontSize);
            ui.togglePanel(true);
            ui.showToast('Accessibility settings reset successfully!');
        }
    };

    /* ---------- One-time DOM initialisation ---------- */
    els.year && (els.year.textContent = new Date().getFullYear());
    if (ls.getItem(THEME_KEY) === 'dark') body.classList.add('dark-mode');
    ui.applyFont();
    els.darkModeBtn && (els.darkModeBtn.textContent =
        body.classList.contains('dark-mode') ? 'Switch to Light Mode' : 'Switch to Dark Mode');
    els.lastUpdated && (els.lastUpdated.textContent =
        `Last updated: ${new Date(document.lastModified).toLocaleDateString()}`);

    /* ---------- Event listeners ---------- */
    els.incFontBtn?.addEventListener('click', () => ui.changeFont(2));
    els.decFontBtn?.addEventListener('click', ui.toggleDarkMode);
    els.accessibilityToggle?.addEventListener('click', ui.togglePanel);
    els.closePanelBtn?.addEventListener('click', () => ui.togglePanel(true));
    els.resetBtn?.addEventListener('click', ui.reset);

    /* ---------- Courses JSON (single fetch) ---------- */
    fetch('assets/json/data.json')
        .then(r => r.json())
        .then(data => {
            const appendCourses = (ul, arr = []) => {
                arr.forEach(item => {
                    const li = document.createElement('li');
                    li.innerHTML = `${item.name}, <span style="font-style: italic; color: #h8797;">${item.teacher}</span>`;
                    ul?.appendChild(li);
                });
            };

            appendCourses(els.coursesList, data.courses);
            appendCourses(els.upcomingList, data.upcomingCourses);
        })
        .catch(err => console.error('Error loading courses:', err));
});
