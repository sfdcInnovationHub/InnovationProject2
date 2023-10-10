import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class IndexPage extends NavigationMixin(LightningElement) {
    @track recordId ='0015j00001AkNTBAA3';

    navigateToRunCode4() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                'url':'https://samsung71-dev-ed.develop.lightning.force.com/lightning/r/Account/0015j00001AkNTBAA3/view'
            }
        });
    }
    navigateToDownoadCode4(){

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
    navigateToRunCode6(){
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                'url':"https://samsung71-dev-ed.develop.lightning.force.com/lightning/r/Contact/0035j00001Af9XfAAJ/view"
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

}