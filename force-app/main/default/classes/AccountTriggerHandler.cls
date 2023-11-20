/**
 * @author			: g.navneet@samsung.com
 * @group			: SFDC Innovation Hub
 * @last modified on: 
 * @last modified by:
 * Ver	Date		Author					Modification
 * 1.0	2023-10-06	g.navneet@samsung.com	Initial Version
 * 
 */

public class AccountTriggerHandler extends TriggerHandler {
    public AccountTriggerHandler(){
        
        
        
     // any custom constructor stuff goes here
    // call the constructor of the parent
    	super();
    
    }
    
    public override void beforeUpdate(List<SObject> newList, Map<Id, SObject> oldMap) {
    	runValidations(newList,oldMap);
        
  } 
    
    private void runValidations(List<SObject> updatedAccounts, Map<Id, SObject> oldMap) {
         for (SObject record : updatedAccounts) {
            if (record instanceof Account) {
                Account newAccount = (Account) record;
    
                // Access and compare Active__c field
                String isNewActive = (String) newAccount.get('Active__c');
                Account oldAccount = (Account) oldMap.get(newAccount.Id);
    
                if (oldAccount != null) {
                    String isOldActive = (String) oldAccount.get('Active__c');
    
                    // Compare Active__c values
                    
                        if (isOldActive=='Yes' && isNewActive=='Yes') {
                            
                            // 'Active__c' is 'Yes', allow further updates
                            // Add your logic for further updates here
                        } 
                        else if (isOldActive=='No') {
                            // 'Active__c' is 'No', do not allow further updates
                            // Handle accordingly, e.g., throw an exception or add an error
                            newAccount.addError('Updates are not allowed when Active is No.');
                        }
                }
            }
         }
        // Add conditions for other SObject types if needed
    }
}