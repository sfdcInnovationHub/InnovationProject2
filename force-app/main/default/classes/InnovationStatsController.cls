public class InnovationStatsController {
	@AuraEnabled
    public static List<Innovation__c> getInnovList(){
        List<Innovation__c> InnovList = new List<Innovation__c> ([ select id, Name,Domain__c, Fund__c,Start_Date__c,Stages__c  from Innovation__c ]);
        return InnovList;
    }
    
    @AuraEnabled
    public static List<Innovation__c> updatedRecords(List<Innovation__c> recordsToUpdate){
        update recordsToUpdate;
        return recordsToUpdate;
    }
    
        @AuraEnabled
    public static List<Innovation__c> fetchRecords(String searchWord){
        String modifiedKeyWord =  searchWord + '%';
        List<Innovation__c> fetchedList = new List<Innovation__c> ([ SELECT id, Name,Domain__c, Fund__c,Start_Date__c,Stages__c  FROM Innovation__c WHERE Name LIKE :modifiedKeyWord]);
        return fetchedList;
    }
}