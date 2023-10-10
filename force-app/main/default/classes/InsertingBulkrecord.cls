public class InsertingBulkrecord {
	List<Account> acc=[Select id,Name,AccountNumber,AnnualRevenue,Phone,Rating from Account];
    public void insertData(){
        List<AccountCopy__c> acclst=new List<AccountCopy__c>();
        for(Account a: acc){
            AccountCopy__c obj= new AccountCopy__c();
            obj.Name= a.Name;
            obj.AccountNumber__c =a.AccountNumber;
            obj.Annual_Revenue__c = a.AnnualRevenue;
            obj.Phone__c = a.Phone;
            obj.Rating__c = a.Rating;
            acclst.add(obj);
        }
        insert acclst;
    }
}