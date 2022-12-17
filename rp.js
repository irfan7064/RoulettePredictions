import { api, LightningElement,track } from 'lwc';
const myArray = {0: '0',
     1: '32',
     2: '15',
     3: '19',
     4: '4',
     5: '21' ,
     6: '2' ,
     7: '25' ,
     8: '17' ,
     9: '34' ,
     10: '6' ,
     11: '27' ,
     12: '13' ,
     13: '36' ,
     14: '11' ,
     15: '30' ,
     16: '8' ,
     17: '23' ,
     18: '10' ,
     19: '5' ,
     20: '24' ,
     21: '16' ,
     22: '33' ,
     23: '1' ,
     24: '20' ,
     25: '14' ,
     26: '31' ,
     27: '9' ,
     28: '22' ,
     29: '18' ,
     30: '29' ,
     31: '7' ,
     32: '28' ,
     33: '12' ,
     34: '35' ,
     35: '3' ,
     36: '26' 
     };
export default class RoulettePredictor extends LightningElement {

     
    

 k1;
@track  v2;
//value to be shown
@api v1;
@track vk=[];
//key to be shown

 @track v2=[];

handleclick(event) {
   
   var k= this.template.querySelector("lightning-input");
   this.v1=k.value;

    //console.log('hi jimmy'+this.v1);
    
    
    this.v2 = [...this.v2, this.v1];

    //console.log('hi jon'+this.v2);



   

     this.template.querySelectorAll('lightning-input').forEach(element => {
        if(element.type === 'checkbox' || element.type === 'checkbox-button'){
          element.checked = false;
        }else{
          element.value = null;
        }      
      });

      //var d = v1;
    var varv;
   
    for (const key in myArray) {
        //console.log("key " + key  +' + '+ myArray[key]);
        varv= parseInt(this.v1);
        if(varv==myArray[key]){ this.vk = [...this.vk, key];}


      }
   
       


}
}
