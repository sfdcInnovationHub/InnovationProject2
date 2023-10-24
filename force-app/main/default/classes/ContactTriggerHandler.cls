/**
 * @author			: g.navneet@samsung.com
 * @group			: SFDC Innovation Hub
 * @last modified on: 
 * @last modified by:
 * Ver	Date		Author					Modification
 * 1.0	2023-10-06	g.navneet@samsung.com	Initial Version
 * 
 */

 public class ContactTriggerHandler extends TriggerHandler {
	
    public ContactTriggerHandler() {    
        
     // any custom constructor stuff goes here
    // call the constructor of the parent
    	super();
    
    }
    
    public override void beforeDelete(List<SObject> oldList) {
    	runValidations(oldList);
        //System.debug('This Executed');
        
  }
    
    private void runValidations(List<SObject> previousList) {
    Set<Id> accountIds = new Set<Id>();  // Set to store unique Account IDs
    
    // Collect Account IDs from Contacts efficiently
    for (SObject record : previousList) {
        if (record instanceof Contact) {
            accountIds.add(((Contact)record).AccountId);
        }
    }
    
    // Query Account fields using the Account IDs
    Map<Id, Account> accountsMap = new Map<Id, Account>([SELECT Id, Active__c FROM Account WHERE Id IN :accountIds]);
    
    
    
    // Iterate through Contacts and add error if associated Account is active
    for (SObject record : previousList) {
        if (record instanceof Contact) {
            Contact contact = (Contact)record;
            if (accountsMap.containsKey(contact.AccountId) && accountsMap.get(contact.AccountId).Active__c == 'Yes') {
                contact.addError('Cannot delete Contact associated with an active Account.');
            }
        }
    }
}
}