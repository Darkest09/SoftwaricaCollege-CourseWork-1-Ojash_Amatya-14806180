document.addEventListener('DOMContentLoaded', function() {
    // This script could be used to add interactivity, like a button click event
    const button = document.querySelector('.button');

    button.addEventListener('click', function() {
        alert('Redirecting to services page...');
        // Simulate redirection to another page (in actual use, this will be handled by the anchor tag itself)
        window.location.href = 'services.html';
    });
});
