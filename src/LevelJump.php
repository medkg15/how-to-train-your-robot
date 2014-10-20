<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<link rel="stylesheet" type="text/css" href="robostyle.css">
<title>Level Jumper</title>
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
    <th scope="col"><div align="left" class="style6">
      <p>&nbsp;</p>
      </div>
      <p align="left"><span class="style4">Enter Level Code: </span></p>
      <p align="left">
        <label>
        <input type="text" name="txtLevelJump" id="txtLevelJump" />
        </label>
        <label>J
        <input type="submit" name="btnLevelJump" id="btnLevelJump" value="Jump To Level" />
        </label>
      </p>
      <p>&nbsp;</p></th>
  </tr>
  <tr>
    <td width="1079" height="117" background="pics/banner_home_robotics.jpg" class="style1"><div align="right"><a href="about.php" class="style6">Read About Our Team</a></div></td>
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
