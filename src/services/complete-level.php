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
$program = json_encode($json->program); // convert the program itself back into a json string for storage.
$start = $json->start;
$end = $json->end;

$data_access = new DataAccess();

$session_level_id = $data_access->create_level($session_id, $level_id, $start, $end);

$attempt_id = $data_access->create_level_attempt($session_level_id, $program, $start, $end);

$data_access->set_success_attempt($attempt_id, $session_level_id);

header('Content-Type: application/json');
echo json_encode(array(
    'session_id' => $session_id,
    'session_level_id' => $session_level_id,
    'attempt_id' => $attempt_id
));