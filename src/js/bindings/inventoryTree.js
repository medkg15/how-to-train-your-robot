define(['knockout', 'jstree', 'jquery', 'underscore'], function(ko, jstree, $, _){
    ko.bindingHandlers.inventoryTree = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here

            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);

            $(element)
                .on('move_node.jstree', function(e, data){

                    data.new_instance.delete_node(data.node);
                    data.old_instance.delete_node(data.original);
                })
                .jstree({
                plugins : [ "dnd", "types" ],
                core: {
                    themes: {
                        'name': 'proton',
                        'responsive': true
                    },
                    check_callback: function (operation, node, node_parent, node_position, more) {
                        return false;//return operation = "move_node" && node.data.is_program;
                    }
                },
                dnd: {
                    is_draggable: function(nodes){
                        return true;
                    },
                    always_copy: true
                }
            });
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called once when the binding is first applied to an element,
            // and again whenever any observables/computeds that are accessed change
            // Update the DOM element based on the supplied values here.

            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);

            console.log(valueUnwrapped);

            var tree = $(element).jstree(true);

            tree.settings.core.data = valueUnwrapped;
            tree.refresh();
        }
    };
});