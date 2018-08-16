import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CaririPage } from './cariri';
import { ComponentsModule } from "../../../components/components.module";

@NgModule({
  declarations: [
    CaririPage,
  ],
  imports: [
    IonicPageModule.forChild(CaririPage),
    ComponentsModule,
  ],
})
export class CaririPageModule {}
