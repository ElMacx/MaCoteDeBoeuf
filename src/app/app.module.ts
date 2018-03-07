import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ProductsPage } from '../pages/products/products';
import { PromotionsPage } from '../pages/promotions/promotions';
import { OrdersPage } from '../pages/orders/orders';
import { CartPage } from '../pages/cart/cart';
import { RegisterPage } from '../pages/register/register';
import { ProductPage } from '../pages/product/product';
import { UserPage } from '../pages/user/user';
import { OrderPage } from '../pages/order/order';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { RestProvider } from '../providers/rest/rest';
import { GlobalVarProvider } from '../providers/global-var/global-var';

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage,
    ProductsPage,
    PromotionsPage,
    OrdersPage,
    CartPage,
    RegisterPage,
    ProductPage,
    OrderPage,
    UserPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicModule.forRoot(MyApp, { tabsHideOnSubPages: true })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage,
    ProductsPage,
    PromotionsPage,
    OrdersPage,
    CartPage,
    RegisterPage,
    ProductPage,
    OrderPage,
    UserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RestProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    GlobalVarProvider
  ]
})
export class AppModule {}
