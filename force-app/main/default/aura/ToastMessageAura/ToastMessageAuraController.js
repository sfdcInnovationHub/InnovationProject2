({
    //Error starts from here..
    
	handleDismissibleError : function(component, event, helper) {
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "mode": "dismissible",
        "type": "Error",
        "title": "Error!",
        "message": "This an example of a Dismissible-Error toast event."
    });
    toastEvent.fire();
    },
    
    handlePesterError : function(component, event, helper){
    var toastEvent = $A.get("e.force:showToast");
    toastEvent.setParams({
        "mode": "pester",
        "type": "Error",
        "title": "Error!",
        "message": "This an example of a Pester-Error toast event."
    });
    toastEvent.fire();
    },
        
    handleStickyError : function(component, event, helper){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "mode": "sticky",
            "type": "Error",
            "title": "Error!",
            "message": "This an example of a Sticky-Error toast event."
        });
        toastEvent.fire();
    },
    
    //Warning starts from here..
    
    handleDismissibleWarning : function(component, event, helper){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "mode": "dismissible",
            "type": "warning",
            "title": "Warning!",
            "message": "This an example of a Dismissible-Warning toast event."
        });
        toastEvent.fire();
    },
    
    handlePesterWarning : function(component, event, helper){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "mode": "pester",
            "type": "warning",
            "title": "Error!",
            "message": "This an example of a Pester-Warning toast event."
        });
        toastEvent.fire();
        },
    
    handleStickyWarning : function(component, event, helper){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "mode": "sticky",
            "type": "warning",
            "title": "Error!",
            "message": "This an example of a Sticky-Warning toast event."
        });
        toastEvent.fire();
    },
    
    //Success starts from here..
    
    handleDismissibleSuccess : function(component, event, helper){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "mode": "dismissible",
            "type": "success",
            "title": "Success!",
            "message": "This an example of a Dismissible-Success toast event."
        });
        toastEvent.fire();
    },
    
    handlePesterSuccess : function(component, event, helper){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "mode": "pester",
            "type": "success",
            "title": "Error!",
            "message": "This an example of a Pester-Success toast event."
        });
        toastEvent.fire();
        },
    
    handleStickySuccess : function(component, event, helper){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "mode": "sticky",
            "type": "success",
            "title": "Error!",
            "message": "This an example of a Sticky-Success toast event."
        });
        toastEvent.fire();
    },
    
    //Info starts from here..
    
    handleDismissibleInfo : function(component, event, helper){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "mode": "dismissible",
            "type": "info",
            "title": "Error!",
            "message": "This an example of a Dismissible-Info toast event."
        });
        toastEvent.fire();
    },
    
    handlePesterInfo : function(component, event, helper){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "mode": "pester",
            "type": "info",
            "title": "Error!",
            "message": "This an example of a Pester-Info toast event."
        });
        toastEvent.fire();
    },
    
    handleStickyInfo : function(component, event, helper){
        var toastEvent = $A.get("e.force:showToast");
        toastEvent.setParams({
            "mode": "sticky",
            "type": "info",
            "title": "Error!",
            "message": "This an example of a Sticky-Info toast event."
        });
        toastEvent.fire();
    },
})