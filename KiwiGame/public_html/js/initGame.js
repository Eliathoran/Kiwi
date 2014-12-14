// Elements
var background;
var background2;
var backgroundFront1;
var backgroundFront2;
var kiwiAnimation;

// Speed
var backgroudSpeed;
var backgroundFrontSpeed;

// Distance
var meters;

// Display Text
var distance;
var distanceText;
var debug;

function LoadFiles()
{
	// Load backgroud
	background = new createjs.Bitmap("Images/back.jpg");
	background2 = new createjs.Bitmap("Images/back.jpg");
	
	// Load front background
	backgroundFront1 = new createjs.Bitmap("Images/bigtree.png");
	backgroundFront2 = new createjs.Bitmap("Images/bigtree.png");

	// Load Kiwi animation
	 var data = {
		images: ["Images/kiwi_sprite.png"],
		frames: {width:56.33, height:47, count:12},
		animations: {
			run:[0,10, true],
			jump:[0,10, true],
			die:[0,10, true]
		}
	};
	
	// Imagen Grande: 225.5 - 188 - 12
	
	var ss = new createjs.SpriteSheet(data);
	kiwiAnimation = new createjs.Sprite(ss);
}

function InitGame()
{			
	kiwiAnimation.x = 20;
	kiwiAnimation.y = stage.canvas.height/2;
	kiwiAnimation.gotoAndPlay("run");
	
	backgroundFront1.y -= backgroundFront1.y/2;
	backgroundFront1.y -= backgroundFront2.y/2;
	stage.addChild(background);
	stage.addChild(background2);
	stage.addChild(backgroundFront1);
	stage.addChild(backgroundFront2);
	stage.addChild(kiwiAnimation);
	
	// Starting speed
	backgroudSpeed = 0.5;
	backgroundFrontSpeed = 1;
	
	// Starting distance
	meters = 0;
	distanceText = new createjs.Text("meters:", "20px Arial", "#ff7700");
	distanceText.y = 45;
	distanceText.x = stage.canvas.width - distanceText.width;
	stage.addChild(distanceText);
 
	distance = new createjs.Text("0", "20px Arial", "#ff7700");
	distance.y = 45;
	distance.x =  distanceText.width;
	stage.addChild(distance);
	
	debug = new createjs.Text(distanceText.width, "20px Arial", "#ff7700");
	debug.y = 45;
	debug.x =  distanceText.width;
	stage.addChild(debug);
	
	stage.update();
}
        
function tick() {
	
	meters += backgroundFrontSpeed;
	distance.text = meters;
	background.x -= backgroudSpeed;
	backgroundFront1.x -= backgroundFrontSpeed;
	
	if (background.x >= stage.canvas.width) { background.x = 0; }
	if (backgroundFront1.x >= stage.canvas.width) { backgroundFront1.x = 0; }
	
	background2.x = background.x - stage.canvas.width
	backgroundFront2.x = backgroundFront1.x - stage.canvas.width
	
	stage.update();
}

function LoadKeyEvents()
{
    if ('ontouchstart' in document.documentElement)
    {
        canvas.addEventListener('touchstart', function(e) { handleKeyDown(); }, false);
        canvas.addEventListener('touchend', function(e) { handleKeyUp(); }, false);
    }
    else
    {
        document.onkeydown = handleKeyDown;
        document.onkeyup = handleKeyUp;
        document.onmousedown = handleKeyDown;
        document.onmouseup = handleKeyUp;
    }
}

function handleKeyDown(e)
{
    // execute things on KeyDown
    // e.g.
    kiwiAnimation.y = 10;
}

function handleKeyUp(e)
{
    // execute things on KeyUp
}
