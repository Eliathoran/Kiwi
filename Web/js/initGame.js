var background;
var background2;
var backgroundFront1;
var backgroundFront2;
var stage;
var kiwiAnimation;

function init() {
	var canvas = document.getElementById("kiwiCanvas");
	stage = new createjs.Stage(canvas);
	
	LoadFiles();
	
	kiwiAnimation.x = 20;
	kiwiAnimation.y = 0;
	
	InitGame();
	kiwiAnimation.gotoAndPlay("jump");
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
	backgroundFront1 = new createjs.Bitmap("Images/back.jpg");
	
	backgroundFront2 = new createjs.Bitmap("Images/back.jpg");

	// Load Kiwi animation
	 var data = {
		images: ["Images/kiwi_sprite_grande.png"],
		frames: {width:225.5, height:188, count:12},
		animations: {
			run:[0,10, true],
			jump:[0,10, true],
			die:[0,10, true]
		}
	};
	
	var ss = new createjs.SpriteSheet(data);
	kiwiAnimation = new createjs.Sprite(ss);
}

function InitGame()
{
	stage.addChild(background);
	stage.addChild(background2);
	//stage.addChild(backgroundFront1);
	//stage.addChild(backgroundFront2);
	stage.addChild(kiwiAnimation);
}
        
function tick() {
	background.x += 1;
	
	if (background.x >= stage.canvas.width) { background.x = 0; }
	
	background2.x = background.x - stage.canvas.width
	
	
	stage.update();
}