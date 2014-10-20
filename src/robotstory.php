<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<head>
<link rel="stylesheet" type="text/css" href="robostyle.css">
<title>The Robots Story</title>
<style type="text/css">
<!--
.style1 {
	color: #FFFFFF;
	font-size: xx-large;
}
.style6 {color: #FFFFFF}
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
  <tr>
    <th width="594" scope="col"><div align="left" class="style6">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p>
    </div></th>
    <th width="339" scope="col"><p><img src="pics/Robot_Character1_Blue.png" width="230" height="287" /></p>
    <p><img src="pics/Robot_Character1_Pink.png" width="250" height="290" /></p></th>
  </tr>
  <tr>
    <td width="1079" height="117" colspan="2" background="pics/banner_home_robotics.jpg" class="style1"><div align="right"><a href="about.php" class="style6">Read About Our Team</a></div></td>
  </tr>
</table>
<p>&nbsp;</p>
<script src="/vendor/requirejs/require.js"></script>
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
</body>
</body>
</html>
