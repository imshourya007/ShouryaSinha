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

async function loadTerminalInfo() {
  try {
    const res = await fetch("statics/info.txt");
    if (!res.ok) throw new Error("Failed to fetch info.txt");
    const text = await res.text();

    const container = document.getElementById("info-container");
    container.textContent = ""; // clear "Loading..."

    let i = 0;
    function typeWriter() {
      if (i < text.length) {
        container.textContent += text.charAt(i);
        i++;
        setTimeout(typeWriter, 40); // typing speed (ms)
      }
    }
    typeWriter();
  } catch (err) {
    console.error(err);
    document.getElementById("info-container").textContent = "Error loading info.";
  }
}

window.addEventListener("DOMContentLoaded", loadTerminalInfo);


// Apply dark mode preference on page load
applyDarkModePreference();