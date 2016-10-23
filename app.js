App = function()
{
    // this is where the WADE app is initialized
	this.init = function()
	{
        // load a scene
	wade.loadScene('scene1.wsc', true, function()
        {
            // the scene has been loaded, do something here

        });
		
	// create a red square
        var sprite = new Sprite();
        sprite.setSize(100, 100);
        sprite.setDrawFunction(wade.drawFunctions.solidFill_('red'));
        this.square = new SceneObject(sprite);
        wade.addSceneObject(this.square);
 

	    this.onDeviceOrientation = function(eventData)
	    {
		// calculate new position
		var pos = this.square.getPosition();
		pos.x += eventData.beta;
		pos.y -= eventData.gamma;

		// restrict new position to the screen
		var w = wade.getScreenWidth()  / 2 - 50;
		var h = wade.getScreenHeight() / 2 - 50;
		pos.x = Math.min(Math.max(pos.x, -w), w);
		pos.y = Math.min(Math.max(pos.y, -h), h);

		// update the position of the square
		this.square.setPosition(pos.x, pos.y);
	    };
		
        
        wade.app.onMouseUp = function()
        {
            
            var obj1 = wade.getSceneObject("redBall");
            var obj2 = wade.getSceneObject("blueBall");
            var obj3 = wade.getSceneObject("yellowBall");
            
            
            if(obj1.hasMouseJoint)
            {
                obj1.getBehavior().removeMouseJoint();
                obj1.hasMouseJoint = false;
            }
            else if(obj2.hasMouseJoint)
            {
                obj2.getBehavior().removeMouseJoint();
                obj2.hasMouseJoint = false;
            }
            else if(obj3.hasMouseJoint)
            {
                obj3.getBehavior().removeMouseJoint();
                obj3.hasMouseJoint = false;
            }
            
        };
        
        wade.app.onMouseMove = function(data)
        {
            
            var obj1 = wade.getSceneObject("redBall");
            var obj2 = wade.getSceneObject("blueBall");
            var obj3 = wade.getSceneObject("yellowBall");
            
            
            if (obj1.hasMouseJoint)
            {
                obj1.getBehavior().updateMouseJoint(data.screenPosition);
            }
            else if (obj2.hasMouseJoint)
            {
                obj2.getBehavior().updateMouseJoint(data.screenPosition);
            }
            else if (obj3.hasMouseJoint)
            {
                obj3.getBehavior().updateMouseJoint(data.screenPosition);
            }
            
        };
        
	};
};
