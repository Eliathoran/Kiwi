// Stage
var stage;

// Game settings
var play; // 0: Menu; 1: Playing; 2: Pause

function init() {
	var canvas = document.getElementById("kiwiCanvas");
	stage = new createjs.Stage(canvas);
	
        play = 0;
        
        CreateMenu();
        stage.update();
        keyPressed = false;
	//LoadFiles();
        //LoadKeyEvents();
	//InitGame();
        
	//createjs.Ticker.addEventListener("tick", tick);
	//createjs.Ticker.setInterval(25);
	//createjs.Ticker.setFPS(10);
}