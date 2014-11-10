define(
    ['knockout', 'underscore', 'data/levels', 'data/instructions', 'bindings/programTree', 'bindings/inventoryTree', 'app/services', 'bootstrap', 'app/scoreCalculator', 'bindings/trashTree', 'bindings/personaDialog'],
    function (ko, _, levels, instructions, programTree, inventoryTree, services, bootstrap, ScoreCalculator, trashTree, personaDialog) {

        "use strict";
        
        var fixLevels = function (levels){
            _.each(levels, function (level) {
                level.map = _.map(level.map, function(row, rowContext){
                    return _.map(row, function(column, columnContext){
                        return {
                            columnIndex: columnContext,
                            rowIndex: rowContext,
                            definition: column
                        };
                    });                
                });
            });
            return levels;
        };

        return function GameViewModel() {

            var levelViewModels = fixLevels(levels);
            var nextIteration = null;
            var self = this;
            self.score = ko.observable(0);
            self.currentView = ko.observable('welcome');
            self.currentLevel = ko.observable();
            self.currentPosition = ko.observable();
            self.currentHeading = ko.observable();
            self.gameId = ko.observable();
            self.attemptStartTime = ko.observable();
            self.bodyClass = ko.observable('space');
            self.jumpCode = ko.observable();
            self.storyModal = ko.observable();
            self.levelAttempts = ko.observable(0);
            self.buildingFunction = ko.observable(false);
            self.instructionSet = ko.observableArray();
            self.customFunctionCount = 0;
            self.canAdvance = ko.observable(false);
            self.levelSessionID = ko.observable();

            self.advanceToNextLevel = function(){
                var level = self.currentLevel();
                self.selectLevel(levelViewModels[levelViewModels.indexOf(level) + 1]);
            };

            self.startGame = function(){
                services.startGame(function(response){
                    self.gameId(response.id);
                    self.changeView('robot-story');
                    self.score(0);
                });
            };

            self.startFirstLevel = function(){
                self.selectLevel(levelViewModels[0]);
            };

            self.changeView = function(view){
                self.currentView(view);
                self.bodyClass('space');
            };
            
            self.showRobot = function (position, heading) {
                var currentPosition = self.currentPosition();
                return currentPosition 
                    && position.columnIndex === currentPosition.column
                    && position.rowIndex === currentPosition.row
                    && self.currentHeading() === heading;
            };
            
            self.dontShowRobot = function (position) {
                var currentPosition = self.currentPosition();
                return position.definition === ' ' && (!currentPosition 
                    || position.columnIndex !== currentPosition.column
                    || position.rowIndex !== currentPosition.row);
            };

            self.levelJump = function() {

                services.startGame(function(response){
                    self.gameId(response.id);

                    var level = _.find(levelViewModels, function(level){
                        return level.jumpCode == self.jumpCode();
                    });

                    self.selectLevel(level);
                });
            };

            self.levels = levelViewModels;
            
            self.instructions = instructions;

            self.selectLevel = function (level) {

                services.startLevel(self.gameId(), level.id, function(response){

                    self.levelSessionID(response.session_level_id);
                    self.currentLevel(level);
                    self.currentView('build-program');
                    self.currentPosition(level.startPosition);
                    self.currentHeading(level.defaultHeading);
                    self.attemptStartTime(new Date());
                    self.program([]);
                    self.bodyClass(level.environment);
                    self.storyModal(level.intro);
                    self.levelAttempts(0);
                    self.instructionSet(level.instructions);
                    self.customFunctionCount = 0;
                    self.canAdvance(false);

                });
            };

            self.returnHome = function () {
                self.currentView('welcome');
                self.currentLevel(null);
                self.program([]);
                self.currentPosition(null);
                self.currentHeading(null);
            };


            self.instructionInventory = ko.computed(function () {

                var level = self.currentLevel();

                if (!level) {
                    return [];
                }

                return _.map(self.instructionSet(), function (instruction) {

                    var definition = _.find(self.instructions, function (def) {
                        return def.id === instruction.id;
                    });

                    return {
                        id: instruction.id,
                        definition: definition,
                        name: definition.name,
                        description: definition.description,
                        quantity: instruction.quantity === 'unlimited' ? 'unlimited' : instruction.quantity // todo calculate
                    };

                });
            });

            self.treeAvailableInstructions = ko.computed(function(){

                return _.map(self.instructionInventory(), function(instruction){
                    return {
                        text: instruction.name, // node text
                        //icon: "string", // string for custom
                        state: {
                            opened: false,
                            disabled: false,
                            selected: false
                        },
                        children: [],  // array of strings or objects
                        li_attr: {},  // attributes for the generated LI node
                        a_attr: {},  // attributes for the generated A node
                        type: instruction.definition.type,
                        instructionId: instruction.id,
                        data: {
                            instruction_id: instruction.id,

                        }
                    }
                });
            });

            self.addInstruction = function (instruction) {
                self.program.push(instruction);
            };
            
            self.clearProgram = function () {
            
                self.program.removeAll();
            };
            
            self.execute = function (instruction) {
                self.levelAttempts(self.levelAttempts() + 1);
                self.isExecuting(true);
                // reset everything
                self.currentPosition(self.currentLevel().startPosition);
                self.currentHeading(self.currentLevel().defaultHeading);

                // grab a copy of the program to execute
                var program = self.programInstructions();

                if(program.length === 0)
                {
                    return;
                }

                // our default scope in the program itself.  we may add additional ones as we go...
                var scopes = [ { instructions: program, index: 0 } ];

                var win = false;
                var doContinue = true;
                
                var callback;
                callback = function (){

                    if(self.isPaused())
                    {
                        return;
                    }

                    // if we're done with this scope, move up to the next one.
                    // keep moving up until we're at the end of the root program scope.
                    while (scopes[0].index >= scopes[0].instructions.length && scopes.length > 1)
                    {
                        scopes.shift();
                    }

                    // are we at the end of the program?
                    if (scopes[0].index >= scopes[0].instructions.length && scopes.length === 1)
                    {
                        if (win) {

                            var scoreCalculator = new ScoreCalculator();
                            var score = scoreCalculator.calculate(program, self.levelAttempts());
                            self.score(self.score() + score);

                            self.storyModal(self.currentLevel().exit);

                            services.completeLevel(self.levelSessionID(), { program: program, start: self.attemptStartTime(), end: new Date() }, self.score(), function(response){

                                var level = self.currentLevel();

                                if (levelViewModels[levelViewModels.length-1] === level) {

                                    services.completeGame(self.gameId(), function(){

                                        alert('Game over! You win.');

                                    });
                                }
                                else {

                                    self.canAdvance(true);
                                }
                            });
                        }
                        else {
                            alert('The program didn\'t work!');

                            self.currentPosition(self.currentLevel().startPosition);
                            self.currentHeading(self.currentLevel().defaultHeading);

                            services.failAttempt(self.levelSessionID(), {program:program, start: self.attemptStartTime(), end: new Date()}, function(response){
                                self.attemptStartTime(new Date());
                            });
                        }
                        doContinue = false;
                    }

                    
                    var instruction = scopes[0].instructions[scopes[0].index];

                    if (!instruction)
                    {
                        doContinue = false;
                    }
                    else {

                        var nextCell;

                        switch (self.currentHeading()) {
                            case 'up':
                                nextCell = {
                                    column: self.currentPosition().column,
                                    row: self.currentPosition().row - 1
                                };
                                break;
                            case 'down':
                                nextCell = {
                                    column: self.currentPosition().column,
                                    row: self.currentPosition().row + 1
                                };
                                break;
                            case 'left':
                                nextCell = {
                                    column: self.currentPosition().column - 1,
                                    row: self.currentPosition().row
                                };
                                break;
                            case 'right':
                                nextCell = {
                                    column: self.currentPosition().column + 1,
                                    row: self.currentPosition().row
                                };
                                break;
                        }

                        if (instruction.instruction_id === 'step-forward') {

                            if (self.currentLevel().map[nextCell.row][nextCell.column].definition === ' ') {
                                self.currentPosition(nextCell);
                            }
                            else {
                                doContinue = false;
                                alert('Your robot can\'t move there!');

                                services.failAttempt(self.levelSessionID(), {program:program, start: self.attemptStartTime(), end: new Date()}, function(response){
                                    self.attemptStartTime(new Date());
                                });
                            }
                            scopes[0].index++;
                        }
                        else if (instruction.instruction_id === 'pick-up-ball') {
                            if (self.currentLevel().map[nextCell.row][nextCell.column].definition === 'e') {
                                win = true;
                            }
                            else {
                                doContinue = false;
                                alert('No ball here!');

                                services.failAttempt(self.levelSessionID(), {program:program, start: self.attemptStartTime(), end: new Date()}, function(response){
                                    self.attemptStartTime(new Date());
                                });
                            }
                            scopes[0].index++;
                        }
                        else if (instruction.instruction_id === 'turn-left') {
                            switch (self.currentHeading()) {
                                case 'up':
                                    self.currentHeading('left');
                                    break;
                                case 'down':
                                    self.currentHeading('right');
                                    break;
                                case 'left':
                                    self.currentHeading('down');
                                    break;
                                case 'right':
                                    self.currentHeading('up');
                                    break;
                            }
                            scopes[0].index++;
                        }
                        else if (instruction.instruction_id === 'turn-right') {
                            switch (self.currentHeading()) {
                                case 'up':
                                    self.currentHeading('right');
                                    break;
                                case 'down':
                                    self.currentHeading('left');
                                    break;
                                case 'left':
                                    self.currentHeading('up');
                                    break;
                                case 'right':
                                    self.currentHeading('down');
                                    break;
                            }
                            scopes[0].index++;
                        }
                        else if (instruction.instruction_id === 'repeat') {
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
                        }
                        else if (instruction.instruction_id === 'repeat-while') {
                            if (typeof scopes[0].condition === 'undefined') {
                                scopes[0].condition = instruction.condition;
                            }

                            // check if we've satisfied the condition

                            var frontCellDefinition = self.currentLevel().map[nextCell.row][nextCell.column].definition;

                            if((scopes[0].condition === 'wall-not-front' && frontCellDefinition !== 'x')
                                || (scopes[0].condition === 'ball-not-front' && frontCellDefinition !== 'e'))
                            {
                                scopes[0].countRemaining--;
                                scopes.unshift({instructions: instruction.body, index: 0});
                            }
                            else {
                                // we're done, move to the next instruction.
                                scopes[0].condition = undefined;
                                scopes[0].index++;
                            }
                        }
                        else if (instruction.instruction_id.indexOf('custom-function-') === 0) {

                            if (typeof scopes[0].runningFunction === 'undefined') {
                                scopes[0].runningFunction = true;
                                scopes.unshift({instructions: instruction.definition.body, index: 0});
                            }
                            else
                            {
                                scopes[0].index++;
                                scopes[0].runningFunction = undefined;
                            }
                        }
                    }
                    
                    if (doContinue)
                    {
                        nextIteration = callback;
                        setTimeout(callback, 250);
                    }
                    else
                    {
                        self.isExecuting(false);
                    }
                };
                
                callback();
            };

            self.isExecuting = ko.observable(false);
            self.isPaused = ko.observable(false);

            self.pause = function(){
                self.isPaused(!self.isPaused());
                if(!self.isPaused() && nextIteration)
                {
                    nextIteration();
                }
            };

            self.program = ko.observableArray();

            var instructionConversion = function(element){
                var data = element.data;
                data.body = _.map(element.children, instructionConversion);
                data.definition = _.find(self.instructions, function(def){
                    return def.id === element.data.instruction_id;
                });
                return data;
            };

            // these are the simplified program elements
            self.programInstructions = ko.computed(function(){

                return _.map(self.program(), instructionConversion);
            });

            
            self.showDebug = ko.observable(false);
            self.debug = ko.computed(function () {

                var copy = ko.toJS(self);
                delete copy.debug;
                return JSON.stringify(copy, null, 2);
            });

            self.removeInstruction = function(instruction){
                self.program.remove(instruction);
            };

            self.createFunction = function(){
                self.buildingFunction(true);
            };

            self.functionTree = ko.observableArray();
            self.functionName = ko.observable();

            self.saveFunction = function(){
                self.customFunctionCount++;

                var definition = {
                    "id": "custom-function-" + self.customFunctionCount,
                    "name": self.functionName(),
                    "description": "User defined custom function",
                    "type": "baseInstruction",
                    "points": 50,
                    "body": self.functionInstructions()
                };

                self.instructions.push(definition);

                self.instructionSet.push({
                    id: "custom-function-" + self.customFunctionCount,
                    quantity: "unlimited"
                });
                self.buildingFunction(false);
                self.functionTree.removeAll();
                self.functionName(null);
            };

            // these are the simplified program elements
            self.functionInstructions = ko.computed(function(){
                return _.map(self.functionTree(), instructionConversion);
            });

            self.hasNoProgram = ko.computed(function(){
                return self.program().length === 0;
            });

            self.emptyFunction = ko.computed(function(){
                return self.functionTree().length === 0;
            });
        };
    }
);