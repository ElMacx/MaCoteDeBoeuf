import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-order',
  templateUrl: 'order.html',
})
export class OrderPage {

  order:any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(this.navParams);
    if (this.navParams.data.order) {
      this.order = this.navParams.data.order;
    }
  }

}
