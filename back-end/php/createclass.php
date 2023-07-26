<?php
include('connection.php');

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
$classname = $data['class_name'];
$class_section = $data['class_section'];
$class_subject = $data['class_subject'];
$room = $data['room'];
$classlink = $data['class_link'];
$classcode = $data['class_code'];

$query = $mysqli->prepare('INSERT INTO class_rooms (class_name, class_section,class_subject,room,class_code,class_link) VALUES (?,?,?,?,?,?)');
$query->bind_param('ssssss' , $classname, $class_section,$class_subject,$room,$classcode,$classlink);
  
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
