document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('contactBtn');
    const contactPopup = document.getElementById('contactPopup');
    const closeBtn = document.querySelector('.close-btn');

    // Show the popup when the contact button is clicked
    contactBtn.addEventListener('click', () => {
        contactPopup.style.display = 'block';
    });

    // Hide the popup when the close button is clicked
    closeBtn.addEventListener('click', () => {
        contactPopup.style.display = 'none';
    });

    // Theme toggle
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    let isDarkMode = false;

    themeToggleBtn.addEventListener('click', () => {
        isDarkMode = !isDarkMode;
        if (isDarkMode) {
            document.body.classList.remove('light-mode');
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
            document.body.classList.add('light-mode');
        }
    });
});
