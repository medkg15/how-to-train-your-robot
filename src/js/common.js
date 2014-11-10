requirejs.config({
	paths: {
		"jquery": "../vendor/jquery/dist/jquery.min"
        , "bootstrap": "../vendor/bootstrap/dist/js/bootstrap.min"
        , "underscore": "../vendor/underscore/underscore-min"
        , "knockout": "../vendor/knockout/dist/knockout"
        , "jstree": "../vendor/jstree/dist/jstree"
        , "jsurl": "../vendor/jsul/url.min"
	}
	, shim: {
		"bootstrap": ['jquery']
		, "knockout": ['jquery']
	}
    , urlArgs: "v=17"
});