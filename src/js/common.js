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
	}
	, shim: {
		"bootstrap": ['jquery']
		, "knockout": ['jquery']
	}
    , urlArgs: "v=22"
});