import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart'
import { RestProvider } from '../../providers/rest/rest';


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

  doRefresh(refresher) {
    this.promotions = [];
    this.restProvider.getPromotions().then((data) => {
      for (var key in data) {
        this.promotions.push(data[ key ])
      }
      refresher.complete();
      })
  }

  openCartPage() {
    this.navCtrl.push(CartPage);
  }
}
