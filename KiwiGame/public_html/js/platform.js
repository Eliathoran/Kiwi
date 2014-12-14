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
        bodyDef.type = Box2D.Dynamics.b2Body.b2_dynamicBody;
        fixDef.shape = new Box2D.Collision.Shapes.b2PolygonShape;
        fixDef.shape.SetAsBox(w,h);
        bodyDef.position.x = this.x;
        bodyDef.position.y = this.y;
        
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


