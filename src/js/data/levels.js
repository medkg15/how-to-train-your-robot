define([], function(){
	return [
		{
			"id": "level-1",
			"name": "Automation - Step Forward!",
            "number": 1,
            "environment": "space",
            "defaultHeading": "up",
            "startPosition": {
                "column": 8,
                "row": 5
            },
            "intro": "<p>In this level you will be introduced to the “Automation” concept by using two Computer Instructions “Step Forward” and “Pick Up Part”.</p><p>  In order for Robo to reach the 1st spaceship part, he must walk step by step following your instructions.</p><p> Drag the instructions from the “Toolbox” at the bottom and drop them inside “Your Program” on the right side. </p><p> After creating a whole list in your program, you can click “Run” and wait for Robo to execute the instructions in your program. </p><p> “Ask me for help at anytime by a click on my picture and follow my tips”.</p>",
            "exit": "<h4>You got it good job! <h4/><p> Using Automation you were able to write a program using the computer instructions “Step Forward” and “Pick Up Part” to execute Robo to find the first part of his spaceship. </p>",
            "help": "<p>Having trouble?  here are some tips:</p><p> 1. Robo has to walk 2 steps forward then pick up the part. </p><p> 2. Robo cannot step on the spaceship part. </p><p> 3. You can clear your program and start over at any time by clicking “Start Over” button.</p>",
            "jumpCode": 1,
			"instructions": [
				{
					"id": "step-forward",
					"quantity": "unlimited"
				},
				{
					"id": "pick-up-part",
					"quantity": 1
				}
			],
            "perfectInstructionCount": 3,
			"map": [
				[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
				[' ',' ',' ','x',' ',' ',' ','x','x','x',' ','x'],
				[' ','x',' ',' ',' ','x',' ','x','e','x',' ',' '],
				[' ',' ',' ',' ',' ',' ',' ','x',' ','x','x',' '],
				[' ',' ',' ','x',' ',' ',' ','x',' ','x',' ',' '],
				[' ',' ',' ',' ',' ','x',' ','x',' ','x',' ',' '],
				[' ',' ','x',' ',' ',' ',' ','x','x','x',' ','x'],
				[' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
			],
            "debuggerAvailable": false,
            "customFunctionAvailable": false,
            "runAvailable": true
		},
		{
			"id": "level-2",
			"name": "Automation - And Turn!",
            "number": 2,
            "environment": "wild-west",
            "defaultHeading": "up",
            "startPosition": {
                "column": 5,
                "row": 5
            },
            "intro": "<p> Hurray! You have new tools in your Toolbox “Turn Left” and “Turn Right”. </p><p> In this level you will be able to apply the Automation concept you learned in level 1 by using more Computer Instructions.</p><p> You can give Robo different instructions as needed to reach the part. </p>",
            "exit": "<H4>Fantastic! </H4> <p> By using different types of computer instructions you were able to Automate Robo during the path to the part.</p><p> Computers are programmed by putting together groups of computer instructions to accomplish a task. </p>",
            "help": "<p> Having trouble? Let me help: </p><p> 1. You have different options to reach the part in this level. </p><p> 2. The shortest path for Robo would be to step forward 2 times, turn right, and then pick up the part.</p>",
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
					"id": "pick-up-part",
					"quantity": 1
				}
			],
            "perfectInstructionCount": 4,
			"map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
				[' ',' ',' ',' ','x','x','x','x',' ',' ',' ',' '],
				[' ',' ','x',' ','x',' ','e','x','x',' ',' ',' '],
				[' ',' ',' ',' ','x',' ',' ','x',' ',' ',' ',' '],
				[' ',' ',' ',' ','x',' ',' ','x',' ',' ','x',' '],
				[' ','x',' ',' ','x','x','x','x',' ','x',' ',' '],
				[' ',' ',' ','x',' ',' ',' ',' ',' ',' ',' ',' ']
			],
            "debuggerAvailable": false,
            "customFunctionAvailable": false,
            "runAvailable": true
		},
        {
            "id": "level-3",
            "name": "Debugging",
            "number": 3,
            "environment": "wild-west",
            "defaultHeading": "up",
            "startPosition": {
                "column": 5,
                "row": 5
            },
            "intro": "<p>In this level you will be introduced to the “Debugger”.</p><p> You are going to play the previous level but use the “Debugger” this time. </p><p> “Debugger” is a helpful tool that helps find coding errors if you have them in your program.</p><p> After creating a whole list in your program, instead of using “Run” and wait for Robo to execute the whole program you can use “Debugger” to watch Robo executing one instruction at a time by clicking on the “Next” button.</p>",
            "exit": "<H4> Perfect! </H4><p> A problem in a computer program is called a bug. </p><p> The process of finding bugs (errors) when writing a computer program is called “debugging”.</p><p> Now you know how to use “Debugger” to watch your program if you find errors.</p>",
            "help": "<p> Having trouble? follow my guidelines: </p><p> 1. You have different options to reach the part in this level. </p><p> 2. The shortest path for Robo would be to step forward 2 times, turn right, and then pick up the part.</p><p> 3. Click “Next” button to execute one instruction at a time. </p>",
            "jumpCode": 3,
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
                    "id": "pick-up-part",
                    "quantity": 1
                }
            ],
            "perfectInstructionCount": 4,
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ','x','x','x','x',' ',' ',' ',' '],
                [' ',' ','x',' ','x',' ','e','x','x',' ',' ',' '],
                [' ',' ',' ',' ','x',' ',' ','x',' ',' ',' ',' '],
                [' ',' ',' ',' ','x',' ',' ','x',' ',' ','x',' '],
                [' ','x',' ',' ','x','x','x','x',' ','x',' ',' '],
                [' ',' ',' ','x',' ',' ',' ',' ',' ',' ',' ',' ']
            ],
            "debuggerAvailable": true,
            "customFunctionAvailable": false,
            "runAvailable": false
        },

        {
            "id": "level-4",
            "name": "Limited Number of Instructions",
            "number": 4,
            "environment": "country-green",
            "defaultHeading": "right",
            "startPosition": {
                "column": 7,
                "row": 5
            },
            "intro": "<p> In this level you will have a limited number of instructions. </p><p> Robo could use many paths to reach the part; however, only one path would allow him to reach the part. </p><p> You will see the remaining number near some instructions in your “Toolbox”. <br> After the number reaches 0 you can no more use those instructions. </p>",
            "exit": "<H4> Brilliant job! </H4><p> Although it is always a good habit to have a few instructions in your program, sometimes with real programming you might have limited number of resources (instructions) to use. </p><p> By completing this level you successfully used the other path to the part as you had few instructions if choosing the shortest path. </p>",
            "help": "<p> 1.	Robo can only take the path to the right in order to reach the part. </p><p> 2.	Robo has to start by stepping forward 2 times. </p>",
            "jumpCode": 4,
            "instructions": [
                {
                    "id": "step-forward",
                    "quantity": "unlimited"
                },
                {
                    "id": "turn-left",
                    "quantity": 2
                },
                {
                    "id": "turn-right",
                    "quantity": 1
                },
                {
                    "id": "pick-up-part",
                    "quantity": 1
                }
            ],
            "perfectInstructionCount": 10,
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ','x','x',' ','x','x','x',' ',' ',' '],
                [' ',' ',' ','x',' ',' ',' ',' ',' ',' ','x',' '],
                [' ',' ',' ','x',' ','e',' ',' ',' ',' ','x',' '],
                [' ',' ',' ','x',' ','x',' ','x','x',' ','x',' '],
                [' ',' ',' ','x',' ',' ',' ',' ',' ',' ','x',' '],
                [' ',' ',' ','x',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ','x',' ',' ','x',' ',' ',' ',' ']
            ],
            "debuggerAvailable": true,
            "customFunctionAvailable": false,
            "runAvailable": true
        },
        {
            "id": "level-5",
            "name": "Loops - Over and over again.",
            "number": 5,
            "environment": "country-green",
            "defaultHeading": "up",
            "startPosition": {
                "column": 5,
                "row": 3
            },
            "intro": "<p>In this level you will be introduced to the programming concept “Loop”! You will automate Robo to walk but use the required instruction one time only by taking advantage of the “Repeat” instruction. <br> <br>Drag the “Repeat” instruction from “Build Your Program” box and drop it into “Your Program”. Drag the instruction you need Robo to repeat in order to reach the goal. Right click on the “Repeat” instruction and give it a parameter “the number of times you need Robo to repeat the following instruction”. </p>",
            "exit": "<p> Well Done! <br> <br>  By using the “Loop with Parameter” you were able to repeat the instruction you needed Robo to execute many times by writing less code in your program instead of writing the same instruction over and over.  </p>",
            "help": "<p>Having trouble?  here's a tip:<br>  <br> You can automate Robo to repeat stepping forward 4 times instead of writing the same instruction 4 times by using the loop instruction “Repeat“.</p>",
            "jumpCode": 5,
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
                    "quantity": 2
                },
                {
                    "id": "turn-right",
                    "quantity": 2
                },
                {
                    "id": "pick-up-part",
                    "quantity": 1
                }
            ],
            "perfectInstructionCount": 3,
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ','x','x','x','x','x','x','x','x'],
                [' ',' ',' ',' ','x',' ',' ',' ',' ',' ','e','x'],
                [' ',' ',' ',' ','x',' ','x','x','x','x','x','x'],
                [' ',' ',' ',' ','x','x','x',' ',' ',' ',' ',' '],
                [' ',' ',' ','x',' ',' ',' ',' ','x',' ',' ',' '],
                [' ',' ',' ',' ','x',' ',' ',' ',' ',' ','x',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ','x',' ',' ',' ']
            ],
            "debuggerAvailable": true,
            "customFunctionAvailable": false,
            "runAvailable": true
        },
        {
            "id": "level-6",
            "name": " Loops with Multiple Instructions",
            "number": 6,
            "environment": "ocean",
            "defaultHeading": "up",
            "startPosition": {
                "column": 5,
                "row": 5
            },
            "intro": "<p>Stuff</p>",
            "exit": "<p>Stuff</p>",
            "help": "<p>Stuff</p>",
            "jumpCode": 6,
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
                    "quantity": 2
                },
                {
                    "id": "turn-right",
                    "quantity": 1
                },
                {
                    "id": "pick-up-part",
                    "quantity": 1
                }
            ],
            "perfectInstructionCount": 3,
            "map": [
                ['x',' ',' ',' ',' ',' ',' ',' ','x','x',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ','x','e','x',' ',' '],
                ['x',' ','x',' ',' ',' ','x',' ',' ','x',' ',' '],
                [' ',' ',' ',' ',' ','x',' ',' ','x',' ',' ',' '],
                [' ',' ',' ',' ','x',' ',' ','x',' ',' ','x',' '],
                [' ',' ',' ',' ','x',' ','x',' ',' ',' ',' ',' '],
                ['x',' ',' ',' ','x','x',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ']
            ],
            "debuggerAvailable": true,
            "customFunctionAvailable": false,
            "runAvailable": true
        },
        {
            "id": "level-7",
            "name": " Conditional Loop - Keep on moving!",
            "number": 7,
            "environment": "ocean",
            "defaultHeading": "right",
            "startPosition": {
                "column": 4,
                "row": 6
            },
            "intro": "<p>In this level you will learn how to use a “Conditional Loop” in programming. You will automate Robo to repeat an instruction as long as a condition is true. Once the condition becomes false, Robo has to stop and pick up the goal.! <br> <br>   Drag the “Repeat While” instruction from “Build Your Program” box and drop it into “Your Program”. Select which condition should be true all the time while Robo is executing the repeated instruction. Select the instruction you want Robo to repeat until the previous condition becomes false and drop it inside the “Repeat While” tree.<br> Don’t forget to end your program by dragging the instruction “Pick Up Goal”.</p>",
            "exit": "<p> Amazing work! <br> <br>  By using the conditional loop you were able to instruct Robo to repeat an instruction as long as a condition is true. This way, your program had less code and was easier to write.</p>",
            "help": "<p>Let me help!  here's some tips:<br>  <br> 1. 1.	You can automate Robo to repeat the instruction “Step Forward” as long as the goal is not in front of him then pick up the goal. <br> 2. 2.	The instruction you want to repeat should appear in your program as if it’s inside “Repeat While”, its branch, not under it. </p>",
            "jumpCode": 7,
            "instructions": [
                {
                    "id": "repeat-while",
                    "quantity": "unlimited"
                },
                {
                    "id": "step-forward",
                    "quantity": 2
                },
                {
                    "id": "turn-left",
                    "quantity": 2
                },
                {
                    "id": "turn-right",
                    "quantity": 1
                },
                {
                    "id": "pick-up-part",
                    "quantity": 1
                }
            ],
            "perfectInstructionCount": 3,
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ','x','x','x',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ','x','e','x',' '],
                [' ',' ',' ','x','x','x','x','x','x',' ','x',' '],
                [' ',' ',' ','x',' ',' ',' ',' ',' ',' ','x',' '],
                [' ',' ',' ','x','x','x','x','x','x','x','x',' ']
            ],
            "debuggerAvailable": true,
            "customFunctionAvailable": false,
            "runAvailable": true
        },
        {
            "id": "level-8",
            "name": "Multiple Conditions",
            "number": 8,
            "environment": "beach",
            "defaultHeading": "right",
            "startPosition": {
                "column": 4,
                "row": 6
            },
            "intro": "<p>In this level you will apply what you have learned in the previous level about “Conditional Loops”. This time you will have the opportunity to use conditional loops many times and change the condition as needed every time. </p>",
            "exit": "<p> Brilliant job! <br> <br> By using different conditional loops in your program you were able to instruct Robo to repeat different instructions and use different conditions as needed every time. This way, although the path to the goal was long, your program had less instructions and was easier to write.</p>",
            "help": "<p>Let me help!  here's some tips: <br> <br> 1. You can automate Robo to repeat the instruction “Step Forward” as long as the wall is not in front of him then “Turn Left”, repeat the same thing for the next steps. 2. Remember that you can change the condition if the goal is in front of Robo not the wall! <br> <br> 3. You can use one or more instruction e.g. “Turn Left” to be executed after each loop terminate, which should appear in your program under the loop tree “Repeat While” not inside it. <br> <br> 4. Finally, don't forget to pick up the goal. </p>",
            "jumpCode": 8,
            "instructions": [
                {
                    "id": "repeat-while",
                    "quantity": "unlimited"
                },
                {
                    "id": "step-forward",
                    "quantity": 4
                },
                {
                    "id": "turn-left",
                    "quantity": 5
                },
                {
                    "id": "turn-right",
                    "quantity": 5
                },
                {
                    "id": "pick-up-part",
                    "quantity": 1
                }
            ],
            "perfectInstructionCount": 6,
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ','x','x','x','x','x','x'],
                [' ',' ',' ',' ',' ',' ','x','e',' ',' ',' ','x'],
                [' ',' ',' ',' ',' ',' ','x','x','x','x',' ','x'],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ','x',' ','x'],
                [' ',' ',' ','x','x','x','x','x','x','x',' ','x'],
                [' ',' ',' ','x',' ',' ',' ',' ',' ',' ',' ','x'],
                [' ',' ',' ','x','x','x','x','x','x','x','x','x']
            ],
            "debuggerAvailable": true,
            "customFunctionAvailable": false,
            "runAvailable": true
        },
        {
            "id": "level-9",
            "name": "Optimization!",
            "number":9,
            "environment": "orange-fall",
            "defaultHeading": "up",
            "startPosition": {
                "column": 4,
                "row": 6
            },
            "intro": "<p>In this level you will be introduced to the Optimization concept. Try to reduce the number of steps by replacing some instructions.</p>",
            "exit": "<p> Awesome! <br> <br> Optimization allowed you to use a different instruction to reduce the amount of instructions needed to automate Robo to turn every time he faces an obstacle during the path to the goal. </p>",
            "help": "<p> Having trouble?  here's a tip:<br>  <br> Use “Shuffle” to turn faster instead of “Turn” then “Step Forward”. </p>",
            "jumpCode": 9,
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
                    "id": "pick-up-part",
                    "quantity": 1
                }
            ],
            "perfectInstructionCount": 6,
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ',' ','x','x','x',' ',' ',' '],
                [' ',' ',' ','x','x','x','x','e','x',' ',' ',' '],
                [' ',' ',' ','x',' ',' ',' ',' ','x',' ',' ',' '],
                [' ',' ',' ','x',' ','x','x','x','x',' ',' ',' '],
                [' ',' ',' ','x',' ','x',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ','x','x','x',' ',' ',' ',' ',' ',' ']
            ],
            "debuggerAvailable": true,
            "customFunctionAvailable": false,
            "runAvailable": true
        },
        {
            "id": "level-10",
            "name": "Functions",
            "number":10,
            "environment": "orange-fall",
            "defaultHeading": "right",
            "startPosition": {
                "column": 2,
                "row": 5
            },
            "intro": "<p>stuff</p>",
            "exit": "<p>stuff</p>",
            "help": "<p>stuff</p>",
            "jumpCode": 10,
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
                    "id": "pick-up-part",
                    "quantity": 1
                },
                {
                    "id": "custom-function-999",
                    "quantity": "unlimited"
                }
            ],
            "perfectInstructionCount": 6,
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ','x','x',' ',' ','x','x',' '],
                [' ','x',' ','x',' ',' ',' ','x',' ',' ',' ',' '],
                [' ',' ',' ','x',' ',' ',' ','x',' ',' ',' ',' '],
                [' ',' ',' ','x',' ',' ',' ','x',' ',' ','x',' '],
                [' ',' ',' ','x',' ',' ',' ','x',' ','e','x',' '],
                [' ',' ',' ',' ',' ','x',' ',' ',' ',' ','x',' '],
                [' ','x','x','x','x','x','x','x',' ',' ',' ',' ']
            ],
            "debuggerAvailable": true,
            "customFunctionAvailable": true,
            "runAvailable": true
        },
        {
            "id": "level-11",
            "name": "Make Your Own Function",
            "number":11,
            "environment": "orange-fall",
            "defaultHeading": "right",
            "startPosition": {
                "column": 2,
                "row": 5
            },
            "intro": "<p>stuff</p>",
            "exit": "<p>stuff</p>",
            "help": "<p>stuff</p>",
            "jumpCode": 11,
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
                    "id": "pick-up-part",
                    "quantity": 1
                },
                {
                    "id": "custom-function-999",
                    "quantity": "unlimited"
                }
            ],
            "perfectInstructionCount": 6,
            "map": [
                [' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ','x','x',' ',' ','x','x',' '],
                [' ','x',' ','x','x',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ','x','x',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ','x',' ',' ',' ',' ','x',' '],
                [' ',' ',' ','x',' ','x',' ','x',' ','e','x',' '],
                [' ',' ',' ','x',' ',' ',' ','x',' ',' ','x',' '],
                [' ','x','x','x','x','x','x','x',' ',' ',' ',' ']
            ],
            "debuggerAvailable": true,
            "customFunctionAvailable": true,
            "runAvailable": true
        }
	];
});

