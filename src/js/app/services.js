define(['jquery', 'underscore', 'moment'], function ($, _, moment) {

    return {
        startGame: function (callback) {
            $.post(
                '/services/start-game.php',
                JSON.stringify({}),
                function (data) {
                    callback(data);
                },
                "json");
        },
        startLevel: function (gameSessionID, levelID, callback) {
            $.post(
                '/services/start-level.php',
                JSON.stringify({
                    session_id: gameSessionID,
                    level_id: levelID
                }),
                function (data) {
                    callback(data);
                },
                "json");
        },
        failAttempt: function (levelSessionID, failedAttempt, callback) {
            $.post(
                '/services/failed-attempt.php',
                JSON.stringify({
                    level_id: levelSessionID,
                    program: failedAttempt.program,
                    start: failedAttempt.start,
                    end: failedAttempt.end
                }),
                function (data) {
                    callback(data);
                },
                "json");
        },
        completeLevel: function (levelSessionID, successfulAttempt, score, callback) {
            $.post(
                '/services/complete-level.php',
                JSON.stringify({
                    level_id: levelSessionID,
                    program: successfulAttempt.program,
                    attempt_start: successfulAttempt.start,
                    attempt_end: successfulAttempt.end,
                    score: score,
                    used_help: successfulAttempt.usedHelp,
                    used_debugger: successfulAttempt.usedDebugger
                }),
                function (data) {
                    callback(data);
                },
                "json");
        },
        completeGame: function (gameSessionID, callback) {
            $.post(
                '/services/complete-game.php',
                JSON.stringify({
                    session_id: gameSessionID
                }),
                function (data) {
                    callback(data);
                },
                "json");
        },
        getHighScores: function (callback){
            $.get(
                '/services/high-scores.php',
                null,
                function(data){

                    var transformed = _.map(data, function(highScore){
                        return {
                            level: highScore.level_id,
                            score: highScore.highscore,
                            date: moment(highScore.end).format('LL')
                        };
                    });

                    callback(transformed);
                },
                "json"
            )
        }
    };
});