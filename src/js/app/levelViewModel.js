define(
    ['app/courseViewModel', 'app/instructionInventoryViewModel', 'app/robotViewModel', 'app/programEditorViewModel', 'app/programInterpreter'],
    function(CourseViewModel, InstructionInventoryViewModel, RobotViewModel, ProgramEditorViewModel, ProgramInterpreter){
        return function LevelViewModel(game, level){

            var self = this;

            self.number = level.number;
            self.name = level.name;
            self.defaultHeading = level.defaultHeading;
            self.storageConfiguration = level.storageConfiguration;
            self.defaultPosition = level.startPosition;
            self.goals = level.goals;
            self.defaultInstructions = level.instructions;

            self.course = new CourseViewModel(self, level.map);
            self.instructionInventory = new InstructionInventoryViewModel(self);
            self.robot = new RobotViewModel(self);
            self.program = new ProgramEditorViewModel();

            var interpreter;

            self.runProgram = function(){
                self.robot.reset();

                interpreter = new ProgramInterpreter(self.program.program());

                var callback = function(){
                    setTimeout(function(){

                        interpreter.execute(self);

                        if(!interpreter.isFinished){
                            callback();
                        }
                        else {
                            if (interpreter.isSuccessful) {
                                alert('great job!');
                                game.advanceNextLevel();
                            }
                            else {
                                alert(interpreter.error);
                            }
                        }
                    }, 200);
                };

                callback();
            };

            self.stepProgram = function(){
                if(!interpreter){
                    interpreter = new ProgramInterpreter(self.program.program());
                }
                interpreter.execute(self);
            };

            self.stopProgram = function(){

            };
        };
});