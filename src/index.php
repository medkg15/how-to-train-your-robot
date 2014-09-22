<!DOCTYPE html>
<html>
<head>
<link href="/css/main.css" rel="stylesheet" type="text/css"/>
</head>
<body>
<div class="container">


	<div class="row">
	
		<div class="col-md-8">
		</div>
		
		<div class="col-md-4">
			<button class="btn btn-success btn-block">Stuff</button>
			<button class="btn btn-success btn-block">Stuff</button>
			<button class="btn btn-success btn-block">Stuff</button>
			<button class="btn btn-success btn-block">Stuff</button>
			<button class="btn btn-success btn-block">Stuff</button>
			<button class="btn btn-success btn-block">Stuff</button>
			<button class="btn btn-success btn-block">Stuff</button>
			<button class="btn btn-success btn-block">Stuff</button>
		</div>
	
	</div>



    </div><!-- /.container -->
<script src="/vendor/requirejs/require.js"></script>
<script>
	requirejs.config({
		baseUrl: "/js",
	});
	require(['common'], function(common){
		require(['app/main']);
	});
</script>
</body>
</html>