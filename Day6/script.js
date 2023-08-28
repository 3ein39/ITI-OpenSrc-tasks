const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const phoneInput = document.getElementById("phone");
const passwordInput = document.getElementById("password");
const ageInput = document.getElementById("age");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const phoneError = document.getElementById("phone-error");
const ageError = document.getElementById("age-error");
const passwordError = document.getElementById("password-error");
nameInput.addEventListener("blur", function() {
    if (nameInput.value.trim() === "") {
        nameError.textContent = "Name is required";
    } else {
        nameError.textContent = "";
    }
});

emailInput.addEventListener("blur", function() {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailPattern.test(emailInput.value)) {
        emailError.textContent = "Invalid email address";
    } else {
        emailError.textContent = "";
    }
});
phoneInput.addEventListener("blur", function() {
    const phonePattern = /^(010|011|012|015)[0-9]{8}$/;
    if (!phonePattern.test(phoneInput.value)) {
        phoneError.textContent = "Invalid phone number";
    } else {
        phoneError.textContent = "";
    }
});

passwordInput.addEventListener("blur", function() {
    if (passwordInput.value.length < 8) {
        passwordError.textContent = "Password must be at least 8 characters long";
    } else {
        passwordError.textContent = "";
    }
});

ageInput.addEventListener("blur", function() {
    const minAge = 18;
    const maxAge = 24;

    if (ageInput.value === "") {
        ageError.textContent = "Age is required";
    } else if (isNaN(ageInput.value) || ageInput.value < minAge || ageInput.value > maxAge) {
        ageError.textContent = `Age must be between ${minAge} and ${maxAge}`;
    } else {
        ageError.textContent = "";
    }
});