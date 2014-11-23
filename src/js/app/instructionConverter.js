define(['underscore', 'data/allInstructionsLookup'], function(_, allInstructionsLookup){

    var convertAngularInstruction = function(angularInstruction){

        var object = {
            "id": angularInstruction.instructionId,
            "definition": allInstructionsLookup[angularInstruction.instructionId],
            "name": angularInstruction.title,
            "quantity": angularInstruction.quantity,
            isFunction: angularInstruction.isFunction,
            isCustomFunction: angularInstruction.isCustomFunction,
            body: convertAngularScope(angularInstruction.body),
            description: angularInstruction.description,
            count: angularInstruction.count,
            condition: angularInstruction.condition
        };

        return object;
    };

    var convertKnockoutInstruction = function(knockoutVersion){
        return {
            instructionId: knockoutVersion.id,
            title: knockoutVersion.name,
            description: knockoutVersion.description,
            body: convertKnockoutScope(knockoutVersion.body),
            allowChildren: knockoutVersion.definition.type !== 'baseInstruction',
            quantity: knockoutVersion.quantity,
            isFunction: knockoutVersion.isFunction || knockoutVersion.definition.type === 'function',
            isCustomFunction: knockoutVersion.isCustomFunction,
            message: knockoutVersion.message,
            status: knockoutVersion.status,
            currentlyExecuting: knockoutVersion.currentlyExecuting,
            count: knockoutVersion.count,
            condition: knockoutVersion.condition
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