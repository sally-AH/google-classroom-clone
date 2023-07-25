<?php
include('connection.php');
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");
$response = array();
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
$email = $data['user_email'];
$password = $data['user_password'];
$query = $mysqli->prepare('SELECT user_id , user_email , user_password FROM users WHERE user_email=?');
$query->bind_param('s', $email);
$query->execute();
$query->store_result();
$query->bind_result($user_id ,$email, $hashed_password);
$query->fetch();
$num_rows = $query->num_rows();
if ($num_rows == 0) {
    $response['status'] = "user not found";
} else {
    if (password_verify($password, $hashed_password)) {
        $response['status'] = 'logged in';
        $response['data'] = $user_id;
      
    } else {
        $response['status'] = "wrong password";
    }
}
echo json_encode($response);
