/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Kiwi()
{
    this.x = 20;
    this.y = 150;
    this.sprite = null;
 
    this.Load = function () {
        	 var data = {
		images: ["Images/kiwi_sprite.png"],
		frames: {width:56.33, height:47, count:12},
		animations: {
			run:[0,10, true],
			jump:[0,10, true],
			die:[0,10, true]
		}
	};
        
	var ss = new createjs.SpriteSheet(data);
        this.sprite = new createjs.Sprite(ss);
    };
    
    this.Init = function () {
        this.sprite.x = 20;
	this.sprite.y = stage.canvas.height/2;
    };
    
    this.Action = function (actionName) {
        this.sprite.gotoAndPlay(actionName);
    };
    
    this.Update = function ()
    {
        this.x++;
    };
}