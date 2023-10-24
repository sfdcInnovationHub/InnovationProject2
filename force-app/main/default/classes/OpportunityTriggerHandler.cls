public class OpportunityTriggerHandler extends TriggerHandler {
    public OpportunityTriggerHandler(){
        super();
    }
    public override void beforeInsert(List<SObject> newList) {
    	runValidations(newList);
        
  }
    public static void runValidations(List<SObject> newList) {
        for(SObject opp: newList){
            Opportunity newOpp = (Opportunity) opp;
            String Type = (String) newOpp.get('Type');
            Date CloseDate = (Date) newOpp.get('CloseDate');
           
            if(Type !='New Customer' || Type == null){
                opp.addError('opportunity Type should be Only new Customer for creating new opportunity');
            }
            if(CloseDate <=Date.today()){
                opp.addError('Opportunity Close Date should be greater then today');
            }
        }
    }
}