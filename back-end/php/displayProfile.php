<?php
include("connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

$user_id = $data["user_id"];

$sql = "SELECT user_email, f_name, l_name, phone_number, dob, photo
        FROM users
        WHERE user_id = ?";

$query = $mysqli -> prepare($sql);
$query -> bind_param('i', $user_id);
$query -> execute();
$query -> store_result();
$query -> bind_result($user_email, $f_name, $l_name, $phone_number, $dob, $photo);
$result = $query -> fetch();

$user = [
    "user_email" => $user_email,
    "f_name" => $f_name,
    "l_name" => $l_name,
    "phone_number" => $phone_number,
    "dob" => $dob,
    "photo" => $photo
];

if ($result) {

    $response = json_encode(array('status' => true, 'data' => $user));

} else {

    $response = json_encode(array('status' => false));

}
 echo $response;