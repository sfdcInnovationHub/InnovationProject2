({
	openModal : function(component, event, helper) {
		var params = event.getParam("arguments") || event.getParams();
        component.set('v.isOpen',params.openModal)
	}
})