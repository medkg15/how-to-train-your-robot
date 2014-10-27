<div data-bind="if: currentView() === 'jump'">
    <div class="well">
        <div class="form-group">
            <label>Jump to level code:</label>
            <input type="text" class="form-control" data-bind="value: jumpCode"/>
            <button data-bind="click: levelJump">Go</button>
        </div>
    </div>
</div>
