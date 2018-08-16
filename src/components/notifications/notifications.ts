import { Component } from '@angular/core';
import { AlertController, LoadingController, ToastController } from "ionic-angular";
import { Storage } from '@ionic/storage';

@Component({
  selector: 'notifications',
  templateUrl: 'notifications.html'
})

export class NotificationsComponent {

  constructor(
      public alertCtrl: AlertController,
      public loadingCtrl: LoadingController,
      public toastCtrl: ToastController,
      private storage: Storage
  ) {}

  showConfirm() {
    const confirm = this.alertCtrl.create({
      title: 'Receber Notificações?',
      buttons: [
        {
          text: 'Sim?',
          handler: () => {
            this.storage.set('notification','active');
            let loader = this.loadingCtrl.create({
              content: "Ativando...",
              duration: 2000
            });
            loader.present();
            this.storage.get('notification').then((val) => {
              console.log('Your age is', val);
            });
            setTimeout(() => {
              let toast = this.toastCtrl.create({
                message: 'Notificações ativadas com sucesso.',
                duration: 4000,
                position: 'button',
                cssClass: 'toast-login-error'
              });
              toast.present();
            }, 300);
          }
        },
        {
          text: 'Não.',
          handler: () => {
            this.storage.set('initNotification','inactive');
            this.storage.remove('notification');
            let loader = this.loadingCtrl.create({
              content: "Desativando...",
              duration: 3000
            });
            loader.present();
            this.storage.get('notification').then((val) => {
              console.log('Your age is', val);
            });
            setTimeout(() => {
              let toast = this.toastCtrl.create({
                message: 'Notificações desativadas com sucesso.',
                duration: 3000,
                position: 'button',
                cssClass: 'toast-login-error'
              });
              toast.present();
            }, 300);
          }
        }
      ]
    });
    confirm.present();
  }

}
