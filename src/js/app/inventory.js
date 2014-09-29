define(['jquery', 'underscore'], function($, _){

	return function Inventory(element, instructionDefinitions){
	
		var $element = $(element);
	
		this.initializeLevel = function(level){
		
			for (var index in level.instructions)
			{
				var instruction = level.instructions[index];
				
				var definition = _.find(instructionDefinitions, function(def){
					return def.id === instruction.id;
				});
				
				$element.append('<div>'+definition.name+'</div>');
			}
		};
	};
});