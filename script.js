// scripts.js
document.addEventListener('DOMContentLoaded', function() {
    var contactBtn = document.getElementById('contactBtn');
    var contactFormContainer = document.querySelector('.contact-form-container');
    var closeBtn = document.querySelector('.close-btn');

    contactBtn.addEventListener('click', function() {
        contactFormContainer.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function() {
        contactFormContainer.style.display = 'none';
    });

    // Close the contact form when clicking outside of it
    window.addEventListener('click', function(event) {
        if (event.target === contactFormContainer) {
            contactFormContainer.style.display = 'none';
        }
    });
});
