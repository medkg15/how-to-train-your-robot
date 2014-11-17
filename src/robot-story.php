<div data-bind="if: currentView() === 'robot-story'">
    <div class="well">
        <div class="row">
            <div class="col-md-8">
                <h1> Welcome to Robot Training</h1>

                <p>
                   One day Robo was discovering the world with his spaceship...<br>Unfortunately, the spaceship had exploded in the space and tear apart in many lands<br><br>In this game you will be introduced to different programming concepts as you help Robo collect the parts of his spaceship from the different environments
                </p>
                <p><img src="pics/explosion.png" width="1100" height="600"/></p>
            </div>

            <div class="col-md-4">

                <br><br><br><br><br><br><br><br><p><img src="pics/Robot_Character1_Blue.png" width="250" height="287"/></p>

                <p><img src="pics/Robot_Character1_Pink.png" width="250" height="290"/></p>
            </div>
        </div>


        <button data-bind="click: startFirstLevel" class="btn btn-lg btn-primary btn-block">Start Game</button>
    </div>
</div>