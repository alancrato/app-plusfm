import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Service } from "../../../providers/service";

@IonicPage()

@Component({
  selector: 'page-paraipaba',
  templateUrl: 'paraipaba.html',
  providers: [Service]
})

export class ParaipabaPage {
    @ViewChild(Slides) slides: Slides;

    url:string = 'http://198.24.156.115:9300/;';
    stream:any;
    plaY:boolean;
    cards = [];

    constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        private service: Service,
    ) {
      {
        this.stream = new Audio(this.url);
        this.plaY = true;
      }
    }

    getCat(){
      this.service.getCategories()
          .subscribe(result => {
            this.cards = result;
          });
    }

    ngOnInit(){
      this.getCat();
    }

    ionViewDidLoad(){
        setTimeout(() => {
            let index = this.slides.getPreviousIndex();
            console.log(index);
            this.slides.slideTo(index +8);
        }, 500);
    }

    ionViewDidEnter(){
      this.play();
      let currentIndex = this.slides.getActiveIndex();
      console.log('Current index is', currentIndex);
      this.slides.slideTo(8, 500);
    }

    ionViewDidLeave(){
      this.pause();
    }

    play(){
      let play = this.stream.play();
      this.plaY = false;
      if(play){
        console.log('Playing');
      }
    }

    pause(){
      this.stream.pause();
      this.plaY = true;
    }

    loadPage(page){
        this.navCtrl.setRoot(page);
    }
}
