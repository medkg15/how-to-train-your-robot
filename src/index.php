<!DOCTYPE html> 
<html>
<head>
<link href="/css/main.css" rel="stylesheet" type="text/css"/>
	<link href="/css/style.css" rel="stylesheet" type="text/css"/>
    <link href="/vendor/bootstrap-jstree-theme/dist/themes/bootstrap/style.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div class="container" data-bind="css: bodyClass">

	<nav class="navbar navbar-default" role="navigation">
  <div class="container-fluid">
  
    <div class="navbar-header" data-bind="visible: currentView() !== 'build-program'">
      <a class="navbar-brand" href="#" data-bind="click: returnHome">How To Train Your Robot</a>
    </div>

    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav" data-bind="visible: currentView() !== 'build-program'">
          <li><a href="#" data-bind="click: function(){ changeView('about'); }">About</a></li>
          <li><a href="#" data-bind="click: function(){ changeView('high-scores'); }">High Scores</a></li>
          <li><a href="#" data-bind="click: function(){ changeView('jump'); }">Level Jump</a></li>
      </ul>
    
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#">Score: <span data-bind="text: score"/></a></li>
       
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>

    <?php include "welcome-page.php"; ?>
    <?php include "program-page.php"; ?>
    <?php include "about.php"; ?>
    <?php include "high-scores.php"; ?>
    <?php include "robot-story.php"; ?>
    <?php include "jump.php"; ?>
	
	<label>
	<input type="checkbox" data-bind="checked: showDebug"/> INTERNAL Show Debug
	</label>
	<div data-bind="if: showDebug"> 
		<pre data-bind="text: debug"></pre>
	</div>
	
    </div><!-- /.container -->
<script src="/vendor/requirejs/require.js"></script>
<script>
	requirejs.config({
		baseUrl:  "<?php echo (strpos($_SERVER["HTTP_HOST"], 'amazonaws.com') !== false) ? '/js-built' : '/js'; ?>"
    });
	require(['common'], function(common){
		require(
			['jquery', 'knockout', 'app/gameViewModel', 'jstree'],
			function($, ko, GameViewModel, jstree){
				
				var viewModel = new GameViewModel();
			
				ko.applyBindings(viewModel);
			}
		);
	});
</script>
</body>
</html>