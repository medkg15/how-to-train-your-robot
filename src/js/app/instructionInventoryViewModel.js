define(['knockout', 'data/instructions'], function(ko, instructionDefinitions){

    return function InstructionInventoryViewModel(level, program){

        var self = this;

        self.customFunctions = ko.observableArray();

        var instructionConversion = function(element){
            var data = element.data;
            data.body = _.map(element.children, instructionConversion);
            data.definition = _.find(self.instructions, function(def){
                return def.id === element.data.instruction_id;
            });
            return data;
        };

        self.availableInstructions = ko.computed(function(){

            return _.map(level.defaultInstructions, function (instruction) {

                var definition = _.find(instructionDefinitions, function (def) {
                    return def.id === instruction.id;
                });

                instruction.definition = definition;

                return instruction;
            });

        });

        self.treeAvailableInstructions = ko.computed(function(){
            return _.map(self.availableInstructions(), function(instruction){
                return {
                    text: instruction.definition.name, // node text
                    //icon: "string", // string for custom
                    state: {
                        opened: true,
                        disabled: false,
                        selected: false
                    },
                    children: [],  // array of strings or objects
                    li_attr: {},  // attributes for the generated LI node
                    a_attr: {},  // attributes for the generated A node
                    type: instruction.definition.type,
                    data: {
                        definition: instruction.definition
                    }
                }
            });
        });

    };
});