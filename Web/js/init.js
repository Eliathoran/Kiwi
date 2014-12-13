var stage;
var queue;

// Elements
var kiwiAnimation;
var backgroudMiddle;
var backgroundBack;

function init() {
	
	// Create state
	stage = new createjs.Stage("kiwiCanvas");
	
	// Load Sources
	LoadSources()
	
	// Create the elements from the data previously loaded
	createElements();
}

function handleComplete(event)
{
	// Add backgroundBack - Pending...
	
	// Add backgroundMiddle
	stage.addChild(backgroudMiddle);

	var circle = new createjs.Shape();
	circle.graphics.beginFill("red").drawCircle(0, 0, 50);
	circle.x = 100;
	circle.y = 100;
	
	createjs.Tween.get(circle, {loop:true}).to({x:450},3000).to({x:50},3000)
	createjs.Ticker.addEventListener("tick",tick);
	
	// Add Kiwi that is not moving
	stage.addChild(circle);
		
	kiwiAnimation.x = 20;
	kiwiAnimation.y = 0;
	stage.addChild(kiwiAnimation);
	kiwiAnimation.gotoAndPlay("jump");
	
	 createjs.Ticker.setFPS(10);
	
	createjs.Ticker.addEventListener("tick", tick);
	createjs.Ticker.setInterval(25);
	createjs.Ticker.setFPS(10);
	
	stage.update();
}

function LoadSources()
{
	queue = new createjs.LoadQueue(false);
	queue.installPlugin(createjs.Sound);
	queue.addEventListener("complete", handleComplete);

	// Loads all data
	queue.loadManifest([
	{id:"midBackground", src:"Images/background.png"},
	{id:"botBackground", src:"Images/back.jpg"},
	{id:"kiwi", src:"Images/sprite.png"}]);
}

function createElements()
{	
	//backgroudMiddle = new createjs.Bitmap("Images/background.png");
	backgroudMiddle = new createjs.Bitmap(queue.getResult("midBackground"));
	backgroudMiddle.x = 0;
	backgroudMiddle.y = 0;
	backgroundBack =  new createjs.Bitmap(queue.getResult("botBackground"));
	
	var data = {
    	images: ["Images/kiwi_sprite.png"],
		//images: [queue.getResult("kiwi")],
    	frames:  {width:1353, height:376, count:11},
    	animations: {
			run:[0,10], 
			jump:[0,10,"run"],
			die:[0,10]}
 	};
	
 	var spriteSheet = new createjs.SpriteSheet(data);
 	kiwiAnimation = new createjs.Sprite(spriteSheet, "run");
}

function tick(event)
{
	stage.update();
}