import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class IndexPage extends NavigationMixin(LightningElement) {
    @track recordId ='0015j00001AkNTBAA3';

    navigateToDowloadCode1() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                'url':'https://github.com/sfdcInnovationHub/InnovationProject2/blob/main/force-app/main/default/How%20to%20create%20salesforce%20Dev%20Org'
            }
        });
    }
    navigateToDowloadCode2() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                'url':'https://github.com/sfdcInnovationHub/InnovationProject2/blob/main/force-app/main/default/How%20to%20create%20user'
            }
        });
    }
    
    navigateToRunCode4() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                'url':'https://samsung71-dev-ed.develop.lightning.force.com/lightning/r/Account/0015j00001AkNTBAA3/view'
            }
        });
    }
    navigateToDownoadCode4(){
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://github.com/sfdcInnovationHub/InnovationProject2/blob/main/force-app/main/default/triggers/OpportunityTrigger.trigger"
            }
        });

    }
    navigateToRunCode5(){
        this[NavigationMixin.Navigate]({
            type: "standard__objectPage",
            attributes: {
                objectApiName: "Opportunity",
                actionName: "home",
              }
           
        });
    }
    navigateToDowloadCode5() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://github.com/sfdcInnovationHub/InnovationProject2/blob/main/force-app/main/default/triggers/AccountTrigger.trigger"
            }
        });
    }
    navigateToRunCode6(){
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                'url':"https://samsung71-dev-ed.develop.lightning.force.com/lightning/r/Contact/0035j00001Af9XfAAJ/view"
            }
        });

    }
    navigateToDowloadCode6() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://github.com/sfdcInnovationHub/InnovationProject2/blob/main/force-app/main/default/triggers/ContactTrigger.trigger"
            }
        });
    }
    navigateToDowloadCode7() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://github.com/sfdcInnovationHub/InnovationProject2/tree/main/force-app/main/default/lwc/helloBinding"
            }
        });
    }
    navigateToRunCode7(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                //Name of any CustomTab. Visualforce tabs, web tabs, Lightning Pages, and Lightning Component tabs
                apiName: 'Lightning_web_component_LWC_Binding'
            },
        });
    }
    navigateToDowloadCode8() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": ""
            }
        });
    }
    navigateToRunCode8(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                //Name of any CustomTab. Visualforce tabs, web tabs, Lightning Pages, and Lightning Component tabs
                apiName: 'Message'
            },
        });
    }
    navigateToDowloadCode9() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": ""
            }
        });
    }
    navigateToRunCode9(){
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                //Name of any CustomTab. Visualforce tabs, web tabs, Lightning Pages, and Lightning Component tabs
                apiName: 'Notification'
            },
        });
    }

}