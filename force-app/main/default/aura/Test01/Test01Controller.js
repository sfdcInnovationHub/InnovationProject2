({
	selectAllRecords : function(component, event, helper) {
		var selected = event.getSource().get("v.checked");
        var hello = component.find("1").set("v.checked",selected);
        
        console.log(hello);
	},
    
    toggleCheckbox : function(component, event, helper){
        var selected = event.getSource().get("v.checked");
        console.log(selected);
    },
    
    seeJavascript : function(component, event, helper){
        var selected = component.find("id");
        
        console.log(selected);
    }
})