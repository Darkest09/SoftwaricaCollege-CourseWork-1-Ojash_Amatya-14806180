document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent the default form submission

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;

        // Perform your login logic here, e.g., send a request to the server to validate credentials

        // For demonstration purposes, let's assume the login is always successful
        const loginSuccessful = true;

        if (loginSuccessful) {
            // Redirect to the home page
            window.location.href = "home.html";
        } else {
            // Handle login failure (e.g., show an error message)
            alert("Invalid email or password. Please try again.");
        }
    });
});
