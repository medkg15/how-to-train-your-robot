define(['knockout', 'data/levels', 'app/levelViewModel', 'underscore'], function(ko, levels, LevelViewModel, _){
    return function GameViewModel(levelJumpedTo){
        var self = this;

        var currentLevelData = levelJumpedTo ? levelJumpedTo : levels[0];

        self.currentLevel = ko.observable(new LevelViewModel(self, currentLevelData));
        self.score = ko.observable(0);

        self.advanceNextLevel = function(){

            var ids = _.pluck(levels, 'id');

            var index = ids.indexOf(currentLevelData.id);

            if (index + 1 < ids.length) {
                currentLevelData = levels[index + 1];
                self.currentLevel(new LevelViewModel(self, currentLevelData));
            }
        };
    };
});