document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    const lastUpdatedElement = document.getElementById('last-updated');

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    if (lastUpdatedElement) {
        const now = new Date();
        lastUpdatedElement.textContent = `Last updated: ${now.toLocaleDateString(undefined, {
            month: 'long',
            day: 'numeric',
            year: 'numeric'
        })}`;
    }

    let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16;
    const accessibilityToggle = document.getElementById('accessibilityToggle');
    const accessibilityPanel = document.getElementById('accessibilityPanel');
    const darkModeButton = document.getElementById('darkModeToggle');
    const resetButton = document.getElementById('resetSettings');
    const closePanelButton = document.getElementById('closePanel');
    const toast = document.getElementById('toast');

    function applyFontSize() {
        document.body.style.fontSize = `${currentFontSize}px`;
    }

    function increaseTextSize() {
        const maxFont = window.innerWidth < 768 ? 30 : 48;
        if (currentFontSize < maxFont) {
            currentFontSize += 2;
            applyFontSize();
            localStorage.setItem('fontSize', currentFontSize);
        }
    }

    function decreaseTextSize() {
        if (currentFontSize > 14) {
            currentFontSize -= 2;
            applyFontSize();
            localStorage.setItem('fontSize', currentFontSize);
        }
    }

    function updateDarkModeButtonText() {
        if (darkModeButton) {
            darkModeButton.innerHTML = document.body.classList.contains('dark-mode')
                ? '🌞 Light Mode'
                : '🌙 Dark Mode';
        }
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        updateDarkModeButtonText();
    }

    function toggleAccessibilityPanel() {
        if (accessibilityPanel) {
            accessibilityPanel.classList.toggle('active');
        }
    }

    function closeAccessibilityPanel() {
        if (accessibilityPanel) {
            accessibilityPanel.classList.remove('active');
        }
    }

    function resetAccessibilitySettings() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        currentFontSize = 16;
        applyFontSize();
        localStorage.setItem('fontSize', currentFontSize);
        closeAccessibilityPanel();
        updateDarkModeButtonText();
        showToast('Accessibility settings reset successfully!');
    }

    function showToast(message) {
        if (!toast) return;
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    function detectSystemDarkMode() {
        if (!localStorage.getItem('theme')) {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            if (prefersDark) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            }
        }
    }

    function addCourseToList() {
        fetch('assets/json/data.json')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch courses');
                }
                return response.json();
            })
            .then(data => {
                const coursesList = document.getElementById('courses-list');
                const upcomingList = document.getElementById('upcoming-courses-list');
                if (coursesList && Array.isArray(data.courses)) {
                    data.courses.forEach(course => {
                        const li = document.createElement('li');
                        li.textContent = course.name;
                        coursesList.appendChild(li);
                    });
                }
                if (upcomingList && Array.isArray(data.upcomingCourses)) {
                    data.upcomingCourses.forEach(course => {
                        const li = document.createElement('li');
                        li.textContent = course.name;
                        upcomingList.appendChild(li);
                    });
                }
            })
            .catch(error => {
                console.error('Error loading courses:', error);
            });
    }

    detectSystemDarkMode();
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }
    updateDarkModeButtonText();
    applyFontSize();

    const increaseTextButton = document.getElementById('increaseText');
    const decreaseTextButton = document.getElementById('decreaseText');

    if (increaseTextButton) increaseTextButton.addEventListener('click', increaseTextSize);
    if (decreaseTextButton) decreaseTextButton.addEventListener('click', decreaseTextSize);
    if (darkModeButton) darkModeButton.addEventListener('click', toggleDarkMode);
    if (accessibilityToggle) accessibilityToggle.addEventListener('click', toggleAccessibilityPanel);
    if (closePanelButton) closePanelButton.addEventListener('click', closeAccessibilityPanel);
    if (resetButton) resetButton.addEventListener('click', resetAccessibilitySettings);

    addCourseToList();
});
