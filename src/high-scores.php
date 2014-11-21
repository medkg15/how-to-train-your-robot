<?php require_once('services/includes/data_access.php'); ?>
<div class="page-container" data-bind="if: currentView() === 'high-scores'">
<div class="well">
    <h1>High Scores</h1>
    <table class="table table-border">
        <thead>
        <tr>
            <th></th>
            <th>Level</th>
            <th>Score</th>
            <th>Date</th>
        </tr>
        </thead>
        <tbody>
        <?php
        $data_access = new DataAccess();
        $highscores_array = $data_access->get_highscores();

        foreach ($highscores_array as $row)
        {
            $date = date_create($row['end']);
            $dateScore = date_format($date, 'l, F jS, Y \a\t g:ia');
            echo'<tr>';
            echo'<td><img src="pics/Robot_Character1_Blue.png" height="60"/></td>';
            echo'<td>'.$row['level_id'].'</td>';
            echo'<td>'.$row['highscore'].'</td>';
            echo'<td>'.$dateScore.'</td>';
            echo'</tr>';

        }

        ?>
        </tbody>
    </table>
</div>
</div>