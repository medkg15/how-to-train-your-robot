<?php

require_once(__DIR__.'/config.php');

class DataAccess
{
    /**
     * Record a new game beginning in the database.
     *
     * @return number The game session identifier.
     */
    public function begin_game()
    {
        DB::insert('game_session', array(
            'start' => date('Y-m-d H:i:s')
        ));

        return DB::insertId();
    }

    /**
     * Record that the user with the given session has begun the given level.
     *
     * @param $session_id number The game session identifier.
     * @param $level_id string The level key (e.g. "level-1")
     * @return number The session level identifier.
     */
    public function begin_level($session_id, $level_id)
    {
        DB::insert('session_level', array(
            'session_id' => $session_id,
            'level_id' => $level_id,
            'start' => date('Y-m-d H:i:s')
        ));

        return DB::insertId();
    }

    /**
     * Record that a user has made an attempt to complete a level.
     *
     * @param $session_level_id number The session level identifier.
     * @param $program string A JSON representation of the program used in the attempt.
     * @param $start string The time at which the attempt was started.
     * @param $end string The time at which the attempt was finished.
     * @return number The level attempt identifier.
     */
    public function create_level_attempt($session_level_id, $program, $start, $end)
    {
        DB::insert('level_attempt', array(
            'level_id' => $session_level_id,
            'program' => $program,
            'number' => 1,
            'start' => $start,
            'end' => $end
        ));

        return DB::insertId();
    }

    /**
     * Record that a user has successfully completed a level with the given attempt.
     *
     * @param $attempt_id number The level attempt identifier.
     * @param $session_level_id number The session level identifier.
     * @param $score number The score attained when completing the level.
     * @param $used_help boolean Whether or not the user used persona help on the level.
     */
    public function complete_level($attempt_id, $session_level_id, $score, $used_help)
    {
        DB::update('session_level', array(
            'success_attempt_id' => $attempt_id,
            'end' => date('Y-m-d H:i:s'),
            'score' => $score,
            'used_help' => $used_help
        ),
            'id=%i', $session_level_id);
    }

    /**
     * Record that a user has successfully completed the entire game.
     *
     * @param $session_id number The game session identifier
     */
    public function complete_game($session_id)
    {
        DB::update('game_session', array(
                'end' => date('Y-m-d H:i:s')
            ),
            'id=%i', $session_id);
    }

    /**
     * Retrieve the high scores.
     *
     * @return mixed
     */
    public function get_high_scores()
    {
        return DB::query('select * from highscore_listing');
    }
}

