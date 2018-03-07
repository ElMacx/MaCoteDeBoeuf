import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ProductPage } from '../product/product';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  order:any;
  id:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    if (this.navParams.data.order) {
      this.order = this.navParams.data.order;
      this.id = this.navParams.data.id
    }
  }

  truncateText(text, length) {
    var truncated = text;
    if (truncated.length > length) {
        truncated = truncated.substr(0, length) + '...';
    }
    return truncated;
  }

  goToProduct(product) {
    this.navCtrl.push(ProductPage, { product: product, showAdd: false });
  }

}
