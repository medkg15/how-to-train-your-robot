<div data-bind="if: currentView() === 'level-jump'">
    <div class="well" data-bind="with: levelJump">
        <div class="form-group">
            <div data-bind="visible: message" class="alert alert-danger" role="alert">
                <p data-bind="text: message"></p>
            </div>
            <div class="form-group">
            <label>Jump to level code:</label>
            <input type="text" class="form-control" data-bind="value: jumpCode"/>
            </div>
            <button data-bind="click: jumpToLevel" class="btn btn-primary">Go</button>
        </div>
    </div>
</div>
