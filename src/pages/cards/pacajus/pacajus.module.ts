import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PacajusPage } from './pacajus';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    PacajusPage,
  ],
  imports: [
    IonicPageModule.forChild(PacajusPage),
    ComponentsModule,
  ],
})
export class PacajusPageModule {}
