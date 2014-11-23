define(['knockout', 'jstree', 'jquery', 'underscore', 'bootstrap', 'angular', 'app/angularServices', 'app/angularSetup', 'app/instructionConverter'],
    function (ko, jstree, $, _, bootstrap, angular, angularServices, angularSetup, instructionConverter) {

        var inventoryService;
        var origin = null;

        ko.bindingHandlers.inventoryTree = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                // This will be called when the binding is first applied to an element
                // Set up any initial state, event handlers, etc. here

                var value = valueAccessor();
                var valueUnwrapped = ko.unwrap(value);

                var elem = angular.element(document.querySelector('[ng-controller=ProgramCtrl]'));

                //get the injector.
                var injector = elem.injector();

                //get the service.
                inventoryService = injector.get('inventory');

                inventoryService.subscribe(function (angularProgram) {

                    if (!origin) {
                        origin = 'angular';

                        var translatedInstructions = instructionConverter.angularToKnockout(angularProgram);

                        value(translatedInstructions);

                        origin = null;
                    }
                    else if (origin == 'knockout') {
                        origin = null;
                    }
                });
            },
            update: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                // This will be called once when the binding is first applied to an element,
                // and again whenever any observables/computeds that are accessed change
                // Update the DOM element based on the supplied values here.

                var value = valueAccessor();
                var valueUnwrapped = ko.unwrap(value);

                if (!origin) {
                    origin = 'knockout';

                    var translatedInstructions = instructionConverter.knockoutToAngular(valueUnwrapped);

                    inventoryService.setInstructions(translatedInstructions, true);

                    origin = null;
                }
                else if (origin == 'angular') {
                    origin = null;
                }
            }
        };
    });