angular.module('robotTraining')
    .factory('storageOptions', [function () {
        var options = [
            {label: 'Left Hand', register: 'left'},
            {label: 'Right Hand', register: 'right'}
        ];

        return function () {
            return options;
        };
    }])
    .factory('inventory', ['storageOptions', function (storageOptions) {
        return function () {

            var options = storageOptions();

            return [
                {
                    "id": 1,
                    "title": "Step Forward",
                    "body": [],
                    "nodrop": false,
                    "programInstructionId": "1-0"
                }, {
                    "id": 2,
                    "title": "Turn Right",
                    "body": [],
                    "nodrop": false,
                    "programInstructionId": "2-0"
                }, {
                    "id": 3,
                    "title": "Turn Left",
                    "body": [],
                    "nodrop": false,
                    "programInstructionId": "3-0"
                }, {
                    "id": 4,
                    "title": "Pick Up With",
                    "register": options[0],
                    "body": [],
                    "nodrop": false,
                    "programInstructionId": "4-0"
                }, {
                    "id": 5,
                    "title": "Put Down From",
                    "register": options[0],
                    "body": [],
                    "nodrop": false,
                    "programInstructionId": "5-0"
                }, {
                    "id": 6,
                    "title": "Repeat",
                    "body": [],
                    "nodrop": true,
                    "programInstructionId": "6-0"
                }
            ];
        };
    }]);