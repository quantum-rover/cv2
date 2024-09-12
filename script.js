// JavaScript to handle the popup
document.addEventListener('DOMContentLoaded', function () {
    const contactBtn = document.getElementById('contactBtn');
    const contactPopup = document.getElementById('contactPopup');
    const closeBtn = document.querySelector('.close-btn');

    // Function to open the popup
    function openPopup() {
        contactPopup.style.display = 'block';
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    // Function to close the popup
    function closePopup() {
        contactPopup.style.display = 'none';
        document.body.style.overflow = 'auto'; // Re-enable background scrolling
    }

    // Show the popup when the contact button is clicked
    contactBtn.addEventListener('click', openPopup);

    // Hide the popup when the close button is clicked
    closeBtn.addEventListener('click', closePopup);

    // Hide the popup when clicking outside of the popup content
    window.addEventListener('click', (e) => {
        if (e.target === contactPopup) {
            closePopup();
        }
    });

    // Close the popup with ESC key for better accessibility
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePopup();
        }
    });
});
