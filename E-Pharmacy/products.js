document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const productId = this.getAttribute("data-product-id");
            // You can also pass the productId via URL parameters if needed
            window.location.href = "thankyou.html";
        });
    });
});
