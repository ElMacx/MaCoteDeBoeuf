import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { ProductPage } from '../product/product';

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  currentCart:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public alerCtrl: AlertController, public globalVar: GlobalVarProvider) {
    //this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
    if (this.navParams.data.product) {
      this.globalVar.cartState.push(this.navParams.data);
    }
    this.currentCart = this.globalVar.cartState;
  }

  ionViewWillEnter() {
    //this.tabBarElement.style.display = 'none';
  }

  ionViewWillLeave() {
    //this.tabBarElement.style.display = 'flex';
  }

  goToProduct(product) {
    this.navCtrl.push(ProductPage, product);
  }

  truncateText(text, length) {
    var truncated = text;
    if (truncated.length > length) {
        truncated = truncated.substr(0, length) + '...';
    }
    return truncated;
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
