({
	callChildComponent : function(component, event, helper) {
        console.log("In handle click of Parent");
		var childComp = component.find('compChild');
        var messageFromParent = component.get('v.enteredText');
        var childModalStatus = component.get('v.isOpen');
        var childCompMessage= childComp.childComponentMethod(messageFromParent, childModalStatus);
        
	}
})