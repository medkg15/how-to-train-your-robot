define(['knockout', 'app/levelJumpViewModel', 'app/GameViewModel'], function(ko, LevelJumpViewModel, GameViewModel){
    return function ApplicationViewModel(){

        var self = this;

        self.currentView = ko.observable('home');
        self.bodyClass = ko.observable('space');
        self.showDebug = ko.observable(false);
        self.levelJump = new LevelJumpViewModel(self);
        self.game = ko.observable();

        self.showHome = function(){
            self.currentView('home');
        };
        self.showAbout = function(){
            self.currentView('about');
        };
        self.showHighScores = function(){
            self.currentView('high-scores');
        };
        self.showLevelJump = function(){
            self.currentView('level-jump');
        };
        self.startGame = function(jumpLevel){

            // if we are starting the game because of a level jump, go straight to that level
            // knockout "click" bindings pass the view model as a parameter, so check for that special case.
            if (jumpLevel && jumpLevel != self) {
                self.currentView('game');
                self.game(new GameViewModel(jumpLevel));
            }
            // see if we're already on the first story page ...
            else if(self.currentView() === 'game-intro') {
                self.currentView('game');
                self.game(new GameViewModel());
            }
            // otherwise go to the story page.
            else {
                self.currentView('game-intro');
            }
        };

        self.debug = ko.computed(function () {

            var copy = ko.toJS(self);
            delete copy.debug;
            return JSON.stringify(copy, null, 2);
        });
    };
});