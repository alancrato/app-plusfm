import { Injectable } from '@angular/core';
import { Subject } from "rxjs";
import { NavController } from "ionic-angular";

@Injectable()
export class Redirector
{
  subject = new Subject;

  config(navCtrl:NavController, link = 'LoginPage'){
    this.subject.subscribe(() => {
      setTimeout(() => {
        navCtrl.setRoot(link);
      });
    })
  }

  redirector(){
    this.subject.next();
  }

}
