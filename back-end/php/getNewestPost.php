<?php


include("connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();

$sql = "SELECT MAX(post_id) AS highest_post_id FROM posts;;
";

$query = $mysqli -> prepare($sql);
 $query -> execute();
    $query -> store_result();
    $query -> bind_result($highest_post_id);
    $query -> fetch();
echo json_encode($response['newestPost']=$highest_post_id );
