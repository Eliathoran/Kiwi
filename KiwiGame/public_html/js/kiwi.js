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
        var bodyDef = new Box2D.Dynamics.b2BodyDef;
        var fixDef = new Box2D.Dynamics.b2FixtureDef;
        fixDef.density = 1.0;
        fixDef.friction = 0.5;
        fixDef.restitution = 0.2;
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
        fixDef.shape = new Box2D.Collision.Shapes.b2CircleShape(50);
        bodyDef.position.x = this.x;
        bodyDef.position.y = this.y;
        world.AddBody(bodyDef, fixDef);
       
        this.sprite.x = this.x;
	this.sprite.y = this.y;
    };
    
    this.Action = function (actionName) {
        this.sprite.gotoAndPlay(actionName);
    };
    
    this.Update = function ()
    {
        this.x = this.x + 3;
    };
    
    this.Jump = function()
    {
    };
}