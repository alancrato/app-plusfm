import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Slides } from 'ionic-angular';
import { Service } from "../../../providers/service";

@IonicPage()

@Component({
  selector: 'page-aracati',
  templateUrl: 'aracati.html',
  providers: [Service]
})

export class AracatiPage {
    @ViewChild(Slides) slides: Slides;

    url:string = 'http://198.24.156.115:9304/;';
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
            this.slides.slideTo(index +1);
        }, 500);
    }

    ionViewDidEnter(){
      this.play();
      let currentIndex = this.slides.getActiveIndex();
      console.log('Current index is', currentIndex);
      this.slides.slideTo(1, 500);
    }

    ionViewDidLeave(){
      this.pause();
        this.slides.slideTo(1, 500);
    }

    goToSlide(){
        this.slides.slideTo(1, 500);
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
