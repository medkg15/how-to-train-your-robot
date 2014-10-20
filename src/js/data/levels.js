define([], function(){
	return [
		{
			"id": "level-1",
			"name": "Step Forward!",
            "number": 1,
            "environment": "space",
            "defaultHeading": "up",
            "introText": "",
            "exitText": "",
            "helpText": "",
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
            "number": 2,
            "environment": "space",
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
		},
        {
            "id": "level-3",
            "name": "Over and over again.",
            "number": 3,
            "environment": "space",
            "defaultHeading": "right",
            "startPosition": {
                "column": 2,
                "row": 2
            },
            "instructions": [
                {
                    "id": "repeat",
                    "quantity": "unlimited"
                },
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
                }
            ],
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ','x','x','x','x','x','x','x','x',' ',' ',' ',],
                [' ','x',' ',' ',' ',' ',' ','e','x',' ',' ',' ',],
                [' ','x','x','x','x','x','x','x','x',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
            ]
        },
        {
            "id": "level-4",
            "name": "Conditional loop - not finished.",
            "number": 4,
            "environment": "space",
            "defaultHeading": "right",
            "startPosition": {
                "column": 1,
                "row": 2
            },
            "instructions": [
                {
                    "id": "repeat-while",
                    "quantity": "unlimited"
                },
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
                ['x','x','x','x','x','x','x','x','x','x','x','x',],
                ['x',' ',' ',' ',' ',' ',' ',' ',' ',' ','e','x',],
                ['x','x','x','x','x','x','x','x','x','x','x','x',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
            ]
        }
	];
});

