<?php
session_start();
if (!isset($_SESSION['username']) || $_SESSION['role'] != 'admin') {
    header("Location: ../login.html");
    exit();
}
include '../config.php';
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manage Products</title>
    <link rel="stylesheet" href="../styles.css">
</head>
<body>
    <header>
        <h1>Manage Products</h1>
        <nav>
            <a href="index.php">Dashboard</a>
            <a href="products.php">Manage Products</a>
            <a href="orders.php">Manage Orders</a>
            <a href="../logout.php">Logout</a>
        </nav>
    </header>
    <main>
        <h2>Add New Product</h2>
        <form action="add_product.php" method="post" enctype="multipart/form-data">
            <label for="name">Product Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="description">Description:</label>
            <textarea id="description" name="description" required></textarea>
            <label for="price">Price:</label>
            <input type="number" id="price" name="price" step="0.01" required>
            <label for="stock">Stock:</label>
            <input type="number" id="stock" name="stock" required>
            <label for="image">Product Image:</label>
            <input type="file" id="image" name="image" required>
            <button type="submit">Add Product</button>
        </form>
        <h2>Existing Products</h2>
        <div id="product-list">
            <!-- Existing products will be displayed here -->
        </div>
    </main>
    <script src="../scripts.js"></script>
</body>
</html>
