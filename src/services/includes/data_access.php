<?php

require_once('password.php');

class DataAccess
{
    private $mysqli;

    public function __construct()
    {
        $this->mysqli = new mysqli("ec2-54-68-234-52.us-west-2.compute.amazonaws.com", "capstone", PASSWORD, "capstone");

        if ($this->mysqli->connect_errno) {
            die(sprintf("Failed to connect to MySQL: (%s) %s", $this->mysqli->connect_errno, $this->mysqli->connect_error));
        }
    }

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

    public function create_session($session_id)
    {
        $statement = $this->mysqli->prepare('insert into game_session
(start, session_id)
values
(?,?);');

        if (!$statement) {
            die(sprintf('%s Failed to prepare statement.', __METHOD__));
        }

        if (!$statement->bind_param('ss', date('Y-m-d H:i:s'), $session_id)) {
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

    public function set_success_attempt($attempt_id, $session_level_id)
    {
        $statement = $this->mysqli->prepare('update session_level set success_attempt_id = ? where id = ?;');

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

