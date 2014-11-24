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
            "intro": "<p>In this level you will be introduced to the “Automation” concept by using two Computer Instructions “Step Forward” and “Pick Up Part”.</p><p>  In order for Robo to reach the 1st spaceship part, he must walk step by step following your instructions.</p><p> Drag the instructions from the “Toolbox” at the bottom and drop them inside “Your Program” on the right side. </p><p> After creating your program, you can click “Run” and watch Robo follow your instructions. </p><p> &quot;Ask me for help at any time by clicking on my picture.&quot;</p>",
            "exit": "<h4>You got it, good job! <h4/><p>You helped Robo find the first part of his spaceship by writing a program using the computer instructions “Step Forward” and “Pick Up Part”. </p>",
            "help": "<p>Having trouble?  Here are some tips:</p><p> 1. Robo has to walk 2 steps forward and then pick up the part. </p><p> 2. Robo cannot step on the spaceship part. </p><p> 3. You can clear your program and start over at any time by clicking “Start Over” button.</p>",
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
            "intro": "<p> Hurray! You have new tools in your Toolbox: “Turn Left” and “Turn Right”. </p><p> In this level you will be able to apply the Automation concept you learned in level 1 by using more Computer Instructions.</p><p> You can use the new instructions to help Robo reach the part. </p>",
            "exit": "<H4>Fantastic! </H4> <p> Using the new computer instructions you were able to direction Robo reach to the part.</p><p> Computers are programmed by putting together groups of instructions to accomplish a task. </p>",
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
            "intro": "<p>In this level you will be introduced to the “Debugger”.</p><p> You are going to play the previous level but use the “Debugger” this time. </p><p>The “Debugger” is a tool that helps find coding errors in your program.</p><p> After creating your program, use &quot;Next&quot; to run your program one instruction at a time.  You can see the status of your program at the bottom of the screen.</p>",
            "exit": "<H4> Perfect! </H4><p> Now you know how to use the “Debugger” to help you find errors in your program.</p><p> An error in a computer program is called a bug.  The process of finding bugs is called “debugging”.</p>",
            "help": "<p> Having trouble? Follow my guidelines: </p><p> 1. You have different options to reach the part in this level. </p><p> 2. The shortest path for Robo would be to step forward 2 times, turn right, and then pick up the part.</p><p> 3. Click “Next” button to execute one instruction at a time. </p><p>4. You can &quot;Continue&quot; to finish running the program without stopping.</p>",
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
            "intro": "<p> In this level you will have a limited number of each instruction. </p><p> Robo could use any path to reach the part but you only have enough instructions for one.  Can you figure out which path you can take?</p><p> The remaining number of each instruction is shown in your Toolbox.</p>",
            "exit": "<H4> Brilliant job! </H4><p> In this level you successfully found the only possible path using the limited instructions available.  </p><p> Sometimes when programming you have a limited number of resources (instructions) available to you.  You may need to explore other solutions to a problem. </p>",
            "help": "<p> Let me help: </p><p> 1. Robo can only take the path to the right in order to reach the part. </p><p> 2.	Robo has to start by stepping forward 2 times. </p>",
            "jumpCode": 4,
            "instructions": [
                {
                    "id": "step-forward",
                    "quantity": 7
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
            "intro": "<p> You have a new tool in your Toolbox called “Repeat”. </p><p> You can program Robo to &quot;Repeat&quot; an instruction multiple times while only using one of your remaining instructions.</p><p> Drag the “Repeat” instruction from your “Toolbox” and drop it into “Your Program”.</p><p> Drag the instruction you need Robo to repeat inside the “Repeat” instruction.</p><p> Tell the “Repeat” instruction how many times to run by entering a number.</p>",
            "exit": "<h4> Well Done!</h4><p> By using “Repeat” you were able to run the instructions you needed many times while using fewer instructions in your program.  </p>",
            "help": "<p> Here are some guidelines to help you:<br>  <br> 1. The instruction you want to repeat should appear in your program as if it’s inside “Repeat”, not under it.</p><p> 2. You can tell Robo to repeat &quot;Step Forward&quot; four times instead of dragging the instruction four times.</p>",
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
            "perfectInstructionCount": 5,
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
            "intro": "<p>Robo can repeat several instructions at a time.  Try adding several instructions to a Repeat loop in order to go around corners! </p>",
            "exit": "<H4> Great job! </H4><p> You set up a Repeat loop with several instructions inside of it, helping you get around corners. </p>",
            "help": "<p>A Repeat loop can have several instructions inside of it.  Try using Step Forward, Turn, Step Forward, and Turn inside of a Repeat loop to go around the corners.</p>",
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
            "perfectInstructionCount": 6,
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
            "intro": "<p> Hint! You have a new tool in your Toolbox “Repeat While”. </p><p> In this level you will learn how to use a “Conditional Loop” in programming. </p><p> You will automate Robo to repeat an instruction as long as a condition is true. <br> Once the condition becomes false, Robo has to stop and pick up the part!</p><p> Drag the “Repeat While” instruction from your “Toolbox” and drop it into “Your Program”.</p><p> Select which condition should be true all the time while Robo is executing the repeated instruction. </p><p> Drag the instruction you want Robo to repeat until the previous condition becomes false and drop it inside the “Repeat While” box.</p><p> Don’t forget to end your program by dragging the instruction “Pick Up Part”.</p>",
            "exit": "<p> Bravo! <br> <br>  By using the conditional loop you were able to instruct Robo to repeat an instruction as long as a condition is true.</p><p> This way, your program had less code and was easier to write.</p>",
            "help": "<p>Let me help!  follow my tips:<br>  <br> 1. The instruction you want to repeat should appear in your program as if it’s inside “Repeat While”, its branch, not under it. </p><p> 2. You can change the condition from the drop down menu next to “Repeat While” instruction. </p><p> 3. You can automate Robo to repeat the instruction “Step Forward” as long as the part is not in front of him then pick up the part. </p>",
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
            "perfectInstructionCount": 6,
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
            "intro": "<p>In this level you will enhance what you have learned in the previous level about “Conditional Loops”.</p><p> This time you will have the opportunity to use conditional loops many times and change the condition as needed every time. </p>",
            "exit": "<p> Outstanding work! <br> <br> By using different conditional loops in your program you were able to instruct Robo to repeat different instructions and use different conditions as needed every time.</p><p> This way, although the path to the part was long, your program had less instructions and was easier to write.</p>",
            "help": "<p>Let me help!  here are some tips: <br> <br> 1. You can automate Robo to repeat the instruction “Step Forward” as long as the wall is not in front of him then “Turn Left”, repeat the same thing for the next steps. 2. Remember that you can change the condition if the part is in front of Robo not the wall!</p><p> 3. You can use one or more instructions e.g. “Turn Left” to be executed after each loop terminate, which should appear in your program under the loop instruction “Repeat While” not inside it.</p><p> 4. Finally, don't forget to pick up the part. </p>",
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
            "perfectInstructionCount": 9,
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
            "intro": "<p> Hurray! You have new tools in your Toolbox “Shuffle Right” and “Shuffle Left”. </p><p> In this level you will be introduced to the “Optimization“ concept. </p><p> Try to reduce the number of steps by replacing some instructions.</p>",
            "exit": "<p> Awesome! <br> <br> Optimization allowed you to use different instructions to reduce the amount of instructions needed to automate Robo to turn every time he faces an obstacle during the path to the part. </p>",
            "help": "<p> Let me help:<br>  <br> 1. Use “Shuffle Right” to turn right faster instead of “Turn Right” then “Step Forward”.</p><p> 2. Continue using shuffle until you reach the part to reduce the amount of instructions in your program. </p>",
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
        },
        {
            "id": "level-12",
            "name": "Make it down the mountain",
            "number":11,
            "environment": "country-green",
            "defaultHeading": "right",
            "startPosition": {
                "column": 2,
                "row": 3
            },
            "intro": "<p>You have to make it down the mountain to get to the spaceship part</p>",
            "exit": "<p>stuff</p>",
            "help": "<p>stuff</p>",
            "jumpCode": 12,
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
                    "id": "repeat-while",
                    "quantity": "unlimited"
                },
                {
                    "id": "repeat",
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
            ],
            "perfectInstructionCount": 6,
            "map": [
                [' ',' ',' ','x','x','x','x',' ',' ',' ',' ',' '],
                [' ',' ',' ','x',' ','x','x',' ',' ','x','x',' '],
                [' ',' ',' ',' ','x',' ',' ',' ',' ',' ',' ',' '],
                [' ',' ',' ',' ',' ','x','x',' ',' ',' ',' ',' '],
                [' ',' ','x',' ',' ',' ','x',' ',' ',' ','x',' '],
                [' ',' ',' ','x',' ',' ','x','x',' ',' ','x',' '],
                [' ',' ',' ','x','x',' ',' ',' ',' ','e','x','x'],
                [' ','x','x','x','x','x','x','x',' ',' ',' ',' ']
            ],
            "debuggerAvailable": true,
            "customFunctionAvailable": true,
            "runAvailable": true
        }
	];
});

