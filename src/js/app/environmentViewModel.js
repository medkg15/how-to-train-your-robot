define(['knockout'], function(ko){
    return function EnvironmentViewModel(game){
        var self = this;

        self.frontCell = ko.observable();
        self.rightCell = ko.observable();
        self.leftCell = ko.observable();


        self.frontCellDefinition = ko.computed(function(){
            if(!game.currentLevel() || !self.frontCell())
            {
                return null;
            }
            return game.currentLevel().map[self.frontCell().row][self.frontCell().column].definition;
        });

        self.rightCellDefinition = ko.computed(function(){
            if(!game.currentLevel() || !self.rightCell())
            {
                return null;
            }
            return game.currentLevel().map[self.rightCell().row][self.rightCell().column].definition;
        });

        self.leftCellDefinition = ko.computed(function(){
            if(!game.currentLevel() || !self.leftCell())
            {
                return null;
            }
            return game.currentLevel().map[self.leftCell().row][self.leftCell().column].definition;
        });

        // subscription bound to multiple observables
        // http://stackoverflow.com/questions/9278497/knockoutjs-subscribe-to-multiple-observables-with-same-callback-action
        ko.computed(function(){

            var frontCell, rightCell, leftCell;

            switch (game.currentHeading()) {
                case 'up':
                    frontCell = {
                        column: game.currentPosition().column,
                        row: game.currentPosition().row - 1
                    };
                    rightCell = {
                        column: game.currentPosition().column + 1,
                        row: game.currentPosition().row
                    };
                    leftCell = {
                        column: game.currentPosition().column - 1,
                        row: game.currentPosition().row
                    };
                    break;
                case 'down':
                    frontCell = {
                        column: game.currentPosition().column,
                        row: game.currentPosition().row + 1
                    };
                    rightCell = {
                        column: game.currentPosition().column - 1,
                        row: game.currentPosition().row
                    };
                    leftCell = {
                        column: game.currentPosition().column + 1,
                        row: game.currentPosition().row
                    };
                    break;
                case 'left':
                    frontCell = {
                        column: game.currentPosition().column - 1,
                        row: game.currentPosition().row
                    };
                    rightCell = {
                        column: game.currentPosition().column,
                        row: game.currentPosition().row - 1
                    };
                    leftCell = {
                        column: game.currentPosition().column,
                        row: game.currentPosition().row + 1
                    };
                    break;
                case 'right':
                    frontCell = {
                        column: game.currentPosition().column + 1,
                        row: game.currentPosition().row
                    };
                    rightCell = {
                        column: game.currentPosition().column,
                        row: game.currentPosition().row + 1
                    };
                    leftCell = {
                        column: game.currentPosition().column,
                        row: game.currentPosition().row - 1
                    };
                    break;
            }

            self.frontCell(frontCell);
            self.rightCell(rightCell);
            self.leftCell(leftCell);
        });
    };
});