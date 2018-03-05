import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

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
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  doRegister() {
    if (this.password != this.confirmPass) {
      this.presentConfirm('Les mots de passe ne correspondent pas')
    } else {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then((user) => {
        var currentUser = firebase.auth().currentUser;
        user.updateProfile({
          displayName: this.firstname + ' ' + this.name,
        }).then(() => {
          this.navCtrl.setRoot(TabsPage);
        }).catch((error) => {
          this.presentConfirm(error.message);
        });
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

}
