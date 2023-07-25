<?php
include('connection.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
$classid = $data['classid'];
$userid = $data['userid'];

$query = $mysqli->prepare('INSERT INTO user_classes (class_id, user_id) VALUES (?, ?)');
$query->bind_param('ii' , $classid, $userid);

if ($query->execute()) {
    $response['status'] = 'success';
} else {
    $response['status'] = 'error';
    $response['error_message'] = $mysqli->error; 
}

$query->close();
$mysqli->close();

echo json_encode($response);
?>
