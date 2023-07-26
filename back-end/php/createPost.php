<?php


include("connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

$post_type_id = $data["post_type_id"];
$teacher_id = $data["teacher_id"];
$end_date = $data["end_date"];
$start_date = $data["start_date"];
$post_title = $data["post_title"];
$post_body = $data["post_body"];
$post_attachment = $data["post_attachment"];
$post_grade = $data["post_grade"];
$category_id = $data["category_id"];

$sql = "INSERT into posts(post_type_id, teacher_id, end_date, start_date ,post_title, post_body, post_attachment ,post_grade , category_id) values (?,?,?,?,?,?,?,?,?);
";

$query = $mysqli -> prepare($sql);
$query -> bind_param('iisssssis', $post_type_id ,$teacher_id,$end_date,$start_date,$post_title, $post_body ,$post_attachment ,$post_grade ,$category_id );

$query -> execute();
echo json_encode("success");
