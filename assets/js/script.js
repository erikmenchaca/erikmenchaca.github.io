document.addEventListener('DOMContentLoaded', function() {
    // ===== Set Current Year Safely =====
    const yearElement = document.getElementById('year');
    if (yearElement) {
      yearElement.textContent = new Date().getFullYear();
    }
  
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
          const coursesList = document.getElementById('courses-list');
          if (coursesList) {
            courses.forEach(function(course, index) {
              const li = document.createElement('li');
              li.textContent = course;
              li.classList.add('fade-in');
              li.style.animationDelay = (index * 0.2) + 's';
              coursesList.appendChild(li);
            });
          }
        })
        .catch(function(error) {
          console.error('Error loading courses:', error);
        });
    }
    addCourseToList();
  
    // ===== Accessibility Settings =====
    let currentFontSize = parseInt(localStorage.getItem('fontSize')) || 16;
    const accessibilityToggle = document.getElementById('accessibilityToggle');
    const accessibilityPanel = document.getElementById('accessibilityPanel');
    const darkModeButton = document.getElementById('darkModeToggle');
    const resetButton = document.getElementById('resetSettings');
  
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
  
    function updateDarkModeButtonText() {
      if (document.body.classList.contains('dark-mode')) {
        darkModeButton.textContent = 'Switch to Light Mode';
      } else {
        darkModeButton.textContent = 'Switch to Dark Mode';
      }
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
  
    function closeAccessibilityPanelOnOutsideClick(event) {
      if (!accessibilityToggle.contains(event.target) && !accessibilityPanel.contains(event.target)) {
        closeAccessibilityPanel();
      }
    }
  
    function resetAccessibilitySettings() {
      // Reset Dark Mode
      document.body.classList.remove('dark-mode');
      localStorage.setItem('theme', 'light');
      updateDarkModeButtonText();
  
      // Reset Font Size
      currentFontSize = 16;
      applyFontSize();
      localStorage.setItem('fontSize', currentFontSize);
  
      // Close the panel
      closeAccessibilityPanel();
  
      // Show toast
      showToast('Accessibility settings reset successfully!');
    }
  
    function showToast(message) {
      const toast = document.getElementById('toast');
      if (toast) {
        toast.textContent = message;
        toast.classList.add('show');
        setTimeout(() => {
          toast.classList.remove('show');
        }, 3000);
      }
    }
  
    function setupAccessibilityFeatures() {
      document.getElementById('increaseText').addEventListener('click', increaseTextSize);
      document.getElementById('decreaseText').addEventListener('click', decreaseTextSize);
      darkModeButton.addEventListener('click', toggleDarkMode);
      accessibilityToggle.addEventListener('click', toggleAccessibilityPanel);
      document.getElementById('closePanel').addEventListener('click', closeAccessibilityPanel);
      resetButton.addEventListener('click', resetAccessibilitySettings);
      window.addEventListener('click', closeAccessibilityPanelOnOutsideClick);
    }
  
    // ===== Initialize =====
    if (localStorage.getItem('theme') === 'dark') {
      document.body.classList.add('dark-mode');
    }
    updateDarkModeButtonText();
    applyFontSize();
    setupAccessibilityFeatures();
  });
  