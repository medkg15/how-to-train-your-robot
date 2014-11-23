define(['knockout', 'jstree', 'jquery', 'underscore', 'app/arraymove', 'bootstrap', 'angular', 'app/angularServices', 'app/angularSetup', 'app/instructionConverter'],
    function (ko, jstree, $, _, arraymove, bootstrap, angular, angularServices, angularSetup, instructionConverter) {

        var programService;
        var origin = null;

        ko.bindingHandlers.programTree = {
            init: function (element, valueAccessor, allBindings, viewModel, bindingContext) {
                // This will be called when the binding is first applied to an element
                // Set up any initial state, event handlers, etc. here

                var value = valueAccessor();
                var valueUnwrapped = ko.unwrap(value);

                var elem = angular.element(document.querySelector('[ng-controller=ProgramCtrl]'));

                //get the injector.
                var injector = elem.injector();

                //get the service.
                programService = injector.get('program');

                programService.subscribe(function (angularProgram) {

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

                    programService.setProgram(instructionConverter.knockoutToAngular(valueUnwrapped), true);

                    origin = null;
                }
                else if (origin == 'angular') {
                    origin = null;
                }
            }
        };
    });