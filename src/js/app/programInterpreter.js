define([], function(){

    return function ProgramInterpreter(program){

        var self = this;

        // on success handler meant to be overridden.
        this.onSuccess = function(){ console.log('success'); };

        // on failure handler meant to be overriden.
        this.onFailure = function(reason){ console.log(reason) };

        this.isFinished = false;

        this.isSuccessful = false;

        this.error = undefined;

        // our default scope in the program itself.  we may add additional ones as we go...
        var scopes = [ { instructions: program, index: 0 } ];

        var errorEncountered = function(reason){
            self.isFinished = true;
            self.isSuccessful = false;
            self.onFailure(reason);
            self.error = reason;
        };

        // executes the next instruction in the program, in the context of the given level.
        this.execute = function(level){

            if (self.isFinished) {
                return;
            }

            // if we're done with this scope, move up to the next one.
            // keep moving up until we're at the end of the root program scope.
            while (scopes[0].index >= scopes[0].instructions.length && scopes.length > 1) {
                scopes.shift();
            }

            // are we at the end of the program?
            if (scopes[0].index >= scopes[0].instructions.length && scopes.length === 1) {
                // todo: determine if we completed in a successful or unsuccessful state

                self.isFinished = true;

                if (self.isSuccessful) {
                    self.onSuccess();
                }
                else {
                    errorEncountered('Robot didn\'t complete the goals!');
                }

                return;
            }
            else if(self.isSuccessful) {
                errorEncountered('Robot completed all goals but didn\'t stop.');
                return;
            }

            // obtain the current program element for this step
            var instruction = scopes[0].instructions[scopes[0].index];

            switch(instruction.definition.id)
            {
                case "step-forward":
                    self.executeStepForward(instruction, level);
                    break;
                case "turn-right":
                    self.executeTurnRight(instruction, level);
                    break;
                case "turn-left":
                    self.executeTurnLeft(instruction, level);
                    break;
                case "pick-up-ball":
                    self.executePickUpBall(instruction, level);
                    break;
                case "repeat":
                    self.executeRepeat(instruction, level);
                    break;
                case "repeat-while":
                    self.executeRepeatWhile(instruction, level);
                    break;
                //todo: custom function
            }
        };

        self.executeStepForward = function(instruction, level){
            var nextCellPosition = level.robot.getFrontCell();
            var nextCell = level.course.cell(nextCellPosition);

            if (nextCell.definition === ' ') {
                level.robot.move(level.robot.direction());
            }
            else {
                errorEncountered('Cannot step forward.  Path is blocked.');
            }
            scopes[0].index++;
        };

        self.executeTurnRight = function(instruction, level){
            level.robot.turnRight();
            scopes[0].index++;
        };

        self.executeTurnLeft = function(instruction, level){
            level.robot.turnLeft();
            scopes[0].index++;
        };

        self.executePickUpBall = function(instruction, level){
            var nextCellPosition = level.robot.getFrontCell();
            var nextCell = level.course.cell(nextCellPosition);

            if (nextCell.definition === 'e') {
                self.isSuccessful = true;
            }
            else {
                errorEncountered('Cannot step forward.  Path is blocked.');
            }
            scopes[0].index++;
        };

        self.executeRepeat = function(instruction, level){
            if (typeof scopes[0].countRemaining === 'undefined') {
                scopes[0].countRemaining = instruction.count;
            }

            if (scopes[0].countRemaining > 0) {
                scopes[0].countRemaining--;
                scopes.unshift({instructions: instruction.body, index: 0});
            }
            else {
                scopes[0].countRemaining = undefined;
                scopes[0].index++;
            }
        };

        self.executeRepeatWhile = function(instruction, level) {
            var nextCellPosition = level.robot.getFrontCell();
            var nextCell = level.course.cell(nextCellPosition);

            if (typeof scopes[0].condition === 'undefined') {
                scopes[0].condition = instruction.condition;
            }

            // check if we've satisfied the condition

            var frontCellDefinition = nextCell.definition;

            if ((scopes[0].condition === 'wall-not-front' && frontCellDefinition !== 'x')
                || (scopes[0].condition === 'ball-not-front' && frontCellDefinition !== 'e')) {
                scopes[0].countRemaining--;
                scopes.unshift({instructions: instruction.body, index: 0});
            }
            else {
                // we're done, move to the next instruction.
                scopes[0].condition = undefined;
                scopes[0].index++;
            }
        }

        self.executeCustomFunction = function(instruction, level){
            if (typeof scopes[0].runningFunction === 'undefined') {
                scopes[0].runningFunction = true;
                scopes.unshift({instructions: instruction.definition.body, index: 0});
            }
            else
            {
                scopes[0].index++;
                scopes[0].runningFunction = undefined;
            }
        };

    };

});