// Menu Items
var startMenu;
var soundMenu;
var bestScoreMenu;

///////////////////////////////////////////////////////////
//////////////////////// Game Menu ////////////////////////
///////////////////////////////////////////////////////////

function CreateMenu()
{
    // Start Game Menu Item
    startMenu = NewMenuItem("");
    startMenu.addEventListener("click", handleStartClick);
    startMenu.x = stage.canvas.width/2;
    stage.addChild(startMenu);
    var text = new createjs.Text("Start Game", "20px Arial", "#ff7700");
    text.x = stage.canvas.width/2+8;
    text.y = 27;
    stage.addChild(text);
    
    // Options Game Menu Item
    soundMenu = NewMenuItem("Sound Options");
    soundMenu.addEventListener("click", handleSoundClick);
    soundMenu.x = stage.canvas.width/2;
    soundMenu.y = stage.canvas.width/2.5;
    stage.addChild(soundMenu);
    text = new createjs.Text("Sound", "20px Arial", "#ff7700");
    text.x = stage.canvas.width/2+29;
    text.y = 27+soundMenu.y;
    stage.addChild(text);
    
    // Best Scores Menu Item
    bestScoreMenu = NewMenuItem("Best Scores");
    bestScoreMenu.addEventListener("click", handleScoreClick);
    bestScoreMenu.x = stage.canvas.width/2;
    bestScoreMenu.y = stage.canvas.width/5;
    stage.addChild(bestScoreMenu);   
    text = new createjs.Text("Best Scores", "20px Arial", "#ff7700");
    text.x = stage.canvas.width/2+7;
    text.y = 27+bestScoreMenu.y;
    stage.addChild(text);
}

function NewMenuItem(text)
{
    var menu = new createjs.Shape();
    menu.graphics.beginFill("rgba(102,51,0,1)").drawRoundRect(0, 0, 120, 80, 5);
    menu.graphics.beginFill("rgba(255,255,255,1)").drawRoundRect(1, 1, 118, 78, 5);
    return menu;
}

function handleStartClick(event)
{
    console.log("Clicked");
    RemoveMenu();
    play = 1;
    LoadFiles();
    LoadKeyEvents();
    InitGame();
    createjs.Ticker.addEventListener("tick", tick);
    createjs.Ticker.setInterval(25);
    createjs.Ticker.setFPS(10);
    stage.update();
}

function handleSoundClick(event)
{
    RemoveMenu();
    // TODO: cuando haya sonido se puede elegir entre poner o quitar sonido.
    handleStartClick(event);
    stage.update();
}

function handleScoreClick(event)
{
    RemoveMenu();
    // TODO: cuando haya juego se puede ver los best scores... xD
    handleStartClick(event);
    stage.update();
}

function RemoveMenu()
{
    stage.removeChild(startMenu);
    stage.removeChild(soundMenu);
    stage.removeChild(bestScoreMenu);
}