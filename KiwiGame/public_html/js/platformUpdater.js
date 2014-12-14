/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function PlatformUpdater()
{
    this.platforms = [];
    
    this.AddPlatform = function (platform)
    {
        this.platforms.push(platform);
    };
    
    this.UpdatePlatforms = function()
    {
        for (i = 0; i < this.platforms.length; i++) {
            this.platforms[i].Update();
        }
        
        // check when a platform is not visible to place it in other location
        
        // check that the new random location is not ocupied by other platform
        
    }
}


