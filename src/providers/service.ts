import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { ENV} from '../models/env';
import 'rxjs/add/operator/map';

declare let ENV:ENV;

@Injectable()

export class Service{

    constructor(
     private http: Http
    )
    {}

    getCategories(){
        return this.http.get(ENV.API_URL_DATA + `/data/categories`)
            .map(result => {
               return result.json();
            });
    }

    getStates(){
        return this.http.get(ENV.API_URL_DATA + `/data/states`)
            .map(result => {
                return result.json();
            });
    }

    getProgramations(){
        return this.http.get(ENV.API_URL_DATA + `/data/promotions`)
            .map(result => {
                return result.json();
            })
    }

}