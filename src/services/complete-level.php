<?php

if($_SERVER["REQUEST_METHOD"] !== 'POST')
{
    http_response_code(405);
    exit;
}

require_once('includes/data_access.php');

$json = json_decode(file_get_contents('php://input'));

$level_session_id = $json->level_id;
//$program = json_encode($json->program); // convert the program itself back into a json string for storage.
$program = $json->program;
$attempt_start = $json->attempt_start;
$attempt_end = $json->attempt_end;
$score = $json->score;
$used_help = $json->used_help;
$used_debugger = $json->used_debugger;

$data_access = new DataAccess();

$attempt_id = $data_access->create_level_attempt($level_session_id, $program, $attempt_start, $attempt_end);

$data_access->complete_level($attempt_id, $level_session_id, $score, $used_help, $used_debugger);

header('Content-Type: application/json');
echo json_encode(array(
    'session_level_id' => $level_session_id,
    'attempt_id' => $attempt_id
));