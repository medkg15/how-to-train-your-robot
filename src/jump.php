<div data-bind="if: currentView() === 'jump'">
    <div class="well">
        <h2>Choose Level</h2>
        <p>If you want to play a specific level, just enter the code below!</p>
        <div class="form-group">
            <label>Level Code:</label>
            <input type="text" class="form-control" data-bind="value: jumpCode"/>
        </div>
        <button data-bind="click: levelJump" class="btn btn-primary">Play!</button>
    </div>
</div>
