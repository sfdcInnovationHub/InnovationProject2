({
    handleClick : function(component, event, helper){
        var compEvent = component.getEvent("ComponentEvent");
        console.log(compEvent);
        var data = component.get("v.enteredText");
        console.log(data);
        compEvent.setParams({"sampleComponentEvent" : data });
        compEvent.setParams({"eventModal" : false})
        compEvent.fire();
        console.log('done');
}
})