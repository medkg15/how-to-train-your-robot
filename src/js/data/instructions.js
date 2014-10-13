define([], function(){

	return [
		{
			"id": "step-forward",
			"name": "Step Forward",
			"description": "Move your robot forward one space.",
            "type": "baseInstruction"
		},
		{
			"id": "turn-left",
			"name": "Turn Left",
			"description": "Turn your robot to the left.",
            "type": "baseInstruction"
		},
		{
			"id": "turn-right",
			"name": "Turn Right",
			"description": "Turn your robot to the right.",
            "type": "baseInstruction"
		},
		{
			"id": "pick-up-ball",
			"name": "Pick up Ball",
			"description": "Tell your robot to pick up the ball.",
            "type": "baseInstruction"
		},
        {
            "id": "repeat",
            "name": "Repeat",
            "description": "Repeat one or more instructions a set number of times.",
            "type": "parameterizedContainer"
        },
        {
            "id": "repeat-while",
            "name": "Repeat While",
            "description": "Repeat one or more instructions until the condition becomes false.",
            "type": "parameterizedContainer"
        }
	];

});