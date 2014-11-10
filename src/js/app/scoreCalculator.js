define(['data/instructions', 'underscore'], function(instructions, _){

    return function ScoreCalculator(){

        var calcScope = function(scope){
            var sum = 0;
            for (var i in scope) {

                if (!scope.hasOwnProperty(i)) {
                    continue;
                }

                var instruction = scope[i];
                var instructionID = instruction.instruction_id;

                var definition = _.find(instructions, function(inst){
                    return inst.id === instructionID;
                });

                sum += definition.points;

                if(instruction.body && instruction.body.length > 0) {
                    sum += calcScope(instruction.body);
                }
            }
            return sum;
        };

        this.calculate = function(program, attempts, usedHelp){

            var rawScore = calcScope(program);

            var multiplier;
            if(attempts === 1){
                multiplier = 1.5;
            }
            else if(attempts < 3){
                multiplier = 1.0;
            }
            else if(attempts < 5){
                multiplier = 0.75;
            }
            else {
                multiplier = 0.5;
            }

            return rawScore * multiplier * (usedHelp ? 1 : 1.25);
        };

    };

});