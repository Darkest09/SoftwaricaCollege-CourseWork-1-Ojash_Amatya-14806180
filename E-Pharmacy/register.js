document.getElementById('registerForm').addEventListener('submit', function(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Get form values
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const address = document.getElementById('address').value.trim();
    const password = document.getElementById('password').value.trim();

    // Basic validation
    if (!username) {
        alert('Please enter a username.');
        return false;
    }

    if (!email) {
        alert('Please enter an email address.');
        return false;
    }

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        return false;
    }

    if (!phone) {
        alert('Please enter a phone number.');
        return false;
    }

    if (!validatePhone(phone)) {
        alert('Please enter a valid phone number.');
        return false;
    }

    if (!address) {
        alert('Please enter an address.');
        return false;
    }

    if (!password) {
        alert('Please enter a password.');
        return false;
    }

    // If all validations pass, submit the form
    this.submit();
});

// Email validation function
function validateEmail(email) {
    // Basic email regex pattern
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}

// Phone number validation function
function validatePhone(phone) {
    // Basic phone regex pattern for formats like (123) 456-7890 or 123-456-7890
    const phonePattern = /^[0-9]{10}$/;
    return phonePattern.test(phone);
}
