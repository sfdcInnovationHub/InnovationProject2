/**
 * @author			: rishab.k@samsung.com
 * @group			: SFDC Innovation Hub
 * @last modified on: 
 * @last modified by:
 * Ver	Date		Author					Modification
 * 1.0	2023-10-27	rishab.k@samsung.com	Initial Version
 * 
 */

@isTest
public class ContactTriggerHandlerTest {
    @isTest
    static void testBeforeDelete() {
        // Create test Account records
        Contact oldContact = new Contact(LastName = 'Demo Contact');
        
        Account newAccount = new Account(Name = 'Demo Account');
        newAccount.Active__c = 'Yes';
        insert newAccount;
        
        oldContact.Accountid = newAccount.Id;
        insert oldContact;
        
        // Create test data for trigger context
        List<SObject> updatedContacts = new List<SObject>{ oldContact };
        
        // Call the trigger handler method
        ContactTriggerHandler handler = new ContactTriggerHandler();
        handler.beforeDelete(updatedContacts);
        
        // Assert that the Account was updated successfully without errors
        System.assertEquals(1, updatedContacts[0].getErrors().size());
        
        // Update Active__c to 'No' and call the trigger handler method again
        newAccount.Active__c = 'No';
        update newAccount;

        
        handler.beforeDelete(updatedContacts);
        
        // Assert that an error was added to the Account
        System.assertNotEquals(0, updatedContacts[0].getErrors().size());
    }
}