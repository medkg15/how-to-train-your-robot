CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `capstone`@`%` 
    SQL SECURITY DEFINER
VIEW `session_level_data` AS
    SELECT 
        `session_level`.`session_id` AS `session_id`,
        `session_level`.`level_id` AS `level_id`,
        `session_level`.`success_attempt_id` AS `success_attempt_id`,
        COUNT(`session_level`.`id`) AS `Attempts`,
        (`session_level`.`end` - `session_level`.`start`) AS `elapsed_time`,
        `session_level`.`start` AS `start`,
        `session_level`.`end` AS `end`
    FROM
        `session_level`
    GROUP BY `session_level`.`session_id` , `session_level`.`level_id`