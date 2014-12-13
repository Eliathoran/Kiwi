var stage;

function init() {
	// Create state
	stage = new createjs.Stage("kiwiCanvas");
	
	// Load Sources
	LoadSources()
}

function handleComplete(event)
{
	var circle = new createjs.Shape();
	circle.graphics.beginFill("red").drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;
	
	createjs.Tween.get(circle, {loop:true}).to({x:450},3000).to({x:50},3000)
	createjs.Ticker.addEventListener("tick",tick);
	
	stage.addChild(circle);
	stage.update();
}

function LoadSources()
{
	queue = new createjs.LoadQueue(true);
	queue.installPlugin(createjs.Sound);
	queue.addEventListener("complete", handleComplete);
	queue.loadManifest([{id:"background", src:".\Images\background.png"}]);
}

function tick(event)
{
	stage.update();
}