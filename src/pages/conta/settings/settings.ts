import { Component} from "@angular/core";
import { IonicPage, NavController, NavParams, ToastController} from "ionic-angular";
//import { Auth } from "../../decorators/auth.decorator";
import { UserResource } from "../../../providers/user.resource";
import { AuthProvider } from "../../../providers/auth";

//@Auth()
@IonicPage()

@Component({
    selector: 'page-settings',
    templateUrl: 'settings.html',
})

export class SettingsPage {

    user = {
        password: '',
        password_confirmation: ''
    };

    users:any;

    constructor(public navCtrl: NavController,
                public navParams: NavParams,
                public toastCtrl: ToastController,
                public userResource: UserResource,
                public auth:AuthProvider,
    ) {
    }

    ionViewDidLoad() {
        this.auth.user().then(user => {
            this.users = user;
        });
    }

    submit() {
        let toast = this.toastCtrl.create({
            duration: 3000,
            position: 'button',
            cssClass: 'toast-login-error'
        });
        this.userResource
            .updatePassword(this.user)
            .then(() => {
                toast.setMessage('Dados salvos com sucesso');
                toast.present();
            })
            .catch(() => {
                toast.setMessage('Dados inválidos! Tente novamente');
                toast.present();
            })
    }

}
