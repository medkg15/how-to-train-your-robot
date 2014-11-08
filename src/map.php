<div id="map" data-bind="foreach: { data: map, as: 'row'}">

    <div class="row" data-bind="foreach: { data:row, as: 'cell' }">

        <div class="col-md-1" data-bind="css: $parents[1].cellClass(cell)"></div>

    </div>

</div>