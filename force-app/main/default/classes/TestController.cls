public class TestController {
    @AuraEnabled
    public static List<Innovation__c> fetchRecords(String searchWord){
        String modifiedKeyWord =  searchWord + '%';
        List<Innovation__c> fetchedList = new List<Innovation__c> ([ SELECT id, Name,Domain__c, Fund__c,Start_Date__c,Stages__c  FROM Innovation__c WHERE Name LIKE :modifiedKeyWord]);
        return fetchedList;
    }
}