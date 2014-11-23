define(['knockout', 'jstree', 'jquery', 'underscore', 'bootstrap', 'angular', 'app/angularServices', 'app/angularSetup', 'app/instructionConverter'],
    function(ko, jstree, $, _, bootstrap, angular, angularServices, angularSetup, instructionConverter){
    ko.bindingHandlers.inventoryTree = {
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called once when the binding is first applied to an element,
            // and again whenever any observables/computeds that are accessed change
            // Update the DOM element based on the supplied values here.

            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);

            var elem = angular.element(document.querySelector('[ng-controller=InventoryCtrl]'));

            //get the injector.
            var injector = elem.injector();

            //get the service.
            var inventory = injector.get('inventory');

            var translatedInstructions = instructionConverter.knockoutToAngular(valueUnwrapped);

            inventory.setInstructions(translatedInstructions);
            if(!elem.scope().$$phase) {
                elem.scope().$apply();
            }

            /*var instructionSet = [
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
            ];*/
        }
    };
});