import { Component } from '@angular/core';
import { NavParams, LoadingController } from 'ionic-angular';

import { ServiceWp } from "../service/service.wp";

@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
  providers: [ServiceWp]
})
export class PostPage {

      post: any;
      authorData: any;
      comments = [];

      constructor(
          private navParams: NavParams,
          private service: ServiceWp,
          private loading: LoadingController
      ) {
        let nav = this.navParams;
        if (nav.get('post')) {
          this.post = nav.get('post');
        }
        if (nav.get('id')) {
          this.getPost(nav.get('id'));
        }
      }

      getPost(id) {
        let loader = this.loading.create({
            content: ""
        });

        loader.present();
        this.service.getPost(id)
            .subscribe(result => {
              this.post = result;
              this.authorData = this.post["_embedded"].author[0];
              if(this.post["_embedded"].replies) {
                this.comments = this.post["_embedded"].replies[0];
              }
              loader.dismiss();
            });
      }

}
