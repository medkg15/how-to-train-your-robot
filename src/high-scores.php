<?php require_once('services/includes/data_access.php'); ?>
<div class="page-container" data-bind="if: currentView() === 'high-scores'">
    <div class="well">
        <h1>High Scores</h1>
        <div data-bind="if: loadingHighScores">
            <div class="progress">
                <div class="progress-bar progress-bar-striped active" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style="width: 100%">
                    <span class="sr-only">Loading...</span>
                </div>
            </div>
        </div>
        <table class="table table-border" data-bind="if: !loadingHighScores()">
            <thead>
            <tr>
                <th></th>
                <th>Level</th>
                <th>Score</th>
                <th>Date</th>
            </tr>
            </thead>
            <tbody data-bind="foreach: highScores">
            <tr>
                <td><img src="pics/Robot_Character2_Pink.png" height="200"/></td>
                <td data-bind="text: level"></td>
                <td data-bind="text: score"></td>
                <td data-bind="text: date"></td>
            </tr>
            </tbody>
        </table>
    </div>
</div>