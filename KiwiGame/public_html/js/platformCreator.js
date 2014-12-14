/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function PlatformCreator()
{
    this.CreateElements = function (stage)
    {
        var platform1 = new Platform(200, 200); 
        platform1.Draw(stage);
        //var platform2 = new Platform(100, 40); 
        //platform2.Draw(stage);
    };
}


