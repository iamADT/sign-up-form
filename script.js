const signUpForm = document.querySelector('.sign-up-form');
const passwordField = document.getElementById('password');
const confirmPasswordField = document.getElementById('confirmPassword');
const errorDisplay = document.querySelector('#confirmPasswordError');

// Add submit event listener to the form
signUpForm.addEventListener('submit', function (event) {
    const password = passwordField.value;
    const confirmPassword = confirmPasswordField.value;

    // Check if passwords match
    if (password !== confirmPassword) {
        event.preventDefault(); // Prevent form submission
        errorDisplay.textContent = "Passwords do not match."; // Show custom error message
        errorDisplay.style.display = "block"; // Ensure the message is visible
        confirmPasswordField.style.borderColor = '#F44336';
    } else {
        errorDisplay.textContent = ""; // Clear the error message
        errorDisplay.style.display = "none";
    }
});

// Add input event listener to the Confirm Password field
confirmPasswordField.addEventListener('input', function () {
    // Real-time check for password matching
    if (confirmPasswordField.value !== passwordField.value) {
        errorDisplay.textContent = "Passwords do not match.";
        errorDisplay.style.display = "block";
        confirmPasswordField.style.borderColor = '#F44336';
    } else {
        errorDisplay.textContent = "";
        errorDisplay.style.display = "none";
    }
});

console.log(signUpForm, passwordField, confirmPasswordField);

