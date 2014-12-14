/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function Platform(x, y)
{
    this.x = x;
    this.y = y;
    
    this.Draw = function (stage)
    {
        var _platform = new createjs.Bitmap("Images/platform.png");
        _platform.x = this.x;
        _platform.y = this.y;
        stage.addChild(_platform);
    };
}


