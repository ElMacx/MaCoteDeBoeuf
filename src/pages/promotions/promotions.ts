import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart'
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the PromotionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-promotions',
  templateUrl: 'promotions.html',
})
export class PromotionsPage {

  promotions = <any>[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
  }

  ionViewDidEnter() {
    this.promotions = [];
    this.getPromotions();
  }

  getPromotions() {
    this.restProvider.getPromotions().then((data) => {
      for (var key in data) {
        this.promotions.push(data[ key ])
      }
    })
  }

  openCartPage() {
    this.navCtrl.push(CartPage);
  }
}
