import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { RestProvider } from '../../providers/rest/rest';
import { LoginPage } from '../login/login';


@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {

  name:any;
  firstname:any;
  password:any;
  confirmPass:any;
  email:any;
  phone:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController, public restProvider: RestProvider, public globalVar: GlobalVarProvider) {
  }

  doRegister() {
    if (this.password != this.confirmPass) {
      this.presentConfirm('Les mots de passe ne correspondent pas')
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
        this.globalVar.currentUser = user;
        this.restProvider.addUser({
          name: this.name,
          firstname: this.firstname,
          phone: this.phone,
          mail: this.email
        }).then(() => {
          this.navCtrl.setRoot(TabsPage);
        })
      }).catch((error) => {
        this.presentConfirm(error.message);
      });
    }
  }

  presentConfirm(msg) {
    let alert = this.alertCtrl.create({
        title: 'Erreur',
        subTitle: msg,
        buttons: ['Ok']
      });
      alert.present();
  }

  goToLogin() {
    this.navCtrl.setRoot(LoginPage);
  }

}
