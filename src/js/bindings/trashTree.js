define(['knockout', 'jstree', 'jquery', 'underscore', 'app/arraymove', 'bootstrap'], function(ko, jstree, $, _, arraymove, bootstrap){

    ko.bindingHandlers.trashTree = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here

            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);

            var $element = $(element);

            $element.on('copy_node.jstree', function(e, data){

                valueUnwrapped(data.original);

                data.new_instance.delete_node(data.node);
                data.old_instance.delete_node(data.original);

                console.log(data);

            }).jstree({
                plugins : [ "wholerow", "dnd" ],
                core: {
                    themes: {
                        'name': 'proton',
                        'responsive': true
                    },
                    check_callback: function (operation, node, node_parent, node_position, more) {
                        return true; // update this to tell us which operations are allowed and which are not.
                    }
                },
                dnd: {
                    is_draggable: function(nodes){
                        return true;
                    }
                }
            });
        }
    };
});