<?php
include('connection.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");
$response = array();
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
$email = $data['user_email'];
$token = $data['user_token'];

$query = $mysqli->prepare('UPDATE users SET token = ? WHERE user_email = ?');
$query->bind_param('ss', $token, $email);
$query->execute();

if ($query->affected_rows > 0) {
    $response['status'] = 'token added';
} else {
    $response['status'] = 'token not added';
}

echo json_encode($response);
