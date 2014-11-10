<?php
require_once(__DIR__ . '/../../vendor/autoload.php');
require_once(__DIR__ . '/password.php');
DB::$host = 'ec2-54-68-234-52.us-west-2.compute.amazonaws.com';
DB::$user = 'capstone';
DB::$password = PASSWORD;
DB::$dbName = 'capstone';
DB::$error_handler = false;
DB::$throw_exception_on_error = true;