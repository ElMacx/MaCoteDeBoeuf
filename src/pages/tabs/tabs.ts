import { Component } from '@angular/core';

import { ProductsPage } from '../products/products';
import { PromotionsPage } from '../promotions/promotions'
import { OrdersPage } from '../orders/orders'

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProductsPage;
  tab2Root = PromotionsPage;
  tab3Root = OrdersPage;

  constructor() {

  }
}
