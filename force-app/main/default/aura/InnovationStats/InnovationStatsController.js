({
    myAction : function(component, event, helper) {
        component.set('v.columns',[
            {label:'Name',fieldName:'Name', Type:'text'}
        ]);
        
        var action=component.get('c.getInnovList');
        action.setParams({});
        
        action.setCallback(this,function(response){
            var responseValue=response.getReturnValue();
            console.log(responseValue);
            component.set('v.InnovList',responseValue);
        },'SUCCESS');
        $A.enqueueAction(action);
        
        //Load the data for download purpose
        helper.onLoad(component, event);
    },
    
    handleKeyUp : function(component, event, helper) {
        var searchKeyWord = component.find("enterSearch").get("v.value");
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
    },
    
    closeModal : function(component, event, helper) {
        
        component.set('v.isOpen',false);
        var opp = component.get('v.isOpen');
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
        
        $A.get("e.force:refreshView").fire();
    },
    
    editRecord: function(component, event, helper){
        var selectedRecords = component.get("v.selectedList");
        var checkedRecords = component.find("innovationRecords");
        if(!Array.isArray(checkedRecords)){
            if(checkedRecords.get("v.value") == true){
                selectedRecords.push(checkedRecords.get("v.text"));
            }
        }
        else{
            for(var i = 0; i<checkedRecords.length; i++){
                if (checkedRecords[i].get("v.value") == true){
                    selectedRecords.push(checkedRecords[i].get("v.text"));
                }
                
            }
        }
        component.set("v.selectedList", selectedRecords);
        helper.helperMethod(component, "c.fetchSelectedRecords", true);      	
        
    },
    
    saveEditRecord : function(component, event, helper){
        var newList = component.get('v.selectedList');
        console.log(newList);
        var slectedElements = component.find('v.selectedList');
        console.log(component.get('v.Innov'));
        
        
        
        var refresh = $A.get("e.force:refreshView");
        var action = component.get('c.updatedRecords');
        action.setParams({
            recordsToUpdate : newList
        });
        action.setCallback(this,function(response){
            var state=response.getState();
            
            if(state==='SUCCESS')
            {
                var result=response.getReturnValue();
                console.log('c.updatedRecords ->', result);
                
                if(result){
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Success!",
                        "type":'success',
                        "message": "All the edited records have been updated successfully."
                    });
                    toastEvent.fire();
                    component.set('v.isEdit', false);
                    refresh.fire();
                }else{
                    var toastEvent = $A.get("e.force:showToast");
                    toastEvent.setParams({
                        "title": "Failed!",
                        "type":'error',
                        "message": "Some error occured. Please try again."
                    });
                    toastEvent.fire();
                }
            }
        });           
        $A.enqueueAction(action);
        
        //var a = component.get(c.myAction);
        //$A.enqueueAction(a);
        
        
    },
    
    cancelEditRecord : function(component, event, helper){
        component.set('v.isEdit',false);
        $A.get("e.force:refreshView").fire();        
    },
    
    handleSelectAllIdeas : function(component, event, helper){
        var checkvalue = component.find("selectAll").get("v.value");        
        var records = component.find("innovationRecords"); 
        
        if(checkvalue == true){
            for(var i=0; i<records.length; i++){
                records[i].set("v.value",true);
            }
        }
        else{ 
            for(var i=0; i<records.length; i++){
                records[i].set("v.value",false);
            }
        }
        
    },
    
    handleRecordSelection : function(component, event, helper){
        var records = component.find("innovationRecords");
        var temp = true;
        for(var i=0; i<records.length; i++){
            if(records[i].get("v.value") == false){
                component.find("selectAll").set("v.value", false);
                temp = false;
            }
            if(temp==true){
                component.find("selectAll").set("v.value", true);
            }          
        }
    },
    
    deleteRecord: function(component, event, helper){
        var selectedRecords = component.get("v.selectedList");
        var checkedRecords = component.find("innovationRecords");
        for(var i = 0; i<checkedRecords.length; i++){
            if (checkedRecords[i].get("v.value") == true){
                selectedRecords.push(checkedRecords[i].get("v.text"));
            }
        }
        component.set("v.selectedList", selectedRecords);
        
        var action = component.get('c.deleteRecords')
        action.setParams({
            recordsToDelete : selectedRecords
        });
        action.setCallback(this,function(response){
            var state=response.getState();
            
            if(state==='SUCCESS')
            {               
                var result=response.getReturnValue();
                var toastEvent = $A.get("e.force:showToast");
                if(result){
                    toastEvent.setParams({
                        "title": "Success!",
                        "type":'success',
                        "message": "Delete successful"
                    });
                    
                    $A.get("e.force:refreshView").fire();
                }else{
                    toastEvent.setParams({
                        "title": "Delete Failed!",
                        "type":'error',
                        "message": "Please select one or more records"
                    });
                }
                toastEvent.fire();
            }
            
        });
        $A.enqueueAction(action);
        
    },
    
    downloadCsv : function(component,event,helper){
        var stockData = component.get("v.CompleteInnovList"); 
        var csv = helper.convertArrayOfObjectsToCSV(component,stockData);   
        if (csv == null){return;} 
        
        // ####--code for create a temp. <a> html tag [link tag] for download the CSV file--####     
        var hiddenElement = document.createElement('a');
        hiddenElement.href = 'data:text/csv;charset=utf-8,' + encodeURI(csv);
        hiddenElement.target = '_self'; // 
        hiddenElement.download = 'Innovations.csv'; 
        document.body.appendChild(hiddenElement); // Required for FireFox browser
        hiddenElement.click(); // using click() js function to download csv file
    }, 
    
})