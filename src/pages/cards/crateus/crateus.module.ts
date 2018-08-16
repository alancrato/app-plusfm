import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CrateusPage } from './crateus';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    CrateusPage,
  ],
  imports: [
    IonicPageModule.forChild(CrateusPage),
    ComponentsModule,
  ],
})
export class CrateusPageModule {}
