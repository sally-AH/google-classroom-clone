
<?php

$host = "localhost";
$db_user = "root";
$db_pass = null;
$db_name = "classroom_db";

$mysqli = new mysqli($host, $db_user, $db_pass, $db_name);
if (!$mysqli) {
    die('a connection was unsuccesful');
}
