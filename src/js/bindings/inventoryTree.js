define(['knockout', 'jstree', 'jquery', 'underscore', 'bootstrap'], function(ko, jstree, $, _, bootstrap){
    ko.bindingHandlers.inventoryTree = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here

            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);

            $(element)
                .on('select_node.jstree', function(e, data){
                    var definition = data.node.data.definition;
                    var element = $('#' + data.node.li_attr.id);
                    element.popover({
                        content: definition.description,
                        html: true,
                        placement: 'top',
                        title: definition.name,
                        trigger: 'manual focus'
                    }).popover('show').on('hide.bs.popover', function(){
                        data.instance.deselect_node(data.node);
                        console.log(data);
                    });
                })
                .jstree({
                plugins : [ "dnd", "types" ],
                core: {
                    themes: {
                        'name': 'proton',
                        'responsive': true
                    },
                    check_callback: function (operation, node, node_parent, node_position, more) {
                        return false; // update this to tell us which operations are allowed and which are not.
                    }
                },
                dnd: {
                    is_draggable: function(nodes){
                        return _.every(nodes, function(node){
                            return !node.state.disabled;
                        });
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