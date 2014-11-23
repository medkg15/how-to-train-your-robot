requirejs.config({
	paths: {
		"jquery": "../vendor/jquery/dist/jquery.min"
        , "bootstrap": "../vendor/bootstrap/dist/js/bootstrap.min"
        , "underscore": "../vendor/underscore/underscore-min"
        , "knockout": "../vendor/knockout/dist/knockout"
        , "jstree": "../vendor/jstree/dist/jstree"
        , "jsurl": "../vendor/jsul/url.min"
        , "moment": "../vendor/moment/moment"
        , "knockout-bootstrap": "../vendor/knockout-bootstrap/build/knockout-bootstrap.min"
        , "angular": "../vendor/angular/angular"
        , "angular-ui-tree": "../vendor/angular-ui-tree/dist/angular-ui-tree"
        ,"angular-ui": "../vendor/angular-bootstrap/ui-bootstrap-tpls"
	}
	, shim: {
		"bootstrap": ['jquery']
		, "knockout": ['jquery'],
        "angular": {
            exports: "angular"
        },
        "angular-ui-tree": ['angular'],
        "angular-ui": ['angular']
	}
    , urlArgs: "v=24"
});