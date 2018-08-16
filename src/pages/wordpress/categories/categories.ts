import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';

import { PostsPage } from "../posts/posts";
import { ServiceWp } from "../service/service.wp";

@Component({
	templateUrl: './categories.html',
	providers: [ServiceWp]
})

export class Categories implements OnInit {

	categories: any;

	constructor(
		private service: ServiceWp,
		private nav: NavController,
		private loading: LoadingController
	) {}

	ngOnInit() {
		this.getCategories();
	}

	getCategories() {
		let loader = this.loading.create({
			content: ""
		});
		loader.present();

		this.service.getCategories()
		.subscribe(result => {
			this.categories = result;
			loader.dismiss();
		});
	}

	loadCategory(category) {
		this.nav.push(PostsPage, {
			category: category
		});
	}

}
