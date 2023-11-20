import { LightningElement, api, track, wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { NavigationMixin } from 'lightning/navigation';
import getMetaDataList from '@salesforce/apex/indexPageController.getMataDataList';
import updateData from '@salesforce/apex/indexPageController.updateData';

export default class IndexPage extends NavigationMixin(LightningElement) {
    @track indexData;
    i = 0;
    viewE =0;
    

    get indexNumber(){
        this.i = this.i+1;
        return this.i;
        
    }
   
    handleDownloadClick(event) {
        const rowId = event.target.dataset.rowId;
        const rowId1 = event.target.dataset.rowId1;
        console.log('rowId',rowId);
        console.log('rowId1',rowId1);

        return new Promise((resolve, reject) =>{
                console.log("3. looking for the Id");
                updateData({
                    rowIdCount:rowId1
                })
                .then((data) => {
                    console.log("4. successfully retreived ID");
                    resolve(data)
                    console.log(JSON.stringify(data));
                })
                .catch((error) => {
                    reject(error);
                    console.log(JSON.stringify(data));
                });
    }),
    this[NavigationMixin.Navigate](
        {
             type: "standard__webPage",
             attributes: {
             url: rowId
             },
         });
    }
    
    handleRunClick(event){
        const rowId = event.target.dataset.rowId;
        const rowId1 = event.target.dataset.rowId1;
        const rowId2 = event.target.dataset.rowId2;
        const rowId3 = event.target.dataset.rowId3;
        const rowId4 = event.target.dataset.rowId4;
        const rowId5 = event.target.dataset.rowId5;
        const rowId6 = event.target.dataset.rowId6;

        console.log(rowId,rowId1,rowId2,rowId3,rowId4,rowId5,rowId6);
        // type: 'standard__navItemPage',
        if(rowId6 =='standard__navItemPage'){
            this[NavigationMixin.Navigate]({
                type: rowId6,
                attributes: {
                    //Name of any CustomTab. Visualforce tabs, web tabs, Lightning Pages, and Lightning Component tabs
                    apiName: rowId4
                },
            });
        }
        if(rowId6 =='standard__objectPage'){
            this[NavigationMixin.Navigate]({
                type: rowId6,
                attributes: {
                    objectApiName: rowId5,
                    // open record view page
                    actionName: rowId3,
                  }
               
            });
        }
        if(rowId6 =='standard__webPage'){
            this[NavigationMixin.Navigate](
            {
                type: rowId6,
                attributes: {
                    //navigate outside the salesforce
                url: rowId2
                },
            });

        }
    }
    connectedCallback() {
        this.getMetaDataList();
    }
    getMetaDataList(){
        getMetaDataList().then(result =>{
            this.indexData = JSON.parse(JSON.stringify(result));
            console.log('results__', JSON.stringify(result))
        }).catch(error=>{
            console.log(error);
           
        })
    }
}