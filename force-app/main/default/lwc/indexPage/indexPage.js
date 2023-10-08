import { LightningElement, api, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';

export default class IndexPage extends NavigationMixin(LightningElement) {
    navigateToDowloadCode1() {
        this[NavigationMixin.Navigate]({
            "type": "standard__webPage",
            "attributes": {
                "url": "https://www.github.com/"
            }
        });
    }

}