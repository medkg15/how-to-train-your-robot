define(['angular', 'app/angularServices', 'app/angularSetup'], function (angular, angularServices, angularSetup) {

    angular.module('robotTraining')
        .controller('InventoryCtrl', ['$scope', 'instructionOptions', 'inventory', 'program', 'helpers',
            function ($scope, instructionOptions, inventory, programService, helpers) {

                $scope.tree = 'inventory';

                $scope.canAddFunction = true;

                $scope.instructionOptions = instructionOptions();

                $scope.inventory = inventory.instructions;
                $scope.$on('instructionSetAvailable', function(event, instructions) {
                    $scope.inventory = instructions;
                });

                $scope.remove = function (scope) {
                    scope.remove();
                };

                $scope.toggle = function (scope) {
                    scope.toggle();
                };

                $scope.newSubItem = function (scope) {
                    var nodeData = scope.$modelValue;
                    nodeData.body.push({
                        id: nodeData.id * 10 + nodeData.body.length,
                        title: nodeData.title + '.' + (nodeData.body.length + 1),
                        body: []
                    });
                };

                $scope.inventoryOptions = {
                    accept: function (sourceNodeScope, destNodesScope, destIndex) {
                        if (!destNodesScope.instruction) {
                            return false;
                        }

                        if (destNodesScope.instruction.isCustomFunction || (
                            destNodesScope.$nodeScope.$parentNodeScope
                            && destNodesScope.$nodeScope.$parentNodeScope.$modelValue.isCustomFunction)) {
                            return true;
                        }

                        return false;
                    },
                    dragStart: function (event) {
                        event.elements.placeholder.replaceWith(event.elements.dragging.clone().find('li'));
                    },
                    dropped: function (e) {
                        if (e.dest.nodesScope === e.source.nodesScope && e.dest.index === e.source.index) {
                            return;
                        }
                        var instruction = e.dest.nodesScope.$modelValue[e.dest.index];
                        $scope.inventory.splice(e.source.index, 0, helpers.copyInstruction(instruction));
                    },
                    beforeDrag: function (sourceNodeScope) {

                        if (sourceNodeScope.$parentNodeScope
                            && sourceNodeScope.$parentNodeScope.$modelValue
                            && sourceNodeScope.$parentNodeScope.$modelValue.isFunction
                            && !sourceNodeScope.$parentNodeScope.$modelValue.isCustomFunction) {
                            return false;
                        }

                        return sourceNodeScope.instruction.quantity === 'unlimited'
                        || sourceNodeScope.instruction.quantity - programService.getCount(sourceNodeScope.instruction.instructionId) > 0;
                    }
                };

                $scope.addFunctionName = null;
                $scope.addFunction = function () {
                    $scope.inventory.push({
                        "instructionId": 'custom-function',
                        "title": $scope.addFunctionName,
                        "body": [],
                        "allowChildren": false,
                        "quantity": "unlimited",
                        "isFunction": true,
                        "isCustomFunction": true
                    });
                };

            }
        ])
        .
        controller('ProgramCtrl', ['$scope', 'instructionOptions', 'program',
            function ($scope, instructionOptions, programService) {

                $scope.tree = 'program';

                $scope.instructionOptions = instructionOptions();

                $scope.program = [];
                $scope.$watch('program', function (newVal, oldVal) {
                    programService.setProgram($scope.program);
                }, true);
                $scope.$on('programChanged', function(event, program) {
                    $scope.program = program;
                });

                $scope.programOptions = {
                    /*dropped: function (e) {
                     }*/
                    accept: function (sourceNodeScope, destNodesScope, destIndex) {

                        // don't allow child elements of functions to be dragged into the program tree.
                        // the full function needs to be dragged in.
                        if (sourceNodeScope.$parentNodeScope
                            && sourceNodeScope.$parentNodeScope.$modelValue
                            && sourceNodeScope.$parentNodeScope.$modelValue.isFunction
                            && destNodesScope.tree === 'program') {
                            return false;
                        }

                        if (destNodesScope.nodrop) {
                            return false;
                        }

                        return true;
                    },
                    beforeDrag: function (sourceNodeScope) {

                        // don't allow functions to be changed while in the program tree
                        if (sourceNodeScope.$parentNodeScope
                            && sourceNodeScope.$parentNodeScope.$modelValue
                            && sourceNodeScope.$parentNodeScope.$modelValue.isFunction) {
                            return false;
                        }

                        return true;
                    }
                };

            }])
        .controller('InstructionCtrl', ['$scope', 'program',
            function ($scope, programService) {
                $scope.countLabel = function (scope) {
                    return scope.instruction.count === 1 ? 'Time' : 'Times';
                };
                $scope.hasCount = function (scope) {
                    return typeof scope.instruction.count === 'number';
                };
                $scope.checkCount = function (scope) {
                    if (scope.instruction.count <= 0) {
                        scope.instruction.count = 1;
                    }
                    if (scope.instruction.count > 100) {
                        scope.instruction.count = 100;
                    }
                };
                $scope.quantityRemaining = function (scope) {
                    if (scope.instruction.quantity === "unlimited") {
                        return "unlimited";
                    }

                    var remaining = scope.instruction.quantity - programService.getCount(scope.instruction.instructionId);

                    return remaining;
                };
                $scope.canRemove = function (scope) {

                    return (scope.tree === 'program' && !(scope.$nodeScope.$parentNodeScope
                    && scope.$nodeScope.$parentNodeScope.$modelValue
                    && scope.$nodeScope.$parentNodeScope.$modelValue.isFunction))
                    ||
                    (scope.tree === 'inventory' && (scope.instruction.isCustomFunction
                    || (scope.$nodeScope.$parentNodeScope
                    && scope.$nodeScope.$parentNodeScope.$modelValue
                    && scope.$nodeScope.$parentNodeScope.$modelValue.isCustomFunction)));
                };
            }]);
});
