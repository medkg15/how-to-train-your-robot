<script type="text/ng-template" id="inventory_renderer.html">
    <div ui-tree-handle class="tree-node" ng-controller="InstructionCtrl">
        <div class="tree-node-content">
            <a ng-if="instruction.isFunction" class="btn btn-success btn-xs" data-nodrag=""
               ng-click="toggle(this)"><span class="glyphicon glyphicon-chevron-down"
                                             ng-class="{'glyphicon-chevron-right': collapsed, 'glyphicon-chevron-down': !collapsed}"></span></a>
            {{instruction.title}}
            <select data-nodrag ng-model="instruction.condition" ng-if="instruction.condition" ng-click=""
                    ng-options="conditionOption for conditionOption in instructionOptions.condition"></select>
           <span ng-if="hasCount(this)">
    <input type="number" ng-model="instruction.count" ng-change="checkCount(this)"/>
    {{ countLabel(this) }}
</span>
            <a class="pull-right btn btn-danger btn-xs" data-nodrag ng-click="remove(this)"
               ng-if="canRemove(this)"><span
                    class="glyphicon glyphicon-remove"></span></a>

            <div class="pull-right" ng-if="quantityRemaining(this) !== 'unlimited'">
                {{ quantityRemaining(this) }} Remaining
            </div>
        </div>
        <p ng-if="instruction.isCustomFunction && instruction.body.length === 0">Place function instructions here.</p>
        <ol ui-tree-nodes="" ng-model="instruction.body" ng-class="{hidden: collapsed}">
            <li ng-repeat="instruction in instruction.body" ui-tree-node ng-include="'inventory_renderer.html'">
            </li>
        </ol>
    </div>
</script>

<script type="text/ng-template" id="program_renderer.html">
    <div class="tree-node" ui-tree-handle ng-controller="InstructionCtrl">
        <div class="tree-node-content" popover-title="Error!" popover="{{instruction.message}}">

            <a ng-if="instruction.isFunction" class="btn btn-success btn-xs" data-nodrag=""
               ng-click="toggle(this)"><span class="glyphicon glyphicon-chevron-down"
                                             ng-class="{'glyphicon-chevron-right': collapsed, 'glyphicon-chevron-down': !collapsed}"></span></a>
            {{instruction.title}}
            <select data-nodrag ng-model="instruction.condition" ng-if="instruction.condition" ng-click=""
                    ng-options="conditionOption for conditionOption in instructionOptions.condition"></select>
            <span ng-if="hasCount(this)">
    <input type="number" ng-model="instruction.count" ng-change="checkCount(this)"/>
    {{ countLabel(this) }}
</span>
            <a class="pull-right btn btn-danger btn-xs" data-nodrag ng-click="remove(this)"
               ng-if="canRemove(this)"><span
                    class="glyphicon glyphicon-remove"></span></a>
        </div>
    </div>

    <ol ui-tree-nodes ng-model="instruction.body" ng-class="{hidden: collapsed}" ng-if="!instruction.allowChildren"
        data-nodrop>
        <li ng-repeat="instruction in instruction.body" ui-tree-node
            ng-class="{current: instruction.currentlyExecuting}"
            ng-include="'program_renderer.html'">
        </li>
    </ol>
    <ol ui-tree-nodes ng-model="instruction.body" ng-class="{hidden: collapsed}" ng-if="instruction.allowChildren">
        <li ng-repeat="instruction in instruction.body" ui-tree-node
            ng-class="{current: instruction.currentlyExecuting}"
            ng-include="'program_renderer.html'">
        </li>
    </ol>

</script>