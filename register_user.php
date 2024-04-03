<?php
// include 'db_config.php';


// Retrieve data from form
if(isset($_POST['register'])){
  $name = $_POST['name'];
  $username = $_POST['username'];
  $email = $_POST['email'];
  $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Secure password storage
  $dob = $_POST['dob'];
  $weight = $_POST['weight'];
  $height = $_POST['height'];
  
// Create connection
$conn = new mysqli('localhost','root','', 'gym');

// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

  // Insert data into database
  $sql = "INSERT INTO users (name, username, email, password, dob, weight, height) VALUES ('$name', '$username', '$email', '$password', '$dob', '$weight', '$height')";
  
  if ($conn->query($sql) === TRUE) {
      echo "New record created successfully";
  } else {
      echo "Error: " . $sql . "<br>" . $conn->error;
  }

}

$conn->close();
?>
