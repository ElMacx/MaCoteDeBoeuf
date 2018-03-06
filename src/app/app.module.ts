import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { ProductsPage } from '../pages/products/products';
import { PromotionsPage } from '../pages/promotions/promotions';
import { OrdersPage } from '../pages/orders/orders';
import { CartPage } from '../pages/cart/cart';
import { RegisterPage } from '../pages/register/register';
import { ProductPage } from '../pages/product/product';
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
    OrderPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
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
    OrderPage
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
