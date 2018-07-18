import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { IntroionicPage } from '../introionic/introionic';


// import { IntroionicPage } from '../introionic/introionic';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public storage: Storage) {

  }


  ionViewDidLoad() {
    this.storage.get('intro-done').then(done => {
      if (!done) {
        this.storage.set('intro-done', true);
        this.navCtrl.setRoot(IntroionicPage);
      }
    });
  }
  someClick(){
   
    this.navCtrl.setRoot(IntroionicPage);
 
  }

}
