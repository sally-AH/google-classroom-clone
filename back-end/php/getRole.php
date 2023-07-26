<?php
include("connection.php") ;  

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");
$response = array();
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
    
    $class_id = $data["class_id"];
    $user_id = $data["user_id"];

    $sql = "SELECT PL.user_role_id
    FROM people PL 
   
    WHERE PL.class_id = ? AND PL.user_id = ?";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('ii', $class_id ,$user_id );
    $query -> execute();
    $query -> store_result();
    $query -> bind_result($user_role_id);
    $query -> fetch();

    // Initialize an array to store the results
    $results = [];

    // Iterate over the results and add them to the array
   
    $response = [
            "user_role_id" => $user_role_id,
        ];
     

     

    echo json_encode($response);