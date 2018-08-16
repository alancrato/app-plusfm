import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ENV } from "../../../models/env";
import 'rxjs/add/operator/map';

declare let ENV:ENV;

@Injectable()

export class ServiceWp{
    constructor(
        private http: Http
    ) {}

    public getPosts(query) {
        query = this.transformRequest(query);
        return this.http.get(ENV.API_URL_WP + `/wp/v2/posts?categories=2&${query}&_embed`)
            .map(result => {
                return result.json();
            });
    }

    public getCatsA(query) {
        query = this.transformRequest(query);
        return this.http.get(ENV.API_URL_WP + `/wp/v2/posts?categories=14&${query}&_embed`)
            .map(result => {
                return result.json();
            });
    }

    public getPost(id) {
        return this.http.get(ENV.API_URL_WP + `/wp/v2/posts/${id}?_embed`)
            .map(result => {
                return result.json();
            });
    }

    public getMedia(id) {
        return this.http.get(ENV.API_URL_WP + `/wp/v2/media/${id}`)
            .map(result => {
                return result.json();
            });
    }

    public getCategories() {
        return this.http.get(ENV.API_URL_WP + '/wp/v2/categories?per_page=20')
            .map(result => {
                return result.json();
            });
    }

    private transformRequest(obj) {
        let p, str;
        str = [];
        for (p in obj) {
            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
        }
        return str.join('&');
    }
}
