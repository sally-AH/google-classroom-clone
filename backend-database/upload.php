<?php

    $data = json_decode(file_get_contents('php://input'), true);

    $upload_to = $data["upload_to"];
    $upload_file = $data["upload_file"];

    upload_file($upload_to, $upload_file);

    function upload_file ($upload_to, $upload_file) {

        $allowed_extension = array("jpg", "jpeg", "png", "zip", "pdf", "docx");
        $status = false;

        $data = explode(".", $upload_file["name"]);
        $extension = end($data);

        if (in_array($extension, $allowed_extension)) {

            $status = true;

        } else {

            $status = false;

        }

        if ($status == true) {

            $path = $upload_to . "/" . $upload_file["name"];
            move_uploaded_file($upload_file["tmp_name"], $path);

            $response = json_encode(array("status" => true));

        } else {

            $response = json_encode(array("status" => false));

        }

        return $response;

    }