<div data-bind="if: currentView() === 'welcome'">


    <div class="row">
        <div class="col-md-9">
            <img src="/images/home-robots.png" alt="Robots" style="width:100%;"/>
        </div>
        <div class="col-md-3 home-sidebar">
            <img src="/images/logo.png" alt="Robot Training" style="width:100%;">

            <button class="btn-lg btn-block" data-bind="click: startGame">Play!</button>

            <button class="btn-lg btn-block">Customize</button>

            <button class="btn-lg btn-block">Training</button>
        </div>
    </div>

</div>
