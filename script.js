// Get the elements
var contactBtn = document.getElementById("contactBtn");
var contactPopup = document.getElementById("contactPopup");
var closeBtn = document.querySelector(".close-btn");

// Show the popup when the contact button is clicked
contactBtn.onclick = function() {
    contactPopup.style.display = "block";
}

// Hide the popup when the close button is clicked
closeBtn.onclick = function() {
    contactPopup.style.display = "none";
}

// Hide the popup when clicking outside of it
window.onclick = function(event) {
    if (event.target == contactPopup) {
        contactPopup.style.display = "none";
    }
}
