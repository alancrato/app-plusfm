import { Injectable } from '@angular/core';
import {
    BrowserXhr, Request,
    Response,
    ResponseOptions,
    XHRBackend,
    XHRConnection,
    XSRFStrategy
} from "@angular/http";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { appContainer } from "../app/app.container";
import { JwtClientProvider } from "./jwt-client";
import { Observable } from "rxjs";
import {Redirector} from "./redirector";

/*
  Generated class for the DefaultXHRBackend provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

@Injectable()
export class DefaultXHRBackend extends XHRBackend{

  constructor(
      browserXHR: BrowserXhr,
      baseResponseOptions: ResponseOptions,
      xsrfStrategy: XSRFStrategy) {
    super(browserXHR, baseResponseOptions, xsrfStrategy);
  }

  createConnection(request: Request): XHRConnection {
    let xhrConnection = super.createConnection(request);
    //noinspection TypeScriptUnresolvedFunction
      xhrConnection.response = xhrConnection
        .response
        .map((response) => {
          this.tokenSetter(response);
          return response;
        }).catch(responseError => {
            this.unauthenticated(responseError);
            return Observable.throw(responseError);
        });
    return xhrConnection;
  }

  tokenSetter(response: Response){
      let jwtClient = appContainer().get(JwtClientProvider);
      if(response.headers.has('Authorization')){
          let authorization = response.headers.get('Authorization');
          let token = authorization.replace('Bearer ', '');
          jwtClient.setToken(token);

      }
  }

  unauthenticated(responseError: Response){
      let redirector = appContainer().get(Redirector);
      if(responseError.status === 401){
            redirector.redirector();
      }

  }

}
