(function () {
    'use strict';

    angular.module('robotTraining', ['ui.tree'])
        .controller('InventoryCtrl', ['$scope', 'storageOptions', 'inventory',
            function ($scope, storageOptions, inventory) {

                $scope.tree = 'inventory';

                $scope.storageOptions = storageOptions();

                $scope.inventory = {
                    instructions: inventory()
                };

                $scope.remove = function (scope) {
                    scope.remove();
                };

                $scope.toggle = function (scope) {
                    scope.toggle();
                };

                var count = 1;

                $scope.inventoryOptions = {
                    // Check if the current dragging node can be dropped in the ui-tree-nodes.
                    accept: function (sourceNodeScope, destNodesScope, destIndex) {
                        return false;
                    },
                    // Check if the current selected node can be dragged.
                    beforeDrag: function (sourceNodeScope) {
                        return true;
                    },
                    // If a node moves it's position after dropped, the nodeDropped callback will be called.
                    dropped: function (e) {
                    },
                    // dragStart(event)
                    dragStart: function (event) {
                        event.elements.placeholder.replaceWith(event.elements.dragging.clone().find('li'));
                    },
                    // dragStop(event)
                    dragStop: function (e) {
                        if (e.dest.nodesScope.tree === 'inventory') {
                            return;
                        }

                        var instruction = e.dest.nodesScope.$modelValue[e.dest.index];
                        instruction = $.extend({}, instruction);
                        instruction.programInstructionId = instruction.id + "-" + count++;
                        instruction.body = [];
                        $scope.inventory.instructions.splice(e.source.index, 0, instruction);
                    },
                    // dragMove(event)
                    dragMove: function (e) {

                    },
                    // beforeDrop(event)
                    beforeDrop: function (e) {

                    }
                };

                $scope.newSubItem = function (scope) {
                    var nodeData = scope.$modelValue;
                    nodeData.body.push({
                        id: nodeData.id * 10 + nodeData.body.length,
                        title: nodeData.title + '.' + (nodeData.body.length + 1),
                        body: []
                    });
                };

            }])
        .controller('ProgramCtrl', ['$scope', 'storageOptions',
            function ($scope, storageOptions) {

                $scope.tree = 'program';

                $scope.storageOptions = storageOptions();

                $scope.programOptions = {
                    dropped: function (e) {
                        if (e.source.nodeScope.tree === 'program' && e.dest.nodesScope.tree === 'inventory') {
                            e.dest.nodesScope.inventory.instructions.splice(e.dest.index, 1);
                        }
                    },
                   /* accept: function(sourceNodeScope, destNodesScope, destIndex){

                        if(!destNodesScope.$modelValue[destIndex])
                        {
                            return true;
                        }
                        return destNodesScope.$modelValue[destIndex].allowChildren;
                    }*/
                };

                $scope.program = {
                    instructions: []
                };
            }]);
})();
