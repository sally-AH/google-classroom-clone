<?php
require_once 'connection.php';
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");
$data = json_decode(file_get_contents('php://input'), true);

//---------------------------------------------------------------------------
// randomString
//
// randomly generate a string of characters
//
// Note: the $stringLength function parameter/argument is optional and 
//		 it defaults to 7. That means if randomString function is called
//		 with no parameters/arguments, a string of 7 characters will be
//		 randomly generated.
//
// return $randomString
//---------------------------------------------------------------------------
function randomString ($stringLength = 7) {
	$characters = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    $randomString = "";
	
    for ($i = 0; $i < $stringLength; $i++)
        $randomString .= $characters[rand(0, strlen($characters) - 1)];
    
    return $randomString;
} // end randomString

if ($data["method"] == "signin") {

    $user_email = trim($data["user_email"]);
    $user_password = trim($data["user_password"]);

    $sql = "SELECT user_id, user_password, f_name, l_name, phone_number, dob, photo
            FROM users
            WHERE user_email = ?";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('s', $user_email);
    $query -> execute();
    $query -> store_result();
    $query -> bind_result($user_id, $hashed_password, $f_name, $l_name, $phone_number, $dob, $photo);
    $query -> fetch();
    $result = $query -> num_rows();

    if ($result == 0) {

        $response = json_encode(array('status' => false, 'message' => 'user not found'));

    } else {

        if (password_verify($user_password, $hashed_password)) {

            $object = [$user_id, $user_email, $f_name, $l_name, $photo];

            $response = json_encode(array('status' => true, 'message' => 'logged in', "data" => $object));
          
        } else {

            $response = json_encode(array('status' => false, 'message' => 'wrong password'));
        }

    }

}

elseif ($data["method"] == "signup") {

    $user_email = trim($data["user_email"]);
    $user_password = trim($data["user_password"]);
    $f_name = trim($data["f_name"]);
    $l_name = trim($data["l_name"]);
    $dob = $data["dob"];
    $phone_number = trim($data["phone_number"]);

    $sql = "SELECT user_id
            FROM users
            WHERE user_email = ?";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('s', $user_email);
    $query -> execute();
    $query -> store_result();
    $user_email_exists = $query -> num_rows();

    if ($user_email_exists > 0) {

        $response = json_encode(array('status' => false, 'message' => 'email already exists'));

    } else {

        $sql = "INSERT INTO users (user_email, user_password, f_name, l_name, dob, phone_number) 
                VALUES (?, ?, ?, ?, ?, ?)";

        $hashed_password = password_hash($user_password, PASSWORD_BCRYPT);
        $query = $mysqli -> prepare($sql);
        $query -> bind_param('ssssss', $user_email, $hashed_password, $f_name, $l_name, $dob, $phone_number);
        $result = $query -> execute();

        if ($result) {

            $sql = "SELECT user_id
                    FROM users
                    WHERE user_email = ?";

            $query = $mysqli -> prepare($sql);
            $query -> bind_param('s', $user_email);
            $query -> execute();
            $query -> store_result();
            $query -> bind_result($user_id);
            $query -> fetch();

            $object = [$user_id, $user_email, $f_name, $l_name];

            $response = json_encode(array('status' => true, 'message' => 'registered successfully', "data" => $object));

        } else {

            $response = json_encode(array('status' => false, 'message' => 'registered failed'));

        }

    }

}

elseif ($data["method"] == "landing_page") {

    $user_id = $data["user_id"];

    // all classes for specific user with its user_role
    $sql = "SELECT PL.class_id, class_name, class_subject, class_photo, user_role_id
            FROM people PL, class_rooms CR
            WHERE PL.class_id = CR.class_id AND user_id = ?";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('i', $user_id);
    $query -> execute();
    $query -> store_result();
    $query -> bind_result($class_id, $class_name, $class_subject, $class_photo, $user_role_id);
    $class_counter = $query -> num_rows();
    $classes = [];
    $i = 1;
    if ($class_counter > 0) {

        while ($query -> fetch()) {

            $class[$i] = [$class_id, $class_name, $class_subject, $class_photo];

            array_push($classes, $class[$i]);

            $i++;

        }

        $response = json_encode(array('status' => true, 'data' => $classes, 'counter' => $class_counter));

    } else {

        $response = json_encode(array('status' => false, 'data' => null));

    }

}

elseif ($data["method"] == "get_class") {

    $user_id = $data["user_id"];
    $class_id = $data["class_id"];

    $sql = "SELECT class_code, class_link, class_name, class_section, class_subject, room, class_photo, google_meet_link, can_post, can_comment, user_role_id
            FROM class_rooms CR, people PL
            WHERE CR.class_id = PL.class_id AND PL.class_id = ? AND user_id = ?";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('ii', $class_id, $user_id);
    $query -> execute();
    $query -> store_result();
    $query -> bind_result($class_code, $class_link, $class_name, $class_section, $class_subject, $room, $class_photo, $google_meet_link, $can_post, $can_comment, $user_role_id);
    $query -> fetch();

    $result = [
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
        "user_role_id" => $user_role_id
    ];

    $response = json_encode(array('status' => true, 'data' => $result));

}

elseif ($data["method"] == "add_class") {

    $class_name = trim($data["class_name"]);
    $class_section = trim($data["class_section"]);
    $class_subject = trim($data["class_subject"]);
    $room = trim($data["room"]);

    do {
        $class_code = randomString();
        $sql = "SELECT class_id
                FROM class_rooms
                WHERE class_code = ?";
    
        $query = $mysqli -> prepare($sql);
        $query -> bind_param('s', $class_code);
        $query -> execute();
        $query -> store_result();
        $class_code_exist = $query -> num_rows();
        
    } while ($class_code_exist > 0);

    $sql = "INSERT INTO class_rooms(class_code, class_name, class_section, class_subject, room) 
            VALUES (?,?,?,?,?)";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('sssss', $class_code, $class_name, $class_section, $class_subject, $room);
    $query -> execute();

    $sql = "SELECT class_id
            FROM class_rooms
            WHERE class_code = ?";
    
    $query = $mysqli -> prepare($sql);
    $query -> bind_param('s', $class_code);
    $query -> execute();
    $query -> store_result();
    $query -> bind_result($class_id);
    $query -> fetch();

    $class_link = "http://localhost/classroom/frontend/class_stream.php?class_id=" . $class_id;

    $sql = "UPDATE class_rooms 
            SET class_link = ?
            WHERE class_code = ?";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('ss', $class_link, $class_code);
    $result = $query -> execute();

    if ($result) {

        $response = json_encode(array('status' => true, 'message' => 'class added successfully'));

    } else {

        $response = json_encode(array('status' => false, 'message' => 'can not add a new class'));

    }

}

elseif ($data["method"] == "get_people") {
    
    $class_id = $data["class_id"];

    $sql = "SELECT PL.user_id, user_role_desc, f_name, l_name, photo 
            FROM people PL, users U, user_roles UR
            WHERE PL.user_id = U.user_id AND PL.user_role_id = UR.user_role_id AND class_id = ?";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('i', $class_id);
    $query -> execute();
    $query -> store_result();
    $query -> bind_result($user_id, $user_role_desc, $f_name, $l_name, $photo);
    $people = [];
    $i = 1;

    while ($query -> fetch()) {

        $user[$i] = [
            "user_id"=>$user_id,
            "user_role_desc" => $user_role_desc,
            "f_name" => $f_name,
            "l_name" => $l_name,
            "photo" => $photo
        ];

        array_push($people, $user[$i]);

        $i++;

    }

    $response = json_encode(array('status' => true, 'data' => $people));

}

elseif ($data["method"] == "get_user_profile") {

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

}

elseif ($data["method"] == "edit_user_profile") {

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

}

elseif ($data["method"] == "add_assignment") {

    $class_id = $data["class_id"];
    $teacher_id = $data["teacher_id"];
    $start_date = $data["start_date"];
    $end_date = $data["end_date"];
    $post_title = trim($data["post_title"]);
    $post_body = trim($data["post_body"]);
    $post_attachment = $data["post_attachment"];
    $post_grade = trim($data["post_grade"]);

    $sql = "INSERT INTO posts(post_type_id, teacher_id, start_date, end_date, post_title, post_body, post_attachment, post_grade) 
            VALUES (1, ?, ?, ?, ?, ?, ?, ?)";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('isssssd', $teacher_id, $start_date, $end_date, $post_title, $post_body, $post_attachment, $post_grade);
    $query -> execute();

    $sql = "SELECT post_id
            FROM posts
            WHERE post_title = ?";
    
    $query = $mysqli -> prepare($sql);
    $query -> bind_param('s', $post_title);
    $query -> execute();
    $query -> store_result();
    $query -> bind_result($post_id);
    $query -> fetch();

    $sql = "INSERT INTO class_rooms_posts(class_id, post_id) 
            VALUES (?, ?)";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('ii', $class_id, $post_id);
    $query -> execute();

    $response = json_encode(array('status' => true, 'message' => 'assignment added successfully'));

}

elseif ($data["method"] == "student_action") {

    $user_id = $data["user_id"];
    $post_id = $data["post_id"];

    if ($data["action"] == "solution") {

        $file = $data["file"];

        $sql = "INSERT INTO responses(response_type_id, file) 
                VALUES (1, ?)";

        $query = $mysqli -> prepare($sql);
        $query -> bind_param('s', $file);
        $query -> execute();

        $sql = "SELECT response_id
                FROM responses
                WHERE file = ?";

        $query = $mysqli -> prepare($sql);
        $query -> bind_param('s', $file);
        $query -> execute();
        $query -> store_result();
        $query -> bind_result($response_id);
        $query -> fetch();

        $sql = "INSERT INTO user_actions(user_id, response_id, post_id) 
                VALUES (?, ?, ?)";

        $query = $mysqli -> prepare($sql);
        $query -> bind_param('iii', $user_id, $response_id, $post_id);
        $result = $query -> execute();

        if ($result) {

            $response = json_encode(array('status' => true, 'message' => 'solution added successfully'));
    
        } else {
    
            $response = json_encode(array('status' => false, 'message' => 'can not add a solution'));
    
        }

    }

    elseif ($data["action"] == "private_comment") {

    }

    elseif ($data["action"] == "public_comment") {

    }

}

elseif ($data["method"] == "add_student") {

    $class_id = $data["class_id"];
    $user_email = $data["user_email"];

    $sql = "SELECT user_id
            FROM users
            WHERE user_email = ?";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('s', $user_email);
    $query -> execute();
    $query -> store_result();
    $query -> bind_result($user_id);
    $query -> fetch();
    $user_exist = $query -> num_rows();

    if ($user_exist > 0) {

        $sql = "SELECT user_id
                FROM people
                WHERE class_id = ?";

        $query = $mysqli -> prepare($sql);
        $query -> bind_param('i', $class_id);
        $query -> execute();
        $query -> store_result();
        $query -> bind_result($student_id);

        $status = false;
        while ($query -> fetch()) {

            if ($user_id == $student_id){
                $status = true;
            }

        }

        if ($status) {

            $response = json_encode(array('status' => false, 'message' => 'user already exists'));

        } else {

            $sql = "INSERT INTO people(class_id, user_id, user_role_id) 
                    VALUES (?,?,3)";

            $query = $mysqli -> prepare($sql);
            $query -> bind_param('ii', $class_id, $user_id);
            $query -> execute();

            $response = json_encode(array('status' => true, 'message' => 'student added successfully'));

        }

    } else {

        $response = json_encode(array('status' => false, 'message' => 'wrong email'));

    }

}

elseif ($data["method"] == "add_co_teacher") {

    $class_id = $data["class_id"];
    $user_email = $data["user_email"];

    $sql = "SELECT user_id
            FROM users
            WHERE user_email = ?";

    $query = $mysqli -> prepare($sql);
    $query -> bind_param('s', $user_email);
    $query -> execute();
    $query -> store_result();
    $query -> bind_result($user_id);
    $query -> fetch();
    $user_exist = $query -> num_rows();

    if ($user_exist > 0) {

        $sql = "SELECT user_id
                FROM people
                WHERE class_id = ?";

        $query = $mysqli -> prepare($sql);
        $query -> bind_param('i', $class_id);
        $query -> execute();
        $query -> store_result();
        $query -> bind_result($teacher_id);

        $status = false;
        while ($query -> fetch()) {

            if ($user_id == $teacher_id){
                $status = true;
            }

        }

        if ($status) {

            $response = json_encode(array('status' => false, 'message' => 'user already exists'));

        } else {

            $sql = "INSERT INTO people(class_id, user_id, user_role_id) 
                    VALUES (?,?,2)";

            $query = $mysqli -> prepare($sql);
            $query -> bind_param('ii', $class_id, $user_id);
            $query -> execute();

            $response = json_encode(array('status' => true, 'message' => 'co-teacher added successfully'));

        }

    } else {

        $response = json_encode(array('status' => false, 'message' => 'wrong email'));

    }

}

$mysqli = null;
echo $response;