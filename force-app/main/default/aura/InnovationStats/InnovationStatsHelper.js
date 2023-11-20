({
    helperMethod : function(component, actionName, val) {
        var x = component.get('v.selectedList');
        var action = component.get(actionName);
        action.setParams({selectedList : x})
        action.setCallback(this, function(response){
            
            //console.log(response.getReturnValue());
            var state=response.getState();
            var result = response.getReturnValue();
            
            if(state==='SUCCESS' && result.length != 0)
            {
                component.set('v.selectedList',result);
                component.set('v.isEdit',true);
            }else{
                var toastEvent = $A.get("e.force:showToast");
                toastEvent.setParams({
                    "title": "Failed",
                    "type":'Error',
                    "message": "Please, select one or more records."
                });
                toastEvent.fire();
            }
            
        });
        $A.enqueueAction(action);
    },
    
    onLoad: function(component, event) {
        // load all the data with pageload
        var action = component.get('c.fetchAll');
        action.setCallback(this, function(response){
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set('v.CompleteInnovList', response.getReturnValue());
            }
        });
        $A.enqueueAction(action);
    },
    
    convertArrayOfObjectsToCSV : function(component,objectRecords){
        var csvStringResult, counter, keys, columnDivider, lineDivider;
        if (objectRecords == null || !objectRecords.length) {
            return null;
        }
        // store ,[comma] in columnDivider variabel for sparate CSV values and 
        // for start next line use '\n' [new line] in lineDivider varaible  
        columnDivider = ',';
        lineDivider =  '\n';
        
        // in the keys valirable store fields API Names as a key 
        // this labels use in CSV file header  
        keys = ['Id','Name','Domain__c','Fund__c','Start_Date__c','Stages__c' ];
        
        csvStringResult = '';
        csvStringResult += keys.join(columnDivider);
        csvStringResult += lineDivider;
        
        for(var i=0; i < objectRecords.length; i++){   
            counter = 0;
            
            for(var sTempkey in keys) {
                var skey = keys[sTempkey] ;  
                
                // add , [comma] after every String value,. [except first]
                if(counter > 0){ 
                    csvStringResult += columnDivider; 
                }   
                
                csvStringResult += '"'+ objectRecords[i][skey]+'"'; 
                
                counter++;
                
            } // inner for loop close 
            csvStringResult += lineDivider;
        }// outer main for loop close 
        
        // return the CSV formate String 
        return csvStringResult;        
    },
})