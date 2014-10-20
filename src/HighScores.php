<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" type="text/css" href="robostyle.css">
<title>High Scores</title>
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
<table width="949" border="1">
  <tr>
    <th width="553" scope="col"><p align="left"><span class="style4">High Scores: </span></p>
      <p align="left">
        <label></label>
      </p>
      <p align="left">
        <label>
        <textarea name="taHighScores" id="taHighScores" cols="80" rows="15"></textarea>
        </label>
      </p></th>
      
    <th width="380" scope="col"><p><img src="pics/Robot_Character2_Blue.png" width="234" height="241" /></p>
    <p><img src="pics/Robot_Character2_Pink.png" width="281" height="249" /></p></th>
  </tr>
  <tr>
    <td height="117" colspan="2" background="pics/banner_home_robotics.jpg" class="style1"><div align="right"><a href="about.php" class="style6">Read About Our Team</a></div></td>
  </tr>
</table>
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
