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

  onGoingOrders = [];
  finishedOrders = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, public globalVar: GlobalVarProvider, public restProvider: RestProvider) {
    this.getOrders();
  }

  getOrders() {
    this.restProvider.getOrders().then((data) => {
      // data.forEach((elem) => {
      //   if (elem.state != 4) {
      //     this.onGoingOrders.push(elem);
      //   } else {
      //     this.finishedOrders.push(elem);
      //   }
      // })
    })
  }

  displayState(state) {
    var ret = "";
    switch (state) {
      case 1:
        ret = "Commande en attente de validation";
        break;
      case 2:
        ret = "Commande en cours de préparation";
        break;
      case 3:
        ret = "Commande à venir récupérée";
        break;
      case 4:
        ret = "Commande terminée";
        break;
      case -1:
        ret = "Commande annulée, contactez le magasin pour plus d'informations";
        break;
    }
    return ret;
  }

  truncateText(text, length) {
    var truncated = text;

    if (truncated.length > length) {
        truncated = truncated.substr(0, length) + '...';
    }
    return truncated;
  }

  openCartPage() {
    this.navCtrl.push(CartPage);
  }

  openOrder(order) {
    this.navCtrl.push(OrderPage, { order: order.productList, id: order.id });
  }

}
