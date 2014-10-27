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
                "row": 5
            },
            "intro": "<p>This is the story intro text!</p>",
            "exit": "<p>This is the story exit text!</p>",
            "jumpCode": 1,
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
            "environment": "wild-west",
            "defaultHeading": "up",
            "startPosition": {
                "column": 4,
                "row": 5
            },
            "intro": "<p>This is the story intro text!</p>",
            "exit": "<p>This is the story exit text!</p>",
            "jumpCode": 2,
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
            "intro": "<p>This is the story intro text!</p>",
            "exit": "<p>This is the story exit text!</p>",
            "jumpCode": 3,
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
            "name": "Keep on moving!",
            "number": 4,
            "environment": "wild-west",
            "defaultHeading": "right",
            "startPosition": {
                "column": 1,
                "row": 6
            },
            "intro": "<p>This is the story intro text!</p>",
            "exit": "<p>This is the story exit text!</p>",
            "jumpCode": 4,
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
                }
            ],
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                ['x','x','x','x','x','x','x','x','x','x','x','x',],
                ['x',' ',' ',' ',' ',' ',' ',' ',' ',' ','e','x',],
                ['x','x','x','x','x','x','x','x','x','x','x','x',],
            ]
        },
        {
            "id": "level-5",
            "name": "'Round the bend.",
            "number": 5,
            "environment": "space",
            "defaultHeading": "right",
            "startPosition": {
                "column": 1,
                "row": 6
            },
            "intro": "<p>This is the story intro text!</p>",
            "exit": "<p>This is the story exit text!</p>",
            "jumpCode": 5,
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
                }
            ],
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ','x','x','x','x','x','x','x',],
                [' ',' ',' ',' ',' ','x','e',' ',' ',' ',' ','x',],
                [' ',' ',' ',' ',' ','x','x','x','x','x',' ','x',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ','x',' ','x',],
                ['x','x','x','x','x','x','x','x','x','x',' ','x',],
                ['x',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','x',],
                ['x','x','x','x','x','x','x','x','x','x','x','x',],
            ]
        }
	];
});

