<div class="page-container" data-bind="if: currentView() === 'end-game'">

    <div class="well">
        <h1> Great Job!  Thanks for playing!  </h1>

        <div style="position:relative;">
            <img src="/images/Persona.png" alt="Persona"
                 data-bind="exitPersona: endStoryText" style="position:absolute; top:50px; left:10px;"/>
            <img src="/images/games.gif" style="position:absolute; right:100px; top:100px;"/>

            <img class="img-thumbnail" src="images/bgEndGame.png"/>

        </div>
    </div>
</div>