<?php
session_start(); // Start the session

$servername = "localhost";
$username = "root";
$password = "";
$dbname = "epharmacy";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Input validation and sanitization
$name = $conn->real_escape_string($_POST['name']); // Change this to match your form field name
$address = $conn->real_escape_string($_POST['address']);
$email = $conn->real_escape_string($_POST['email']);
$phone = $conn->real_escape_string($_POST['phone']);
$password = password_hash($_POST['password'], PASSWORD_BCRYPT);

// SQL query to insert user data into the database
$sql = "INSERT INTO users (name, address, email, phone, password) VALUES ('$name', '$address', '$email', '$phone', '$password')";

if ($conn->query($sql) === TRUE) {
    // Store user information in session variables
    $_SESSION['username'] = $username;
    $_SESSION['email'] = $email;

    // Redirect to the home page after successful registration
    header("Location:home.html");
    exit(); // Ensure no further code is executed after the redirect
} else {
    // Handle error (you might want to log this error in production instead of echoing it)
    echo "Error: " . $sql . "<br>" . $conn->error;
}

// Close the database connection
$conn->close();
?>



