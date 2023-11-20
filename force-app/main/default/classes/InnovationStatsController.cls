public class InnovationStatsController {
    @AuraEnabled
    public static List<Innovation__c> fetchAll(){
        
        List<Innovation__c> InnovList = new List<Innovation__c> ([ select id, Name,Domain__c, Fund__c,Start_Date__c,Stages__c  from Innovation__c Limit 10 ]);
        return InnovList;
       
    }
    
    @AuraEnabled
    public static List<Innovation__c> getInnovList(){
        List<Innovation__c> InnovList = new List<Innovation__c> ([ select id, Name,Domain__c, Fund__c,Start_Date__c,Stages__c  from Innovation__c Limit 5 ]);
        return InnovList;
       
    }
    
    @AuraEnabled(cacheable=true)
    public static boolean updatedRecords(List<Innovation__c> recordsToUpdate){
        boolean result = true;
        for(Innovation__c record : recordsToUpdate){
            if(record.Name == '')
                result = false;
        }
        if(result){
            try{
                update recordsToUpdate;
                
            }catch(Exception E){
                System.debug('ERROR ==> '+E);
                result = false;
            }
        }
        return result;
    }
    
    @AuraEnabled(cacheable=true)
    public static boolean deleteRecords(List<Id> recordsToDelete){
        boolean result;
        
		set<Id> setOfId = new set<Id>();
        for(Id record : recordsToDelete){
            setOfId.add(record);
        }        
        if(setOfId.size()>0){
            try{
                delete [SELECT Id FROM Innovation__c WHERE id =: setOfId];
                result = true;
            }catch(Exception E){
                System.debug('ERROR ==> '+E);
                result = false;
            }
        }else{
            result = false;
        }
        return result;
    }
    
    @AuraEnabled
    public static List<Innovation__c> fetchRecords(String searchWord){
        String modifiedKeyWord =  searchWord + '%';
        List<Innovation__c> fetchedList = new List<Innovation__c> ([ SELECT id, Name,Domain__c, Fund__c,Start_Date__c,Stages__c  FROM Innovation__c WHERE Name LIKE :modifiedKeyWord]);
        return fetchedList;
    }
    
    @AuraEnabled
    public static List<Innovation__c> fetchSelectedRecords(List <Id> selectedList){
        System.debug(selectedList);
        set<Id> setOfId = new set<Id>();
        for(Id record : selectedList){
            setOfId.add(record);
        }
        List<Innovation__c> newList = new List<Innovation__c>(
            [SELECT Name, Domain__c, Fund__c, Start_Date__c, Stages__c FROM Innovation__c WHERE id =: setOfId]
        );
        
        return newList;
        
    }
}