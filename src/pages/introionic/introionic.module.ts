import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IntroionicPage } from './introionic';

@NgModule({
  declarations: [
    IntroionicPage,
  ],
  imports: [
    IonicPageModule.forChild(IntroionicPage),
  ],
})
export class IntroionicPageModule {}
