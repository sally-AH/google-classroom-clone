<?php
include("connection.php") ;  

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");
$response = array();
$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);
    
    $class_id = $data["class_id"];

    $sql = "SELECT PL.class_id, PL.user_id, UR.user_role_id, UR.user_role_desc, U.f_name, U.l_name, U.photo 
    FROM people PL 
    INNER JOIN users U ON PL.user_id = U.user_id 
    INNER JOIN user_roles UR ON PL.user_role_id = UR.user_role_id 
    WHERE PL.class_id = ?";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('i', $class_id);
    $query -> execute();
    $query -> store_result();
    $query -> bind_result($class_id,$user_id, $user_role_id ,$user_role_desc,$f_name, $l_name,$photo);
    $query -> fetch();

    // Initialize an array to store the results
    $results = [];

    // Iterate over the results and add them to the array
    while ($query->fetch()) {   
        $result = [
            "class_id" => $class_id,
            "user_id"=>$user_id,
            "user_role_id" => $user_role_id,
            "user_role_desc" => $user_role_desc,
            "f_name" => $f_name,
            "l_name" => $l_name,
            "photo" => $photo,


        ];
     

        $results[] = $result;
    }

    $response = json_encode(array('status' => true, 'data' => $results));
    echo $response;