define(['jquery', 'bootstrap', 'app/map', 'app/levels', 'app/inventory', 'app/instructions'], function($, Bootstrap, Map, levels, Inventory, instructions){
	
	return function HowToTrainYourRobot() {
	
		var currentLevel = levels[0];
		
		var map = new Map(document.getElementById('map'));
		var inventory = new Inventory(document.getElementById('inventory'), instructions);
				
		map.drawLevel(currentLevel);
		inventory.initializeLevel(currentLevel);
	};
	
});