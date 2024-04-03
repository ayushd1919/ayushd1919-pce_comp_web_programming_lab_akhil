<?php
include 'db_config.php';

// Retrieve data from form
$username = $_POST['username'];
$password = $_POST['password'];
if(isset($_POST['login'])){
// Retrieve hashed password from database
$sql = "SELECT * FROM users WHERE username='$username'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $row = $result->fetch_assoc();
    if (password_verify($password, $row['password'])) {
        echo "Login successful"; // Redirect to dashboard or do something else
    } else {
        echo "Invalid password";
    }
} else {
    echo "User not found";
}
}
$conn->close();
?>
