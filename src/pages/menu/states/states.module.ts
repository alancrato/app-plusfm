import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StatesPage } from './states';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    StatesPage,
  ],
  imports: [
    IonicPageModule.forChild(StatesPage),
    ComponentsModule,
  ],
})
export class StatesPageModule {}
