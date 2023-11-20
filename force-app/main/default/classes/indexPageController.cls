public with sharing class indexPageController {
    @AuraEnabled(cacheable=true)
    public static List<index_value__mdt> getMataDataList(){
        try {
            return[
                SELECT 
                Id,
                Category__c,
                Discription__c,
                Download__c,
                DownloadURL__c,
                Run__c,
                RunURL__c,
                actionName__c,
                apiName__c,
                objectApiName__c,
                type__c,
                viewCount__c
                FROM index_value__mdt
                ORDER BY Run__c ASC 
            ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    @AuraEnabled(cacheable=true)
    public static List<DownladCount__c> viewCount(Id recordId){
        System.debug('*****'+recordId);
        try {
            return[
                SELECT 
                Id,
                Count__c,
                MetaData_Id__c
                 FROM DownladCount__c
                Where MetaData_Id__c =: recordId
                
            ];
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
    

    @AuraEnabled(cacheable=false)
    public static void updateData(Id rowIdCount){
        system.debug('rowIdCount+++'+rowIdCount);
        try {
            List<DownladCount__c> updateDownloadCount = new List<DownladCount__c>();
            List<DownladCount__c> updateDownCountRecord = new List<DownladCount__c>();
            updateDownloadCount = [SELECT Id,
                Count__c,
                MetaData_Id__c
                FROM DownladCount__c
                Where MetaData_Id__c =: rowIdCount];
            if(updateDownloadCount.size()>0){
                for(DownladCount__c dc : updateDownloadCount){
                    dc.Count__c = dc.Count__c + 1;
                    updateDownCountRecord.add(dc);
                }
                update updateDownCountRecord;
            }
            else{
                DownladCount__c dcNewRecord = new DownladCount__c();
                dcNewRecord.Count__c = 1;
                dcNewRecord.MetaData_Id__c = rowIdCount;
                //updateDownCountRecord.add(dcNewRecord);
                insert dcNewRecord;

            }
            system.debug('updateDownCountRecord'+ Limits.getLimitDMLStatements());
            if (Limits.getDMLStatements() >= Limits.getLimitDMLStatements()) {
                //upsert updateDownCountRecord;
                // Handle the situation where you are reaching the DML statement limit
            }
            // if(updateDownCountRecord.size()>0){
                

            // }
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}