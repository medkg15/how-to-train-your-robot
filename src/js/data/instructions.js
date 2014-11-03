define([], function(){

	return [
		{
			"id": "step-forward",
			"name": "Step Forward",
			"description": "Move your robot forward one space.",
            "type": "baseInstruction",
            "points": 10
		},
		{
			"id": "turn-left",
			"name": "Turn Left",
			"description": "Turn your robot to the left.",
            "type": "baseInstruction",
            "points": 10
		},
		{
			"id": "turn-right",
			"name": "Turn Right",
			"description": "Turn your robot to the right.",
            "type": "baseInstruction",
            "points": 10
		},
		{
			"id": "pick-up-ball",
			"name": "Pick up Ball",
			"description": "Tell your robot to pick up the ball.",
            "type": "baseInstruction",
            "points": 10
		},
        {
            "id": "repeat",
            "name": "Repeat",
            "description": "Repeat one or more instructions a set number of times.",
            "type": "parameterizedContainer",
            "points": 50
        },
        {
            "id": "repeat-while",
            "name": "Repeat While",
            "description": "Repeat one or more instructions until the condition becomes false.",
            "type": "parameterizedContainer",
            "points": 100
        },
        {
            "id": "custom-function",
            "name": "Custom Function",
            "description": "User defined custom function prototype.",
            "type": "baseInstruction",
            "points": 50
        }
	];

});