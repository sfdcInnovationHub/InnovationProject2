import { LightningElement } from 'lwc';
import { ShowToastEvent } from "lightning/platformShowToastEvent";
export default class ToastMessageInLWC extends LightningElement {
    _title ='Simple Title';
    message = "Sample Message";
    variant = "error";
    variantOptions = [
        { label: "error", value: "error" },
        { label: "warning", value: "warning" },
        { label: "success", value: "success" },
        { label: "info", value: "info" },
    ];
    mode ="dismissible";
    modeOptions =[
        {label : "dismissible", value:"dismissible"},
        {label: "pester", value:"pester"},
        {label: "sticky", value: "sticky"}
    ];
    titleChange(event) {
        this._title = event.target.value;
    }
    messageChange(event) {
        this.message = event.target.value;
    }
    
    variantChange(event) {
        this.variant = event.target.value;
    }
    modeChange(event){
        this.mode = event.target.value;
    }
    showNotification(){
        const evt = new ShowToastEvent({
            title :this._title,
            message : this.message,
            variant : this.variant,
            mode: this.mode
        });
        
        this.dispatchEvent(evt);  
    }
   
}