define(['knockout', 'data/levels', 'underscore'], function(ko, levels, _){
    return function LevelJumpViewModel(application){
        var self = this;
        self.jumpCode = ko.observable();
        self.message = ko.observable();
        self.jumpToLevel = function(){

            self.message(undefined);

            var code = self.jumpCode();

            var match = _.find(levels, function(level){
                return level.jumpCode === code;
            });

            if (!match){
                self.message('Your level jump code isn\'t right.  Please try again.');
                return;
            }

            self.jumpCode(undefined);
            application.startGame(match);
        };
    };
});