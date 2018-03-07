import { Component } from '@angular/core';
import { NavController, NavParams, AlertController } from 'ionic-angular';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { ProductPage } from '../product/product';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  currentCart = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public restProvider: RestProvider, public globalVar: GlobalVarProvider) {
    if (this.navParams.data.id) {
      this.globalVar.cartState.push(this.navParams.data);
    }
  }

  ionViewDidEnter() {
    console.log(this.globalVar.cartState);
    this.currentCart = this.globalVar.cartState;
  }

  goToProduct(product) {
    this.navCtrl.push(ProductPage, { product: product, showAdd: false, cartUpdate: true });
  }

  truncateText(text, length) {
    var truncated = text;
    if (truncated && truncated.length > length) {
        truncated = truncated.substr(0, length) + '...';
    }
    return truncated;
  }

  sendOrder() {
    var totalPrice = 0;
    this.currentCart.forEach((elem) => {
        totalPrice += (elem.price * elem.qty)
    })
    var toSend = {
      state: 1,
      productList: this.currentCart,
      totalPrice: totalPrice.toFixed(2)
    }
    this.restProvider.patchOrders(toSend).then(() => {
      this.currentCart = [];
    });
  }

  deleteItem(item) {
    var i = 0;
    this.currentCart.forEach((elem) => {
        if (elem.id == item.id) {
          this.currentCart.splice(i, 1);
        }
        i++;
    });
  }

  presentConfirm() {
  let alert = this.alerCtrl.create({
    title: 'Confirmation de commande',
    message: 'Êtes vous sur de vouloir commander ces produits ?',
    buttons: [{
        text: 'Annuler',
        role: 'cancel',
      }, {
        text: 'Commander',
        handler: () => {
          this.sendOrder();
          this.currentCart = [];
          this.globalVar.cartState = [];
          this.navCtrl.popToRoot()
        }
      }]
    });
  alert.present();
  }
}
