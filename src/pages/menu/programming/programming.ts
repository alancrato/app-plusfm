import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from "../../../providers/service";

@IonicPage()

@Component({
  selector: 'page-programming',
  templateUrl: 'programming.html',
  providers: [Service]
})
export class ProgrammingPage {

  program:any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private service: Service
  ) {}

  ngOnInit(){
    this.getProm();
  }

  getProm(){
    this.service.getProgramations()
        .subscribe(result => {
          this.program = result;
        });
  }

}
