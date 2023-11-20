({
	myAction : function(component, event, helper) {
		
	},
    downloadDoccument: function(component, event, helper){
        var sendDataproc = component.get("v.sendData");
        var dataToSend ={
            "label" : "This is test"
        };
        sendDataproc(dataToSend, function(){
            
        });
    }
})