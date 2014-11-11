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
            "exit": "<p>Using Automation you were able to write a program from the computer instruction “Step Forward” to help Robo execute and find the first part of his spaceship</p>",
            "help": "<p>Having trouble?  here's some tips: Robo has to walk 2 steps forward then pick up the goal</p>",
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
            "intro": "<p>In this level you will be able to apply the automation concept you learned in level 1 by using 2 Computer Instructions. You can give Robo different instructions as needed to reach the goal</p>",
            "exit": "<p>By using different types of Computer Instructions, you were able to Automate Robo during the path to the goal</p>",
            "help": "<p>Robo has to step forward 3 times, turn right, and step forward 2 times to reach the goal</p>",
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
            "environment": "country-green",
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
                    "quantity": 2
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
            "environment": "ocean",
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
            "environment": "beach",
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
            "environment": "orange-fall",
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
        {
            "id": "level-7",
            "name": "Shuffle!",
            "number": 7,
            "environment": "orange-fall",
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
        {
            "id": "level-8",
            "name": "Shuffle!",
            "number": 8,
            "environment": "orange-fall",
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

