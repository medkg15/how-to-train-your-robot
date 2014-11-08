define(['knockout', 'app/treeNodeInstructionConverter'], function(ko, treeNodeInstructionConverter){

    return function FunctionEditorViewModel(){

        self.createFunction = function(){
            self.buildingFunction(true);
        };

        self.functionTree = ko.observableArray();
        self.functionName = ko.observable();

        self.saveFunction = function(){
            self.customFunctionCount++;

            var definition = {
                "id": "custom-function-" + self.customFunctionCount,
                "name": self.functionName(),
                "description": "User defined custom function",
                "type": "baseInstruction",
                "points": 50,
                "body": self.functionInstructions()
            };

            self.instructions.push(definition);

            self.instructionSet.push({
                id: "custom-function-" + self.customFunctionCount,
                quantity: "unlimited"
            });
            self.buildingFunction(false);
            self.functionTree.removeAll();
            self.functionName(null);
        };

        // these are the simplified program elements
        self.functionInstructions = ko.computed(function(){
            return _.map(self.functionTree(), treeNodeInstructionConverter);
        });

        self.emptyFunction = ko.computed(function(){
            return self.functionTree().length === 0;
        });
    };

});