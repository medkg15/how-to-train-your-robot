<div data-bind="if: currentView() === 'welcome'">
	
		<h1>Welcome!</h1>
		
		<p>Please select a level:</p>
	
		<ul data-bind="foreach: levels">
			<li><a href="#" data-bind="text: name, click: $parent.selectLevel"></a></li>
		</ul>
	
	</div>
