<?php


include("connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

$user_id = $data["user_id"];
$class_id = $data["class_id"];


$sql = "INSERT into user_classes(user_id, class_id) values (?,?);
";

$query = $mysqli -> prepare($sql);
$query -> bind_param('ii', $user_id ,$class_id);

$query -> execute();
echo json_encode("success");
