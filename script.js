// Select the toggle button
const themeToggleButton = document.getElementById('theme-toggle');

// Add event listener to toggle the theme
themeToggleButton.addEventListener('click', () => {
    console.log('Theme toggle clicked'); // for debugging
    document.body.classList.toggle('dark-theme');
});