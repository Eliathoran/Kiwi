// Game settings
var play; // 0: Menu; 1: Playing; 2: Pause

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
    startMenu = NewMenuItem("start");
    stage.addChild(startMenu);
    
    // Options Game Menu Item
    soundMenu = NewMenuItem("sound");
    stage.addChild(soundMenu);
    
    // Best Scores Menu Item
    bestScoreMenu = NewMenuItem("score");
    stage.addChild(bestScoreMenu);   
}

function NewMenuItem(name)
{
    var menu = new createjs.Shape();
    menu.addEventListener(name, handleClick);
    menu.graphics.beginFill("rgba(0,255,255,1)").drawRoundRect(0, 0, 120, 120, 5);
    return menu;
}

function handleClick(event)
{
    switch (event)
    {
        case "start":
            RemoveMenu();
            break;
        case "sound":
            RemoveMenu();
            break;
        case "score":
            RemoveMenu();
            break;
        default:
            break;
    }
}

function RemoveMenu()
{
    stage.removeChild(startGame);
    stage.removeChild(sound);
    stage.removeChild(bestScore);
}


///////////////////////////////////////////////////////////
//////////////////////// Game Menu ////////////////////////
///////////////////////////////////////////////////////////

function CreateMenu()
{
    // Start Game Menu Item
    startMenu = NewMenuItem("start");
    stage.addChild(startMenu);
    
    // Options Game Menu Item
    soundMenu = NewMenuItem("sound");
    stage.addChild(soundMenu);
    
    // Best Scores Menu Item
    bestScoreMenu = NewMenuItem("score");
    stage.addChild(bestScoreMenu);   
}

function NewMenuItem(name)
{
    var menu = new createjs.Shape();
    menu.addEventListener(name, handleClick);
    menu.graphics.beginFill("rgba(0,255,255,1)").drawRoundRect(0, 0, 120, 120, 5);
    return menu;
}

function handleClick(event)
{
    switch (event)
    {
        case "start":
            RemoveMenu();
            break;
        case "sound":
            RemoveMenu();
            break;
        case "score":
            RemoveMenu();
            break;
        default:
            break;
    }
}

function RemoveMenu()
{
    stage.removeChild(startGame);
    stage.removeChild(sound);
    stage.removeChild(bestScore);
}