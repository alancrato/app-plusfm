import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController, ToastController } from 'ionic-angular';
import 'rxjs/add/operator/toPromise';
import { AuthProvider } from "../../../providers/auth";

@IonicPage()

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  user = {
    email:'',
    password:''
  };

  constructor(
      public menu: MenuController,
      public navCtrl: NavController,
      public toastCtrl: ToastController,
      private auth:AuthProvider
  ) {
    this.menu.enable(true);
  }

  login(){
    this.auth.login(this.user)
      .then(() => {
          console.log('Login efetuado com sucesso');
          let toast = this.toastCtrl.create({
            message: 'Seja Bem Vindo(a) PlusFm!',
            duration: 3000,
            position: 'button',
            cssClass: 'toast-login-error'
          });
          toast.present();
        this.affterLogin();
      })
      .catch(() => {
        let toast = this.toastCtrl.create({
          message: 'E-mail e/ou senha inválidos.',
          duration: 3000,
          position: 'button',
          cssClass: 'toast-login-error'
        });
        toast.present();
      });
  }

  affterLogin(){
    this.navCtrl.setRoot('HomePage');
  }

  pushHome(){
    this.navCtrl.setRoot('LoginPage');
  }

  userRegister(){
    this.navCtrl.setRoot('RegisterPage');
  }

}
