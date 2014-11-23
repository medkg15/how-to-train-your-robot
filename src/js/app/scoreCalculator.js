define(['data/instructions', 'underscore'], function(instructions, _){

    return function ScoreCalculator(level){

        /**
         * Calculates the score associated with a particular program scope.
         * @param scope
         * @returns {{count: number, sum: number}}
         */
        var calculateScopeScore = function(scope){
            var result = { count: 0, sum: 0 };
            for (var i in scope) {

                if (!scope.hasOwnProperty(i)) {
                    continue;
                }

                var instruction = scope[i];
                var instructionID = instruction.id;

                var definition = _.find(instructions, function(inst){
                    return inst.id === instructionID;
                });

                result.sum += definition.points;
                result.count++;

                if(instruction.body && instruction.body.length > 0) {
                    var innerResult = calculateScopeScore(instruction.body);
                    result.sum += innerResult.sum;
                    result.count += innerResult.count;
                }
            }
            return result;
        };

        /**
         * Return an object detailing the user's score for a level.
         * @param program The program used to complete the level.
         * @param attempts The number of attempts needed to complete the level.
         * @param usedHelp Whether or not the Persona Help was used to complete the level.
         */
        this.calculate = function(program, attempts, usedHelp){

            var programScore = calculateScopeScore(program);

            var efficiencyMultiplier = level.perfectInstructionCount / programScore.count;

            var attemptsMultiplier;
            if(attempts === 1){
                attemptsMultiplier = 2.0;
            }
            else if(attempts < 3){
                attemptsMultiplier = 1.5;
            }
            else if(attempts < 5){
                attemptsMultiplier = 1.25;
            }
            else {
                attemptsMultiplier = 1.0;
            }

            var usedHelpMultiplier = (usedHelp ? 1 : 1.25);

            var finalScore = Math.round(programScore.sum * efficiencyMultiplier * attemptsMultiplier * usedHelpMultiplier);

            return {
                programScore: programScore,
                efficiency: efficiencyMultiplier,
                usedHelp: usedHelp,
                finalScore: finalScore,
                attempts: attempts
            };
        };
    };
});