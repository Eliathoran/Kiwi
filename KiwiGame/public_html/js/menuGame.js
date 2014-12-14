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
    startMenu = NewMenuItem();
    startMenu.addEventListener("click", handleStartClick);
    startMenu.x = stage.canvas.width/2;
    stage.addChild(startMenu);
    
    // Options Game Menu Item
    soundMenu = NewMenuItem();
    soundMenu.addEventListener("click", handleSoundClick);
    soundMenu.x = stage.canvas.width/2;
    soundMenu.y = stage.canvas.width/2.5;
    stage.addChild(soundMenu);
    
    // Best Scores Menu Item
    bestScoreMenu = NewMenuItem();
    bestScoreMenu.addEventListener("click", handleScoreClick);
    bestScoreMenu.x = stage.canvas.width/2;
    bestScoreMenu.y = stage.canvas.width/5;
    stage.addChild(bestScoreMenu);   
}

function NewMenuItem()
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
    stage.update();
}

function handleScoreClick(event)
{
    RemoveMenu();
    stage.update();
}

function RemoveMenu()
{
    stage.removeChild(startMenu);
    stage.removeChild(soundMenu);
    stage.removeChild(bestScoreMenu);
}