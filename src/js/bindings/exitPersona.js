define(['knockout', 'jquery', 'bootstrap', 'underscore'], function(ko, $, bootstrap, _){

    var personaTemplate = _.template("<%= content %>" +
        "<div><button id=\"exit-persona-ok\" class=\"btn btn-primary btn-block\">See High Scores!</button></div>");


    ko.bindingHandlers.exitPersona = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here

            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);

            $(document).on('click', '#exit-persona-ok', function(){
                viewModel.changeView('high-scores');
            });
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called once when the binding is first applied to an element,
            // and again whenever any observables/computeds that are accessed change
            // Update the DOM element based on the supplied values here.

            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);

            if (!valueUnwrapped) {
                return;
            }

            var text = personaTemplate({
                content: valueUnwrapped
            });

            $(element)
                .popover('destroy')
                .popover({
                    content: text,
                    html: true,
                    placement: 'right',
                    title: 'Eddy the Alien',
                    trigger: 'manual'
                })
                .popover('show');
        }
    };
});