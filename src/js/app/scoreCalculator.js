define(['data/instructions', 'underscore'], function(instructions, _){

    return function ScoreCalculator(level){

        var calcScope = function(scope){
            var result = { count: 0, sum: 0 };
            for (var i in scope) {

                if (!scope.hasOwnProperty(i)) {
                    continue;
                }

                var instruction = scope[i];
                var instructionID = instruction.instruction_id;

                var definition = _.find(instructions, function(inst){
                    return inst.id === instructionID;
                });

                result.sum += definition.points;
                result.count++;

                if(instruction.body && instruction.body.length > 0) {
                    var innerResult = calcScope(instruction.body);
                    result.sum += innerResult.sum;
                    result.count += innerResult.count;
                }
            }
            return result;
        };

        this.calculate = function(program, attempts, usedHelp){

            var result = calcScope(program);

            var efficiencyMultiplier = level.perfectInstructionCount / result.count;

            var attemptsMultiplier;
            if(attempts === 1){
                attemptsMultiplier = 1.5;
            }
            else if(attempts < 3){
                attemptsMultiplier = 1.0;
            }
            else if(attempts < 5){
                attemptsMultiplier = 0.75;
            }
            else {
                attemptsMultiplier = 0.5;
            }

            var usedHelpMultiplier = (usedHelp ? 1 : 1.25);

            return (result.sum * efficiencyMultiplier * attemptsMultiplier * usedHelpMultiplier).toFixed(0);
        };

    };

});