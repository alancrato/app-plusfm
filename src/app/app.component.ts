import { Component, ViewChild } from '@angular/core';
import { Storage } from '@ionic/storage';

import { Platform, MenuController, Nav, AlertController, LoadingController, ToastController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AuthProvider } from "../providers/auth";
import { Redirector } from "../providers/redirector";

import { PostsPage } from "../pages/wordpress/posts/posts";
import { Favorites } from "../pages/wordpress/favorites/favorites";
import { PromotionalPage } from "../pages/wordpress/promotional/promotional";
import { OneSignal } from "@ionic-native/onesignal";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: string = 'HomePage';
  pages: Array<{title: string, component: any, icon: any}>;
  pagesUser: Array<{title: string, component: any, icon: any}>;
  user:any;

  constructor(
    public platform: Platform,
    public menu: MenuController,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public auth:AuthProvider,
    public redirector: Redirector,
    public alertCtrl: AlertController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    private storage: Storage,
    private oneSignal: OneSignal
  ) {
    this.initializeApp();
    // set our app's pages
    this.pages = [
      { title: 'Início', component: 'HomePage', icon: 'home'},
      { title: 'Estações', component: 'StatesPage', icon: 'radio' },
      { title: 'Sobre', component: 'AboutPage', icon: 'document' },
      { title: 'Promoções', component: PromotionalPage, icon: 'calendar' },
      { title: 'Drops da Plus', component: PostsPage, icon: 'paper' },
      { title: 'Programação', component: 'ProgrammingPage', icon: 'reorder' },
      { title: 'Favorites', component: Favorites, icon: 'bookmark' },
      { title: 'Login', component: 'LoginPage', icon: 'log-in' }
    ];
    this.pagesUser = [
      { title: 'Início', component: 'HomePage', icon: 'home'},
      { title: 'Estações', component: 'StatesPage', icon: 'radio' },
      { title: 'Sobre', component: 'AboutPage', icon: 'document' },
      { title: 'Promoções', component: PromotionalPage, icon: 'calendar' },
      { title: 'Drops da Plus', component: PostsPage, icon: 'paper' },
      { title: 'Programação', component: 'ProgrammingPage', icon: 'reorder' },
      { title: 'Favorites', component: Favorites, icon: 'bookmark' },
      { title: 'Conta', component: 'SettingsPage', icon: 'settings' },
    ];
  }

  initializeApp() {
    this.auth.user().then(user => {
      this.user = user;
    });

    this.platform.ready().then(() => {

      this.statusBar.styleDefault();

      this.splashScreen.hide();

        //Configurations das notifications no local storage
        /*this.storage.get('initNotification').then((val) => {
            if(val == 'inactive'){
                console.log('Já iniciou pela primeira vez');
            }else{
                this.storage.get('notification').then((val) => {
                    console.log('Your age is', val);
                    if(val == 'active'){
                        console.log('User active notifications');
                    }else{
                        //console.log('User inactive receive notifications');
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
                                                message: 'Notificações ativadas.',
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
                                                message: 'Notificações desativadas.',
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
                });
            }
        });*/

        //oneSignal
        this.oneSignal.startInit('5721f8cf-5c06-4838-9ac2-ac36243b3e19', '991242080518');

        this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.InAppAlert);

        this.oneSignal.handleNotificationReceived().subscribe(() => {
            // do something when notification is received
        });

        this.oneSignal.handleNotificationOpened().subscribe(() => {
            // do something when a notification is opened
        });

        this.oneSignal.endInit();

    });
  }

  ngAfterViewInit(){
    //this.redirector.config(this.nav); redirector force login
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }

  logout(){
    this.auth.logout().then(() => {
      this.menu.close();
      this.nav.setRoot('HomePage');
    }).catch(() => {
      this.menu.close();
      this.nav.setRoot('HomePage');
    })
  }

  loginPage(){
    this.nav.setRoot('LoginPage');
    this.menu.close();
  }

  loadSettings(){
    this.nav.setRoot('SettingsPage');
    this.menu.close();
  }

}
