import { LightningElement, track, api} from 'lwc';
export default class app extends LightningElement { 
    @track searchKey;
    @track fieldname = 'DTE_Value__c';
    @track records;
    @track error;
    @track selectedRecord;
    @api optionIds = [];
    @track picklistOptionsArr = {'1':{Id:'Afghanistan',Name:'Afghanistan'},'2':{Id:'Albania',Name:'Albania'},'3':{Id:'Algeria',Name:'Algeria'},'4':{Id:'Andorra',Name:'Andorra'},'5':{Id:'Angola',Name:'Angola'},'6':{Id:'Argentina',Name:'Argentina'},'7':{Id:'Armenia',Name:'Armenia'},'8':{Id:'Australia',Name:'Australia'},'9':{Id:'Austria',Name:'Austria'},'10':{Id:'Azerbaijan',Name:'Azerbaijan'},'11':{Id:'Bahamas',Name:'Bahamas'},'12':{Id:'Bahrain',Name:'Bahrain'},'13':{Id:'Bangladesh',Name:'Bangladesh'},'14':{Id:'Barbados',Name:'Barbados'},'15':{Id:'Belarus',Name:'Belarus'},'16':{Id:'Belgium',Name:'Belgium'},'17':{Id:'Belize',Name:'Belize'}};
    //new Map([[1 , "Saurabh"], [2 , "Supriya"] ,[3, "Yuvraj"]]); 
    connectedCallback(){
        //console.log('in lwc'+this.picklistOptionsArr);
        var optionsaray=this.picklistOptionsArr;
        var optionIdsTemp =[];
        Object.keys(optionsaray).forEach(function(key) {
            var optionId=optionsaray[key];
            //console.log('this.optionsaray[key]'+ optionsaray[key]);
            //console.log('inside callback');
            optionIdsTemp.push(optionId);
            console.log(JSON.stringify(optionId));
            if(optionId.Id=='Barbados'){
              console.log('Barbados');
            }
        })
        this.optionIds = optionIdsTemp;
        this.records=optionIdsTemp;
        console.log('optionIds'+ this.optionIds);
    }
    handleChange(event){
        //console.log('Search Event Started ');
        const searchKey = event.target.value;
        console.log(searchKey);
        var optionsaray=this.picklistOptionsArr;
        var optionIdsTemp =[];
        Object.keys(optionsaray).forEach(function(key) {
            var optionId=optionsaray[key];
            //console.log('this.optionsaray[key]'+ optionsaray[key]);
            //console.log('inside callback');
            if(optionId.Name.startsWith(searchKey)){
              optionIdsTemp.push(optionId);
              console.log('Barbados');
            }
        })
        this.records=optionIdsTemp;

    }
   
}