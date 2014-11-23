define(['knockout', 'jstree', 'jquery', 'underscore', 'bootstrap', 'angular', 'app/angularServices', 'app/angularSetup', 'app/instructionConverter'],
    function (ko, jstree, $, _, bootstrap, angular, angularServices, angularSetup, instructionConverter) {
        ko.bindingHandlers.inventoryTree = {
            update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
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
            }
        };
    });