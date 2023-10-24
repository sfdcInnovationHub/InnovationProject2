@isTest
public class AccountTriggerHandlerTest {
    @isTest
    static void testBeforeUpdate() {
        // Create test Account records
        Account oldAccount = new Account(Name = 'Old Account', Active__c = 'Yes');
        Account newAccount = new Account(Name = 'New Account', Active__c = 'Yes');
        
        insert newAccount;
        oldAccount.Id = newAccount.Id;
        
        // Create test data for trigger context
        List<SObject> updatedAccounts = new List<SObject>{ newAccount };
        Map<Id, SObject> oldMap = new Map<Id, SObject>{ newAccount.Id => oldAccount };
        
        // Call the trigger handler method
        AccountTriggerHandler handler = new AccountTriggerHandler();
        handler.beforeUpdate(updatedAccounts, oldMap);
        
        // Assert that the Account was updated successfully without errors
        System.assertEquals(0, updatedAccounts[0].getErrors().size());
        
        // Update Active__c to 'No' and call the trigger handler method again
        
        oldAccount.Active__c = 'No';

        
        handler.beforeUpdate(updatedAccounts, oldMap);
        
        // Assert that an error was added to the Account
        System.assertNotEquals(0, updatedAccounts[0].getErrors().size());
    }
}