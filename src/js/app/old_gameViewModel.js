define(
    ['knockout', 'underscore', 'data/levels', 'data/instructions', 'bindings/programTree', 'bindings/inventoryTree', 'bootstrap', 'app/scoreCalculator', 'bindings/trashTree', 'app/eventRepository'],
    function (ko, _, levels, instructions, programTree, inventoryTree, bootstrap, ScoreCalculator, trashTree, EventRepository) {

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

            var eventRepository = new EventRepository();

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
            self.levelAttempts = ko.observable(0);
            self.buildingFunction = ko.observable(false);
            self.instructionSet = ko.observableArray();
            self.customFunctionCount = 0;

            self.startGame = function(){
                eventRepository.startGame(function(response){
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

                eventRepository.startGame(function(response){
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
                self.storyModal(level.intro);
                $('#story-modal').modal('show');
                self.levelAttempts(0);
                self.instructionSet(level.instructions);
                self.customFunctionCount = 0;
            };

            self.returnHome = function () {
                self.currentView('welcome');
                self.currentLevel(null);
                self.program([]);
                self.currentPosition(null);
                self.currentHeading(null);
            };

            self.addInstruction = function (instruction) {
                self.program.push(instruction);
            };
            
            self.clearProgram = function () {
            
                self.program.removeAll();
            };
            
            self.execute = function (instruction) {
                if (win) {

                    var scoreCalculator = new ScoreCalculator();
                    var score = scoreCalculator.calculate(program, self.levelAttempts());
                    self.score(self.score() + score);

                    var $storyModal = $('#story-modal');
                    self.storyModal(self.currentLevel().exit);
                    $storyModal.modal('show');
                    $storyModal.on('click', 'button', function(e){
                        $storyModal.off('click', 'button');

                        services.completeLevel(self.gameId(), self.currentLevel().id, program, self.levelStartDate(), new Date(), function(response){

                            var level = self.currentLevel();

                            if (levelViewModels[levelViewModels.length-1] === level) {
                                eventRepository.completeGame(self.gameId(), function(){
                                    alert('Game over! You win.');
                                });
                            }
                            else {

                                self.selectLevel(levelViewModels[levelViewModels.indexOf(level) + 1]);
                            }
                        });
                    });
                }
                else {
                    alert('The program didn\'t work!');

                    self.currentPosition(self.currentLevel().startPosition);
                    self.currentHeading(self.currentLevel().defaultHeading);

                    //Antony:  This is a failed attempt - Recording it - 10/22/2014
                    services.failLevel(self.gameId(), self.currentLevel().id, program, self.levelStartDate(), new Date(), function(response){

                        var level = self.currentLevel();


                    });
                }
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



        };
    }
);