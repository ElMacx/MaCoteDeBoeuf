import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.email = "";
    this.password = "";
  }

  ionViewDidLoad() {

  }

  doConnectUser() {
    this.navCtrl.setRoot(TabsPage);
  }

  registerUser() {
    this.navCtrl.push(RegisterPage);
  }

}
