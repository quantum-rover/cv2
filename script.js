// Dark Mode Toggle
const toggleDarkModeButton = document.getElementById('darkModeToggle');
toggleDarkModeButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});

// Contact Form (You can link this to Formspree or EmailJS later)
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Message sent! Thank you for reaching out.');
});
