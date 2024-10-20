// Ensure the code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function() {
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const usernameError = document.getElementById("usernameError");
    const passwordError = document.getElementById("passwordError");
    const loginForm = document.getElementById("loginForm");

    // Validate username on input
    usernameInput.addEventListener("input", validateUsername);

    // Validate password on input
    passwordInput.addEventListener("input", validatePassword);

    // Function to validate the username
    function validateUsername() {
        const username = usernameInput.value.trim();
        const usernamePattern = /^[A-Za-z]+$/; // Only alphabetic characters allowed

        if (username === "") {
            usernameError.textContent = "Username is required.";
        } else if (username.length < 3) {
            usernameError.textContent = "Username must be at least 3 characters.";
        } else if (!usernamePattern.test(username)) {
            usernameError.textContent = "Username must contain only letters (no numbers or special characters).";
        } else {
            usernameError.textContent = ""; // Clear error if valid
        }
    }

    // Function to validate the password
    function validatePassword() {
        const password = passwordInput.value.trim();

        if (password === "") {
            passwordError.textContent = "Password is required.";
        } else if (password.length < 6) {
            passwordError.textContent = "Password must be at least 6 characters.";
        } else {
            passwordError.textContent = ""; // Clear error if valid
        }
    }

    // Validate on form submission
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            // Run validation functions before form submission
            validateUsername();
            validatePassword();

            // Check if both inputs are valid
            if (!usernameError.textContent && !passwordError.textContent) {
                alert("Form submitted successfully!");
                // Perform further actions, like sending data to your server or redirecting.
            }
        });
    }
});
