import { Component, Injectable } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Service } from "../../../providers/service";

@IonicPage()
@Injectable()

@Component({
  selector: 'page-anunciopagetwo',
  templateUrl: 'anunciopagetwo.html',
  providers: [Service]
})

export class AnunciopagetwoPage {

  pub:any[];

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private service: Service
  ) {}

  ngOnInit(){
    this.getCat();
  }

  ionViewDidLoad() {

  }

  getCat(){
    this.service.getCategories()
        .subscribe(result => {
          this.pub = result;
        });
  }

}
