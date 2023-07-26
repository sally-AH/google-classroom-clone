<?php
include('connection.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");
$response = array();
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
$first_name = $data['f_name'];
$last_name = $data['l_name'];
$email = $data['user_email'];
$password = $data['user_password'];
$phonenumber = $data['phone_number'];
$date = $data['dob'];
$check_email = $mysqli->prepare('SELECT user_email FROM users WHERE user_email=?');
$check_email->bind_param('s', $email);
$check_email->execute();
$check_email->store_result();
$email_exists = $check_email->num_rows();
if ($email_exists == 0) {
    $hashed_password = password_hash($password, PASSWORD_BCRYPT);
    $query = $mysqli->prepare('INSERT into users(f_name, l_name, user_email, user_password, phone_number, dob) values (?, ?, ?, ?, ?, ?)');
    $query->bind_param('ssssss', $first_name, $last_name, $email, $hashed_password, $phonenumber, $date);
    $query->execute();
    $response['status'] = "success";
    $response['message'] = "another message in success";
} else {
    $response['status'] = "failed";
    $response['message'] = "another message in fail";
}


echo json_encode($response);
