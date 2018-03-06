import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartPage } from '../cart/cart';
import { RestProvider } from '../../providers/rest/rest';
import { ProductPage } from '../product/product';
/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-products',
  templateUrl: 'products.html',
})
export class ProductsPage {

  products: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public restProvider: RestProvider) {
    this.getProducts();
  }

  truncateText(text, length) {
    var truncated = text;

    if (truncated.length > length) {
        truncated = truncated.substr(0, length) + '...';
    }
    return truncated;
  }

  getProducts() {
    this.restProvider.getProducts().then(data => {
      this.products = data;
    });
  }

  goToProduct(product) {
    this.navCtrl.push(ProductPage, { product: product, showAdd: true });
  }

  openCartPage() {
    this.navCtrl.push(CartPage);
  }

}
