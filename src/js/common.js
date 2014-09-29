requirejs.config({
	paths: {
		"jquery": "../vendor/jquery/dist/jquery.min",
		"bootstrap": "../vendor/bootstrap/dist/js/bootstrap.min",
		"underscore": "../vendor/underscore/underscore-min",
		"knockout": "../vendor/knockout/dist/knockout",
		"knockout-sortable": "../vendor/knockout-sortable/build/knockout-sortable.min",
        "jquery-ui": "../vendor/jquery-ui/jquery-ui.min",
        // need to fix this...
        "core": "../vendor/jquery-ui/ui/core",
        "mouse": "../vendor/jquery-ui/ui/mouse",
        "widget": "../vendor/jquery-ui/ui/widget",
        "jquery.ui.sortable": "../vendor/jquery-ui/ui/sortable",
	},
	shim:{
		"bootstrap": ['jquery'],
		"knockout": ['jquery'],
	},
});