<?php

if($_SERVER["REQUEST_METHOD"] !== 'POST')
{
    http_response_code(405);
    exit;
}

require_once('includes/data_access.php');

$json = json_decode(file_get_contents('php://input'));

$session_id = $json->session_id;

if(!$session_id)
{
    http_response_code(400);
    die('No session id.');
}

$data_access = new DataAccess();

$data_access->complete_game($session_id);

header('Content-Type: application/json');