import { Component } from '@angular/core';

import { ProductsPage } from '../products/products';
import { PromotionsPage } from '../promotions/promotions';
import { OrdersPage } from '../orders/orders';
import { UserPage } from '../user/user';
import { RestProvider } from '../../providers/rest/rest';
import { AlertController } from 'ionic-angular';
import { GlobalVarProvider } from '../../providers/global-var/global-var';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = ProductsPage;
  tab2Root = PromotionsPage;
  tab3Root = OrdersPage;
  tab4Root = UserPage;

  constructor(public alertCtrl: AlertController, public restProvider: RestProvider, public globalVar: GlobalVarProvider) {
    this.restProvider.getUser().then((user) => {
      if (user.displayPopUp) {
        this.presentInformation();
      }
    })
  }

  presentInformation() {
    let alert = this.alertCtrl.create({
        title: 'Information',
        message: "L'application MaCoteDeBoeuf n'est disponible que pour le magasin SPAR situé à Saint Orens de Gameville",
        buttons: [
          {
            text: "Ne plus afficher",
            role: "Cancel",
            handler: () => {
              this.restProvider.patchUserPopUp();
            }
          },
          {
            text: "Ok"
          }
        ]
      });
      alert.present();
  }
}
