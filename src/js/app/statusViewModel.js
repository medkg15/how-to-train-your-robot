define(['knockout'], function(ko){

    return function StatusViewModel(){
        var self = this;

        self.direction = ko.observable();
        self.wallInFront = ko.observable();
        self.ballInFront = ko.observable();
        self.countRemaining = ko.observable();
        self.currentInstruction = ko.observable();
        self.hasBall = ko.observable(false);

        self.reset = function(){
            self.direction(null);
            self.wallInFront(null);
            self.ballInFront(null);
            self.countRemaining(null);
            self.currentInstruction(null);
            self.hasBall(false);
        };
    };
});