define(['underscore'], function(_){

    var instructionConversion = function(element){
        var data = element.data;
        data.body = _.map(element.children, instructionConversion);
        return data;
    };

    return instructionConversion;
});