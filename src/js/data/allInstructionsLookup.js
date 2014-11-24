define([], function () {

    return {

        "step-forward": {
            "id": "step-forward",
            "name": "Step Forward",
            "description": "Move your robot forward one space.",
            "type": "baseInstruction",
            "points": 10
        },
        "turn-left": {
            "id": "turn-left",
            "name": "Turn Left",
            "description": "Turn your robot to the left.",
            "type": "baseInstruction",
            "points": 10
        },
        "turn-right": {
            "id": "turn-right",
            "name": "Turn Right",
            "description": "Turn your robot to the right.",
            "type": "baseInstruction",
            "points": 10
        },
        "pick-up-part": {
            "id": "pick-up-part",
            "name": "Pick up Part",
            "description": "Tell your robot to pick up the part in front of it.",
            "type": "baseInstruction",
            "points": 10
        },
        "repeat": {
            "id": "repeat",
            "name": "Repeat",
            "description": "Repeat one or more instructions a set number of times.",
            "type": "parameterizedContainer",
            "points": 50,
            'count': 1
        },
        "repeat-while": {
            "id": "repeat-while",
            "name": "Repeat While",
            "description": "Repeat one or more instructions until the condition becomes false.",
            "type": "parameterizedContainer",
            "points": 100,
            'condition': 'Wall Not In Front'
        },
        "custom-function": {
            "id": "custom-function",
            "name": "Custom Function",
            "description": "User defined custom function prototype.",
            "type": "baseInstruction",
            "points": 50
        },
        "shuffle-left": {
            "id": "shuffle-left",
            "name": "Shuffle Left",
            "description": "Move your robot to the left without turning.",
            "type": "baseInstruction",
            "points": 50
        },
        "shuffle-right": {
            "id": "shuffle-right",
            "name": "Shuffle Right",
            "description": "Move your robot to the right without turning.",
            "type": "baseInstruction",
            "points": 50
        },
        "custom-function-999": {
            "id": "custom-function-999",
            "name": 'Go Right Around Obstacle',
            "description": "User defined custom function",
            "type": "function",
            "points": 50,
            "body": [
                "shuffle-right",
                "step-forward",
                "step-forward",
                "shuffle-left",
            ]
        }
    };
});