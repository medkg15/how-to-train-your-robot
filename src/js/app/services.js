define(['jquery'], function ($) {

    return {
        startGame: function (cb) {
            $.ajax({
                url:'/services/start-game.php',
                contentType: 'application/json',
                dataType: 'json',
                type: 'POST'
            })
                .done(function (responseJSON) {
                    cb(responseJSON);
                })
                .fail(function(response){
                    console.log(response);
                });
        },
        completeLevel: function (sessionId, levelId, program, start, end, cb) {
            $.ajax({
                url:'/services/complete-level.php',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                    session_id: sessionId,
                    level_id: levelId, // right now this is the string id.. might change.
                    program: program,
                    start: start,
                    end: end
                }),
                type: 'POST'
            })
                .done(function (responseJSON) {
                    cb(responseJSON);
                })
                .fail(function(response){
                    console.log(response);
                });
        },

        failLevel: function (sessionId, levelId, program, start, end, cb) {
            $.ajax({
                url:'/services/failed-attempt.php',
                contentType: 'application/json',
                dataType: 'json',
                data: JSON.stringify({
                    session_id: sessionId,
                    level_id: levelId, // right now this is the string id.. might change.
                    program: program,
                    start: start,
                    end: end
                }),
                type: 'POST'
            })
                .done(function (responseJSON) {
                    cb(responseJSON);
                })
                .fail(function(response){
                    console.log(response);
                });
        }
    };

});