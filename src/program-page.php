<div data-bind="if: currentView() === 'build-program'">

    <div class="row">

        <div class="col-md-8">

            <img src="/images/Persona.png" alt="Persona" id="persona" data-bind="personaDialog: personaText, click: showHelp"/>

            <div  data-bind="with: currentLevel">
                <?php include "map.php"; ?>
            </div>

        </div>

        <div class="col-md-4">
            <div class="well">
                <div id="program" data-bind="css: { 'empty': hasNoProgram }">
                    <h2>Your Program:</h2>
                    <div data-bind="if: levelAttempts">
                        Attempt #<span data-bind="text: levelAttempts"></span>
                    </div>
                    <button
                        data-bind="click: clearProgram, visible: !isExecuting() && programInstructions().length > 0 && !canAdvance()"
                        class="btn btn-danger">Clear Program
                    </button>

                    <div data-bind="programTree: program" class="jstree-bootstrap">
                    </div>

                    <button class="btn btn-success"
                            data-bind="click: execute, disable: isExecuting() || canAdvance(), enable: programInstructions().length > 0">
                        Run
                    </button>
                    <button
                        data-bind="click: stop, visible: isExecuting"
                        class="btn btn-danger">Stop
                    </button>

                    <div data-bind="if: debuggerAvailable">

                        <h3 data-bind="tooltip: {title: 'You can use the debugger to watch the program one instruction at a time to see where your robot is having a problem.', placement: 'left'}">Debugger</h3>

                        <button class="btn btn-success"
                                data-bind="click: executeOnce, enable: programInstructions().length > 0">
                            Next
                        </button>
                        <button class="btn btn-success"
                                data-bind="click: pause, enable: programInstructions().length > 0, visible: isExecuting">
                            Continue
                        </button>
                        <button data-bind="click: stop, visible: isExecuting"
                                class="btn btn-danger">
                            Stop
                        </button>

                    </div>

                </div>
            </div>
        </div>


    </div>

    <div id="inventory" class="well">
        <h2>Build Your Program</h2>

        <div class="jstree-bootstrap" data-bind="inventoryTree: treeAvailableInstructions">
        </div>

    </div>
    <div class="well" id="function" data-bind="css: { 'empty': emptyFunction }">

        <button data-bind="click: createFunction, visible: !buildingFunction()" class="btn btn-success">Create Function</button>

        <div data-bind="if: buildingFunction">
            <div class="form-group">
                <label>Name:</label>
                <input type="text" data-bind="value:functionName" class="form-control"/>
            </div>
            <div data-bind="programTree: functionTree" class="jstree-bootstrap">
            </div>
            <button data-bind="click: saveFunction" class="btn btn-primary">Save</button>
        </div>


    </div>

    <?php include "condition-modal.php"; ?>

</div>