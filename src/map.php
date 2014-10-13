<div id="map" class="well" data-bind="foreach: { data: map, as: 'row'}">


    <div class="row" data-bind="foreach: { data:row, as: 'column' }">

        <div class="col-md-1 glyphicon glyphicon-remove" data-bind="visible: column.definition === 'x'"></div>
        <div class="col-md-1" data-bind="visible: $root.dontShowRobot($data)"></div>

        <div class="col-md-1  glyphicon glyphicon-certificate" data-bind="visible: column.definition === 'e'"></div>
        <div class="col-md-1 glyphicon glyphicon-arrow-up" data-bind="visible: $root.showRobot($data, 'up')"></div>
        <div class="col-md-1 glyphicon glyphicon-arrow-right" data-bind="visible: $root.showRobot($data, 'right')"></div>
        <div class="col-md-1 glyphicon glyphicon-arrow-down" data-bind="visible: $root.showRobot($data, 'down')"></div>
        <div class="col-md-1 glyphicon glyphicon-arrow-left" data-bind="visible: $root.showRobot($data, 'left')"></div>

    </div>

</div>