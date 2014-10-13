<div data-bind="if: currentView() === 'build-program'">

    <div class="row">

        <div class="col-md-8" data-bind="with: currentLevel">

            <?php include "map.php"; ?>

        </div>

        <div class="col-md-4" id="program" data-bind="css: { 'empty': hasNoProgram }">
            <h2>Your Program:</h2>

            <p class="empty-message">Drag your program elements here!</p>
            <div data-bind="programTree: program" class="jstree-bootstrap">
            </div>

            <a href="#" class="btn btn-success" data-bind="click: execute">Go</a>
            <a href="#" data-bind="click: clearProgram" class="btn btn-danger">Clear</a>

        </div>


    </div>

    <div id="inventory">
        <h2>Build Your Program</h2>

        <div class="jstree-bootstrap" data-bind="inventoryTree: treeAvailableInstructions">
        </div>


    </div>

</div>