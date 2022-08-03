<?php
$email = $_POST['email'];
$name = $_POST['name'];
$subject = $_POST['subject'];
$message = $_POST['message'];

$conn = mysqli_connect("localhost", "jaythoms_webuser2022", "passwordforwebuser@2022","jaythoms_mtn2013");
$query ="INSERT INTO `1_webqueries` (`id`, `email`, `name`, `subject`, `message`) 
VALUES (NULL, '$email', '$name', '$subject', '$message')";
$result = mysqli_query($conn, $query);
if($result){
  echo 'Thank you for your feedback. We do appreciate it!';
  echo "<script>window.location = 'https://jaythomson.co.za'</script>";
}
else
die("Something went wrong - Please try again!")
  

?>