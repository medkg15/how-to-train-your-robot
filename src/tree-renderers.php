<script type="text/ng-template" id="inventory_renderer.html">
    <div class="tree-node" ng-controller="InstructionCtrl">
        <div ui-tree-handle class="tree-node-content">

            <a class="pull-right btn btn-danger btn-xs" data-nodrag ng-click="remove(this)"
               ng-if="canRemove(this)"><span
                    class="glyphicon glyphicon-remove"></span></a>
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

            <div class="pull-right" ng-if="quantityRemaining(this) !== 'unlimited'">
                {{ quantityRemaining(this) }} Remaining
            </div>
        </div>
        <p ng-if="instruction.isCustomFunction && instruction.body.length === 0"
           class="angular-ui-tree-placeholder">Place instructions here.</p>
        <ol ui-tree-nodes="" ng-model="instruction.body" ng-class="{hidden: collapsed}">
            <li ng-repeat="instruction in instruction.body" ui-tree-node ng-include="'inventory_renderer.html'">
            </li>
        </ol>
    </div>
</script>

<script type="text/ng-template" id="program_renderer.html">
        <div class="tree-node" ng-controller="InstructionCtrl" style="position:relative;">

            <div style="display:block;position:absolute;left:-300px;top:-25px" class="popover left"
                 ng-if="instruction.message">
                <div class="arrow"></div>
                <h3 class="popover-title">Error!</h3>

                <div class="popover-content">
                    <p>{{instruction.message}}</p>
                </div>
            </div>
            <div ui-tree-handle class="tree-node-content">

                <a class="pull-right btn btn-danger btn-xs" data-nodrag ng-click="remove(this)"
                   ng-if="canRemove(this)"><span
                        class="glyphicon glyphicon-remove"></span></a>
                <a ng-if="instruction.isFunction" class="btn btn-success btn-xs" data-nodrag=""
                   ng-click="toggle(this)"><span class="glyphicon glyphicon-chevron-down"
                                                 ng-class="{'glyphicon-chevron-right': collapsed, 'glyphicon-chevron-down': !collapsed}"></span></a>
                {{instruction.title}}

                <select data-nodrag ng-model="instruction.condition" ng-if="instruction.condition" ng-click="" ng-disabled="isRunning"
                        ng-options="conditionOption for conditionOption in instructionOptions.condition"></select>


            <span ng-if="hasCount(this)">
    <input type="number" ng-model="instruction.count" ng-change="checkCount(this)" ng-disabled="isRunning"/>
    {{ countLabel(this) }}
</span>

                <p style="float:right;" ng-if="(!instruction.isFunction && instruction.allowChildren) && instruction.body.length === 0"
                   class="angular-ui-tree-placeholder">Place instructions here</p>

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
        </div>
</script>