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

$level_id = $json->level_id;
$program = json_encode($json->program); // convert the program itself back into a json string for storage.
$start = $json->start;
$end = $json->end;

$data_access = new DataAccess();

$attempt_id = $data_access->create_level_attempt($session_level_id, $program, $start, $end);

header('Content-Type: application/json');
echo json_encode(array(
    'attempt_id' => $attempt_id
));