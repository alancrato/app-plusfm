import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { PostPage } from "../post/post";

@Component({
	selector: 'page-favorites',
	templateUrl: './favorites.html',
	providers: []
})
export class Favorites {

	category: any;
	search: string;
	hide: boolean = true;
	favoritePosts = [];

	constructor(
		private nav: NavController,
		private storage: Storage) {}

    ionViewWillEnter() {
        this.getPosts();
    }

	getPosts() {
	    this.storage.get('wp.favorite')
	    .then(data => {
	        if(data) {
	        	this.favoritePosts = JSON.parse(data);
	        }
	    });
	}

	loadPost(post) {
		this.nav.push(PostPage, {
			post: post
		});
	}

	removeFavoritePost(post) {
		const index = this.favoritePosts.findIndex(item => item.id === post.id);
		this.favoritePosts.splice(index, 1);
		this.storage.set('wp.favorite', JSON.stringify(this.favoritePosts));
	}

	removeAllFavoritePosts() {
		this.favoritePosts = [];
		this.storage.remove('wp.favorite');
	}

}
