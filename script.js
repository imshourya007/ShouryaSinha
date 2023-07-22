// JavaScript code for dark mode toggle
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

// Function to set dark mode preference in localStorage
function setDarkModePreference(isDarkMode) {
  localStorage.setItem('darkMode', isDarkMode);
}

// Function to get dark mode preference from localStorage
function getDarkModePreference() {
  return localStorage.getItem('darkMode') === 'true';
}

// Function to apply dark mode preference
function applyDarkModePreference() {
  const isDarkMode = getDarkModePreference();
  body.classList.toggle('dark-mode', isDarkMode);
}

// Toggle dark mode on button click
darkModeToggle.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  setDarkModePreference(body.classList.contains('dark-mode'));
});

// JavaScript code for displaying paragraphs one after another
    const para1 = document.getElementById('para1');
    const para2 = document.getElementById('para2');
    const para3 = document.getElementById('para3');

    para1.style.display = 'none'; // Hide the first paragraph initially
    para2.style.display = 'none';
    para3.style.display = 'none';

    // Function to show the paragraphs one after another
setTimeout(() => {
  para1.style.display = 'block';
}, 1000); // Adjust the delay (in milliseconds) as desired

setTimeout(() => {
  para2.style.display = 'block';
}, 2000); // Adjust the delay (in milliseconds) as desired

setTimeout(() => {
  para3.style.display = 'block';
}, 3000); // Adjust the delay (in milliseconds) as desired

// Apply dark mode preference on page load
applyDarkModePreference();