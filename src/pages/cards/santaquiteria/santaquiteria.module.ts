import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SantaquiteriaPage } from './santaquiteria';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    SantaquiteriaPage,
  ],
  imports: [
    IonicPageModule.forChild(SantaquiteriaPage),
    ComponentsModule,
  ],
})
export class SantaquiteriaPageModule {}
