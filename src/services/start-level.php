<?php

if($_SERVER["REQUEST_METHOD"] !== 'POST')
{
    http_response_code(405);
    exit;
}

require_once('includes/data_access.php');

$json = json_decode(file_get_contents('php://input'));

$session_id = $json->session_id;
$level_id = $json->level_id;

$data_access = new DataAccess();

$session_level_id = $data_access->begin_level($session_id, $level_id);

header('Content-Type: application/json');
echo json_encode(array(
    'session_level_id' => $session_level_id
));