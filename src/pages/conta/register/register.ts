import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, ToastController } from 'ionic-angular';
import { UserResource } from "../../../providers/user.resource";

@IonicPage()

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  user = {
    name: '',
    email: '',
    password: '',
    password_confirmation: ''

  };

  constructor(
      public navCtrl: NavController,
      public menuCtrl: MenuController,
      public tostCtrl: ToastController,
      public userResource: UserResource
  ){
      this.menuCtrl.enable(true);
  }

  register() {
    this.userResource.create(this.user)
        .then(() => {
          this.menuCtrl.enable(true);
          console.log('Usuário criado com sucesso');
          let toast = this.tostCtrl.create({
            message: 'Seja Bem vindo(a) a Plus Fm!',
            duration: 5000,
            position: 'button',
            cssClass: 'toast-login-error'
          });
          toast.present();
          this.navCtrl.setRoot('HomePage');
        })
        .catch(() => {
          let toast = this.tostCtrl.create({
            message: 'Dados Inválidos',
            duration: 3000,
            position: 'button',
            cssClass: 'toast-login-error'
          });
          toast.present();
        })
    }

}
