<?php

if($_SERVER["REQUEST_METHOD"] !== 'POST')
{
    http_response_code(405);
    exit;
}

require_once('includes/data_access.php');

$session_id = uniqid();

$data_access = new DataAccess();
$insert_id = $data_access->create_session($session_id);

header('Content-Type: application/json');
echo json_encode(array(
    'id' => $insert_id,
    'session_id' => $session_id
));