define(['angular', 'underscore', 'app/angularSetup'], function (angular, _, angularSetup) {

    angular.module('robotTraining')
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
        .factory('program', ['$rootScope', function ($rootScope) {

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
                callback: null,
                program: [],
                getCount: function (instructionId) {
                    return countUsages(instructionId, this.program);
                },
                subscribe: function (callback) {
                    this.callback = callback;
                },
                setProgram: function (program, broadcast) {
                    this.program = program;

                    if (broadcast) {
                        $rootScope.$broadcast('programChanged', this.program);
                    }
                    else if (this.callback) {
                        this.callback(this.program);
                    }
                }
            };
        }])
        .factory('helpers', [function () {

            var count = 1;

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
                    "isCustomFunction": instruction.isCustomFunction,
                    "knockoutVersion": instruction.knockoutVersion,
                    "uniqueId": count++
                }
            };

            return {
                copyInstruction: copyInstruction
            };
        }])
        .factory('inventory', ['$rootScope', 'instructionOptions', 'helpers', function ($rootScope, instructionOptions, helpers) {

            var options = instructionOptions();

            return {
                instructions: [],
                setInstructions: function (instructionSet) {

                    for (var i = 0; i < instructionSet.length; i++) {
                        for (var j = 0; j < instructionSet[i].body.length; j++) {
                            instructionSet[i].body[j] = helpers.copyInstruction(_.find(instructionSet, function (instruction) {
                                return instruction.instructionId === instructionSet[i].body[j];
                            }));
                        }
                    }

                    this.instructions = instructionSet;
                    $rootScope.$broadcast('instructionSetAvailable', this.instructions);
                }
            };
        }]);
});