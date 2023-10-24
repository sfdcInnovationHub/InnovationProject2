({
	handleKeyUp : function(component, event, helper) {
		var searchKeyWord = component.find("enterSearch").get("v.value");
        console.log(searchKeyWord);
        var action = component.get("c.fetchRecords");
        action.setParams({searchWord : searchKeyWord})
        action.setCallback(this, function(response){
            var state=response.getState();
            var result = response.getReturnValue()            
        if(state==='SUCCESS')
        {
            component.set("v.InnovList",result);
        }               
            
        });
        $A.enqueueAction(action);
	}
})