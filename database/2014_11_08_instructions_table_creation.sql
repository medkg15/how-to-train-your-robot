CREATE TABLE instructions
(
	id int(11) NOT NULL AUTO_INCREMENT, 
    instrucion_name varchar(255) NOT NULL, 
    attempt_id int(11) NOT NULL,
    parent_id int(11),
    function_name varchar(255),
    PRIMARY KEY (`id`),
    KEY `attempt_id` (`attempt_id`),
	CONSTRAINT `instruction_fk_attempt_id` FOREIGN KEY (`attempt_id`) REFERENCES `level_attempt` (`id`), 
    KEY `parent_id` (`parent_id`),
	CONSTRAINT `instruction_fk_parent_id` FOREIGN KEY (`parent_id`) REFERENCES `instructions` (`id`)

);
