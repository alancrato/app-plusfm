import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AracatiPage } from './aracati';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    AracatiPage,
  ],
  imports: [
    IonicPageModule.forChild(AracatiPage),
    ComponentsModule,
  ],
})
export class AracatiPageModule {}
