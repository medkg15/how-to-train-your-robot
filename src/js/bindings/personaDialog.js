define(['knockout', 'jquery', 'bootstrap', 'underscore'], function(ko, $, bootstrap, _){

    var personaTemplate = _.template("<%= content %>" +
        "<% if(levelComplete) { %>" +
        "<h4>Great Job!</h4>" +
        "<div class=\"progress\"><div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"<%= efficiency %>\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: <%= efficiency %>%\"></div></div>" +
        "<% if(efficiency === 100) { %> <p><span class='glyphicon glyphicon-star'></span> Bonus! You completed the program with the fewest instructions possible!</p> <% } %>" +
        "<% if(efficiency < 100){ %><p><span class='glyphicon glyphicon-asterisk'></span> Try to create a shorter program for a better score!</p> <%}%>" +
        "<% if(usedHelp) { %> <p><span class='glyphicon glyphicon-asterisk'></span> See if you can complete the next level without asking Eddy the Alien for help!</p> <% } else { %> <p><span class='glyphicon glyphicon-star'></span> Bonus!  You completed the level without asking for help!</p> <% } %>" +
        "<% if(attempts === 1){%><p><span class='glyphicon glyphicon-star'></span> Bonus!  You completed the level on your first try!</p><%}%>" +
        "<% if(attempts < 5 && attempts > 1){%><p><span class='glyphicon glyphicon-star'></span> Bonus!  You completed the level in just a few attempts!</p><%}%>" +
        "<% if(attempts >= 5){%><p><span class='glyphicon glyphicon-asterisk'></span> Try completing the next level in fewer attempts!</p><%}%>" +
        "<p><strong>Your Score: <%= finalScore %></strong></p>" +
        "<% } %>" +
        "<div><button id=\"persona-ok\" class=\"btn btn-primary btn-block\">OK</button></div>");



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

            var text = personaTemplate({
                content: valueUnwrapped,
                levelComplete: viewModel.canAdvance() || viewModel.gameOver(),
                efficiency: Math.round(viewModel.levelScore().efficiency * 100),
                finalScore: viewModel.levelScore().finalScore,
                usedHelp: viewModel.levelScore().usedHelp,
                attempts: viewModel.levelScore().attempts
            });

            $(element)
                .popover('destroy')
                .popover({
                    content: text,
                    html: true,
                    placement: 'right',
                    title: 'Eddy the Alien',
                    trigger: 'manual focus'
                })
                .popover('show');
        }
    };
});