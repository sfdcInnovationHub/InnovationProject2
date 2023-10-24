import { LightningElement } from 'lwc';
import LightningPrompt  from 'lightning/prompt';
import  LightningConfirm  from 'lightning/confirm';
import  LightningAlert  from 'lightning/alert';
export default class ModelNotificationInLWC extends LightningElement {
    handlePromptMessage(){
        LightningPrompt.open({
            message: 'Please type message in promp inbox',
            //theme defaults to "default"
            label: "please responds",
            defaultValue: "Type the input message",
        }).then((result)=>{
            //prompt model has been closed
        });
    }
    async  handleConfirmMessage(){
        const result = LightningConfirm.open({
            message: "This is the confirmation message.",
            variant: "headerless",
            label: "This is the aria-label value",
             // label value isn't visible in the headerless variant
        });
          // confirm modal has been closed

    }
    async handleAlert(){
        await LightningAlert.open({
            message: "This is the alert message.",
            theme: "error", // a red theme intended for error states
            label: "Error!", // this is the header text
        });
        // alert modal has been closed
    }

}