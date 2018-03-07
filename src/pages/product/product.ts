import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { GlobalVarProvider } from '../../providers/global-var/global-var';


@Component({
  selector: 'page-product',
  templateUrl: 'product.html',
})
export class ProductPage {

  product:any;
  showAdd:any;
  cartUpdate:any;
  qty = 1;
  oldQty = 1;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alertCtrl: AlertController,
    public globalVar: GlobalVarProvider) {
    this.product = this.navParams.data.product;
    if (this.navParams.data.product.qty) {
      this.qty = this.navParams.data.product.qty;
    }
    this.oldQty = this.navParams.data.product.qty;
    this.cartUpdate = false;
    if (this.navParams.data.cartUpdate) {
      this.cartUpdate = this.navParams.data.cartUpdate;
    }
  }

  ionViewDidEnter() {
    this.showAdd = this.navParams.data.showAdd;
    if (this.showAdd == true) {
      this.qty = 1;
    }  }

  addToCart() {
    this.presentConfirm();
  }

  openCartPage() {
    this.navCtrl.push(CartPage);
  }

  updateCart() {
    this.globalVar.cartState.forEach((elem) => {
      if (this.navParams.data.product.id == elem.id && this.navParams.data.product.qty == this.oldQty) {
        elem.qty = this.qty;
        this.oldQty = -1;
      }
    })
    this.navCtrl.pop();
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
              this.product.qty = this.qty;
              this.navCtrl.push(CartPage, this.product);
            }
          }
        ]
      });
      alert.present();
  }
}
