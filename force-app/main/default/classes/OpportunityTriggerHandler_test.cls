@isTest
public class OpportunityTriggerHandler_test {
    static testMethod void test(){
    list<sObject> listnew= new List<sObject>();
    Opportunity obj = new Opportunity();
    obj.CurrentGenerators__c = 'test' ;
    obj.Type='New Customer';
    obj.CloseDate= system.today()+2;
    obj.Name='test';
    obj.StageName='test1';
    insert obj;
    obj.Type='Existing Customer - Downgrade';
    obj.CloseDate= system.today()-1;

    update obj;
    listnew.add(obj);
	OpportunityTriggerHandler.runValidations(listnew);  
    }
}