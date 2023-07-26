<?php
include("connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);


    $user_id = $data["user_id"];

    $f_name = trim($data["f_name"]);
    $l_name = trim($data["l_name"]);
    $phone_number = trim($data["phone_number"]);
    $dob = $data["dob"];
    $photo = $data["photo"];

    $sql = "UPDATE users 
            SET f_name = ?, l_name = ?, phone_number = ?, dob = ?, photo = ?
            WHERE user_id = ?";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('sssssi', $f_name, $l_name, $phone_number, $dob, $photo, $user_id);
    $result = $query -> execute();

    if ($result) {

        $response = json_encode(array('status' => true, 'message' => 'user updated successfully'));

    } else {

        $response = json_encode(array('status' => false, 'message' => 'can not update the user'));

    }
    echo $response;
