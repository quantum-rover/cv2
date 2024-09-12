// JavaScript to handle the popup
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

    // Hide the popup when clicking outside of the popup content
    window.addEventListener('click', (e) => {
        if (e.target === contactPopup) {
            contactPopup.style.display = 'none';
        }
    });

    window.onscroll = function() {
  scrollFunction();
};

function scrollFunction() {
  const backToTopButton = document.getElementById("backToTop");
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    backToTopButton.style.display = "block";
  } else {
    backToTopButton.style.display = "none";
  }
}

document.getElementById("backToTop").addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
});
