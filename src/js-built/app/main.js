define('app/map',['jquery'], function($){
	return function Map(element){
		var $element = $(element);
	};
});
define('app/main',['jquery','bootstrap', 'app/map'], function($, Bootstrap, Map){
	
	return {
		initialize: function(){
			var mapElement = document.getElementById('map');
			var map = new Map(mapElement);
		}
	};
	
});
define('app/player',[], function(){

	return function Player(id){
		
		var currentLevel = null;
		
		this.getCurrentLevel = function(){
			return currentLevel;
		};
		
	};

});
