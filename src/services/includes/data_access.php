<?php

require_once('password.php');

class DataAccess
{
    private $mysqli;

    //This is the function construct and it initializes the connection to the database
    public function __construct()
    {
        //Production database (Project database)
        $this->mysqli = new mysqli("ec2-54-68-234-52.us-west-2.compute.amazonaws.com", "capstone", PASSWORD, "capstone");

        //Local test database (Local machine)
        //$this->mysqli = new mysqli("localhost", "root", PASSWORD, "capstone");

        if ($this->mysqli->connect_errno) {
            die(sprintf("Failed to connect to MySQL: (%s) %s", $this->mysqli->connect_errno, $this->mysqli->connect_error));
        }
    }

    //Creates the level session in the database.
    public function create_level($session_id, $level_id, $start, $end)
    {
        $statement = $this->mysqli->prepare('insert into session_level
(session_id, level_id, start, end)
values
(?, ?, ?, ?);');

        if (!$statement) {
            die(sprintf('%s Failed to prepare statement.', __METHOD__));
        }

        if (!$statement->bind_param('ssss', $session_id, $level_id, $start, $end)) {
            die(sprintf('%s Bind param failed: (%s) %s', __METHOD__, $statement->errno, $statement->error));
        }

        if (!$statement->execute()) {
            die(sprintf('%s Execute failed: (%s) %s', __METHOD__, $statement->errno, $statement->error));
        }

        $session_level_id = $this->mysqli->insert_id;

        $statement->close();
        return $session_level_id;
    }

    //This function creates a unique game session id for each user.
    public function create_session($session_id)
    {
        $statement = $this->mysqli->prepare('insert into game_session
(start, session_id)
values
(?,?);');

        if (!$statement) {
            die(sprintf('%s Failed to prepare statement.', __METHOD__));
        }

        //print_r("The Statement: " + $statement);
        //print_r("The Session ID: " + $session_id);
        //exit;
        $date = date('Y-m-d H:i:s');
        if (!$statement->bind_param('ss', $date, $session_id)) {
            die(sprintf('%s Bind param failed: (%s) %s', __METHOD__, $statement->errno, $statement->error));
        }

        if (!$statement->execute()) {
            die(sprintf('%s Execute failed: (%s) %s', __METHOD__, $statement->errno, $statement->error));
        }

        $statement->close();

        return $this->mysqli->insert_id;
    }

    public function create_level_attempt($session_level_id, $program, $start, $end)
    {

        $statement = $this->mysqli->prepare('insert into level_attempt
(level_id, program, number, start, end)
values
(?, ?, 1, ?, ?);');

        if (!$statement) {
            die(sprintf('%s Failed to prepare statement.', __METHOD__));
        }

        if (!$statement->bind_param('isss', $session_level_id, $program, $start, $end)) {
            die(sprintf('%s Bind param failed: (%s) %s', __METHOD__, $statement->errno, $statement->error));
        }

        if (!$statement->execute()) {
            die(sprintf('%s Execute failed: (%s) %s', __METHOD__, $statement->errno, $statement->error));
        }

        $attempt_id = $this->mysqli->insert_id;

        $statement->close();

        return $attempt_id;
    }

    //Updated database with level success or failure.
    public function set_attempt($attempt_id, $session_level_id, $Success)
    {
        if ($Success)
        {
            $statement = $this->mysqli->prepare('update session_level set success_attempt_id = ? where id = ?;');
        }
        else
        {
            //No Update is required for the failed attempt
            //$statement = $this->mysqli->prepare('update session_level set failed_attempt_id = ? where id = ?;');
        }
        if(!$statement)
        {
            die(sprintf('%s Failed to prepare statement.', __METHOD__));
        }

        if(!$statement->bind_param('ii', $attempt_id, $session_level_id))
        {
            die(sprintf('%s Bind param failed: (%s) %s', __METHOD__, $statement->errno, $statement->error));
        }

        if(!$statement->execute())
        {
            die(sprintf('%s Execute failed: (%s) %s', __METHOD__, $statement->errno, $statement->error));
        }

        $statement->close();
    }
}

