define([], function(){
	return [
		{
			"id": "level-1",
			"name": "Step Forward!",
            "number": 1,
            "environment": "space",
            "defaultHeading": "up",
            "startPosition": {
                "column": 5,
                "row": 5
            },
            "intro": "<p>In this level you will be introduced to the COMPUTER INSTRUCTIONS concept. Drag the instructions from the instructions box at the bottom to the programming List box on the right side to help Robo find the 1st part of his spaceship.</p>",
            "exit": "<p>Computer instructions allowed you to give Robo a set of instructions to perform and find the first part of his spaceship.</p>",
            "help": "<p>Having trouble?  here's some tips:</p>",
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
            "help": "<p>Having trouble?  here's some tips:</p>",
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
            "help": "<p>Having trouble?  here's some tips:</p>",
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
            "help": "<p>Having trouble?  here's some tips:</p>",
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
            "help": "<p>Having trouble?  here's some tips:</p>",
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
        },
        {
            "id": "level-6",
            "name": "Shuffle!",
            "number": 6,
            "environment": "space",
            "defaultHeading": "up",
            "startPosition": {
                "column": 4,
                "row": 4
            },
            "intro": "<p>This is the story intro text!</p>",
            "exit": "<p>This is the story exit text!</p>",
            "help": "<p>Having trouble?  here's some tips:</p>",
            "jumpCode": 6,
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
                    "id": "shuffle-left",
                    "quantity": "unlimited"
                },
                {
                    "id": "shuffle-right",
                    "quantity": "unlimited"
                },
                {
                    "id": "pick-up-ball",
                    "quantity": 1
                }
            ],
            "map": [
                [' ',' ',' ',' ',' ',' ','x','x','x',' ',' ',' ',],
                [' ',' ',' ','x','x','x','x','e','x',' ',' ',' ',],
                [' ',' ',' ','x',' ',' ',' ',' ','x',' ',' ',' ',],
                [' ',' ',' ','x',' ','x','x','x','x',' ',' ',' ',],
                [' ',' ',' ','x',' ','x',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ','x','x','x',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',],
            ]
        },
	];
});

