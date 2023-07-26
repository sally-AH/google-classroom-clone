<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Access-Control-Allow-Headers, Content-Type, Access-Control-Allow-Methods, Access-Control-Allow-Origin");

// Check if the request is a POST request and if a file was uploaded successfully
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_FILES["uploadedFile"])) {
    // File details
    $file_name = $_FILES["uploadedFile"]["name"];
    $file_type = $_FILES["uploadedFile"]["type"];
    $file_size = $_FILES["uploadedFile"]["size"];
    $file_tmp = $_FILES["uploadedFile"]["tmp_name"];
    $file_error = $_FILES["uploadedFile"]["error"];

    
    // Define the target directory to save the uploaded file
    $target_dir = "../images/";

    // Check for any errors during file upload
    if ($file_error === UPLOAD_ERR_OK) {
        // Move the uploaded file to the target directory
        if (move_uploaded_file($file_tmp, $target_dir . $file_name)) {
            echo json_encode("File uploaded successfully.");
        } else {
            echo json_encode("Error uploading the file.");
        }
    } else {
        echo "Error during file upload. Error code: " . $file_error;
    }
} else {
    echo "Invalid request.";
}
?>