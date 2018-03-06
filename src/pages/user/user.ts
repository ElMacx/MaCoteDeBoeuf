import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage {

  user = {};
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider, public alertCtrl: AlertController) {
    this.getUser();
  }

  getUser() {
    this.restProvider.getUser().then((user) => {
      this.user = user;
    })
  }

  openCartPage() {
    this.navCtrl.push(CartPage);
  }

  saveUserInfo() {
    this.restProvider.patchUser({ name: this.user.name, firstname: this.user.firstname, phone: this.user.phone }).then((user) => {
      this.presentConfirm()
    })
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
        title: 'Fait',
        subTitle: "Vos informations ont été changées avec succès !",
        buttons: ['Ok']
      });
      alert.present();
  }

  disconnectUser() {

  }
}
