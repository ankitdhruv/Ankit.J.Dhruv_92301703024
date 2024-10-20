// Ensure the code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const nameInput = document.getElementById("name");
    const emailInput = document.getElementById("email");
    const messageInput = document.getElementById("message");
    const contactForm = document.querySelector("form");

    // Validate on input change
    nameInput.addEventListener("input", validateName);
    emailInput.addEventListener("input", validateEmail);
    messageInput.addEventListener("input", validateMessage);

    // Function to validate each field
    function validateName() {
        const name = nameInput.value.trim();
        const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces

        if (name === "") {
            showError(nameInput, "Name is required.");
        } else if (!namePattern.test(name)) {
            showError(nameInput, "Name must contain only letters and spaces.");
        } else {
            clearError(nameInput);
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern

        if (email === "") {
            showError(emailInput, "Email is required.");
        } else if (!emailPattern.test(email)) {
            showError(emailInput, "Please enter a valid email address.");
        } else {
            clearError(emailInput);
        }
    }

    function validateMessage() {
        const message = messageInput.value.trim();

        if (message === "") {
            showError(messageInput, "Message is required.");
        } else {
            clearError(messageInput);
        }
    }

    function showError(input, message) {
        const errorDiv = document.createElement("div");
        errorDiv.className = "text-danger";
        errorDiv.textContent = message;
        input.classList.add("is-invalid");
        
        if (!input.nextElementSibling || !input.nextElementSibling.classList.contains("text-danger")) {
            input.insertAdjacentElement("afterend", errorDiv);
        }
    }

    function clearError(input) {
        input.classList.remove("is-invalid");
        if (input.nextElementSibling && input.nextElementSibling.classList.contains("text-danger")) {
            input.nextElementSibling.remove();
        }
    }

    // Validate on form submission
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Run all validations
        validateName();
        validateEmail();
        validateMessage();

        // Check if there are any validation errors
        const errors = contactForm.querySelectorAll(".text-danger");
        if (errors.length === 0) {
            alert("Message sent successfully!");
            // You can add code here to handle form submission to the server
        }
    });
});
