<?php
$LPname = "Crestron - Report";

$conn = new mysqli('localhost','root', 'Bang2020!', 'crestron_ten_four'); 
if ($conn->connect_error) {
    trigger_error('Database connection failed: ' . $conn->connect_error, E_USER_ERROR);
}
?>