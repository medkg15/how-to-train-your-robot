angular.module('robotTraining')
    .factory('storageOptions', [function () {

    }])
    .factory('instructionOptions', [function () {
        var options = {
            condition: [
                {label: 'Wall Not In Front', "conditionId": 'wall-not-in-front'},
                {label: 'Part Not In Front', "conditionId": 'part-not-in-front'}
            ],
            storage: [
                {label: 'Left Hand', register: 'left'},
                {label: 'Right Hand', register: 'right'}
            ]
        };

        return function () {
            return options;
        };
    }])
    .factory('program', [function () {

        var countUsages = function (id, programScope) {
            var counts = _.map(programScope, function (programInstruction) {
                var count = 0;
                if (programInstruction.instructionId === id) {
                    count++;
                }

                if (programInstruction.body.length > 0) {
                    count += countUsages(id, programInstruction.body);
                }

                return count;
            });

            return _.reduce(counts, function (memo, num) {
                return memo + num;
            }, 0);
        };

        return {
            program: [],
            getCount: function (instructionId) {
                return countUsages(instructionId, this.program);
            }
        };
    }])
    .factory('helpers', [function () {

        var copyInstruction = function (instruction) {
            return {
                "instructionId": instruction.instructionId,
                "title": instruction.title,
                "body": _.map(instruction.body, copyInstruction),
                "register": instruction.register,
                "condition": instruction.condition,
                "allowChildren": instruction.allowChildren,
                "count": instruction.count,
                "quantity": instruction.quantity,
                "isFunction": instruction.isFunction,
                "isCustomFunction": instruction.isCustomFunction
            }
        };

        return {
            copyInstruction: copyInstruction
        };
    }])
    .factory('inventory', ['instructionOptions', 'helpers', function (instructionOptions, helpers) {
        return function () {

            var options = instructionOptions();

            var instructionSet = [
                {
                    "instructionId": "step-forward",
                    "title": "Step Forward",
                    "body": [],
                    "allowChildren": false,
                    "quantity": "unlimited",
                    "isFunction": false,
                    "isCustomFunction": false
                },
                {
                    "instructionId": "turn-right",
                    "title": "Turn Right",
                    "body": [],
                    "allowChildren": false,
                    "quantity": 2,
                    "isFunction": false,
                    "isCustomFunction": false
                },
                {
                    "instructionId": "turn-left",
                    "title": "Turn Left",
                    "body": [],
                    "allowChildren": false,
                    "quantity": 3,
                    "isFunction": false,
                    "isCustomFunction": false
                },
                {
                    "instructionId": "pick-up-with",
                    "title": "Pick Up With",
                    "register": options.storage[0],
                    "body": [],
                    "allowChildren": false,
                    "quantity": "unlimited",
                    "isFunction": false,
                    "isCustomFunction": false
                },
                {
                    "instructionId": "put-down-from",
                    "title": "Put Down From",
                    "register": options.storage[0],
                    "body": [],
                    "allowChildren": false,
                    "quantity": "unlimited",
                    "isFunction": false,
                    "isCustomFunction": false
                },
                {
                    "instructionId": "repeat",
                    "title": "Repeat",
                    "body": [],
                    "allowChildren": true,
                    "count": 1,
                    "quantity": "unlimited",
                    "isFunction": false,
                    "isCustomFunction": false
                },
                {
                    "instructionId": "repeat-while",
                    "title": "Repeat While",
                    "body": [],
                    "allowChildren": true,
                    "condition": options.condition[0],
                    "quantity": "unlimited",
                    "isFunction": false,
                    "isCustomFunction": false
                },
                {
                    "instructionId": "go-right-around-obstacle",
                    "title": "Go Right Around Obstacle",
                    "body": [
                        "step-forward",
                        "turn-right",
                        "step-forward",
                        "turn-left"
                    ],
                    "allowChildren": false,
                    "quantity": "unlimited",
                    "isFunction": true,
                    "isCustomFunction": false
                }
            ];

            for (var i = 0; i < instructionSet.length; i++) {
                for (var j = 0; j < instructionSet[i].body.length; j++) {
                    instructionSet[i].body[j] = helpers.copyInstruction(_.find(instructionSet, function (instruction) {
                        return instruction.instructionId === instructionSet[i].body[j];
                    }));
                }
            }

            return instructionSet;
        };
    }]);