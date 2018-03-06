import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CartPage } from '../cart/cart';


@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product:any;
  qty = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController) {
    this.product = this.navParams.data;
  }

  addToCart() {
    this.presentConfirm();
  }

  openCartPage() {
    this.navCtrl.push(CartPage);
  }

  presentConfirm() {
    let alert = this.alertCtrl.create({
        title: 'Validation',
        message: 'Êtes vous sur de vouloir ajouter ceci au panier ?',
        buttons: [
          {
            text: 'Non',
            role: 'cancel',
            handler: () => {
              console.log('Annulé');
            }
          },
          {
            text: 'Oui',
            handler: () => {
              console.log('Ajout de ' + this.qty + ' au panier');
              this.navCtrl.push(CartPage, { product: this.product, qty: this.qty });
            }
          }
        ]
      });
      alert.present();
  }
}
