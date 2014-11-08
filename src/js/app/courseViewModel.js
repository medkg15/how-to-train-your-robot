define(['knockout', 'app/direction'], function(ko, direction){
    return function CourseViewModel(level, map){

        var self = this;

        self.map = ko.observable(_.map(map, function(row, rowContext){
            return _.map(row, function(column, columnContext){
                return {
                    columnIndex: columnContext,
                    rowIndex: rowContext,
                    definition: column
                };
            });
        }));

        self.isOpenCell = function(position){
            return true;
        };

        self.placeItem = function(item, position) {

        };

        self.retrieveItem = function(position) {

        };

        self.cell = function(position){
            return self.map()[position.row][position.column];
        };

        self.cellClass = function(cell){

            if(cell.columnIndex === level.robot.position().column && cell.rowIndex === level.robot.position().row)
            {
                switch(level.robot.direction())
                {
                    case direction.up:
                        return "robot-up";
                    case direction.left:
                        return "robot-left";
                    case direction.down:
                        return "robot-down";
                    case direction.right:
                        return "robot-right";
                }
            }
            else
            {
                switch(cell.definition){
                    case " ":
                        return "";
                    case "x":
                        return "wall";
                    case "e":
                        return "goal";
                }
            }
        };
    };
});