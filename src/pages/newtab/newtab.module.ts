import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NewtabPage } from './newtab';

@NgModule({
  declarations: [
    NewtabPage,
  ],
  imports: [
    IonicPageModule.forChild(NewtabPage),
  ],
})
export class NewtabPageModule {}
