document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById('registration-form');
    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const feedbackDiv = document.getElementById('form-feedback');

    // Adding event handler for submit
    form.addEventListener('submit', event => {
        event.preventDefault();
        validateInputs();
    });

    // Validate function
    const validateInputs = () => {
        const usernameValue = username.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();

        let isValid = true;
        const messages = [];

        // Username validation
        if (usernameValue.length < 3) {
            isValid = false;
            messages.push("Username must be at least 3 characters long.");
        }

        // Email validation
        if (!emailValue.includes("@") || !emailValue.includes(".")) {
            isValid = false;
            messages.push("Please enter a valid email address.");
        }

        // Password validation
        if (passwordValue.length < 8) {
            isValid = false;
            messages.push("Password must be at least 8 characters long.");
        }

        // Display feedback
       feedbackDiv.style.display = "block";

if (isValid) {
    feedbackDiv.textContent = "Registration successful!";
    feedbackDiv.style.color = "#28a745"; // Green color
} else {
    feedbackDiv.innerHTML = messages.join("<br>"); // Join messages with <br>
    feedbackDiv.style.color = "#dc3545"; // Red color
}
   
    };
});


  
