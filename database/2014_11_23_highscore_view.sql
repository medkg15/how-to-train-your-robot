CREATE 
    ALGORITHM = UNDEFINED 
    DEFINER = `capstone`@`%` 
    SQL SECURITY DEFINER
VIEW `highscore_listing` AS
  SELECT 
        `sl`.`level_id` AS `level_id`,
        `sl`.`end` AS `end`,
        MAX(`sl`.`score`) AS `highscore`,
		CAST(SUBSTR(sl.level_id, 6) AS UNSIGNED INT) AS LevelNumber
    FROM
        (`level_attempt` `la`
        JOIN `session_level` `sl`)
    WHERE
        (`la`.`level_id` = `sl`.`id`)
    GROUP BY LevelNumber desc