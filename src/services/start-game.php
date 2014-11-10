<?php

if($_SERVER["REQUEST_METHOD"] !== 'POST')
{
    http_response_code(405);
    exit;
}

require_once('includes/data_access.php');

$data_access = new DataAccess();

$insert_id = $data_access->begin_game();

header('Content-Type: application/json');
echo json_encode(array(
    'id' => $insert_id
));