<?php


include("connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();

$json_data = file_get_contents('php://input');
$data = json_decode($json_data, true);

$user_id = $data["user_id"];

$sql = "SELECT uc.class_id, cr.class_code, cr.class_link, cr.class_name, cr.class_section, cr.class_subject, cr.room, cr.class_photo, cr.google_meet_link, cr.can_post, cr.can_comment, cr.class_description, p.post_id , p.post_title , p.post_body,p.post_attachment,p.end_date,p.category_id FROM user_classes uc INNER JOIN class_rooms cr ON uc.class_id = cr.class_id INNER JOIN class_rooms_posts crp ON cr.class_id = crp.class_id INNER JOIN posts p ON crp.post_id = p.post_id WHERE uc.user_id = ?;
";

$query = $mysqli -> prepare($sql);
$query -> bind_param('i', $user_id);
$query -> execute();
$query -> store_result();
$query -> bind_result($class_id, $class_code, $class_link,$class_name	,$class_section, $class_subject, $room, $class_photo, $google_meet_link, $can_post, $can_comment,$class_description , $post_id	,$post_title	,$post_body	,$post_attachment	,$post_end_date	,$category_id);

$results =[];
while ($query->fetch()) {
  $result = [
      "class_id" => $class_id,
      "class_code" => $class_code,
      "class_link" => $class_link,
      "class_name" => $class_name,
      "class_section" => $class_section,
      "class_subject" => $class_subject,
      "room" => $room,
      "class_photo" => $class_photo,
      "google_meet_link" => $google_meet_link,
      "can_post" => $can_post,
      "can_comment" => $can_comment,
      "class_description" => $class_description,
      "post_id" => $post_id,
      "post_title" => $post_title,
      "post_body" => $post_body,
      "post_attachment" => $post_attachment,
      "post_end_date" => $post_end_date,
      "category_id" => $category_id
  ];

  $results[] = $result;
}

$response = json_encode(array('status' => true, 'data' => $results));
print_r($response);
