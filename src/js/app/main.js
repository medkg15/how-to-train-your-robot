define(['jquery','bootstrap', 'app/map'], function($, Bootstrap, Map){
	
	return {
		initialize: function(){
			var mapElement = document.getElementById('map');
			var map = new Map(mapElement);
		}
	};
	
});