<?php


include("connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

$class_id = $data["class_id"];
$post_id = $data["post_id"];


$sql = "INSERT into class_rooms_posts(class_id, post_id) values (?,?);
";

$query = $mysqli -> prepare($sql);
$query -> bind_param('ii', $class_id ,$post_id);

$query -> execute();
echo json_encode("success");
