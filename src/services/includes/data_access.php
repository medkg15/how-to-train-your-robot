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
        //encoding the program
        $program_encoded = json_encode($program);



        DB::insert('level_attempt', array(
            'level_id' => $session_level_id,
            'program' => $program_encoded,
            'number' => 1,
            'start' => $start,
            'end' => $end
        ));

        $attempt_id = DB::insertId();
        $this->create_instructions($program,$attempt_id);

        return DB::insertId();
    }


    /**
     * This function saves all of the instructions as well as the child instructions for a given instruction
     *
     * @param $program - The json object that has the entire instruction set that the user used in a level
     * @param $attempt_id - number The level attempt identifier.
     */
    private function create_instructions($program, $attempt_id)
    {
        foreach ($program as $obj)
        {
            printf($obj->instruction_id);
            if (strpos($obj->instruction_id, 'custom-function') !== false)
            {
                DB::insert('instructions', array(
                        'instruction_name' => $obj->id,
                        'attempt_id' => $attempt_id,
                        'function_name' => $obj->name
                    )
                );

                $parent_id = DB::insertId();

                //Adding children instructions with the parent id
                foreach ($obj->body as $ins)
                {
                    DB::insert('instructions', array(
                            'instruction_name' => $ins->name,
                            'attempt_id' => $attempt_id,
                            'function_name' => $obj->name,
                            'parent_id' => $parent_id
                        )
                    );
                }
            }
            else if (strpos($obj->instruction_id, 'repeat') !== false)
            {
                DB::insert('instructions', array(
                        'instruction_name' => $obj->instruction_id,
                        'attempt_id' => $attempt_id
                    )
                );

                $parent_id = DB::insertId();

                //Adding children instructions with the parent id
                foreach ($obj->body as $ins)
                {
                    DB::insert('instructions', array(
                            'instruction_name' => $ins->instruction_id,
                            'attempt_id' => $attempt_id,
                            'parent_id' => $parent_id
                        )
                    );
                }
            }
            else if (strpos($obj->instruction_id, 'repeat-while') !== false)
            {
                DB::insert('instructions', array(
                        'instruction_name' => $obj->instruction_id,
                        'attempt_id' => $attempt_id,
                    )
                );

                $parent_id = DB::insertId();

                //Adding children instructions with the parent id
                foreach ($obj->body as $ins)
                {
                    DB::insert('instructions', array(
                            'instruction_name' => $ins->instruction_id,
                            'attempt_id' => $attempt_id,
                            'parent_id' => $parent_id
                        )
                    );
                }
            }
            else
            {
                DB::insert('instructions', array(
                        'instruction_name' => $obj->instruction_id,
                        'attempt_id' => $attempt_id
                    )
                );
            }
        }

    }


    /**
     * Record that a user has successfully completed a level with the given attempt.
     *
     * @param $attempt_id number The level attempt identifier.
     * @param $session_level_id number The session level identifier.
     * @param $score number The score attained when completing the level.
     */
    public function complete_level($attempt_id, $session_level_id, $score)
    {
        DB::update('session_level', array(
            'success_attempt_id' => $attempt_id,
            'end' => date('Y-m-d H:i:s'),
            'score' => $score
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

