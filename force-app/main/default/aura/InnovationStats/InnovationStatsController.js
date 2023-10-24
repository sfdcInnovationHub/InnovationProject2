({
	myAction : function(component, event, helper) {
		var action=component.get('c.getInnovList');
        action.setParams({});
        
        action.setCallback(this,function(response){
            var responseValue=response.getReturnValue();
            component.set('v.InnovList',responseValue);
        },'SUCCESS');
        
        $A.enqueueAction(action,false);
	},
    
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
	},
    
    newRecord : function( component, event, helper){
        var opp = component.get('v.isOpen');
        component.set('v.isOpen',true);
        console.log(opp);
    },
    editRecord: function(component, event, helper){
        console.log("Edit record called")
        component.set('v.isEdit',true);
        
    },
    closeModal : function(component, event, helper) {
		
        component.set('v.isOpen',false);
        var opp = component.get('v.isOpen');
        console.log(opp);
	},
    submitDetails : function(component, event, helper) {
		var innovRecordId = component.get("v.recordId");
        
	},
    handleSuccess : function(component, event, helper) {
        component.find('notifLib').showToast({
            "variant": "Success",
            "Title": "Record Is Created",
            "message": "Record Is Created "
        });
		component.set('v.isOpen',false);
       
	},
    saveEditRecord : function(component, event, helper){
        component.set('v.isEdit', false);
        var newList = component.get('v.InnovList');
        var action = component.get('c.updatedRecords')
        action.setParams({
            recordsToUpdate : newList
        });
        action.setCallback(this,function(response){
        var state=response.getState();

        if(state==='SUCCESS')
        {               
            var result=response.getReturnValue();
            component.set("v.InnovList",result);

            var toastEvent = $A.get("e.force:showToast");
            toastEvent.setParams({
                "title": "Success!",
                "type":'success',
                "message": "All the edited records have been updated successfully."
            });
            toastEvent.fire();
        }
        });
            
        $A.enqueueAction(action);
        

    },
    
    cancelEditRecord : function(component, event, helper){
        component.set('v.isEdit',false);
    },
    
    toggleSelectAllRecords : function(component, event, helper){
        var selected = event.getSource().get("v.checked");
        var recordSelectionList = component.find("{!record.Id}");
        
        for (var i in recordSelectionList){
            console.log(recordSelectionList[i]);
            
        }
        
    },
    
    toggleRecordSelection : function(component, event, helper){
        console.log("Called");
	}
    
})