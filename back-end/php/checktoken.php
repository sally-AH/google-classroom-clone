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

$query = $mysqli->prepare('SELECT COUNT(*) AS token_count FROM users WHERE user_email = ? AND token = ?');
$query->bind_param('ss', $email, $token);
$query->execute();
$query->store_result();
$query->bind_result($token_count);

$query->fetch();
if ($token_count > 0) {
    $response['status'] = 'token match';
} else {
    $response['status'] = 'token not match';
}

echo json_encode($response);
