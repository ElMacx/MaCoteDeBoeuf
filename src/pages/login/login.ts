import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  email:any;
  password:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private afAuth: AngularFireAuth,
    public alertCtrl: AlertController, public globalVar: GlobalVarProvider) {
    this.email = "maximedulin@gmail.com";
    this.password = "Maxous31";
  }

  doConnectUser() {
      this.afAuth.auth.signInWithEmailAndPassword(this.email, this.password).then((user) => {
        this.globalVar.currentUser = user;
        this.navCtrl.setRoot(TabsPage, {},  { animate: true, animation: "ios-transition" });
      }).catch((error) => {
        this.presentConfirm(error.message)
      });
  }
  registerUser() {
    this.navCtrl.setRoot(RegisterPage, {},  { animate: true, animation: "ios-transition" });
  }
  presentConfirm(msg) {
    let alert = this.alertCtrl.create({
        title: 'Erreur',
        subTitle: msg,
        buttons: ['Ok']
      });
      alert.present();
  }

}
