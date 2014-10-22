<?php
/**
 * Created by PhpStorm.
 * User: Kevin
 * Date: 10/19/2014
 * Time: 9:23 PM
 */

printf("Getting to failed-attempt");

if($_SERVER["REQUEST_METHOD"] !== 'POST')
{
    http_response_code(405);
    exit;
}

require_once('includes/data_access.php');

$json = json_decode(file_get_contents('php://input'));
printf("Session id is %u",$json->session_id);
$session_id = $json->session_id;
$level_id = $json->level_id;
$program = json_encode($json->program); // convert the program itself back into a json string for storage.
$start = $json->start;
$end = $json->end;

printf("The failed-attempt session information is: session_id=%u, level_id=%u,", $session_id, $level_id);

$data_access = new DataAccess();

$session_level_id = $data_access->create_level($session_id, $level_id, $start, $end);

$attempt_id = $data_access->create_level_attempt($session_level_id, $program, $start, $end);

$data_access->set_attempt($attempt_id, $session_level_id, false);

header('Content-Type: application/json');
echo json_encode(array(
    'session_id' => $session_id,
    'session_level_id' => $session_level_id,
    'attempt_id' => $attempt_id
));