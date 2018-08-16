import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import { AuthHttp } from "angular2-jwt";
import { Observable } from "rxjs";
import { ENV } from "../models/env";
import { JwtClientProvider } from './jwt-client';

declare let ENV:ENV;

@Injectable()
export class UserResource {

  constructor(
      public http: Http,
      public authHttp:AuthHttp,
      public jwtClient: JwtClientProvider
  ) {

  }

  register(accessToken:string):Promise<string>{
    let headers = new Headers();
    headers.set('Authorization', `Bearer ${accessToken}`);
    return this.http.post(`${ENV.API_URL}/register`,{},new RequestOptions({headers}))
        .toPromise()
        .then(response => response.json().token);
  }

  create(user): Promise<void>{
      return this.http.post(`${ENV.API_URL}/register`, Object.assign(user,{type: 2}))
          .toPromise()
          .then(response => {
            let token = response.json().token;
            return this.jwtClient.setToken(token);
          });
  }

  updatePassword({password, password_confirmation}):Promise<Object>{
    return this.authHttp.patch(`${ENV.API_URL}/user/settings`, {password,password_confirmation})
        .toPromise()
        .then(response => response.json().user);
  }

  get():Observable<Object>{
    return this.authHttp.get(`${ENV.API_URL}/user`)
        .map(response => response.json().user);
  }

}
