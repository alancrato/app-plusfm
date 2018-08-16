import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RedencaoPage } from './redencao';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    RedencaoPage,
  ],
  imports: [
    IonicPageModule.forChild(RedencaoPage),
    ComponentsModule,
  ],
})
export class RedencaoPageModule {}
