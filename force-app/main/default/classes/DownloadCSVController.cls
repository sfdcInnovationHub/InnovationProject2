public class DownloadCSVController {
    @AuraEnabled
    public static list <Innovation__c> fetch(){
        
        List<Innovation__c> InnovList = new List<Innovation__c> ([ select id, Name,Domain__c, Fund__c,Start_Date__c,Stages__c  from Innovation__c Limit 200 ]);

        return InnovList;
    }
}