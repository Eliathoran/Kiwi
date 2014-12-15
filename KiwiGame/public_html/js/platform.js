/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Platform(x, y, w, h)
{
    this.image;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    
    this.Draw = function (stage)
    {
        // Physics
        var bodyDef = new Box2D.Dynamics.b2BodyDef;
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
        var fixDef = new Box2D.Dynamics.b2FixtureDef;
        fixDef.density = 1.0;
        fixDef.friction = 0.5;
        fixDef.restitution = 0.2;
        fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape;
        fixDef.shape.SetAsBox(w,h);
        bodyDef.position.x = this.x + this.w/2;
        bodyDef.position.y = this.y + this.h/2;
        world.AddBody(bodyDef, fixDef);
        
        // Graphics
        this.image = new createjs.Bitmap("Images/platform.png");
        this.image.x = this.x;
        this.image.y = this.y;
        stage.addChild(this.image);
    };
    
    this.Update = function()
    {
        this.image.x = this.x - kiwi.x;
    };
}


