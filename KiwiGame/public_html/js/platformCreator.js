/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function PlatformCreator()
{
    this.platforms = [];
    this.CreateElements = function (stage)
    {
        this.platforms.push(new Platform(40, 190));
        this.platforms.push(new Platform(300, 100));
        for (i = 0; i < this.platforms.length; i++) {
            this.platforms[i].Draw(stage);
        }
    }
    
    this.Update = function()
    {
        for (i = 0; i < this.platforms.length; i++) {
            this.platforms[i].Update();
        }
    };
}


