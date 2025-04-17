// Set current year
document.getElementById('year').textContent = new Date().getFullYear();

const toggleButton = document.getElementById('darkModeToggle');

// Apply saved mode from localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    toggleButton.textContent = 'Switch to Light Mode';
}

// Toggle dark mode and save preference
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleButton.textContent = 'Switch to Light Mode';
    } else {
        localStorage.setItem('theme', 'light');
        toggleButton.textContent = 'Switch to Dark Mode';
    }
}

toggleButton.addEventListener('click', toggleDarkMode);

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
                li.style.animationDelay = (index * 0.2) + 's'; // Delay each item by 0.2s more
                coursesList.appendChild(li);
            });
        })
        .catch(function(error) {
            console.error('Error loading courses:', error);
        });
}

// Call the function
addCourseToList();


