webpackJsonp([0],{

/***/ 131:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__register_register__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_var_global_var__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, alertCtrl, globalVar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.globalVar = globalVar;
        this.email = "maximedulin@gmail.com";
        this.password = "Maxous31";
    }
    LoginPage.prototype.doConnectUser = function () {
        var _this = this;
        var result = firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(function (user) {
            _this.globalVar.currentUser = user;
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */], {}, { animate: true, animation: "ios-transition" });
        }).catch(function (error) {
            _this.presentConfirm(error.message);
        });
    };
    LoginPage.prototype.registerUser = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__register_register__["a" /* RegisterPage */], {}, { animate: true, animation: "ios-transition" });
    };
    LoginPage.prototype.presentConfirm = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Erreur',
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/login/login.html"*/'<ion-content padding class="page-login">\n  <div class="login-body">\n    <ion-item class="input-text">\n      <ion-label floating>Email</ion-label>\n      <ion-input type="email" [(ngModel)]="email" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"></ion-input>\n    </ion-item>\n    <ion-item class="input-text">\n      <ion-label floating>Mot de passe</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n    <div style="text-align: center; margin-top: 50px;">\n      <button class="login-button" (click)="doConnectUser();">Connexion</button>\n    </div>\n    <div>\n      <button class="go-to-register-button" (click)="registerUser();">S\'inscrire</button>\n    </div>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__providers_global_var_global_var__["a" /* GlobalVarProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_global_var_global_var__["a" /* GlobalVarProvider */]) === "function" && _d || Object])
    ], LoginPage);
    return LoginPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__products_products__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__promotions_promotions__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__orders_orders__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__user_user__ = __webpack_require__(249);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TabsPage = (function () {
    function TabsPage() {
        this.tab1Root = __WEBPACK_IMPORTED_MODULE_1__products_products__["a" /* ProductsPage */];
        this.tab2Root = __WEBPACK_IMPORTED_MODULE_2__promotions_promotions__["a" /* PromotionsPage */];
        this.tab3Root = __WEBPACK_IMPORTED_MODULE_3__orders_orders__["a" /* OrdersPage */];
        this.tab4Root = __WEBPACK_IMPORTED_MODULE_4__user_user__["a" /* UserPage */];
    }
    TabsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/tabs/tabs.html"*/'<ion-tabs>\n  <ion-tab [root]="tab1Root" tabTitle="Produits" tabIcon="list"></ion-tab>\n  <ion-tab [root]="tab2Root" tabTitle="Promotions" tabIcon="megaphone"></ion-tab>\n  <ion-tab [root]="tab3Root" tabTitle="Mes commandes" tabIcon="checkmark-circle-outline"></ion-tab>\n  <ion-tab [root]="tab4Root" tabTitle="Mon compte" tabIcon="person"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/tabs/tabs.html"*/
        }),
        __metadata("design:paramtypes", [])
    ], TabsPage);
    return TabsPage;
}());

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProductPage = (function () {
    function ProductPage(navCtrl, navParams, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.qty = 1;
        this.product = this.navParams.data;
    }
    ProductPage.prototype.addToCart = function () {
        this.presentConfirm();
    };
    ProductPage.prototype.openCartPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    ProductPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Validation',
            message: 'Êtes vous sur de vouloir ajouter ceci au panier ?',
            buttons: [
                {
                    text: 'Non',
                    role: 'cancel',
                    handler: function () {
                        console.log('Annulé');
                    }
                },
                {
                    text: 'Oui',
                    handler: function () {
                        console.log('Ajout de ' + _this.qty + ' au panier');
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */], { product: _this.product, qty: _this.qty });
                    }
                }
            ]
        });
        alert.present();
    };
    ProductPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product',template:/*ion-inline-start:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/product/product.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Les produits</ion-title>\n    <ion-buttons end>\n      <button class="cart-icon" (click)="openCartPage();">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding class="page-product">\n  <div class="data-container">\n    <img class="item-img" src="../../assets/imgs/boeuf.jpg" width="100" height="100">\n    <h2>{{product.name}}</h2>\n    <p>{{product.description}}</p>\n    <div class="p-style">\n      <p>Prix : {{product.price}}€/kg</p>\n      <p>Maturation : {{product.maturation}}</p>\n      <label>Quantité : </label>\n      <ion-input class="input-number-product" type="number" placeholder="Quantité" [(ngModel)]="qty" min="1"></ion-input>\n    </div>\n  </div>\n  <div style="text-align: center; margin-top: 50px;">\n    <button class="add-to-cart-button" (click)="addToCart();">Ajoutez au panier</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/product/product.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */]])
    ], ProductPage);
    return ProductPage;
}());

//# sourceMappingURL=product.js.map

/***/ }),

/***/ 158:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 158;

/***/ }),

/***/ 200:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 200;

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__product_product__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsPage = (function () {
    function ProductsPage(navCtrl, navParams, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restProvider = restProvider;
        this.getProducts();
    }
    ProductsPage.prototype.truncateText = function (text, length) {
        var truncated = text;
        if (truncated.length > length) {
            truncated = truncated.substr(0, length) + '...';
        }
        return truncated;
    };
    ProductsPage.prototype.getProducts = function () {
        var _this = this;
        this.restProvider.getProducts().then(function (data) {
            _this.products = data;
        });
    };
    ProductsPage.prototype.goToProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__product_product__["a" /* ProductPage */], product);
    };
    ProductsPage.prototype.openCartPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/products/products.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>Les produits</ion-title>\n    <ion-buttons end>\n      <button class="cart-icon" (click)="openCartPage();">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="page-products">\n  <ion-list inset>\n      <ion-item *ngFor="let product of products">\n        <button (click)="goToProduct(product);">\n          <img class="item-img" src="../../assets/imgs/boeuf.jpg" width="50" height="50">\n          <div style="text-align: left;">\n            <h2>{{truncateText(product.name, 20)}}</h2>\n            <p>{{truncateText(product.description, 30)}}</p>\n            <p>Origine : {{product.origin}}</p>\n            <p>Maturation : {{product.maturation}}</p>\n            <p>Prix : {{product.price}}€/kg</p>\n          </div>\n        </button>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/products/products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PromotionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(58);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the PromotionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PromotionsPage = (function () {
    function PromotionsPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    PromotionsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PromotionsPage');
    };
    PromotionsPage.prototype.openCartPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    PromotionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-promotions',template:/*ion-inline-start:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/promotions/promotions.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Promotions</ion-title>\n    <ion-buttons end>\n      <button class="cart-icon" (click)="openCartPage();">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/promotions/promotions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], PromotionsPage);
    return PromotionsPage;
}());

//# sourceMappingURL=promotions.js.map

/***/ }),

/***/ 247:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrdersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__cart_cart__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__order_order__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_global_var_global_var__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(72);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrdersPage = (function () {
    function OrdersPage(navCtrl, navParams, globalVar, restProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.globalVar = globalVar;
        this.restProvider = restProvider;
        this.onGoingOrders = [];
        this.finishedOrders = [];
        this.getOrders();
    }
    OrdersPage.prototype.getOrders = function () {
        var _this = this;
        this.restProvider.getOrders().then(function (data) {
            data.forEach(function (elem) {
                if (elem.state != 4) {
                    _this.onGoingOrders.push(elem);
                }
                else {
                    _this.finishedOrders.push(elem);
                }
            });
        });
    };
    OrdersPage.prototype.displayState = function (state) {
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
    };
    OrdersPage.prototype.truncateText = function (text, length) {
        var truncated = text;
        if (truncated.length > length) {
            truncated = truncated.substr(0, length) + '...';
        }
        return truncated;
    };
    OrdersPage.prototype.openCartPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__cart_cart__["a" /* CartPage */]);
    };
    OrdersPage.prototype.openOrder = function (order) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__order_order__["a" /* OrderPage */], { order: order.productList });
    };
    OrdersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-orders',template:/*ion-inline-start:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/orders/orders.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mes commandes</ion-title>\n    <ion-buttons end>\n      <button class="cart-icon" (click)="openCartPage();">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding class="page-orders">\n  <ion-list inset>\n    <ion-list-header>\n      En cours\n    </ion-list-header>\n    <ion-item *ngFor="let item of onGoingOrders">\n      <button (click)="openOrder(item);">\n        <h2>Commande n°{{truncateText(item.id, 14)}}</h2>\n        <p>Etat : {{truncateText(displayState(item.state), 32)}}</p>\n        <p>Prix : {{item.totalPrice}}€</p>\n      </button>\n    </ion-item>\n    <ion-list-header>\n      Terminée(s)\n    </ion-list-header>\n    <ion-item *ngFor="let item of finishedOrders">\n      <button (click)="openOrder(item);">\n        <h2>Commande n°{{truncateText(item.id, 14)}}</h2>\n        <p>Etat : {{truncateText(displayState(item.state), 32)}}</p>\n        <p>Prix : {{item.totalPrice}}€</p>\n      </button>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/orders/orders.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4__providers_global_var_global_var__["a" /* GlobalVarProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__providers_global_var_global_var__["a" /* GlobalVarProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */]) === "function" && _d || Object])
    ], OrdersPage);
    return OrdersPage;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=orders.js.map

/***/ }),

/***/ 248:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OrderPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var OrderPage = (function () {
    function OrderPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        console.log(this.navParams);
        if (this.navParams.data.order) {
            this.order = this.navParams.data.order;
        }
    }
    OrderPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-order',template:/*ion-inline-start:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/order/order.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Ma commande</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list inset>\n      <ion-item *ngFor="let item of order">\n        <button>\n          <h2>{{item.name}}</h2>\n          <p>{{item.description}}</p>\n          <p>{{item.price}}</p>\n          <p>{{item.qty}}</p>\n        </button>\n      </ion-item>\n    </ion-list>\n</ion-content>\n'/*ion-inline-end:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/order/order.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], OrderPage);
    return OrderPage;
}());

//# sourceMappingURL=order.js.map

/***/ }),

/***/ 249:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserPage = (function () {
    function UserPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    UserPage.prototype.openCartPage = function () {
        this.navCtrl.push(CartPage);
    };
    UserPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user',template:/*ion-inline-start:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/user/user.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mon compte</ion-title>\n    <ion-buttons end>\n      <button class="cart-icon" (click)="openCartPage();">\n        <ion-icon name="cart"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n\n</ion-content>\n'/*ion-inline-end:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/user/user.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], UserPage);
    return UserPage;
}());

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 250:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tabs_tabs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_global_var_global_var__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var RegisterPage = (function () {
    function RegisterPage(navCtrl, navParams, alertCtrl, restProvider, globalVar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.restProvider = restProvider;
        this.globalVar = globalVar;
    }
    RegisterPage.prototype.doRegister = function () {
        var _this = this;
        if (this.password != this.confirmPass) {
            this.presentConfirm('Les mots de passe ne correspondent pas');
        }
        else {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(function (user) {
                _this.globalVar.currentUser = user;
                _this.restProvider.addUser({
                    name: _this.name,
                    firstname: _this.firstname,
                    phone: _this.phone,
                    mail: _this.email
                }).then(function () {
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_2__tabs_tabs__["a" /* TabsPage */]);
                });
            }).catch(function (error) {
                _this.presentConfirm(error.message);
            });
        }
    };
    RegisterPage.prototype.presentConfirm = function (msg) {
        var alert = this.alertCtrl.create({
            title: 'Erreur',
            subTitle: msg,
            buttons: ['Ok']
        });
        alert.present();
    };
    RegisterPage.prototype.goToLogin = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/register/register.html"*/'<ion-content padding class="page-register">\n  <ion-item class="input-text">\n    <ion-label floating>Nom</ion-label>\n    <ion-input type="text" [(ngModel)]="name"></ion-input>\n  </ion-item>\n  <ion-item class="input-text">\n    <ion-label floating>Prénom</ion-label>\n    <ion-input type="text" [(ngModel)]="firstname"></ion-input>\n  </ion-item>\n  <ion-item class="input-text">\n    <ion-label floating>Email</ion-label>\n    <ion-input type="email" [(ngModel)]="email" pattern="[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})"></ion-input>\n  </ion-item>\n  <ion-item class="input-text">\n    <ion-label floating>Téléphone</ion-label>\n    <ion-input type="text" [(ngModel)]="phone" pattern="\d*"></ion-input>\n  </ion-item>\n  <ion-item class="input-text">\n    <ion-label floating>Mot de passe</ion-label>\n    <ion-input type="password" [(ngModel)]="password"></ion-input>\n  </ion-item>\n  <ion-item class="input-text">\n    <ion-label floating>Confirmer le mot de passe</ion-label>\n    <ion-input type="password" [(ngModel)]="confirmPass"></ion-input>\n  </ion-item>\n  <div style="text-align: center; margin-top: 50px;">\n  <button class="register-button" (click)="doRegister();">Valider l\'inscription</button>\n  </div>\n  <div>\n    <button class="register-back-button" (click)="goToLogin();">Retour</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */], __WEBPACK_IMPORTED_MODULE_3__providers_global_var_global_var__["a" /* GlobalVarProvider */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 291:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(313);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 313:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(355);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_login_login__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_products_products__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_promotions_promotions__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_orders_orders__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_register_register__ = __webpack_require__(250);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_product_product__ = __webpack_require__(133);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_user__ = __webpack_require__(249);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_order_order__ = __webpack_require__(248);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__angular_http__ = __webpack_require__(453);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__angular_common_http__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__providers_rest_rest__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__providers_global_var_global_var__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_promotions_promotions__["a" /* PromotionsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_16__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_17__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_7__pages_promotions_promotions__["a" /* PromotionsPage */],
                __WEBPACK_IMPORTED_MODULE_8__pages_orders_orders__["a" /* OrdersPage */],
                __WEBPACK_IMPORTED_MODULE_9__pages_cart_cart__["a" /* CartPage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_product_product__["a" /* ProductPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_order_order__["a" /* OrderPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_14__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_18__providers_rest_rest__["a" /* RestProvider */],
                { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_19__providers_global_var_global_var__["a" /* GlobalVarProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 355:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_login_login__ = __webpack_require__(131);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_login_login__["a" /* LoginPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GlobalVarProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
  Generated class for the GlobalVarProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var GlobalVarProvider = (function () {
    function GlobalVarProvider() {
        this.cartState = [];
        this.currentUser = null;
    }
    GlobalVarProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], GlobalVarProvider);
    return GlobalVarProvider;
}());

//# sourceMappingURL=global-var.js.map

/***/ }),

/***/ 58:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CartPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_global_var_global_var__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__product_product__ = __webpack_require__(133);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CartPage = (function () {
    function CartPage(navCtrl, navParams, alerCtrl, globalVar) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alerCtrl = alerCtrl;
        this.globalVar = globalVar;
        //this.tabBarElement = document.querySelector('.tabbar.show-tabbar');
        if (this.navParams.data.product) {
            this.globalVar.cartState.push(this.navParams.data);
        }
        this.currentCart = this.globalVar.cartState;
    }
    CartPage.prototype.ionViewWillEnter = function () {
        //this.tabBarElement.style.display = 'none';
    };
    CartPage.prototype.ionViewWillLeave = function () {
        //this.tabBarElement.style.display = 'flex';
    };
    CartPage.prototype.goToProduct = function (product) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__product_product__["a" /* ProductPage */], product);
    };
    CartPage.prototype.presentConfirm = function () {
        var _this = this;
        var alert = this.alerCtrl.create({
            title: 'Confirmation de commande',
            message: 'Êtes vous sur de vouloir commander ces produits ?',
            buttons: [{
                    text: 'Annuler',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }, {
                    text: 'Commander',
                    handler: function () {
                        console.log('Buy clicked');
                        _this.navCtrl.popToRoot();
                    }
                }]
        });
        alert.present();
    };
    CartPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cart',template:/*ion-inline-start:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/cart/cart.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>Mon panier</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <ion-list inset>\n      <ion-item *ngFor="let item of currentCart">\n        <button (click)="goToProduct(product);">\n          <h2>{{item.product.name}}</h2>\n          <p>{{item.qty}}</p>\n        </button>\n      </ion-item>\n    </ion-list>\n  <button ion-button round (click)="presentConfirm();">Valider la commande</button>\n</ion-content>\n'/*ion-inline-end:"/Users/maximedulin/Documents/MaCoteDeBoeuf/src/pages/cart/cart.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_2__providers_global_var_global_var__["a" /* GlobalVarProvider */]])
    ], CartPage);
    return CartPage;
}());

//# sourceMappingURL=cart.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__global_var_global_var__ = __webpack_require__(46);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http, globalVar) {
        this.http = http;
        this.globalVar = globalVar;
        this.apiUrl = "https://macotedeboeuf.firebaseio.com";
    }
    RestProvider.prototype.addUser = function (_a) {
        var _this = this;
        var name = _a.name, firstname = _a.firstname, phone = _a.phone, mail = _a.mail;
        return new Promise(function (resolve) {
            _this.http.put(_this.apiUrl + '/users/' + _this.globalVar.currentUser.uid + '.json', { name: name, firstname: firstname, phone: phone, mail: mail }).subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getProducts = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/products.json').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider.prototype.getOrders = function () {
        var _this = this;
        return new Promise(function (resolve) {
            _this.http.get(_this.apiUrl + '/orders/' + _this.globalVar.currentUser.uid + '.json').subscribe(function (data) {
                resolve(data);
            }, function (err) {
                console.log(err);
            });
        });
    };
    RestProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */], __WEBPACK_IMPORTED_MODULE_2__global_var_global_var__["a" /* GlobalVarProvider */]])
    ], RestProvider);
    return RestProvider;
}());

//# sourceMappingURL=rest.js.map

/***/ })

},[291]);
//# sourceMappingURL=main.js.map