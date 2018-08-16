import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { PostPage } from '../post/post';
import { ServiceWp } from "../service/service.wp";

@Component({
  selector: 'page-posts',
  templateUrl: 'posts.html',
  providers:[ ServiceWp ]
})
export class PostsPage implements OnInit {

  posts: any;
  pageCount: number;
  category: any;
  search: string;
  hide: boolean;
  favoritePosts: any;

  constructor(
      private navParams: NavParams,
      private service: ServiceWp,
      private navController: NavController,
      private loadingController: LoadingController,
      private toastController: ToastController,
      private storage: Storage
  ){}

  ngOnInit(){
    this.category = this.navParams.get('category');
    this.hide = true;
    this.search = '';
    this.favoritePosts = [];
    this.storage.get('wp.favorite')
        .then(data => {
          if(data) {
            this.favoritePosts = JSON.parse(data);
          }
        });
    this.getPosts();
  }

  getPosts() {
    this.pageCount = 1;

    let query = this.createQuery();
    let loader = this.loadingController.create({
      content: ""
    });

    loader.present();
    this.service.getPosts(query)
        .subscribe(result => {
          this.posts = result;
          loader.dismiss();
        });
  }

  searchPosts() {
    this.getPosts();
  }

  loadMore(infiniteScroll) {
    this.pageCount++;

    let query = this.createQuery();
    let loader = this.loadingController.create({
      content: ""
    });
    let toast = this.toastController.create({
      cssClass: 'toast-reverse',
      message: "Não há mais postagens.",
      duration: 3000
    });

    loader.present();
    this.service.getPosts(query)
        .subscribe(result => {
          infiniteScroll.complete();
          if(result.length < 1) {
            infiniteScroll.enable(false);
            toast.present();
          } else {
            this.posts = this.posts.concat(result);
          }
          loader.dismiss();
        });
  }

  loadPost(post) {
    this.navController.push(PostPage, {
      post: post
    });
  }

  favoritePost(post) {
    let newPost:Boolean = true;
    let message:string;

    this.favoritePosts.forEach(favPost => {
      if(JSON.stringify(favPost) === JSON.stringify(post)) {
        newPost = false;
      }
    });

    if(newPost) {
      this.favoritePosts.push(post);
      this.storage.set('wp.favorite', JSON.stringify(this.favoritePosts));
      message = "Esta postagem foi salva em favoritos";
    } else {
      message = "Esta postagem já está em favoritos";
    }
    let toast = this.toastController.create({
      cssClass: 'toast-reverse',
      message: message,
      duration: 3000,
      closeButtonText: 'X'
    });
    toast.present();
  }

  toggleSearch() {
    this.hide = !this.hide;
  }

  createQuery() {
    let query = {};
    query['page'] = this.pageCount;
    if(this.search) {
      query['search'] = this.search;
    }
    if(this.category) {
      query['categories'] = this.category.id;
      console.log(query);
    }
    return query;
  }

}
