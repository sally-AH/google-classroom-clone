<?php
include('connection.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
$classcode = $data['classcode'];
$query = $mysqli->prepare('SELECT class_id FROM class_rooms WHERE class_code = ?');
$query->bind_param('s', $classcode);
$query->execute();
$query->bind_result($class_id);
$query->store_result();

if ($query->num_rows > 0) {
    $query->fetch();
    $response['status'] = 'success';
    $response['classid'] = $class_id;
} else {
    $response['status'] = 'error';
    $response['classid'] = null;
}

$query->close();
$mysqli->close();

echo json_encode($response);
