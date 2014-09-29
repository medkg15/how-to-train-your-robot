define([], function(){
	return [
		{
			"id": "level-1",
			"name": "Step Forward!",
            "defaultHeading": "up",
            "startPosition": {
                "column": 5,
                "row": 5,
            },
			"instructions": [
				{
					"id": "step-forward",
					"quantity": "unlimited"
				},
				{
					"id": "pick-up-ball",
					"quantity": 1
				},
			],
			"map": [
				[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
				[' ',' ',' ',' ','x','x','x',' ',' ',' ',' ',' ',],
				[' ',' ',' ',' ','x','e','x',' ',' ',' ',' ',' ',],
				[' ',' ',' ',' ','x',' ','x',' ',' ',' ',' ',' ',],
				[' ',' ',' ',' ','x',' ','x',' ',' ',' ',' ',' ',],
				[' ',' ',' ',' ','x',' ','x',' ',' ',' ',' ',' ',],
				[' ',' ',' ',' ','x','x','x',' ',' ',' ',' ',' ',],
				[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
			]
		},
		{
			"id": "level-2",
			"name": "And Turn!",
            "defaultHeading": "up",
            "startPosition": {
                "column": 4,
                "row": 5,
            },
			"instructions": [
				{
					"id": "step-forward",
					"quantity": "unlimited"
				},
				{
					"id": "turn-left",
					"quantity": "unlimited"
				},
				{
					"id": "turn-right",
					"quantity": "unlimited"
				},
				{
					"id": "pick-up-ball",
					"quantity": 1
				},
			],
			"map": [
				[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
				[' ',' ',' ','x','x','x','x','x','x',' ',' ',' ',],
				[' ',' ',' ','x',' ',' ',' ','e','x',' ',' ',' ',],
				[' ',' ',' ','x',' ','x','x','x','x',' ',' ',' ',],
				[' ',' ',' ','x',' ','x',' ',' ',' ',' ',' ',' ',],
				[' ',' ',' ','x',' ','x',' ',' ',' ',' ',' ',' ',],
				[' ',' ',' ','x','x','x',' ',' ',' ',' ',' ',' ',],
				[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
			]
		}
	];
});

