define([], function(){
	return [
		{
			"id": "level-1",
			"name": "Step Up",
			"instructions": [
				{
					"id": "step-forward",
					"quantity": "unlimited"
				}
			],
			"map": [
				['x','x','x','x','x','x','x','x','x','x','x','x',],
				['x','s','x','x','x','x','x','x','x','x','x','x',],
				['x',' ','x','x','x','x','x','x','x','x','x','x',],
				['x',' ','x','x','x','x','x','x','x','x','x','x',],
				['x',' ',' ',' ',' ',' ',' ',' ',' ','e','x','x',],
				['x','x','x','x','x','x','x','x','x','x','x','x',],
				['x','x','x','x','x','x','x','x','x','x','x','x',],
			]
		},
		{
			"id": "level-2",
			"name": "Turn!",
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
				}
			]
		}
	];
});

