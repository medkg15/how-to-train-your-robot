alter table game_session
  drop column session_id;

alter table session_level
  drop column failed_attempt_id;

alter table level_attempt
  drop column score;

alter table session_level
  add column score int null;