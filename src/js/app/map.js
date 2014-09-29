define(['jquery'], function($){
	return function Map(element){
		var $element = $(element);
		
		this.drawLevel = function(level){
		
			var mapDefinition = level.map;
			
			for (var row in mapDefinition)
			{
				var $row = $('<div class="row"/>');
			
				for (var column in mapDefinition[row])
				{
					var columnDefinition = mapDefinition[row][column];
				
					var cssClass = '';
				
					switch(columnDefinition)
					{
						case 'x':
							cssClass = 'glyphicon glyphicon-remove';
							break;
						case 's':
							cssClass = 'glyphicon glyphicon-arrow-up';
							break;
						case 'e':
							cssClass = 'glyphicon glyphicon-star-empty';						
							break;
						case ' ':
							cssClass = '';
							break;
					}
					
					$row.append('<div class="col-md-1 '+cssClass+'"></div>');
				}
				
				$element.append($row);
			}
		
		};
	};
});