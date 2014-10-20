<div id="map" data-bind="foreach: { data: map, as: 'row'}">


    <div class="row" data-bind="foreach: { data:row, as: 'column' }">

        <div class="col-md-1 wall" data-bind="visible: column.definition === 'x'"></div>
        <div class="col-md-1" data-bind="visible: $root.dontShowRobot($data)"></div>

        <div class="col-md-1 goal" data-bind="visible: column.definition === 'e'"></div>
        <div class="col-md-1 robot-up" data-bind="visible: $root.showRobot($data, 'up')"></div>
        <div class="col-md-1 robot-right" data-bind="visible: $root.showRobot($data, 'right')"></div>
        <div class="col-md-1 robot-down" data-bind="visible: $root.showRobot($data, 'down')"></div>
        <div class="col-md-1 robot-left" data-bind="visible: $root.showRobot($data, 'left')"></div>

    </div>

</div>