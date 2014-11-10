<div data-bind="if: currentView() === 'build-program'">


    <h1>Level <span data-bind="text: currentLevel().number"></span> <span class="small"
                                                                          data-bind="text: currentLevel().name"></span>
    </h1>

    <div class="row">

        <div class="col-md-8">

            <img src="/images/Persona.png" alt="Persona" id="persona" data-bind="personaDialog: storyModal"/>

            <div  data-bind="with: currentLevel">
                <?php include "map.php"; ?>
            </div>

            <button class="btn btn-block" data-bind="visible: canAdvance, click: advanceToNextLevel">Next Level</button>

        </div>

        <div class="col-md-4">
            <div class="well">
                <div id="program" data-bind="css: { 'empty': hasNoProgram }">
                    <h2>Your Program:</h2>

                    <p class="empty-message">Drag your program elements here!</p>

                    <div data-bind="programTree: program" class="jstree-bootstrap">
                    </div>

                    <button class="btn btn-success"
                            data-bind="click: execute, disable: isExecuting, enable: programInstructions().length > 0">
                        Go
                    </button>
                    <button
                        data-bind="click: clearProgram, disable: isExecuting, enable: programInstructions().length > 0"
                        class="btn btn-danger">Clear
                    </button>
                    <button data-bind="click: pause, enable: isExecuting, text: isPaused() ? 'Unpause' : 'Pause'"
                            class="btn btn-info">Pause
                    </button>

                    <div data-bind="if: levelAttempts">
                        Attempt #<span data-bind="text: levelAttempts"></span>
                    </div>
                </div>
                <div id="trash">
                    <h3>Trash:</h3>

                    <div data-bind="trashTree: removeInstruction" class="jstree-bootstrap">
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

    <?php include "condition-modal.php";
    include "story-modal.php"; ?>

</div>