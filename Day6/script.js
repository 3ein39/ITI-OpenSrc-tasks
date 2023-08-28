document.addEventListener("DOMContentLoaded", function() {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const nameError = document.getElementById("name-error");
    const emailError = document.getElementById("email-error");

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
});
