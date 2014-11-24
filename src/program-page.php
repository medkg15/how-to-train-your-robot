<div data-bind="visible: currentView() === 'build-program'">

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
                        data-bind="click: clearProgram, visible: !isExecuting() && program().length > 0 && !canAdvance()"
                        class="btn btn-danger pull-right">Start Over
                    </button>
                    <h3>Your Program:</h3>

                    <div data-bind="if: levelAttempts">
                        Attempt #<span data-bind="text: levelAttempts"></span>
                    </div>

                    <div ng-controller="ProgramCtrl">
                        <div ui-tree="programOptions">
                            <ol ui-tree-nodes ng-model="program">
                                <li ng-repeat="instruction in program"
                                    ng-class="{current: instruction.currentlyExecuting}"
                                    ui-tree-node
                                    ng-include="'program_renderer.html'"
                                    popover-title="Error!" tooltip="{{instruction.message}}"></li>
                            </ol>
                        </div>

                        <div data-bind="visible: showDebug">
                            <pre class="code">{{ program | json }}</pre>
                        </div>
                    </div>
                    <div data-bind="if: currentView() === 'build-program'">
                        <div data-bind="programTree: program" class="jstree-bootstrap">
                        </div>
                    </div>

                    <div data-bind="visible: runAvailable">
                        <button class="btn btn-success"
                                data-bind="click: execute, disable: isExecuting() || canAdvance() || hasNoProgram()">
                            Run
                        </button>
                        <button
                            data-bind="click: stop, visible: isExecuting"
                            class="btn btn-danger">Stop
                        </button>
                    </div>

                    <div data-bind="if: debuggerAvailable">

                        <h3 data-bind="tooltip: {title: 'You can use the debugger to watch the program one instruction at a time to see where your robot is having a problem.', placement: 'left'}">
                            Debugger</h3>

                        <button class="btn btn-success"
                                data-bind="click: executeOnce, enable: program().length > 0">
                            Next
                        </button>
                        <button class="btn btn-success"
                                data-bind="click: pause, enable: program().length > 0, visible: isExecuting">
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


            <div ng-controller="InventoryCtrl">
                <div ui-tree="inventoryOptions">
                    <ol ui-tree-nodes ng-model="inventory">
                        <li ng-repeat="instruction in inventory" class="inline"
                            ui-tree-node
                            ng-include="'inventory_renderer.html'"></li>
                    </ol>
                </div>

                <div data-bind="visible: customFunctionAvailable">
                    <ol class="angular-ui-tree-nodes">
                        <li class="angular-ui-tree-node">
                            <div class="group-title tree-handle">
                                <form class="form-inline ng-pristine ng-valid" role="form">
                                    <div class="form-group">
                                        <label class="sr-only" for="groupName">Group name</label>
                                        <input type="text" class="form-control" ng-model="addFunctionName"
                                               id="groupName"
                                               placeholder="Function name">
                                    </div>
                                    <button type="submit" class="btn btn-default" ng-click="addFunction()">Add Function
                                    </button>
                                </form>
                            </div>
                        </li>
                    </ol>
                </div>
                <div data-bind="visible: showDebug">
                    <pre class="code">{{ inventory | json }}</pre>
                </div>
            </div>

            <div data-bind="if: currentView() === 'build-program'">
                <div class="jstree-bootstrap" data-bind="inventoryTree: instructionInventory">
                </div>
            </div>

        </div>
    </div>

    <div data-bind="visible: isExecuting()">
        <div data-bind="with: status" class="well">
            <h3>Robot Program Status:</h3>

            <div class="row" id="watch">
                <div class="col-md-2">
                    <div class="image robot-up" data-bind="visible: direction() == 'up'"></div>
                    <div class="image robot-right" data-bind="visible: direction() == 'right'"></div>
                    <div class="image robot-down" data-bind="visible: direction() == 'down'"></div>
                    <div class="image robot-left" data-bind="visible: direction() == 'left'"></div>
                    <p><strong>Currently Facing</strong>: <span data-bind="text: direction"></span></p>
                </div>
                <div class="col-md-2">
                    <div class="image wall"></div>
                    <p><strong>Wall In Front?</strong>: <span data-bind="text: wallInFront() ? 'Yes' : 'No'"></span></p>
                </div>
                <div class="col-md-2">
                    <div class="image goal"></div>
                    <p><strong>Part In Front?</strong>: <span data-bind="text: ballInFront() ? 'Yes' : 'No'"></span></p>
                </div>
                <div class="col-md-2" data-bind="visible: (countRemaining() !== null)">
                    <p><strong>Repeat Count Remaining</strong>: <span
                            data-bind="text: countRemaining"></span></p>
                </div>
                <div class="col-md-2">
                    <div class="image goal"></div>
                    <p><strong>Picked Up Part?</strong>: <span data-bind="text: hasBall() ? 'Yes' : 'No'"></span></p>
                </div>
            </div>
        </div>
    </div>

    <?php include "condition-modal.php"; ?>

</div>