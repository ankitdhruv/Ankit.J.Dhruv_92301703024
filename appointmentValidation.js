// Ensure the code runs after the DOM is fully loaded
document.addEventListener("DOMContentLoaded", function () {
    const fullNameInput = document.getElementById("fullName");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const genderSelect = document.getElementById("gender");
    const addressInput = document.getElementById("address");
    const cityInput = document.getElementById("city");
    const dateInput = document.getElementById("date");
    const reasonInput = document.getElementById("reason");
    const appointmentForm = document.querySelector("form");

    // Validate on input change
    fullNameInput.addEventListener("input", validateFullName);
    emailInput.addEventListener("input", validateEmail);
    phoneInput.addEventListener("input", validatePhone);
    genderSelect.addEventListener("change", validateGender);
    addressInput.addEventListener("input", validateAddress);
    cityInput.addEventListener("input", validateCity);
    dateInput.addEventListener("input", validateDate);
    reasonInput.addEventListener("input", validateReason);

    // Function to validate each field
    function validateFullName() {
        const fullName = fullNameInput.value.trim();
        const namePattern = /^[A-Za-z\s]+$/; // Only letters and spaces

        if (fullName === "") {
            showError(fullNameInput, "Full Name is required.");
        } else if (!namePattern.test(fullName)) {
            showError(fullNameInput, "Full Name must contain only letters and spaces.");
        } else {
            clearError(fullNameInput);
        }
    }

    function validateEmail() {
        const email = emailInput.value.trim();
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email pattern

        if (email === "") {
            showError(emailInput, "Email Address is required.");
        } else if (!emailPattern.test(email)) {
            showError(emailInput, "Please enter a valid email address.");
        } else {
            clearError(emailInput);
        }
    }

    function validatePhone() {
        const phone = phoneInput.value.trim();
        const phonePattern = /^\d{10}$/; // 10 digits

        if (phone === "") {
            showError(phoneInput, "Phone Number is required.");
        } else if (!phonePattern.test(phone)) {
            showError(phoneInput, "Phone Number must be 10 digits.");
        } else {
            clearError(phoneInput);
        }
    }

    function validateGender() {
        if (genderSelect.value === "") {
            showError(genderSelect, "Please select a gender.");
        } else {
            clearError(genderSelect);
        }
    }

    function validateAddress() {
        const address = addressInput.value.trim();
        if (address === "") {
            showError(addressInput, "Address is required.");
        } else {
            clearError(addressInput);
        }
    }

    function validateCity() {
        const city = cityInput.value.trim();
        if (city === "") {
            showError(cityInput, "City is required.");
        } else {
            clearError(cityInput);
        }
    }

    function validateDate() {
        const date = new Date(dateInput.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0); // Set to the start of the day

        if (date < today) {
            showError(dateInput, "Preferred Appointment Date cannot be in the past.");
        } else {
            clearError(dateInput);
        }
    }

    function validateReason() {
        const reason = reasonInput.value.trim();
        if (reason === "") {
            showError(reasonInput, "Reason for Visit is required.");
        } else {
            clearError(reasonInput);
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
    appointmentForm.addEventListener("submit", function (event) {
        event.preventDefault();

        // Run all validations
        validateFullName();
        validateEmail();
        validatePhone();
        validateGender();
        validateAddress();
        validateCity();
        validateDate();
        validateReason();

        // Check if there are any validation errors
        const errors = appointmentForm.querySelectorAll(".text-danger");
        if (errors.length === 0) {
            alert("Appointment booked successfully!");
            // You can add code here to handle form submission to the server
        }
    });
});
