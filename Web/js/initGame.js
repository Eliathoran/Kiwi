var background;
var background2;
var backgroundFront1;
var backgroundFront2;
var stage;
var kiwiAnimation;
var backgroudSpeed;
var backgroundFrontSpeed;

function init() {
	var canvas = document.getElementById("kiwiCanvas");
	stage = new createjs.Stage(canvas);
	
	LoadFiles();
	
	InitGame();
	
	createjs.Ticker.setFPS(10);
	createjs.Ticker.addEventListener("tick", tick);
	createjs.Ticker.setInterval(25);
	createjs.Ticker.setFPS(10);
}

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
	// 225.5 - 188 - 12
	
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
	
	backgroudSpeed = -0.5;
	backgroundFrontSpeed = -1;
}
        
function tick() {
	
	background.x += backgroudSpeed;
	backgroundFront1.x += backgroundFrontSpeed;
	
	if (background.x >= stage.canvas.width) { background.x = 0; }
	if (backgroundFront1.x >= stage.canvas.width) { backgroundFront1.x = 0; }
	
	background2.x = background.x - stage.canvas.width
	backgroundFront2.x = backgroundFront1.x - stage.canvas.width
	
	stage.update();
}