define(
    ['knockout', 'underscore', 'data/levels', 'data/instructions', 'knockout-sortable'],
    function (ko, _, levels, instructions) {

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
            var self = this;
            self.score = ko.observable(0);
            self.currentView = ko.observable('welcome');
            self.currentLevel = ko.observable();
            self.currentPosition = ko.observable();
            self.currentHeading = ko.observable();
            
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
            
            self.levels = fixLevels(levels);                   
            
            self.instructions = instructions;

            self.selectLevel = function (level) {
                self.currentLevel(level);
                self.currentView('build-program');
                self.currentPosition(level.startPosition);
                self.currentHeading(level.defaultHeading);
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

            self.addInstruction = function (instruction) {
                self.program.push(instruction);
            };
            
            self.clearProgram = function () {
            
                self.program.removeAll();
            };
            
            self.execute = function (instruction) {
                self.currentPosition(self.currentLevel().startPosition);
                self.currentHeading(self.currentLevel().defaultHeading);
                
                var index = 0;
                var win = false;
                var doContinue = true;
                
                var callback;
                callback = function (){
                
                    if (index >= self.program().length)
                    {
                        if(win)
                        {
                            alert('Good job!  You got the ball!');
                        }
                        else
                        {
                            alert('The program didn\'t work!');
                        }
                    }
                    
                    var instruction = self.program()[index++];
                    
                    var targetCell;
                    
                    switch(self.currentHeading())
                    {
                        case 'up': 
                            targetCell = { 
                                column: self.currentPosition().column,
                                row: self.currentPosition().row - 1
                            };
                            break;
                        case 'down': 
                            targetCell = { 
                                column: self.currentPosition().column,
                                row: self.currentPosition().row + 1
                            };
                            break;
                        case 'left': 
                            targetCell = { 
                                column: self.currentPosition().column - 1,
                                row: self.currentPosition().row
                            };
                            break;
                        case 'right':
                            targetCell = { 
                                column: self.currentPosition().column + 1,
                                row: self.currentPosition().row
                            };
                            break;
                    }
                    
                    if (instruction.id === 'step-forward')
                    {
                        
                        if (self.currentLevel().map[targetCell.row][targetCell.column].definition === ' ')
                        {
                            self.currentPosition(targetCell);
                        }
                        else
                        {
                            doContinue = false;
                            alert('Your robot can\'t move there!');
                        }
                    }
                    else if (instruction.id === 'pick-up-ball')
                    {
                        if (self.currentLevel().map[targetCell.row][targetCell.column].definition === 'e')
                        {
                            win = true;
                        }
                        else
                        {
                            doContinue = false;
                            alert('No ball here!');
                        }
                    }
                    else if (instruction.id === 'turn-left')
                    {
                        switch(self.currentHeading())
                        {
                            case 'up': 
                                self.currentHeading('left')
                                break;
                            case 'down': 
                                self.currentHeading('right')
                                break;
                            case 'left': 
                                self.currentHeading('down')
                                break;
                            case 'right':
                                self.currentHeading('up')
                                break;
                        }
                    }
                    else if (instruction.id === 'turn-right')
                    {
                        switch(self.currentHeading())
                        {
                            case 'up': 
                                self.currentHeading('right')
                                break;
                            case 'down': 
                                self.currentHeading('left')
                                break;
                            case 'left': 
                                self.currentHeading('up')
                                break;
                            case 'right':
                                self.currentHeading('down')
                                break;
                        }
                    }
                    
                    if (doContinue)
                    {
                        setTimeout(callback, 1000);
                    }
                };
                
                callback();
                
                
            };

            self.program = ko.observableArray();
            
            self.showDebug = ko.observable(false);
            self.debug = ko.computed(function () {

                var copy = ko.toJS(self);
                delete copy.debug;
                return JSON.stringify(copy, null, 2);
            });
        };
    }
);