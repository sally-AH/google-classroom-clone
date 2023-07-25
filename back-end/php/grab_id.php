<?php
include('connection.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
$email = $data['user_email'];

$query = $mysqli->prepare('SELECT user_id FROM users WHERE user_email = ?');
$query->bind_param('s', $email);
$query->execute();
$query->bind_result($user_id);
$query->store_result();

if ($query->num_rows > 0) {
    $query->fetch();
    $response['status'] = 'success';
    $response['user_id'] = $user_id;
} else {
    $response['status'] = 'error';
    $response['user_id'] = null;
}

$query->close();
$mysqli->close();

echo json_encode($response);
