import { LightningElement,api,track } from 'lwc';

export default class BindingBanner extends LightningElement {
    @api recordId;
    @api objectApiName;
    @track objectnameAccount = false;
    connectedCallback(){
        if(objectApiName = 'Account'){
            this.objectnameAccount = true;
        }

    }

}