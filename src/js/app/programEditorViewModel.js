define(['knockout', 'app/treeNodeInstructionConverter', 'underscore'], function(ko, treeNodeInstructionConverter, _){
    return function ProgramEditorViewModel(){
        var self = this;

        self.treeProgram = ko.observableArray();

        self.program = ko.computed(function(){
            return _.map(self.treeProgram(), treeNodeInstructionConverter);
        });

        self.removeInstruction = function(instruction){
            self.program.remove(instruction);
        };

        self.hasNoProgram = ko.computed(function(){
            return self.program().length === 0;
        });

    };
});