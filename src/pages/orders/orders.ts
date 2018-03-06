import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { OrderPage } from '../order/order';
import { GlobalVarProvider } from '../../providers/global-var/global-var';
import { RestProvider } from '../../providers/rest/rest';

/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {

  orders:any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVar: GlobalVarProvider, public restProvider: RestProvider) {
    this.getOrders();
  }

  getOrders() {
    this.restProvider.getOrders().then((data) => {
      this.orders = data;
    })
  }

  openCartPage() {
    this.navCtrl.push(CartPage);
  }

  openOrder(order) {
    this.navCtrl.push(OrderPage, { order: order.productList });
  }

}
