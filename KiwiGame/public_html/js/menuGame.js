// Menu Items
var startMenu;
var soundMenu;
var bestScoreMenu;
var startText;
var soundText;
var scoreText;

var continueMenu;
var continueText;
var exitMenu;
var exitText;

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
    startText = new createjs.Text("Start Game", "20px Arial", "#ff7700");
    startText.x = stage.canvas.width/2+8;
    startText.y = 27;
    stage.addChild(startText);
    
    // Options Game Menu Item
    soundMenu = NewMenuItem();
    soundMenu.addEventListener("click", handleSoundClick);
    soundMenu.x = stage.canvas.width/2;
    soundMenu.y = stage.canvas.width/2.5;
    stage.addChild(soundMenu);
    soundText = new createjs.Text("Sound", "20px Arial", "#ff7700");
    soundText.x = stage.canvas.width/2+29;
    soundText.y = 27+soundMenu.y;
    stage.addChild(soundText);
    
    // Best Scores Menu Item
    bestScoreMenu = NewMenuItem();
    bestScoreMenu.addEventListener("click", handleScoreClick);
    bestScoreMenu.x = stage.canvas.width/2;
    bestScoreMenu.y = stage.canvas.width/5;
    stage.addChild(bestScoreMenu);   
    scoreText = new createjs.Text("Best Scores", "20px Arial", "#ff7700");
    scoreText.x = stage.canvas.width/2+7;
    scoreText.y = 27+bestScoreMenu.y;
    stage.addChild(scoreText);
}

function NewMenuItem()
{
    var menu = new createjs.Shape();
    menu.graphics.beginFill("rgba(102,51,0,1)").drawRoundRect(0, 0, 120, 80, 5);
    menu.graphics.beginFill("rgba(255,255,255,1)").drawRoundRect(1, 1, 118, 78, 5);
    return menu;
}

function RemoveMenu()
{
    stage.removeChild(startMenu);
    stage.removeChild(soundMenu);
    stage.removeChild(bestScoreMenu);
    stage.removeChild(startText);
    stage.removeChild(soundText);
    stage.removeChild(scoreText);
}

function RemovePauseMenu()
{
    stage.removeChild(continueMenu);
    stage.removeChild(exitMenu);
    stage.removeChild(continueText);
    stage.removeChild(exitText);
}

function PauseMenu()
{
    play = 2;
    
    // Continue Button
    continueMenu = NewMenuItem();
    continueMenu.addEventListener("click", handleContinueClick);
    continueMenu.x = stage.canvas.width/2
    continueMenu.y = stage.canvas.width/8;
    stage.addChild(continueMenu);
    continueText = new createjs.Text("Continue", "20px Arial", "#ff7700");
    continueText.x = stage.canvas.width/2+20;
    continueText.y = 27+continueMenu.y;
    stage.addChild(continueText);
    
    // Exit Button
    exitMenu = NewMenuItem();
    exitMenu.addEventListener("click", handleExitClick);
    exitMenu.x = stage.canvas.width/2;
    exitMenu.y = stage.canvas.width/3;
    stage.addChild(exitMenu);
    exitText = new createjs.Text("Exit", "20px Arial", "#ff7700");
    exitText.x = stage.canvas.width/2+40;
    exitText.y = 27+exitMenu.y;
    stage.addChild(exitText);
}

///////////////////////////////////////////////////////////
//////////////////// Event Handlers ///////////////////////
///////////////////////////////////////////////////////////

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

function handleContinueClick(event)
{
    console.log("continue Clicked");
    play = 1;
    RemovePauseMenu(); 
}

function handleExitClick(event)
{
    console.log("exit Clicked");
    play = 0;
    RemovePauseMenu();
    // TODO: Remove all the game
    CreateMenu();
    stage.update();
}