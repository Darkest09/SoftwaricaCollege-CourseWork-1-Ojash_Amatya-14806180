document.addEventListener("DOMContentLoaded", () => {
    fetch('api/products.php')
        .then(response => response.json())
        .then(data => {
            let productsDiv = document.getElementById('products');
            data.forEach(product => {
                let productDiv = document.createElement('div');
                productDiv.className = 'product';
                productDiv.innerHTML = `
                    <img src="${product.image_url}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                    <button>Add to Cart</button>
                `;
                productsDiv.appendChild(productDiv);
            });
        });
});
