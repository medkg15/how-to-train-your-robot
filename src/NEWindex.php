<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" type="text/css" href="robostyle.css">
<title>Robot Trainer</title>
<style type="text/css">
<!--
.style1 {
	color: #FFFFFF;
	font-size: xx-large;
}
.style6 {color: #FFFFFF}
.style4 {
	font-family: Arial, Helvetica, sans-serif;
	font-size: x-large;
	color: #FFFFFF;
}
.style7 {font-family: Arial, Helvetica, sans-serif; font-size: large; color: #FFFFFF; }
-->
</style>
</head>

<body> 
<table width="928" border="0">
  <tr>
    <td width="724"><a href="index.php"><img src="pics/Logo.png" alt="Click Here to Return to the Homepage" width="477" height="214" /></a> </td>
    <td width="194"><div align="right"><span class="style1">Score: <span data-bind="text: score"/></span>
        <div class="style1" id="Score"></div>
    </div></td>
  </tr>
</table>
<table width="949" border="1">
<p>&nbsp;</p>
<p>
  <script src="/vendor/requirejs/require.js"></script>
</p>
<div data-bind="if: currentView() === 'welcome'">
<table width="949" border="1">
  <tr>
    <th scope="col"><div align="left" class="style6">
      <p>&nbsp;</p>
      </div>
      <p align="left"><span class="style4">Welcome to Robot Trainer!</span></p>
      <p align="left" class="style7"><a href="robotstory.php">Click here to read the story about the Robot</a></p>
      <p align="left" class="style7">Click here to begin your quest</p>
      <ul data-bind="foreach: levels">
			<li>
			  <div align="left"><a href="#" data-bind="text: name, click: $parent.selectLevel"></a></div>
			</li>
	  </ul>
      <p align="left" class="style7"><a href="LevelJump.php">Click here to jump to a level</a></p>
      <p align="left" class="style7"><a href="HighScores.php">Click here for high scores </a></p>
      <p align="left">
        <label></label>
      </p>
      <p>&nbsp;</p></th>
  </tr>
  <tr>
    <td width="1079" height="117" background="pics/banner_home_robotics.jpg" class="style1"><div align="right"><a href="about.php" class="style6">Read About Our Team</a></div></td>
  </tr>
</table>
</div>

<!-- Program View -->
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
                    
                        <a class="btn btn-primary instruction" data-bind="text: name"></a>                    </div>
                </div>
            
                <a href="#" class="btn btn-success" data-bind="click: execute">Go</a>
                <a href="#" data-bind="click: clearProgram" class="btn btn-danger">Clear</a>			</div>
            
		
	  </div>
		
		<div id="inventory">
		<h2>Build Your Program</h2>
		<div class="row" data-bind="foreach: instructionInventory">
			<div class="col-md-2 well" data-bind="click: $root.addInstruction">
				<strong data-bind="text: name"></strong><br/>
				<span data-bind="if: quantity === 'unlimited'">&infin; Remaining</span>
				<span data-bind="if: quantity !== 'unlimited'"><span data-bind="text: quantity"></span> Remaining</span>			</div>
			
		</div>
			
		
		</div>
	
	</div>

	<label>
	<input type="checkbox" data-bind="checked: showDebug"/> Show Debug
	</label>
	<div data-bind="if: showDebug"> 
		<pre data-bind="text: debug"></pre>
	</div>

<!-- End of Program View -->

<p></p>
<p>&nbsp; </p>
<p class="style1">
  <script>
	requirejs.config({
		baseUrl:  "<?php echo (strpos($_SERVER["HTTP_HOST"], 'amazonaws.com') !== false) ? '/js-built' : '/js'; ?>",
	});
	require(['common'], function(common){
		require(
			['jquery', 'knockout', 'app/gameViewModel'], 
			function($, ko, GameViewModel){
				
				var viewModel = new GameViewModel();
			
				ko.applyBindings(viewModel);
			}
		);
	});
  </script>
</p>
</body>
</html>
