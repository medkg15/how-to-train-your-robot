CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `capstone`@`%` 
    SQL SECURITY DEFINER
VIEW `highscore_listing` AS
    SELECT 
        `sl`.`level_id` AS `level_id`,
        `sl`.`end` AS `end`,
        MAX(`la`.`score`) AS `highscore`
    FROM
        (`level_attempt` `la`
        JOIN `session_level` `sl`)
    WHERE
        (`la`.`level_id` = `sl`.`id`)
    GROUP BY `sl`.`level_id`