update session_level set success_attempt_id = null;
delete from instructions;
delete from level_attempt;
delete from session_level;
delete from game_session;