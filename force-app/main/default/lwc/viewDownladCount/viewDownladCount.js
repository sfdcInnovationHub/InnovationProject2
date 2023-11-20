import { LightningElement,api, track, wire } from 'lwc';
import { getRecord, getFieldValue,getFieldDisplayValue } from "lightning/uiRecordApi";

import viewCount from '@salesforce/apex/indexPageController.viewCount';
import COUNT_FIELD from '@salesforce/schema/DownladCount__c.Count__c';
import METADATA_FIELD from '@salesforce/schema/DownladCount__c.MetaData_Id__c';
const fields =[COUNT_FIELD,METADATA_FIELD];

export default class ViewDownladCount extends LightningElement {

  @api recordId;
  @track countlist;
  @wire(viewCount, { 
          recordId: "$recordId", 
          fields })
    download({data,error}){
      if(data){
        this.countlist = JSON.parse(JSON.stringify(data));
      }
      else if(error){
        console.log('***',JSON.stringify(error));
      }
    }
  
 
}