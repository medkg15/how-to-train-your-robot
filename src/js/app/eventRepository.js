/**
 * Handles persistence of all game event tracking information.
 */
define(['jquery'], function($){

    return function eventRecord () {

        this.startGame = function(callback) {
            $.post(
                '/services/start-game',
                JSON.stringify({

                }),
                function(data){
                    callback(data);
                },
                "json");
        };

        this.startLevel = function(gameSessionID, levelID, callback) {
            $.post(
                '/services/start-level',
                JSON.stringify({
                    session_id: gameSessionID,
                    level_id: levelID }),
                function(data){
                    callback(data);
                },
                "json");
        };

        this.failAttempt = function (levelSessionID, failedAttempt, callback) {
            $.post(
                '/services/failed-attempt',
                JSON.stringify({
                    level_id: levelSessionID,
                    program: failedAttempt.program,
                    start: failedAttempt.start,
                    end: failedAttempt.end
                }),
                function(data){
                    callback(data);
                },
                "json");
        };

        this.completeLevel = function (levelSessionID, successfulAttempt, score, callback) {
            $.post(
                '/services/complete-level',
                JSON.stringify({
                    level_id: levelSessionID,
                    program: successfulAttempt.program,
                    attempt_start: successfulAttempt.start,
                    attempt_end: successfulAttempt.end,
                    score: score
                }),
                function(data){
                    callback(data);
                },
                "json");
        };

        this.completeGame = function (gameSessionID, callback) {
            $.post(
                '/services/complete-game',
                JSON.stringify({
                    session_id: gameSessionID
                }),
                function(data){
                    callback(data);
                },
                "json");
        };

    };
});