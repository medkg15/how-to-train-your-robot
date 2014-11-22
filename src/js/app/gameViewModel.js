define(
    ['knockout', 'underscore', 'data/levels', 'data/instructions', 'bindings/programTree', 'bindings/inventoryTree', 'app/services', 'bootstrap', 'app/scoreCalculator', 'bindings/personaDialog', 'app/statusViewModel', 'app/environmentViewModel'],
    function (ko, _, levels, instructions, programTree, inventoryTree, services, bootstrap, ScoreCalculator, personaDialog, StatusViewModel, EnvironmentViewModel) {

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
            self.personaText = ko.observable();
            self.levelAttempts = ko.observable(0);
            self.buildingFunction = ko.observable(false);
            self.instructionSet = ko.observableArray();
            self.customFunctionCount = 0;
            self.canAdvance = ko.observable(false);
            self.levelSessionID = ko.observable();
            self.usedHelp = ko.observable(false);
            self.usedDebugger = ko.observable(false);
            self.hasError = ko.observable(false);
            self.levelScore = ko.observable(0);
            self.gameOver = ko.observable(false);
            self.debuggerAvailable = ko.observable(false);
            self.highScores = ko.observableArray();
            self.loadingHighScores = ko.observable(false);
            self.status = new StatusViewModel();
            self.environment = new EnvironmentViewModel(self);
            self.introStoryText = ko.observable("<p>One day Robo was discovering the world with his spaceship.     </p><p>      Unfortunately, the spaceship exploded in space and tore apart in many lands. In this game you will be introduced to different programming concepts as you help Robo collect the parts of his spaceship from the different environments.</p> ");

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

            self.showHelp = function(){
                self.personaText(self.currentLevel().help);
                self.usedHelp(true);
            };

            self.startFirstLevel = function(){
                self.selectLevel(levelViewModels[0]);
            };

            self.changeView = function(view){
                if(view === 'high-scores'){
                    self.loadHighScores();
                };
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

                var level = _.find(levelViewModels, function(level){
                    return level.jumpCode == self.jumpCode();
                });

                if(!level) {
                    return;
                }

                services.startGame(function(response){
                    self.gameId(response.id);

                    self.selectLevel(level);
                });
            };

            self.levels = levelViewModels;
            
            self.instructions = instructions;

            self.selectLevel = function (level) {

                services.startLevel(self.gameId(), level.id, function(response){

                    nextIteration = null;
                    self.levelSessionID(response.session_level_id);
                    self.currentLevel(level);
                    self.currentView('build-program');
                    self.currentPosition(level.startPosition);
                    self.currentHeading(level.defaultHeading);
                    self.attemptStartTime(new Date());
                    self.program([]);
                    self.bodyClass(level.environment);
                    self.personaText(level.intro);
                    self.levelAttempts(0);
                    self.instructionSet(level.instructions);
                    self.customFunctionCount = 0;
                    self.canAdvance(false);
                    self.usedHelp(false);
                    self.usedDebugger(false);
                    self.hasError(false);
                    self.levelScore(0);
                    self.gameOver(false);
                    self.debuggerAvailable(level.debuggerAvailable);
                    self.status.reset();
                });
            };

            self.customFunctionAvailable = ko.computed(function(){
                return self.currentLevel() && self.currentLevel().customFunctionAvailable;
            });

            self.runAvailable = ko.computed(function(){
                return self.currentLevel() && self.currentLevel().runAvailable;
            });

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

                var inventory = _.map(self.instructionSet(), function (instruction) {

                    var currentProgram = self.programInstructions();

                    var countUsages = function(programScope){
                        var counts = _.map(programScope, function(programInstruction){
                            var count = 0;
                            if(programInstruction.instruction_id === instruction.id)
                            {
                                count++;
                            }

                            if(programInstruction.body.length > 0){
                                count += countUsages(programInstruction.body);
                            }

                            if(programInstruction.definition.body && programInstruction.definition.body.length > 0)
                            {
                                count += countUsages(programInstruction.definition.body);
                            }

                            return count;
                        });

                        return _.reduce(counts, function(memo, num){ return memo + num; }, 0);
                    };

                    var usedCount = countUsages(currentProgram);
                    var remaining = instruction.quantity - usedCount;

                    var definition = _.find(self.instructions, function (def) {
                        return def.id === instruction.id;
                    });

                    return {
                        id: instruction.id,
                        definition: definition,
                        name: definition.name,
                        description: definition.description,
                        quantity: instruction.quantity === 'unlimited' ? 'unlimited' : remaining > 0 ? remaining : 0
                    };

                });

                return _.filter(inventory, function(inst){
                    return inst;
                });
            });

            self.treeAvailableInstructions = ko.computed(function(){

                return _.map(self.instructionInventory(), function(instruction){

                    var name = instruction.name;
                    if(instruction.quantity != 'unlimited')
                    {
                        name += ' : ' + instruction.quantity + ' remaining';
                    }

                    return {
                        text: name, // node text
                        //icon: "string", // string for custom
                        state: {
                            opened: false,
                            disabled: instruction.quantity == 0,
                            selected: false
                        },
                        children: [],  // array of strings or objects
                        li_attr: {},  // attributes for the generated LI node
                        a_attr: {},  // attributes for the generated A node
                        type: instruction.definition.type,
                        instructionId: instruction.id,
                        data: {
                            instruction_id: instruction.id,
                            definition: instruction.definition
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

            // terminate the currently executing program.
            self.stop = function(){

                self.attemptStartTime(new Date());

                self.currentPosition(self.currentLevel().startPosition);
                self.currentHeading(self.currentLevel().defaultHeading);

                nextIteration = undefined;
                self.isPaused(false);
                self.isExecuting(false);
                self.hasError(false);
                self.status.reset();

                $('.current-instruction').popover('destroy').removeClass('current-instruction');
            };

            var onAttemptFailed = function(message, program, instruction){

                self.hasError(true);

                var element = $('#' + instruction.elementID);

                element.popover({
                    content: message,
                    html: true,
                    placement: 'left',
                    title: 'Program Error!',
                    trigger: 'manual focus'
                }).popover('show');

                services.failAttempt(self.levelSessionID(), {program:program, start: self.attemptStartTime(), end: new Date()}, function(response){

                    self.attemptStartTime(new Date());

                    var attempts = self.levelAttempts();

                    if(attempts == 3 || attempts == 6 || attempts == 10)
                    {
                        self.personaText(self.currentLevel().help);
                    }
                });

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

                    $('.current-instruction').removeClass('current-instruction');

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

                            var scoreCalculator = new ScoreCalculator(self.currentLevel());
                            var score = scoreCalculator.calculate(program, self.levelAttempts(), self.usedHelp());
                            self.levelScore(score);
                            self.score(self.score() + score.finalScore);

                            services.completeLevel(self.levelSessionID(), { program: program, start: self.attemptStartTime(), end: new Date(), usedHelp: self.usedHelp(), usedDebugger: self.usedDebugger() }, self.score(), function(response){

                                var level = self.currentLevel();

                                if (levelViewModels[levelViewModels.length-1] === level) {

                                    self.gameOver(true);
                                    services.completeGame(self.gameId(), function(){

                                    });
                                }
                                else {

                                    self.canAdvance(true);
                                }

                                self.personaText(self.currentLevel().exit);
                            });
                        }
                        else {
                            $('#' + program[program.length - 1].elementID).addClass('current-instruction');
                            onAttemptFailed('The robot failed to complete the goal!', program, program[program.length - 1]);
                        }
                        doContinue = false;
                    }

                    
                    var instruction = scopes[0].instructions[scopes[0].index];

                    if (!instruction)
                    {
                        doContinue = false;
                    }
                    else {

                        $('#' + instruction.elementID).addClass('current-instruction');

                        if (instruction.instruction_id === 'step-forward') {

                            if (self.environment.frontCellDefinition() === ' ') {
                                self.currentPosition(self.environment.frontCell());
                            }
                            else {
                                doContinue = false;
                                onAttemptFailed('Your robot can\'t move there!', program, instruction);
                            }
                            scopes[0].index++;
                        }
                        else if (instruction.instruction_id === 'pick-up-ball') {
                            if (self.environment.frontCellDefinition() === 'e') {
                                win = true;
                            }
                            else {
                                doContinue = false;

                                onAttemptFailed('No ball to pick up!', program, instruction);
                            }
                            scopes[0].index++;
                        }
                        else if (instruction.instruction_id === 'shuffle-right') {

                            if (self.environment.rightCellDefinition() === ' ') {
                                self.currentPosition(self.environment.rightCell());
                            }
                            else {
                                doContinue = false;
                                onAttemptFailed('Your robot can\'t move there!', program, instruction);
                            }
                            scopes[0].index++;
                        }
                        else if (instruction.instruction_id === 'shuffle-left') {

                            if (self.environment.leftCellDefinition() === ' ') {
                                self.currentPosition(self.environment.leftCell());
                            }
                            else {
                                doContinue = false;
                                onAttemptFailed('Your robot can\'t move there!', program, instruction);
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

                            if((scopes[0].condition === 'wall-not-front' && self.environment.frontCellDefinition() !== 'x')
                                || (scopes[0].condition === 'ball-not-front' && self.environment.frontCellDefinition() !== 'e'))
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

                        // update our status object to see what's going on ...
                        self.status.currentInstruction(instruction);
                        self.status.direction(self.currentHeading());
                        self.status.hasBall(win);
                        self.status.wallInFront(self.environment.frontCellDefinition() === 'x');
                        self.status.ballInFront(self.environment.frontCellDefinition() === 'e');
                        self.status.countRemaining(typeof scopes[0].countRemaining === 'undefined' ? null : scopes[0].countRemaining);
                    }
                    
                    if (doContinue)
                    {
                        nextIteration = callback;
                        setTimeout(callback, 250);
                    }
                    else
                    {
                        if(!self.hasError()) {
                            self.isExecuting(false);
                        }
                    }
                };
                
                callback();
            };

            self.isExecuting = ko.observable(false);
            self.isPaused = ko.observable(false);

            self.executeOnce = function(){
                self.usedDebugger(true);
                if(nextIteration)
                {
                    self.isPaused(false);
                    nextIteration();
                    self.isPaused(true);
                }
                else
                {
                    self.execute();
                    self.isPaused(true);
                }
            };

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
                data.elementID = element.li_attr.id;
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

            self.loadHighScores = function(){
                self.loadingHighScores(true);
                services.getHighScores(function(highScores){
                    self.loadingHighScores(false);
                    self.highScores(highScores);
                });
            };
        };
    }
);