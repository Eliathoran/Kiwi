function WorldManager()
{
    this.SCALE = 30;
    this.world = new Box2D.Dynamics.b2World(
            new Box2D.Common.Math.b2Vec2(0, 10)    //gravity
         ,  true                 //allow sleep
      );
    
    this.Init = function()
    {
        var debugDraw = new Box2D.Dynamics.b2DebugDraw();
        debugDraw.SetSprite(document.getElementById("debugKiwiCanvas").getContext("2d"));
        debugDraw.SetDrawScale(this.SCALE);
        debugDraw.SetFillAlpha(0.3);
        debugDraw.SetLineThickness(1.0);
        debugDraw.SetFlags(Box2D.Dynamics.b2DebugDraw.e_shapeBit | Box2D.Dynamics.b2DebugDraw.e_jointBit);
        this.world.SetDebugDraw(debugDraw);
    };
    
    this.AddBody = function(bodyDef, fixDef)
    {
       this.world.CreateBody(bodyDef).CreateFixture(fixDef);
    };
}