define(['knockout', 'app/direction'], function(ko, direction){

    return function RobotViewModel(level){

        var self = this;

        self.direction = ko.observable(level.defaultHeading);
        self.storage = ko.observable(level.storageConfiguration);
        self.position = ko.observable(level.defaultPosition);

        self.getNeighborCell = function(heading){
            var position;

            switch (heading)
            {
                case direction.up:
                    position = { row: self.position().row - 1, column: self.position().column };
                    break;
                case direction.down:
                    position = { row: self.position().row + 1, column: self.position().column };
                    break;
                case direction.left:
                    position = { row: self.position().row, column: self.position().column - 1 };
                    break;
                case direction.right:
                    position = { row: self.position().row, column: self.position().column + 1 };
                    break;
            }

            return position;
        };

        self.getFrontCell = function(){
            return self.getNeighborCell(self.direction());
        };

        self.move = function(moveDirection){

            var destination = self.getNeighborCell(moveDirection);

            if (level.course.isOpenCell(destination)) {
                self.position(destination);
                return true;
            }
            else {
                return false;
            }
        };

        self.turnRight = function(){
            self.direction((self.direction() + 1) % 4);
        };

        self.turnLeft = function(){
            self.direction((self.direction() - 1) % 4);
        };

        self.pickUpItem = function(medium) {

            var itemPosition = self.getFrontCell();

            var item = level.course.retrieveItem(itemPosition);

            if(item) {
                var storage = self.storage();
                storage[medium] = item;
                self.storage(storage);
            }

            // todo: what happens if you try to store nothing?
        };

        self.dropItem = function(medium){

            var itemPosition = self.getFrontCell();

            var storage = self.storage();
            var item = storage[medium];
            delete storage[medium];
            self.storage(storage);

            if(item) {
                level.course.placeItem(item, itemPosition);
            }

            // todo: what happens if you try to place nothing?
        };

        self.reset = function(){
            self.direction(level.defaultHeading);
            self.storage(level.storageConfiguration);
            self.position(level.defaultPosition);
        };
    };

});