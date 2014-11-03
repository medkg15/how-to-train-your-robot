<?php require_once('services/includes/data_access.php');?>
<div class="page-container" data-bind="if: currentView() === 'high-scores'">
<div class="well">
    <h1>High Scores</h1>
    <table class="table table-border">
        <thead>
        <tr>
            <th></th>
            <th>Level ID</th>
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
            echo'<tr>';
            echo'<td><img src="pics/Robot_Character2_Blue.png" height="200"/></td>';
            echo'<td>'.$row['level_id'].'</td>';
            echo'<td>'.$row['highscore'].'</td>';
            echo'<td>'.$row['end'].'</td>';
            echo'</tr>';

        }

        ?>
        <tr>
            <td><img src="pics/Robot_Character2_Pink.png" height="200"/></td>
            <td>Level 2</td>
            <td>342</td>
            <td>Thursday, October 16, 2014</td>
        </tr>
        <tr>
            <td><img src="pics/Robot_Character2_Blue.png" height="200"/></td>
            <td>Level 2</td>
            <td>322</td>
            <td>Tuesday, October 14, 2014</td>
        </tr>
        <tr>
            <td><img src="pics/Robot_Character2_Pink.png" height="200"/></td>
            <td>Level 2</td>
            <td>251</td>
            <td>Thursday, October 16, 2014</td>
        </tr>
        </tbody>
    </table>
</div>
</div>