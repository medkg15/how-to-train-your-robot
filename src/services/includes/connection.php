<?php

require_once('password.php');

$mysqli = new mysqli("ec2-54-68-234-52.us-west-2.compute.amazonaws.com", "capstone", $password, "capstone");

if($mysqli->connect_errno){
    die(sprintf("Failed to connect to MySQL: (%s) %s", $mysqli->connect_errno, $mysqli->connect_error));
}