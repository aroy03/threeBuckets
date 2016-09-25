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
