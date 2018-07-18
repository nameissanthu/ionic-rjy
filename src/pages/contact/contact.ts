import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GetdataProvider } from '../../providers/getdata/getdata';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html',
  providers:[GetdataProvider]
})
export class ContactPage {
  getDatafromDatabase:any
  constructor(public navCtrl: NavController, private getdataService:GetdataProvider) {
     
  }
  ionViewDidLoad() {
    this.getdataService.getData().then(data =>{
      this.getDatafromDatabase = data;
     //  console.log(JSON.stringify(this.getDatafromDatabase))
    })
  }
 
}
