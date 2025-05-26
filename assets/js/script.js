document.addEventListener('DOMContentLoaded', function () {
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

    let toastTimeout;

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
            darkModeButton.textContent = document.body.classList.contains('dark-mode')
                ? 'Switch to Light Mode'
                : 'Switch to Dark Mode';
        }
    }

    function toggleDarkMode() {
        document.body.classList.add('no-transition');
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('theme', document.body.classList.contains('dark-mode') ? 'dark' : 'light');
        updateDarkModeButtonText();
        setTimeout(() => {
            document.body.classList.remove('no-transition');
        }, 50);
    }

    function toggleAccessibilityPanel() {
        if (accessibilityPanel && accessibilityToggle) {
            if (accessibilityPanel.classList.contains('active')) {
                accessibilityPanel.classList.remove('active');
                accessibilityPanel.classList.add('hidden');
                accessibilityToggle.style.display = 'flex';
            } else {
                accessibilityPanel.classList.add('active');
                accessibilityPanel.classList.remove('hidden');
                accessibilityToggle.style.display = 'none';
            }
        }
    }

    function closeAccessibilityPanel() {
        if (accessibilityPanel && accessibilityToggle) {
            accessibilityPanel.classList.remove('active');
            accessibilityPanel.classList.add('hidden');
            accessibilityToggle.style.display = 'flex';
        }
    }

    function resetAccessibilitySettings() {
        document.body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        currentFontSize = 16;
        applyFontSize();
        localStorage.setItem('fontSize', currentFontSize);
        closeAccessibilityPanel();
        showToast('Accessibility settings reset successfully!');
    }

    function showToast(message) {
        if (!toast) return;
        clearTimeout(toastTimeout);
        toast.textContent = message;
        toast.classList.add('show');
        toastTimeout = setTimeout(() => {
            toast.classList.remove('show');
        }, 3000);
    }

    function addCourseToList() {
        fetch('assets/json/courses.json')
            .then(response => response.json())
            .then(data => {
                const coursesList = document.getElementById('courses-list');
                if (coursesList && Array.isArray(data.courses)) {
                    data.courses.forEach(course => {
                        const li = document.createElement('li');
                        li.textContent = course;
                        coursesList.appendChild(li);
                    });
                }
            })
            .catch(error => {
                console.error('Error loading courses:', error);
            });
    }

    function addUpComingCourseToList() {
        fetch('assets/json/courses.json')
            .then(response => response.json())
            .then(data => {
                const upcoming = document.getElementById('upcoming-courses-list');
                if (upcoming && Array.isArray(data.upcomingCourses)) {
                    data.upcomingCourses.forEach(course => {
                        const li = document.createElement('li');
                        li.textContent = course;
                        upcoming.appendChild(li);
                    });
                }
            })
            .catch(error => {
                console.error('Error loading upcoming courses:', error);
            });
    }

    // Load saved dark mode preference
    if (localStorage.getItem('theme') === 'dark') {
        document.body.classList.add('dark-mode');
    }

    updateDarkModeButtonText();
    applyFontSize();

    // Event Listeners
    document.getElementById('increaseText')?.addEventListener('click', increaseTextSize);
    document.getElementById('decreaseText')?.addEventListener('click', decreaseTextSize);
    darkModeButton?.addEventListener('click', toggleDarkMode);
    accessibilityToggle?.addEventListener('click', toggleAccessibilityPanel);
    closePanelButton?.addEventListener('click', closeAccessibilityPanel);
    resetButton?.addEventListener('click', resetAccessibilitySettings);

    // Load course data
    addCourseToList();
    addUpComingCourseToList();
    const lastUpdated = new Date(document.lastModified);
  document.getElementById("last-updated").textContent = 
    "Last updated: " + lastUpdated.toLocaleDateString();
});
