import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SobralPage } from './sobral';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    SobralPage,
  ],
  imports: [
    IonicPageModule.forChild(SobralPage),
    ComponentsModule,
  ],
})
export class SobralPageModule {}
