define(['jquery'], function ($) {

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
                    used_help: successfulAttempt.usedHelp
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
        }
    };
});