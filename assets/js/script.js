
// ===== Set Current Year =====
document.getElementById('year').textContent = new Date().getFullYear();

// ===== Load Courses from JSON =====
function addCourseToList() {
    fetch('assets/json/courses.json')
        .then(function(response) {
            if (!response.ok) {
                throw new Error('Failed to fetch courses');
            }
            return response.json();
        })
        .then(function(courses) {
            var coursesList = document.getElementById('courses-list');
            courses.forEach(function(course, index) {
                var li = document.createElement('li');
                li.textContent = course;
                li.classList.add('fade-in');
                li.style.animationDelay = (index * 0.2) + 's'; // Delay each item by 0.2s
                coursesList.appendChild(li);
            });
        })
        .catch(function(error) {
            console.error('Error loading courses:', error);
        });
}
addCourseToList();

// ===== Accessibility Settings =====

// Variables
let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16;
const accessibilityToggle = document.getElementById('accessibilityToggle');
const accessibilityPanel = document.getElementById('accessibilityPanel');
const darkModeButton = document.getElementById('darkModeToggle');

// Functions
function applyFontSize() {
    document.body.style.fontSize = currentFontSize + 'px';
}

function increaseTextSize() {
    if (currentFontSize < 24) {
        currentFontSize += 2;
        applyFontSize();
        localStorage.setItem('fontSize', currentFontSize);
    }
}

function decreaseTextSize() {
    if (currentFontSize > 12) {
        currentFontSize -= 2;
        applyFontSize();
        localStorage.setItem('fontSize', currentFontSize);
    }
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        darkModeButton.textContent = 'Switch to Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        darkModeButton.textContent = 'Switch to Dark Mode';
    }
}

function openAccessibilityPanel() {
    accessibilityPanel.classList.add('active');
}

function closeAccessibilityPanel() {
    accessibilityPanel.classList.remove('active');
}

function toggleAccessibilityPanel() {
    accessibilityPanel.classList.toggle('active');
}

function closeAccessibilityPanelOnOutsideClick(event) {
    if (!accessibilityToggle.contains(event.target) && !accessibilityPanel.contains(event.target)) {
        closeAccessibilityPanel();
    }
}

function setupAccessibilityFeatures() {
    document.getElementById('increaseText').addEventListener('click', increaseTextSize);
    document.getElementById('decreaseText').addEventListener('click', decreaseTextSize);
    darkModeButton.addEventListener('click', toggleDarkMode);
    accessibilityToggle.addEventListener('click', toggleAccessibilityPanel);
    document.getElementById('closePanel').addEventListener('click', closeAccessibilityPanel);
    window.addEventListener('click', closeAccessibilityPanelOnOutsideClick);
}

// ===== Initialize on Page Load =====

// Apply saved dark mode
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    darkModeButton.textContent = 'Switch to Light Mode';
} else {
    darkModeButton.textContent = 'Switch to Dark Mode';
}

// Apply saved font size
applyFontSize();

// Setup accessibility buttons
setupAccessibilityFeatures();


