import { Component } from '@angular/core';

import { ProductsPage } from '../products/products';
import { PromotionsPage } from '../promotions/promotions';
import { OrdersPage } from '../orders/orders';
import { UserPage } from '../user/user';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProductsPage;
  tab2Root = PromotionsPage;
  tab3Root = OrdersPage;
  tab4Root = UserPage;

  constructor() {

  }
}
