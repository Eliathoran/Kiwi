// Elements
var background;
var background2;
var backgroundFront1;
var backgroundFront2;
var kiwi;
var platformCreator;

// Speed
var backgroudSpeed;
var backgroundFrontSpeed;

// Distance
var meters;

// Display Text
var distance;
var distanceText;
var debug;

// Key EventHandler
var keyPressed;

function init() {
	var canvas = document.getElementById("kiwiCanvas");
	stage = new createjs.Stage(canvas);
	
	LoadFiles();
        LoadKeyEvents();
	InitGame();

	createjs.Ticker.addEventListener("tick", tick);
	//createjs.Ticker.setInterval(25);
	createjs.Ticker.setFPS(10);
}

function LoadFiles()
{
	// Load backgroud
	background = new createjs.Bitmap("Images/background.png");
	background2 = new createjs.Bitmap("Images/background.png");
	
	// Load front background
	backgroundFront1 = new createjs.Bitmap("Images/bigtree.png");
	backgroundFront2 = new createjs.Bitmap("Images/bigtree.png");
       
        // Load Kiwi animation
        kiwi = new Kiwi();
        kiwi.Load();
}

function InitGame()
{
	kiwi.Init();
	kiwi.Action("run");
	
	backgroundFront1.y -= backgroundFront1.y/2;
	backgroundFront1.y -= backgroundFront2.y/2;
	stage.addChild(background);
	stage.addChild(background2);
	stage.addChild(backgroundFront1);
	stage.addChild(backgroundFront2);
	stage.addChild(kiwi.sprite);
	
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
	
        platformCreator = new PlatformCreator();
        platformCreator.CreateElements(stage);
	//stage.update();
}
        
function tick() {
    if(play == 1)
    {
        meters += backgroundFrontSpeed;
        distance.text = meters;
        background.x -= backgroudSpeed;
        backgroundFront1.x -= backgroundFrontSpeed;

        if (background.x >= stage.canvas.width) { background.x = 0; }
        if (backgroundFront1.x >= stage.canvas.width) { backgroundFront1.x = 0; }

        background2.x = background.x - stage.canvas.width;
        backgroundFront2.x = backgroundFront1.x - stage.canvas.width;
    }
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
    if(play == 1)
    {
        PauseMenu(); 
    }
    
    kiwi.sprite.y = 10;
}

function handleKeyUp(e)
{
    // execute things on KeyUp
}

function DestroyGame()
{
    // TODO: Destroy all the game
}