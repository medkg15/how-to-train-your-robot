<div data-bind="if: currentView() === 'robot-story'">
    <div class="well">
        <div class="row">
            <div class="col-md-8">
                <h1> Welcome to Robot Training</h1>

                <p>
                    One day Robo was discovering the world by his spaceship. <br> Unfortunately, the spaceship had
                    exploded in the space and tear apart in many lands. In this game you will be introduced to different
                    programming concepts as you help Robo collect the parts of his spaceship from the different
                    environments.
                </p>

                <p><img class="img-thumbnail" src="images/introductionBackground.jpg"/></p>


            </div>
            <div class="col-md-4">
                <p><br> <br><img src="pics/Robot_Character1_Blue.png" style="height:200px"/></p>

                <p><br> <br><img src="pics/Robot_Character1_Pink.png" style="height:200px"/></p>
            </div>
        </div>


        <button data-bind="click: startFirstLevel" class="btn btn-lg btn-primary btn-block">Start Game</button>
    </div>
</div>