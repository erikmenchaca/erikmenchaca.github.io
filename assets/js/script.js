document.addEventListener('DOMContentLoaded', function() {
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
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
        darkModeButton.innerHTML = document.body.classList.contains('dark-mode')
            ? '🌞 Light Mode'
            : '🌙 Dark Mode';
    }

    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        updateDarkModeButtonText();
    }

    function toggleAccessibilityPanel() {
        accessibilityPanel.classList.toggle('active');
    }

    function closeAccessibilityPanel() {
        accessibilityPanel.classList.remove('active');
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
                        li.innerHTML = `${course.name}`;
                        coursesList.appendChild(li);
                    });
                }
                if (upcomingList && Array.isArray(data.upcomingCourses)) {
                    data.upcomingCourses.forEach(course => {
                        const li = document.createElement('li');
                        li.innerHTML = `${course.name}, <span style="font-style: italic; color: black;">${course.teacher}</span>`;
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

    document.getElementById('increaseText').addEventListener('click', increaseTextSize);
    document.getElementById('decreaseText').addEventListener('click', decreaseTextSize);
    darkModeButton.addEventListener('click', toggleDarkMode);
    accessibilityToggle.addEventListener('click', toggleAccessibilityPanel);
    closePanelButton.addEventListener('click', closeAccessibilityPanel);
    resetButton.addEventListener('click', resetAccessibilitySettings);

    addCourseToList();
});
