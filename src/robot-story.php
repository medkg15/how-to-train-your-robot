<div data-bind="if: currentView() === 'robot-story'">
    <div class="well">
        <h1> Welcome to Robot Training</h1>

        <div style="position:relative;">
            <img src="/images/Persona.png" alt="Persona"
                 data-bind="introPersona: introStoryText" style="position:absolute; top:50px; left:10px;"/>
            <img src="pics/Robot_Character1_Blue.png" style="height:200px; position:absolute;left:100px; bottom:0;"/>
            <img src="pics/Robot_Character1_Pink.png" style="height:200px;position:absolute;left:300px; bottom:0;"/>
            <img class="img-thumbnail" src="images/explosion.png"/>

        </div>
 </div>
</div>