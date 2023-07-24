<?php
include("connection.php");

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

$response = array();

$json_data = file_get_contents('php://input');

if ($json_data) {
    $data = json_decode($json_data, true);

    if (isset($data['id'])) {
        $id = $data['id'];
        $query = $mysqli->prepare('SELECT 
                p.post_id, p.start_date, p.end_date, p.post_title, p.post_body, p.post_attachment, p.post_grade, pt.post_type_desc , category_id
            FROM 
                posts p
            INNER JOIN 
                post_types pt ON p.post_type_id = pt.post_type_id
            WHERE 
                p.post_id IN (SELECT post_id FROM class_rooms_posts WHERE class_id = ?);
        ');
        $query->bind_param('i', $id);
        $query->execute();
        $query->store_result();
        $query->bind_result($post_id, $start_date, $end_date, $post_title, $post_body, $post_attachment, $post_grade, $post_type_desc , $category_id);

        $posts = array();

        while ($query->fetch()) {
            $posts[] = array(
                'id' => $post_id,
                'post_type' => $post_type_desc,
                'name' => $post_title,
                "category"=>$category_id,
                'posted_date' => $start_date,
                'due_date' => $end_date,
                'text_content' => $post_body,
                'files' => $post_attachment,
                'grade' => $post_grade
            );
        }

        // Close the statement
        $query->close();

        // Set the $posts array as the response
        $response = $posts;
    } else {
        $response = array('status' => 'class do not exist', 'data' => $json_data);
    }
} else {
    $response = array('status' => 'failed', 'error' => 'Invalid request body');
}

echo json_encode($response);
?>
