import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ParaipabaPage } from './paraipaba';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    ParaipabaPage,
  ],
  imports: [
    IonicPageModule.forChild(ParaipabaPage),
    ComponentsModule,
  ],
})
export class ParaipabaPageModule {}
