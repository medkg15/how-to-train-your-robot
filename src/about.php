<head>
<link rel="stylesheet" type="text/css" href="robostyle.css">
<title>Meet The Team</title>
<style type="text/css">
<!--
.style1 {
	color: #FFFFFF;
	font-size: xx-large;
}
.style3 {color: #CCCCCC}
.style4 {
	color: #FFFFFF;
	font-size: large;
}
.style6 {color: #FFFFFF}
-->
</style>
</head>

<table width="928" border="0">
  <tr>
    <td width="724"><a href="index.php"><img src="pics/Logo.png" alt="Click Here to Return to the Homepage" width="477" height="214" /></a> </td>
    <td width="194"><div align="right"><span class="style1">Score: <span data-bind="text: score"/></span>
        <div class="style1" id="Score"></div>
    </div></td>
  </tr>
</table>

<p>&nbsp;</p>
<table width="929" border="1">
  <tr>
    <th colspan="2" scope="col"><p align="left" class="style1">The Team Goals: </p>
    <p align="left" class="style3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</p></th>
  </tr>
  <tr>
    <td width="532"><span class="style6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</span></td>
    <td width="381"><p align="center"><img src="pics/ChadSmall.jpg" width="256" height="192" /></p>
    <p align="center"><strong><span class="style4">Dr. Chad Williams<br />
    Assistant Professor of Computer Science</span></strong></p>    </td>
  </tr>
  <tr>
    <td><span class="style6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</span></td>
    <td><p align="center"><img src="pics/no_photo_female.jpg" width="192" height="201" /><br />
      <strong><span class="style4">Emtethal Alafghani<br />
Graduate Student/IT Intern</span></strong></p>    </td>
  </tr>
  <tr>
    <td><span class="style6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</span></td>
    <td><p align="center"><img src="pics/shotAJ.jpg" alt="" width="175" height="210" /></p>
      <p align="center"><strong><span class="style4">Antony E. Daley, Jr.<br />
    Graduate Student/Software Engineer</span></strong></p></td>
  </tr>
  <tr>
    <td><span class="style6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</span></td>
    <td><div align="center"><img src="pics/kevin.gif" width="200" height="200" /><br />
        <strong><span class="style4">Kevin Gregory<br />
Graduate Student/Software Engineer</span></strong><br />
    </div></td>
  </tr>
  <tr>
    <td><span class="style6">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget odio.</span></td>
    <td><div align="center"><img src="pics/marianella.gif" width="206" height="211" /><br />
      <strong><span class="style4">Marianella Rydzewski<br />
Graduate Student/Software Engineer</span></strong></div></td>
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
