<div data-bind="if: currentView() === 'robot-story'">
    <div class="well">
        <div class="row">
            <div class="col-md-8" >
                <h1> Welcome to Robot Training</h1>

                <p>
                One day Robo was discovering the world by his spaceship. <br> Unfortunately, the spaceship had exploded in the space and tear apart in many lands. In this game you will be introduced to different programming concepts as you help Robo collect the parts of his spaceship from the different environments.
                <img src="images/introductionBackground.jpg" width=780" height="450"/>

                </p>

            </div>
            <div class="col-md-4">
                <p><br> <br><img src="pics/Robot_Character1_Blue.png" width="230" height="287"/></p>

                <p><br> <br><img src="pics/Robot_Character1_Pink.png" width="250" height="290"/></p>
            </div>
        </div>


        <button data-bind="click: startFirstLevel" class="btn btn-lg btn-primary btn-block">Start Game</button>
    </div>
</div>