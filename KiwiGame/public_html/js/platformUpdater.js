/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
function PlatformUpdater()
{
    this.platforms = [];
    this.lastPlatform;
    
    this.AddPlatform = function (platform)
    {
        this.lastPlatform = platform;
        this.platforms.push(platform);
    };
    
    this.UpdatePlatforms = function()
    {
        for (i = 0; i < this.platforms.length; i++) {
            var selectedPlatform = this.platforms[i];
            selectedPlatform.Update();
            
            // check when a platform is not visible to place it in other location
            if ((selectedPlatform.image.localToGlobal(selectedPlatform.w, 0).x) < -5)
            {
                selectedPlatform.x = selectedPlatform.x + 750; //this.lastPlatform.x + Math.random()*selectedPlatform.width;
                this.lastPlatform = selectedPlatform;
            }
        }
        
        
        
        
        // check that the new random location is not ocupied by other platform
        
    }
}


