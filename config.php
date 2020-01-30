<?php
$LPname = "Crestron - Report";

$conn = new mysqli('localhost','crestron-p', 'WjLq5rXGRBWLXPVw', 'crestron-p'); 
if ($conn->connect_error) {
    trigger_error('Database connection failed: ' . $conn->connect_error, E_USER_ERROR);
}
?>