<?php
$password = trim($_POST['password']);
$secret = trim($_POST['email']);
$result = array();
if ($password == 'riuqwerty' && $secret == 'admin') {
    $result['result'] =true;
}
else {
    $result['result'] =false;
}
echo json_encode($result);