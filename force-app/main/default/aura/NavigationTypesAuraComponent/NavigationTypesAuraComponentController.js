({
	newAccount : function(component, event, helper) {
		var navService = component.find("navService");
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'new'
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
    
    viewAccount : function(component, event, helper) {
		var navService = component.find("navService");
        var pageReference = {
            type: 'standard__recordPage',
            attributes: {
                recordId: '0015j00001AkNTBAA3',
                objectApiName: 'Account',
                actionName: 'view'
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
    
    editAccount : function(component, event, helper) {
		var navService = component.find("navService");
        var pageReference = {
            type: 'standard__recordPage',
            attributes: {
                recordId: '0015j00001AkNTBAA3',
                objectApiName: 'Account',
                actionName: 'edit'
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
    
    recentAccounts : function(component, event, helper) {
		var navService = component.find("navService");
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Account',
                actionName: 'list'
            },
            state: {
                filterName: 'Recent'
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
    
    relatedListAccounts : function(component, event, helper) {
		var navService = component.find("navService");
        var pageReference = {
            type: 'standard__recordRelationshipPage',
            attributes: {
                recordId: '0015j00001AkNTBAA3',
                objectApiName: 'Account',
                relationshipApiName: 'Contact',
                actionName: 'list'
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
    
    navigateToHome : function(component, event, helper) {
		var navService = component.find("navService");
        var pageReference = {
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
    
  	contactHomePage : function(component, event, helper) {
		var navService = component.find("navService");
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Contact',
                actionName: 'home'
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
    
    chatterHomePage : function(component, event, helper) {
		var navService = component.find("navService");
        var pageReference = {
            type: 'standard__namedPage',
            attributes: {
                pageName: 'chatter'
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
    
    navigateToReports : function(component, event, helper) {
		var navService = component.find("navService");
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'Report',
                actionName: 'home'
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
    
    navigateToTab : function(component, event, helper) {
		var navService = component.find("navService");
        var pageReference = {
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'Index_Page'
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
    
    navigateToExternalPage : function(component, event, helper) {
		var navService = component.find("navService");
        var pageReference = {
            type: 'standard__webPage',
            attributes: {
                url: 'https://developer.salesforce.com'
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
    
    navigateToFiles : function(component, event, helper) {
		var navService = component.find("navService");
        var pageReference = {
            type: 'standard__objectPage',
            attributes: {
                objectApiName: 'ContentDocument',
                actionName: 'home'
            }
        }
        event.preventDefault();
        navService.navigate(pageReference);
	},
})