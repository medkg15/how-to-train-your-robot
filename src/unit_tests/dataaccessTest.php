<?php
/**
 * Created by PhpStorm.
 * User: AJ
 * Date: 11/8/2014
 * Time: 3:33 PM
 */
//require_once(__DIR__.'/phpunit.phar');
require_once('D:\TrainRobotRepo\how-to-train-your-robot\src\services\includes\data_access.php');
//require_once('../services/includes/data_access.php');

class dataaccessTest extends PHPUnit_Framework_TestCase {

    public function test_phpunit()
    {
        $test = 'test';
        $this->assertEquals('test', $test);
    }

    public function test_repeat_instruction_save()
    {
        $json = json_decode('[{"instruction_id":"repeat","count":4,"body":[{"instruction_id":"step-forward","body":[]}]},{"instruction_id":"pick-up-ball","body":[]}]');
        $program = $json;

        $data_access = new DataAccess();

        $attempt_id = $data_access->create_level_attempt(3, $program, date('Y-m-d H:i:s'), date('Y-m-d H:i:s'));
        $this->assertNotNull($attempt_id);
    }

    public function  test_repeat_while_instruction_save()
    {
        $json = json_decode('[{"instruction_id":"repeat-while","body":[{"instruction_id":"step-forward","body":[]}],"condition":"ball-not-front"},{"instruction_id":"pick-up-ball","body":[]}]');
        $program = $json;

        $data_access = new DataAccess();

        $attempt_id = $data_access->create_level_attempt(3, $program, date('Y-m-d H:i:s'), date('Y-m-d H:i:s'));
        $this->assertNotNull($attempt_id);
    }

    public function test_custom_function_instruction_save()
    {
        $json = json_decode('[{"instruction_id":"custom-function-1","body":[],"definition":{"id":"custom-function-1","name":"step twice","description":"User defined custom function","type":"baseInstruction","points":50,"body":[{"instruction_id":"step-forward","body":[],"definition":{"id":"step-forward","name":"Step Forward","description":"Move your robot forward one space.","type":"baseInstruction","points":10}},{"instruction_id":"step-forward","body":[],"definition":{"id":"step-forward","name":"Step Forward","description":"Move your robot forward one space.","type":"baseInstruction","points":10}}]}}]');

        $program = $json;

        $data_access = new DataAccess();

        $attempt_id = $data_access->create_level_attempt(3, $program, date('Y-m-d H:i:s'), date('Y-m-d H:i:s'));
        $this->assertNotNull($attempt_id);
    }

}
 