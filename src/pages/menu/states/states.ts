import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from "../../../providers/service";

@IonicPage()

@Component({
  selector: 'page-states',
  templateUrl: 'states.html',
  providers: [Service]
})

export class StatesPage {

  cat: any;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private service: Service,
  ) {}

  ngOnInit(){
    this.getCat();
  }

  getCat(){
    this.service.getCategories()
        .subscribe(result => {
          this.cat = result;
        });
  }

  loadPage(page){
    this.navCtrl.setRoot(page);
  }

}
