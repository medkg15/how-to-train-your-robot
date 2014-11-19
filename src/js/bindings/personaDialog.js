define(['knockout', 'jquery', 'bootstrap'], function(ko, $, bootstrap){
    ko.bindingHandlers.personaDialog = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here

            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);

            $(document).on('click', '#persona-ok', function(){
                value(undefined);
                $(element).popover('hide');

                if(viewModel.canAdvance())
                {
                    viewModel.advanceToNextLevel();
                } else if(viewModel.gameOver())
                {
                    viewModel.changeView('high-scores');
                }
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

            var content = valueUnwrapped;

            if (viewModel.canAdvance() || viewModel.gameOver())
            {
                content += "<br/>" + "<p><strong>Your Score</strong>: " + viewModel.levelScore() + "</p>" ;
            }

            content += '<button id="persona-ok" class="btn btn-primary">OK</button>';

            $(element)
                .popover('destroy')
                .popover({
                    content: content,
                    html: true,
                    placement: 'right',
                    title: 'Persona',
                    trigger: 'manual focus'
                })
                .popover('show');
        }
    };
});