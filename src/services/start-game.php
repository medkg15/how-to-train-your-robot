<?php

require_once('includes/connection.php');

session_start();

$session_id = session_id();

$statement = $mysqli->prepare('insert into game_session
(start, session_id)
values
(?,?);');

if(!$statement)
{
    die('Failed to prepare statement.');
}

$_SESSION["id"] = 5;
