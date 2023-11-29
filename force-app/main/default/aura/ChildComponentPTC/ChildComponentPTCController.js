({
    childComponentMethod : function(component, event){
        console.log("In log Param");
        var params = event.getParam('arguments');
        console.log(params);
        if(params){
            var message = params.message;           
        }
        component.set('v.isOpen', params.isOpen);
        component.set('v.message', params.message);
    },
    
    closeModal : function(component, event){
        component.set('v.isOpen', false);
    }
})