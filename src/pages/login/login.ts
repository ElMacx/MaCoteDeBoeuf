import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { RegisterPage } from '../register/register';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.email = "";
    this.password = "";
  }

  ionViewDidLoad() {

  }

  doConnectUser() {
      const result = firebase.auth().signInWithEmailAndPassword(this.email, this.password).then((user) => {
        this.navCtrl.setRoot(TabsPage);
      }).catch((error) => {
        this.presentConfirm(error.message)
      });
  }

  registerUser() {
    this.navCtrl.push(RegisterPage);
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
