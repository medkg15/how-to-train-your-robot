<?php
if($_SERVER["REQUEST_METHOD"] !== 'GET')
{
    http_response_code(405);
    exit;
}
require_once('includes/data_access.php');

$data_access = new DataAccess();

$scores = $data_access->get_highscores();

header('Content-Type: application/json');
echo json_encode($scores);