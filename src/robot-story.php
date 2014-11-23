<div data-bind="if: currentView() === 'robot-story'">
    <div class="well">
        <h1> Welcome to Robot Training</h1>

        <div style="position:relative;">
            <img src="/images/Persona.png" alt="Persona"
                 data-bind="introPersona: introStoryText" style="position:absolute; top:50px; left:10px;"/>
            <img src="/images/starving-stunned-dizzy1.gif" style="position:absolute; top:50px; height:200px; left:200px; bottom:0;"/>

            <img class="img-thumbnail" src="images/explosion.png"/>

        </div>
 </div>
</div>