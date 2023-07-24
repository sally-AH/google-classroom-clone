<?php
include('connection.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");
$response = array();
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
$email = $data['user_email'];
$password = $data['user_password'];

$query = $mysqli->prepare('UPDATE users SET user_password = ? WHERE user_email = ?');
$hashed_password = password_hash($password, PASSWORD_BCRYPT);
$query->bind_param('ss', $hashed_password, $email);
$query->execute();

if ($query->affected_rows > 0) {
    $response['status'] = 'password updated';
} else {
    $response['status'] = 'password not updated';
}

echo json_encode($response);
