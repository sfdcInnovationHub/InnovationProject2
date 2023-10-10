public class GenericTriggerHandler {
    public static void handleTrigger(List<SObject> records) {
        
        
        
        
        // Handle common logic for all objects
        for (SObject record : records) {
            
            Schema.SObjectType sobjectType = record.Id.getSObjectType();
            String sobjectName = sobjectType.getDescribe().getName();
            System.debug('Record: ' + record);
            System.debug('sobjectName: ' + sobjectName);
            
            If(sobjectName == 'Account'){
                try{
                    Upsert record;
                }catch(Exception E){
                    System.debug('Account Error : ' + E);
                }
            }else If(sobjectName == 'Contact'){
                try{
                    Upsert record;
                }catch(Exception E){
                    System.debug('Contact Error : ' + E);
                }
            }else If(sobjectName == 'Lead'){
                try{
                    Upsert record;
                }catch(Exception E){
                    System.debug('Lead Error : ' + E);
                }
            }
        }
    }
}