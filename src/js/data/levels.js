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
            "intro": "<p>In this level you will be introduced to the “Automation” concept by using one Computer Instruction. <br> <br> In order for Robo to reach the 1st spaceship part, he must walk step by step following your instructions.<br> Drag the instruction from the “Build Your Program” box at the bottom and drop it in your “ Your Program ” box on the right side. After creating a whole list in your program, you can “Run Program” and wait for Robo to execute or “Run One Instruction” to execute one instruction at a time. </p>",
            "exit": "<p> You got it good job! <br> <br> Using Automation you were able to write a program from the computer instruction “Step Forward” to help Robo execute and find the first part of his spaceship. </p>",
            "help": "<p>Having trouble?  here's some tips:<br> <br> 1. Robo has to walk 2 steps forward then pick up the goal. <br> 2. You can clear your program and start over at any time by clicking “Clear Program” button.</p>",
            "jumpCode": 1,
			"instructions": [
				{
					"id": "step-forward",
					"quantity": "unlimited"
				},
				{
					"id": "pick-up-ball",
					"quantity": 1
				}
			],
            "perfectInstructionCount": 3,
			"map": [
				[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
				[' ',' ',' ',' ','x','x','x',' ',' ',' ',' ',' '],
				[' ',' ',' ',' ','x','e','x',' ',' ',' ',' ',' '],
				[' ',' ',' ',' ','x',' ','x',' ',' ',' ',' ',' '],
				[' ',' ',' ',' ','x',' ','x',' ',' ',' ',' ',' '],
				[' ',' ',' ',' ','x',' ','x',' ',' ',' ',' ',' '],
				[' ',' ',' ',' ','x','x','x',' ',' ',' ',' ',' '],
				[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
			],
            "debuggerAvailable": true
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
            "exit": "<p>Fantastic! <br> <br>  By using different types of Computer Instructions you were able to Automate Robo during the path to the goal.</p>",
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
				}
			],
            "perfectInstructionCount": 7,
			"map": [
				[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
				[' ',' ',' ','x','x','x','x','x','x',' ',' ',' '],
				[' ',' ',' ','x',' ',' ',' ','e','x',' ',' ',' '],
				[' ',' ',' ','x',' ','x','x','x','x',' ',' ',' '],
				[' ',' ',' ','x',' ','x',' ',' ',' ',' ',' ',' '],
				[' ',' ',' ','x',' ','x',' ',' ',' ',' ',' ',' '],
				[' ',' ',' ','x','x','x',' ',' ',' ',' ',' ',' '],
				[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
			],
            "debuggerAvailable": true
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
            "intro": "<p>In this level you will be introduced to the programming concept “Loop”! You will automate Robo to walk but use the required instruction one time only by taking advantage of the “Repeat” instruction. <br> <br>Drag the “Repeat” instruction from “Build Your Program” box and drop it into “Your Program”. Drag the instruction you need Robo to repeat in order to reach the goal. Right click on the “Repeat” instruction and give it a parameter “the number of times you need Robo to repeat the following instruction”. </p>",
            "exit": "<p> Well Done! <br> <br>  By using the “Loop with Parameter” you were able to repeat the instruction you needed Robo to execute many times by writing less code in your program instead of writing the same instruction over and over.  </p>",
            "help": "<p>Having trouble?  here's a tip:<br>  <br> You can automate Robo to repeat stepping forward 4 times instead of writing the same instruction 4 times by using the loop instruction “Repeat“.</p>",
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
            "perfectInstructionCount": 3,
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ','x','x','x','x','x','x','x','x',' ',' ',' '],
                [' ','x',' ',' ',' ',' ',' ','e','x',' ',' ',' '],
                [' ','x','x','x','x','x','x','x','x',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
            ],
            "debuggerAvailable": "true"
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
            "intro": "<p>In this level you will learn how to use a “Conditional Loop” in programming. You will automate Robo to repeat an instruction as long as a condition is true. Once the condition becomes false, Robo has to stop and pick up the goal.! <br> <br>   Drag the “Repeat While” instruction from “Build Your Program” box and drop it into “Your Program”. Select which condition should be true all the time while Robo is executing the repeated instruction. Select the instruction you want Robo to repeat until the previous condition becomes false and drop it inside the “Repeat While” tree.<br> Don’t forget to end your program by dragging the instruction “Pick Up Goal”.</p>",
            "exit": "<p> Amazing work! <br> <br>  By using the conditional loop you were able to instruct Robo to repeat an instruction as long as a condition is true. This way, your program had less code and was easier to write.</p>",
            "help": "<p>Let me help!  here's some tips:<br>  <br> 1. 1.	You can automate Robo to repeat the instruction “Step Forward” as long as the goal is not in front of him then pick up the goal. <br> 2. 2.	The instruction you want to repeat should appear in your program as if it’s inside “Repeat While”, its branch, not under it. </p>",
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
            "perfectInstructionCount": 3,
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                ['x','x','x','x','x','x','x','x','x','x','x','x'],
                ['x',' ',' ',' ',' ',' ',' ',' ',' ',' ','e','x'],
                ['x','x','x','x','x','x','x','x','x','x','x','x']
            ],
            "debuggerAvailable": "true"
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
            "intro": "<p>In this level you will apply what you have learned in the previous level about “Conditional Loops”. This time you will have the opportunity to use conditional loops many times and change the condition as needed every time. </p>",
            "exit": "<p> Brilliant job! <br> <br> By using different conditional loops in your program you were able to instruct Robo to repeat different instructions and use different conditions as needed every time. This way, although the path to the goal was long, your program had less instructions and was easier to write.</p>",
            "help": "<p>Let me help!  here's some tips: <br> <br> 1. You can automate Robo to repeat the instruction “Step Forward” as long as the wall is not in front of him then “Turn Left”, repeat the same thing for the next steps. 2. Remember that you can change the condition if the goal is in front of Robo not the wall! <br> <br> 3. You can use one or more instruction e.g. “Turn Left” to be executed after each loop terminate, which should appear in your program under the loop tree “Repeat While” not inside it. <br> <br> 4. Finally, don't forget to pick up the goal. </p>",
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
            "perfectInstructionCount": 6,
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ','x','x','x'],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ','x','e','x'],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ','x',' ','x'],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ','x',' ','x'],
                ['x','x','x','x','x','x','x','x','x','x',' ','x'],
                ['x',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ','x'],
                ['x','x','x','x','x','x','x','x','x','x','x','x']
            ],
            "debuggerAvailable": "true"
        },
        {
            "id": "level-6",
            "name": "Optimization!",
            "number": 6,
            "environment": "orange-fall",
            "defaultHeading": "up",
            "startPosition": {
                "column": 4,
                "row": 4
            },
            "intro": "<p>In this level you will be introduced to the Optimization concept. Try to reduce the number of steps by replacing some instructions.</p>",
            "exit": "<p> Awesome! <br> <br> Optimization allowed you to use a different instruction to reduce the amount of instructions needed to automate Robo to turn every time he faces an obstacle during the path to the goal. </p>",
            "help": "<p> Having trouble?  here's a tip:<br>  <br> Use “Shuffle” to turn faster instead of “Turn” then “Step Forward”. </p>",
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
            "perfectInstructionCount": 6,
            "map": [
                [' ',' ',' ',' ',' ',' ','x','x','x',' ',' ',' '],
                [' ',' ',' ','x','x','x','x','e','x',' ',' ',' '],
                [' ',' ',' ','x',' ',' ',' ',' ','x',' ',' ',' '],
                [' ',' ',' ','x',' ','x','x','x','x',' ',' ',' '],
                [' ',' ',' ','x',' ','x',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ','x','x','x',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
            ],
            "debuggerAvailable": "true"
        },
        {
            "id": "level-7",
            "name": "-\",
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
            "jumpCode": 7,
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
            "perfectInstructionCount": 6,
            "map": [
                [' ',' ',' ',' ',' ',' ','x','x','x',' ',' ',' '],
                [' ',' ',' ','x','x','x','x','e','x',' ',' ',' '],
                [' ',' ',' ','x',' ',' ',' ',' ','x',' ',' ',' '],
                [' ',' ',' ','x',' ','x','x','x','x',' ',' ',' '],
                [' ',' ',' ','x',' ','x',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ','x','x','x',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
            ],
            "debuggerAvailable": "true"
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
            "jumpCode": 8,
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
            "perfectInstructionCount": 6,
            "map": [
                [' ',' ',' ',' ',' ',' ','x','x','x',' ',' ',' '],
                [' ',' ',' ','x','x','x','x','e','x',' ',' ',' '],
                [' ',' ',' ','x',' ',' ',' ',' ','x',' ',' ',' '],
                [' ',' ',' ','x',' ','x','x','x','x',' ',' ',' '],
                [' ',' ',' ','x',' ','x',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ','x','x','x',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
            ],
            "debuggerAvailable": "true"
        }
	];
});

