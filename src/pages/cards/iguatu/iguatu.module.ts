import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { IguatuPage } from './iguatu';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    IguatuPage,
  ],
  imports: [
    IonicPageModule.forChild(IguatuPage),
    ComponentsModule,
  ],
})
export class IguatuPageModule {}
