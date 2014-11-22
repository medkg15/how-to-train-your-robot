<div data-bind="if: currentView() === 'build-program'">

    <div class="row">

        <div class="col-md-8">

            <img src="/images/Persona.png" alt="Persona" id="persona"
                 data-bind="personaDialog: personaText, click: showHelp"/>

            <div data-bind="with: currentLevel">
                <?php include "map.php"; ?>
            </div>

        </div>

        <div class="col-md-4">
            <div class="well">
                <div id="program" data-bind="css: { 'empty': hasNoProgram }">

                    <button
                        data-bind="click: clearProgram, visible: !isExecuting() && programInstructions().length > 0 && !canAdvance()"
                        class="btn btn-danger pull-right">Start Over
                    </button>
                    <h3>Your Program:</h3>

                    <div data-bind="if: levelAttempts">
                        Attempt #<span data-bind="text: levelAttempts"></span>
                    </div>

                    <div data-bind="programTree: program" class="jstree-bootstrap">
                    </div>

                    <button class="btn btn-success"
                            data-bind="click: execute, disable: isExecuting() || canAdvance() || hasNoProgram()">
                        Run
                    </button>
                    <button
                        data-bind="click: stop, visible: isExecuting"
                        class="btn btn-danger">Stop
                    </button>

                    <div data-bind="if: debuggerAvailable">

                        <h3 data-bind="tooltip: {title: 'You can use the debugger to watch the program one instruction at a time to see where your robot is having a problem.', placement: 'left'}">
                            Debugger</h3>

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

    <div data-bind="visible: !isExecuting() && !canAdvance()">

        <div id="inventory" class="well">
            <h3 style="display:inline;"
                data-bind="tooltip: {title: 'Use these instructions to tell your robot what to do!', placement: 'right'}">
                Toolbox</h3>

            <div class="jstree-bootstrap" data-bind="inventoryTree: treeAvailableInstructions">
            </div>

        </div>
        <div class="well" id="function" data-bind="visible: customFunctionAvailable, css: { 'empty': emptyFunction }">

            <button data-bind="click: createFunction, visible: !buildingFunction()" class="btn btn-success">Create
                Function
            </button>

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
    </div>

    <div data-bind="visible: isExecuting()">
        <div data-bind="with: status" class="well">
            <h3>Robot Program Status:</h3>
            <ul>
                <li>Current Direction: <span data-bind="text: direction"></span></li>
                <li>Wall In Front?: <span data-bind="text: wallInFront"></span></li>
                <li>Part In Front?: <span data-bind="text: ballInFront"></span></li>
                <li data-bind="visible: (countRemaining() !== null)">Repeat Count Remaining: <span data-bind="text: countRemaining"></span></li>
                <li>Has Part?: <span data-bind="text: hasBall"></span></li>
            </ul>
        </div>
    </div>

    <?php include "condition-modal.php"; ?>

</div>