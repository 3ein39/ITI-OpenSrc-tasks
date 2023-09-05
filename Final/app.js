// JavaScript to toggle the dropdown menu on small screens
const menuIcon = document.querySelector(".menu-icon");
const menu = document.querySelector(".menu");

menuIcon.addEventListener("click", () => {
    menu.classList.toggle("active");
});


document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log(event);
});