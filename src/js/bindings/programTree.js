define(['knockout', 'jstree', 'jquery', 'underscore', 'app/arraymove', 'bootstrap'], function(ko, jstree, $, _, arraymove, bootstrap){

    ko.bindingHandlers.programTree = {
        init: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called when the binding is first applied to an element
            // Set up any initial state, event handlers, etc. here

            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);

            var $element = $(element);

            var updateObservable = function(){ valueAccessor()($element.jstree(true).get_json()); };

            $element.on('copy_node.jstree', function(e, data){

                console.log(data);
                // data object is not persisted when copying between trees.  copy it explictly.
                data.node.data = data.original.data;
                // it would seem type data is also not persisted.  yay!
                data.node.type = data.original.original.type;
                if(data.node.text==='Repeat')
                {
                    data.node.text = 'Repeat 1 time';
                    data.node.data.count = 1;
                }
                if (data.node.text ==='Repeat While') {
                    data.node.text = 'Repeat While ...';
                    var $modal = $('#condition-modal');
                    $modal.modal('show');
                    $modal.on('click', 'button', function(e){
                        var val = $modal.find('input[name=condition]:checked').val();
                        $element.jstree(true).get_node(data.node.id).data.condition = val;
                        $element.jstree('rename_node', data.node, 'Repeat While ' + val);
                        updateObservable();
                        $modal.off('click', 'button');
                    });
                }

                // overwrite the view model with the new tree structure.
                updateObservable();

            }).on('move_node.jstree', function(e, data){

                // overwrite the view model with the new tree structure.
                updateObservable();

            }).jstree({
                plugins : [ "wholerow", "dnd", "types", "contextmenu" ],
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
                },
                types: {
                    baseInstruction: {
                        valid_children: [],
                        max_children: 0
                    },
                    parameterizedContainer: {
                        valid_children: [ 'baseInstruction' ],
                        max_children: -1
                    }
                },
                contextmenu: {
                    items: function(node, callback) {

                        if (node.data.instruction_id === 'repeat')
                        {
                            callback({
                                count: {
                                    label: "Repeat Count",
                                    action: function(){

                                        var count = NaN;
                                        while(isNaN(count))
                                        {
                                            var val = prompt("How many repetitions?");
                                            if(val === null)
                                            {
                                                break;
                                            }
                                            count = parseInt(val);
                                        }

                                        if(!isNaN(count))
                                        {
                                            node.data.count = count;
                                            $element.jstree('rename_node', node, 'Repeat ' + count + ' times');
                                            updateObservable();
                                        }
                                    }
                                }
                            });
                        }
                        else if (node.data.instruction_id === 'repeat-while')
                        {
                            callback({
                                condition: {
                                    label: "Repeat While ...",
                                    action: function(){

                                        var $modal = $('#condition-modal');
                                        $modal.modal('show');
                                        $modal.on('click', 'button', function(e){
                                            var val = $modal.find('input[name=condition]:checked').val();
                                            node.data.condition = val;
                                            $element.jstree('rename_node', node, 'Repeat While ' + val);
                                            updateObservable();
                                            $modal.off('click', 'button');
                                        });
                                    }
                                }
                            });
                        }
                        else
                        {
                            return false;
                        }
                    }
                }
            });
        },
        update: function(element, valueAccessor, allBindings, viewModel, bindingContext) {
            // This will be called once when the binding is first applied to an element,
            // and again whenever any observables/computeds that are accessed change
            // Update the DOM element based on the supplied values here.

            var value = valueAccessor();
            var valueUnwrapped = ko.unwrap(value);

            var tree = $(element).jstree(true);

            tree.settings.core.data = valueUnwrapped;
            tree.refresh();
        }
    };
});