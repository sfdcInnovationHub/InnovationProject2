({
myAction : function(component, event, helper) {
		var action=component.get('c.getInnovList');
        action.setParams({});
        
        action.setCallback(this,function(response){
            var responseValue=response.getReturnValue();
            component.set('v.InnovList',responseValue);
        },'SUCCESS');
        
        $A.enqueueAction(action,false);
	}
})