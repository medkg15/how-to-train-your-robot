<?php
if($_SERVER["REQUEST_METHOD"] !== 'POST')
{
    http_response_code(405);
    exit;
}

require_once('includes/data_access.php');

$json = json_decode(file_get_contents('php://input'));

$level_id = $json->level_id;
$program = json_encode($json->program); // convert the program itself back into a json string for storage.
$start = $json->start;
$end = $json->end;

$data_access = new DataAccess();

$attempt_id = $data_access->create_level_attempt($level_id, $program, $start, $end);

header('Content-Type: application/json');
echo json_encode(array(
    'attempt_id' => $attempt_id
));