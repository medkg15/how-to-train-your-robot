define([], function(){
	return [
		{
			"id": "level-1",
			"name": "Automation - Step Forward!",
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
			"name": "Automation - And Turn!",
            "number": 2,
            "environment": "wild-west",
            "defaultHeading": "up",
            "startPosition": {
                "column": 4,
                "row": 5
            },
            "intro": "<p>In this level you will be able to apply the automation concept you learned in level 1 by using 2 Computer Instructions. You can give Robo different instructions as needed to reach the goal!</p>",
            "exit": "<p>Fantastic! <br> <br>  By using different types of Computer Instructions, you were able to Automate Robo during the path to the goal.</p>",
            "help": "<p>Let me help!  here's a tip:<br>  <br> Robo has to step forward 3 times, turn right, and step forward 2 times to reach the goal.</p>",
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
            "name": "Parameterized Loops - Over and over again.",
            "number": 3,
            "environment": "country-green",
            "defaultHeading": "right",
            "startPosition": {
                "column": 2,
                "row": 2
            },
            "intro": "<p>In this level you will be introduced to the programming concept “Loop”! You will automate Robo to walk but use the required instruction one time only by taking advantage of the “Repeat” instruction. <br> <br>Drag the “Repeat” instruction from the instruction box and drop it into your program. Drag the instruction you need Robo to repeat in order to reach the goal. Right click on the “Repeat” instruction and give it a parameter “the number of times you need Robo to repeat the following instruction”. </p>",
            "exit": "<p> Well Done! <br> <br>  By using the “Loop with Parameter”, you were able to repeat the instruction you needed Robo to execute many times by writing less code in your program instead of writing the same instruction over and over.  </p>",
            "help": "<p>Having trouble?  here's a tip:<br>  <br> You can automate Robo to repeat stepping forward 4 times instead of writing the same instruction 4 times using instruction “Repeat“.</p>",
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
            "name": " Conditional Loop - Keep on moving!",
            "number": 4,
            "environment": "ocean",
            "defaultHeading": "right",
            "startPosition": {
                "column": 1,
                "row": 6
            },
            "intro": "<p>In this level you will learn how to use a “Conditional Loop” in programming. You will automate Robo to repeat an instruction as long as a condition is true. Once the condition becomes false, Robo has to stop and pick up the goal.! <br> <br>   Drag the “Repeat While” instruction from the Instruction box and drop it into your program. Select which condition should be true all the time while Robo is executing the repeated instruction. Select the instruction you want Robo to repeat until the previous condition becomes false. Don’t forget to end your program by dragging the instruction “pick up goal”</p>",
            "exit": "<p> Great! <br> <br>  By using the conditional loop you were able to instruct Robo to repeat an instruction as long as a condition is true. This way, your program had less code and was easier to write.</p>",
            "help": "<p>Let me help!  here's a tip:<br>  <br> You can automate Robo to repeat the instruction “Step Forward” as long as the goal is not in front of him then pick up the goal. </p>",
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
            "name": "Functions - Round the bend!",
            "number": 5,
            "environment": "beach",
            "defaultHeading": "right",
            "startPosition": {
                "column": 1,
                "row": 6
            },
            "intro": "<p>In this level you will be introduced to the “Functions” concept. Choose the pre-created Function from the instructions box at the bottom and group the set of instructions you think can be combined together in the function.</p>",
            "exit": "<p> Brilliant job! <br> <br> Functions helped you to include the repeated tasks you needed Robo to perform in one group instead of repeating the same set of instructions again and again.</p>",
            "help": "<p>Let me help!  here's some tips: <br> <br> 1.Select the instructions in order inside the function.  <br> 2. Robot has to step forward, turn right, and step forward to reach the target. <br> 3.Use the function “Diagonal” instead of using the same single instructions every time. </p>",
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
            "name": "Functions with Parameterization - Shuffle!",
            "number": 6,
            "environment": "orange-fall",
            "defaultHeading": "up",
            "startPosition": {
                "column": 4,
                "row": 4
            },
            "intro": "<p> In this level you will be allowed to use parameters with the function you created in the previous level. Drag the Function and give it a value as needed!</p>",
            "exit": "<p> Outstanding work! <br> <br> Functions and parameters made it easier to group the tasks you needed the robot to perform in one function and then repeat this function as much as you want. </p>",
            "help": "<p> Having trouble?  here's some tips:<br>  <br> 1. Right click on the function and write the number of times you want the function to be repeated. <br> 2.The robot need to step forward, turn right, and step forward 3 times in the same order. <br> 3.Use the function with the parameter 3 instead of dragging the function 3 times. </p>",
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
            "name": "Optimization!",
            "number": 7,
            "environment": "dark-mountain",
            "defaultHeading": "up",
            "startPosition": {
                "column": 4,
                "row": 4
            },
            "intro": "<p>In this level you will be introduced to the OPTIMIZATION concept. Try to reduce the number of steps by replacing some instructions.!</p>",
            "exit": "<p>This is truly above and beyond! <br> <br> Optimization allowed you to use a different instruction to reduce the amount of time needed for the robot to turn every time he faces an obstacle.</p>",
            "help": "<p> Let me help!  here's some tips: <br> <br> 1. You can optimize the required steps for the robot to turn to a faster way. <br> 2. Use shuffle right to turn right instead of turning then walking. </p>",
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
            "environment": "winter",
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

