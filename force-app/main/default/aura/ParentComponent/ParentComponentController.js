({
    handleComponentEvent : function(component, event, helper) {
        console.log('in handler');
		var valueFromChild = event.getParams("ComponentEvent");
        console.log(valueFromChild.sampleComponentEvent);
        var val = "<p/>The message from the Child Component is <p/>" + valueFromChild.sampleComponentEvent;
        component.set("v.enteredValue", val);
        component.set("v.isOpen", valueFromChild.eventModal);
	},
    
    openModal : function(component, event, helper){
        component.set("v.isOpen", true);
    },
    
    closeModal : function(component, event, helper){
        component.set("v.isOpen", false);
    }
    
})