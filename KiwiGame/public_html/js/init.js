// Stage
var stage;

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