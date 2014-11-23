define(['underscore', 'data/allInstructionsLookup'], function(_, allInstructionsLookup){

    var convertAngularInstruction = function(angularInstruction){

        return {
            "id": angularInstruction.instructionId,
            "definition": allInstructionsLookup[angularInstruction.instructionId],
            "name": angularInstruction.title,
            "quantity": angularInstruction.quantity
        };
    };

    var convertKnockoutInstruction = function(knockoutVersion){
        return {
            instructionId: knockoutVersion.id,
            title: knockoutVersion.name,
            description: knockoutVersion.description,
            body: convertKnockoutScope(knockoutVersion.body),
            allowChildren: knockoutVersion.definition.type !== 'baseInstruction',
            quantity: knockoutVersion.quantity,
            isFunction: false,
            isCustomFunction: false,
            message: knockoutVersion.message,
            status: knockoutVersion.status,
            currentlyExecuting: knockoutVersion.currentlyExecuting
        };
    };

    var convertAngularScope = function(angularScope){
        return _.map(angularScope, convertAngularInstruction);
    };

    var convertKnockoutScope = function(knockoutScope){
        return _.map(knockoutScope, convertKnockoutInstruction);
    };

    return {
        angularToKnockout: convertAngularScope,
        knockoutToAngular: convertKnockoutScope
    };

});