import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProgrammingPage } from './programming';

@NgModule({
  declarations: [
    ProgrammingPage,
  ],
  imports: [
    IonicPageModule.forChild(ProgrammingPage),
  ],
})
export class ProgrammingPageModule {}
