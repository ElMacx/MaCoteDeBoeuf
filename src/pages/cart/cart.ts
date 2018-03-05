import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { OrdersPage } from '../orders/orders'

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController) {
    //this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }
  ionViewWillEnter() {
    //this.tabBarElement.style.display = 'none';
  }
  ionViewWillLeave() {
    //this.tabBarElement.style.display = 'flex';
  }
  presentConfirm() {
  let alert = this.alerCtrl.create({
    title: 'Confirmation de commande',
    message: 'Êtes vous sur de vouloir commander ces produits ?',
    buttons: [{
        text: 'Annuler',
        role: 'cancel',
        handler: () => {
          console.log('Cancel clicked');
        }
      }, {
        text: 'Commander',
        handler: () => {
          console.log('Buy clicked');
          this.navCtrl.popToRoot()
        }
      }]
    });
  alert.present();
  }
}
