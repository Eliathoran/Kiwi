/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function PlatformCreator()
{
    this.CreateElements = function (stage, platformUpdater)
    {
        var platform1 = new Platform(40, 190);
        platformUpdater.AddPlatform(platform1);
        platform1.Draw(stage);
        
        var platform2 = new Platform(300, 100);
        platformUpdater.AddPlatform(platform2);
        platform2.Draw(stage);
    }
}


