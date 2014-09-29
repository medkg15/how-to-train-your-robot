<!DOCTYPE html> 
<html>
<head>
<link href="/css/main.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div class="container">

	<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
  
    <div class="navbar-header">
      <a class="navbar-brand" href="#" data-bind="click: returnHome">How To Train Your Robot</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
      </ul>
    
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Score: <span data-bind="text: score"/></a></li>
       
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
	
	<div data-bind="if: currentView() === 'welcome'">
	
		<h1>Welcome!</h1>
		
		<p>Please select a level:</p>
	
		<ul data-bind="foreach: levels">
			<li><a href="#" data-bind="text: name, click: $parent.selectLevel"></a></li>
		</ul>
	
	</div>

	
	<div data-bind="if: currentView() === 'build-program'">

		<div class="row">
		
			<div class="col-md-8" data-bind="with: currentLevel">
			
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
			
			</div>
			
			<div class="col-md-4" id="program">
                <h2>Your Program:
                <div  data-bind="sortable: program">
                
                    <div>
                    
                        <a class="btn btn-primary instruction" data-bind="text: name"></a>
                    
                    </div>
                </div>
            
                <a href="#" class="btn btn-success" data-bind="click: execute">Go</a>
                <a href="#" data-bind="click: clearProgram" class="btn btn-danger">Clear</a>
            
			</div>
            
		
		</div>
		
		<div id="inventory">
		<h2>Build Your Program</h2>
		<div class="row" data-bind="foreach: instructionInventory">
			<div class="col-md-2 well" data-bind="click: $root.addInstruction">
				<strong data-bind="text: name"></strong><br/>
				<span data-bind="if: quantity === 'unlimited'">&infin; Remaining</span>
				<span data-bind="if: quantity !== 'unlimited'"><span data-bind="text: quantity"></span> Remaining</span>
			</div>
			
		</div>
			
		
		</div>
	
	</div>

	<label>
	<input type="checkbox" data-bind="checked: showDebug"/> Show Debug
	</label>
	<div data-bind="if: showDebug"> 
		<pre data-bind="text: debug"></pre>
	</div>
	
    </div><!-- /.container -->
<script src="/vendor/requirejs/require.js"></script>
<script>
	requirejs.config({
		baseUrl:  "<?php echo (strpos($_SERVER["HTTP_HOST"], 'amazonaws.com') !== false) ? '/js-built' : '/js'; ?>",
	});
	require(['common'], function(common){
		require(
			['jquery', 'knockout', 'app/gameViewModel', 'knockout-sortable'], 
			function($, ko, GameViewModel){
				
				var viewModel = new GameViewModel();
			
				ko.applyBindings(viewModel);
			}
		);
	});
</script>
</body>
</html>