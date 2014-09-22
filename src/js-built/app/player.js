define([], function(){

	return function Player(id){
		
		var currentLevel = null;
		
		this.getCurrentLevel = function(){
			return currentLevel;
		};
		
	};

});