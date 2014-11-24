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
            "jumpCode": "AC6E",
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
            "exit": "<H4>Fantastic! </H4> <p> Using the new computer instructions you were able to direct Robo reach to the part.</p><p> Computers are programmed by putting together groups of instructions to accomplish a task. </p>",
            "help": "<p> Having trouble? Let me help: </p><p> 1. You have different options to reach the part in this level. </p><p> 2. The shortest path for Robo would be to step forward 2 times, turn right, and then pick up the part.</p>",
            "jumpCode": "BCN2",
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
            "jumpCode": "MYNB",
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
            "jumpCode": "NBR5",
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
            "jumpCode": "98MV",
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
            "intro": "<p>Robo can repeat several instructions at a time.  Try adding a few instructions to a &quot;Repeat&quot; instruction in order to go around the corners! </p>",
            "exit": "<H4> Great job! </H4><p> You set up a &quot;Repeat&quot; with many instructions inside of it, helping you get around the corners. </p>",
            "help": "<p>A &quot;Repeat&quot; instruction can have many instructions inside of it.  Try using Step Forward, Turn, Step Forward, and Turn inside of a &quot;Repeat&quot; to go around the corners.</p>",
            "jumpCode": "23D3",
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
            "intro": "<p> You have a new instruction in your Toolbox called “Repeat While”. </p><p> You can tell Robo to repeat instructions as long as a status is true. Once the status becomes false, Robo will stop and run his next instruction.</p><p> Drag the “Repeat While” instruction from your “Toolbox” and drop it into “Your Program”.</p><p> Select which status will be true while repeating instructions.</p><p> Don’t forget to end your program by dragging the instruction “Pick Up Part”.</p>",
            "exit": "<h4> Bravo! </h4><p>  By using the &quot;Repeat While&quot; you were able to instruct Robo to repeat an instruction as long as a status is true.</p><p> Your program has less code and was easier to write.</p>",
            "help": "<p>Let me help!  Follow my tips:<br>  <br> 1. The instruction(s) you want to repeat should appear in your program as if it’s inside “Repeat While”, not under it. </p><p> 2. You can select the status from the drop down menu next to “Repeat While” instruction. </p><p> 3. You can tell Robo to repeat the instruction “Step Forward” until he has reached the wall. </p>",
            "jumpCode": "NBD9",
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
            "perfectInstructionCount": 5,
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
            "intro": "<p>In this level you will enhance what you have learned in the previous level about repetition.</p><p> This time you will have the opportunity to use &quot;Repeat While&quot; many times and change the status as needed each time. </p>",
            "exit": "<h4> Outstanding work! </h4><p> By using different &quot;While Repeat&quot; statuses in your program, you were able to help Robo collect the part.</p><p> Although the path to the part was long, your program only had a few instructions and was easy to write.</p>",
            "help": "<p>Let me help!  Here are some tips: <br> <br> 1. You can tell Robo to repeat the instruction “Step Forward” as long as the wall is not in front of him. Then “Turn Left”, and repeat the same thing for the next steps. </p><p> 2. Remember that you can change the status so that you check for the part, not a wall.</p><p> 3. Don't forget to pick up the part. </p>",
            "jumpCode": "6G7T",
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
            "intro": "<p> Hurray! You have new tools in your Toolbox: “Shuffle Right” and “Shuffle Left”. </p><p> In this level you will be introduced to “Optimization“. </p><p> Try to minimize the number of instructions that you use.</p>",
            "exit": "<h4> Awesome! </h4><p> Optimization allowed you to use fewer instructions to collect the part. </p>",
            "help": "<p> Let me help:<br>  <br> 1. Use “Shuffle Right” instead of using Turns and “Step Forward”.</p><p> 2. Continue using shuffle until you reach the part. </p>",
            "jumpCode": "ME12",
            "instructions": [
                {
                    "id": "step-forward",
                    "quantity": 3
                },
                {
                    "id": "turn-left",
                    "quantity": 4
                },
                {
                    "id": "turn-right",
                    "quantity": 4
                },
                {
                    "id": "shuffle-left",
                    "quantity": 3
                },
                {
                    "id": "shuffle-right",
                    "quantity": 3
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
            "intro": "<p>Check your Toolbox! </p><p>Sometimes you find yourself using the same series of instructions over and over.  These can be saved as &quot;Functions&quot; and reused as needed.  We have created a &quot;Function&quot; for you called “Go Right Around Obstacle“.</p><p> As you will see, the function has many instructions inside it. </p><p>Try using this function to quickly collect the part.</p>",
            "exit": "<H4> Fantastic! </H4><p>Functions are reusable sets of instructions that can help you to repeat the same task in more than one place in your program.  They can save you a lot of time because you only need to write the function once, and simply use it in other places.</p>",
            "help": "<p> Let me help:</p><p>1. Drag the &quot;Go Right Around Obstacle&quot; function into your program when you need to walk around one of the walls. </p><p>2. Walk between the walls in the middle with &quot;Step Forward&quot; </p>",
            "jumpCode": "VC3R",
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
            "perfectInstructionCount": 11,
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
            "customFunctionAvailable": false,
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
            "intro": "<p>In this level you can create your own function by clicking on the “Create Function” button below the “Toolbox”. </p><p> Type a descriptive name for the function, and drag instructions inside.</p> You can create as many functions as you like!</p>",
            "exit": "<H4> Well Done! </H4><p> Functions helped you to include the repeated tasks you needed Robo to perform in one group instead of repeating the same set of instructions again and again.</p><p>Although functions can make programming easier, they are not always the fastest solution.  Can you see how to complete this level using fewer instructions? </p>",
            "help": "<p> Having trouble? Here are some guidelines:</p><p> 1. Type a name for your function and click “Create Function”. Then drag instructions from the “Toolbox” into your function.</p> <p> 2.  Your function should mirror the &quot;Go Right Around Obstacle&quot; function, but should instead go left.</p>",
            "jumpCode": "93GB",
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
            "perfectInstructionCount": 13,
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
            "intro": "<p>You have to make it down the mountain to get to the spaceship part.</p>",
            "exit": "<h4>Great job!</h4><p>You collected the spaceship part!</p>",
            "help": "<p>Use what you've learned to collect the part!</p>",
            "jumpCode": "09B4",
            "instructions": [
                {
                    "id": "step-forward",
                    "quantity": 12
                },
                {
                    "id": "turn-left",
                    "quantity": 8
                },
                {
                    "id": "turn-right",
                    "quantity": 8
                },
                {
                    "id": "repeat-while",
                    "quantity": 4
                },
                {
                    "id": "repeat",
                    "quantity": 4
                },
                {
                    "id": "shuffle-left",
                    "quantity": 6
                },
                {
                    "id": "shuffle-right",
                    "quantity": 6
                },
                {
                    "id": "pick-up-part",
                    "quantity": 1
                },
            ],
            "perfectInstructionCount": 9,
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

