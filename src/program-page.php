<div data-bind="if: currentView() === 'build-program'">


    <h1>Level <span data-bind="text: currentLevel().number"></span> <span class="small"
                                                                          data-bind="text: currentLevel().name"></span>
    </h1>

    <div class="row">

        <div class="col-md-8" data-bind="with: currentLevel">

            <?php include "map.php"; ?>

        </div>

        <div class="col-md-4" id="program" data-bind="css: { 'empty': hasNoProgram }">
            <div class="well">
                <h2>Your Program:</h2>

                <p class="empty-message">Drag your program elements here!</p>

                <div data-bind="programTree: program" class="jstree-bootstrap">
                </div>

                <button class="btn btn-success"
                        data-bind="click: execute, disable: isExecuting, enable: programInstructions().length > 0">Go
                </button>
                <button data-bind="click: clearProgram, disable: isExecuting, enable: programInstructions().length > 0"
                        class="btn btn-danger">Clear
                </button>
                <button data-bind="click: pause, enable: isExecuting, text: isPaused() ? 'Unpause' : 'Pause'"
                        class="btn btn-info">Pause
                </button>

            </div>
        </div>


    </div>

    <div id="inventory" class="well">
        <h2>Build Your Program</h2>

        <div class="jstree-bootstrap" data-bind="inventoryTree: treeAvailableInstructions">
        </div>


    </div>

    <?php include "condition-modal.php"; ?>

</div>