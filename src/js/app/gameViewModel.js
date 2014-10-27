define(
    ['knockout', 'underscore', 'data/levels', 'data/instructions', 'bindings/programTree', 'bindings/inventoryTree', 'app/services', 'bootstrap'],
    function (ko, _, levels, instructions, programTree, inventoryTree, services, bootstrap) {

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
            self.levelStartDate = ko.observable();
            self.bodyClass = ko.observable('space');
            self.jumpCode = ko.observable();
            self.storyModal = ko.observable();

            self.startGame = function(){
                services.startGame(function(response){
                    self.gameId(response.id);
                    self.changeView('robot-story');
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
                self.currentLevel(level);
                self.currentView('build-program');
                self.currentPosition(level.startPosition);
                self.currentHeading(level.defaultHeading);
                self.levelStartDate(new Date());
                self.program([]);
                self.bodyClass(level.environment);
                $('#story-modal').modal('show');
                self.storyModal(level.intro);
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

                return _.map(level.instructions, function (instruction) {

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
                            instruction_id: instruction.id
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

                            var $storyModal = $('#story-modal');
                            $storyModal.modal('show');
                            self.storyModal(self.currentLevel().exit);
                            $storyModal.on('click', 'button', function(e){
                                services.completeLevel(self.gameId(), self.currentLevel().id, program, self.levelStartDate(), new Date(), function(response){

                                    var level = self.currentLevel();

                                    if (levelViewModels[levelViewModels.length-1] === level) {
                                        alert('Game over! You win.');
                                    }
                                    else {
                                        self.selectLevel(levelViewModels[levelViewModels.indexOf(level) + 1]);
                                    }
                                });
                            });
                        }
                        else {
                            alert('The program didn\'t work!');

                            //Antony:  This is a failed attempt - Recording it - 10/22/2014
                            services.failLevel(self.gameId(), self.currentLevel().id, program, self.levelStartDate(), new Date(), function(response){

                                var level = self.currentLevel();


                            });
                        }
                        doContinue = false;
                    }

                    
                    var instruction = scopes[0].instructions[scopes[0].index];

                    if(!instruction)
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

                                //Antony:  This is a failed attempt - Recording it - 10/22/2014
                                services.failLevel(self.gameId(), self.currentLevel().id, program, self.levelStartDate(), new Date(), function(response){

                                    var level = self.currentLevel();


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

                                //Antony:  This is a failed attempt - Recording it - 10/22/2014
                                services.failLevel(self.gameId(), self.currentLevel().id, program, self.levelStartDate(), new Date(), function(response){

                                    var level = self.currentLevel();


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

            // these are the simplified program elements
            self.programInstructions = ko.computed(function(){

                var conversion = function(element){
                    var data = element.data;
                    data.body = _.map(element.children, conversion);
                    return data;
                };

                return _.map(self.program(), conversion);
            });

            self.hasNoProgram = ko.computed(function(){
                return self.program().length === 0;
            });
            
            self.showDebug = ko.observable(false);
            self.debug = ko.computed(function () {

                var copy = ko.toJS(self);
                delete copy.debug;
                return JSON.stringify(copy, null, 2);
            });
        };
    }
);