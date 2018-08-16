import { Component } from '@angular/core';
import { NavController, NavParams} from "ionic-angular";
import { PostsPage } from "../../pages/wordpress/posts/posts";
import { PromotionalPage } from "../../pages/wordpress/promotional/promotional";

@Component({
  selector: 'footer-component',
  templateUrl: 'footer.html'
})

export class FooterComponent {

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
  ) {}


  loadPage(page){
    this.navCtrl.setRoot(page);
  }

  loadStates(){
    this.navCtrl.push('StatesPage');
  }

  loadAbout(){
    this.navCtrl.push('AboutPage');
  }

  loadPromo(){
    this.navCtrl.push(PromotionalPage);
  }

  loadDrops(){
    this.navCtrl.push(PostsPage);
  }

}
