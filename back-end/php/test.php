<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $uploadDirectory = "path/to/your/upload/directory/";

    // Check if there was an error during upload
    if ($_FILES["file"]["error"] > 0) {
        echo "Error: " . $_FILES["file"]["error"];
    } else {
        $fileType = $_FILES["file"]["type"];
        $fileTempName = $_FILES["file"]["tmp_name"];
        $fileExtension = pathinfo($_FILES["file"]["name"], PATHINFO_EXTENSION);
        
        // Generate a unique filename to avoid overwriting existing files
        $newFileName = uniqid() . "." . $fileExtension;
        
        // Move the uploaded file to the desired directory
        if (move_uploaded_file($fileTempName, $uploadDirectory . $newFileName)) {
            echo "File uploaded successfully.";
            // Here, you can save the file name or its path in your database if needed.
        } else {
            echo "Error uploading file.";
        }
    }
}
?>