import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    greeting = 'Type Your name in Name field';
    handleChange(event){
        this.greeting = event.target.value;
    }
}