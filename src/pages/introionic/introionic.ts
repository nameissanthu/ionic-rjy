import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the IntroionicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-introionic',
  templateUrl: 'introionic.html',
})
export class IntroionicPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  navHome() {
    this.navCtrl.setRoot(HomePage);
  }
  

}
