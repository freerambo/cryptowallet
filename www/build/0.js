webpackJsonp([0],{

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaymentPageModule", function() { return PaymentPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__payment__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_components_module__ = __webpack_require__(205);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var PaymentPageModule = /** @class */ (function () {
    function PaymentPageModule() {
    }
    PaymentPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_3__components_components_module__["a" /* ComponentsModule */],
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__payment__["a" /* PaymentPage */]),
            ],
        })
    ], PaymentPageModule);
    return PaymentPageModule;
}());

//# sourceMappingURL=payment.module.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PaymentPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_setting_setting__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_request_request__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_qr_qr__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_confirm_confirm__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_common_http__ = __webpack_require__(52);
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
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var PaymentPage = /** @class */ (function () {
    function PaymentPage(navCtrl, clipboard, setting, httpRequest, modalCtrl, httpClient, navParams) {
        this.navCtrl = navCtrl;
        this.clipboard = clipboard;
        this.setting = setting;
        this.httpRequest = httpRequest;
        this.modalCtrl = modalCtrl;
        this.httpClient = httpClient;
        this.navParams = navParams;
        this.btcAmount = 0.1;
        this.convertRate = 44367;
        this.cnyAmount = this.btcAmount * this.convertRate;
        this.balance = 100;
        this.address = "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX";
    }
    PaymentPage.prototype.getPrice = function () {
        var _this = this;
        this.httpRequest.get("https://api.coinbase.com/v2/prices/spot?currency=CNY").then(function (data) {
            _this.price = data;
            _this.convertRate = _this.price.data.amount;
            console.log(_this.convertRate);
        });
    };
    PaymentPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad PaymentPage');
        this.getPrice();
    };
    PaymentPage.prototype.updateBtc = function () {
        this.cnyAmount = this.cnyAmount;
        this.btcAmount = this.cnyAmount / this.convertRate;
    };
    PaymentPage.prototype.updateCny = function () {
        this.btcAmount = this.btcAmount;
        this.cnyAmount = this.convertRate * this.btcAmount;
    };
    PaymentPage.prototype.copyToClipBoard = function (data) {
        this.clipboard.copy('Hello world');
        this.setting.presentToast("Copied:" + data);
    };
    PaymentPage.prototype.presentContactModal = function () {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_5__components_qr_qr__["a" /* QrComponent */], { address: this.address }, { showBackdrop: true, enableBackdropDismiss: false });
        contactModal.present();
    };
    PaymentPage.prototype.confirm = function () {
        var contactModal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_6__components_confirm_confirm__["a" /* ConfirmComponent */], { address: this.address, btcAmount: this.btcAmount, balance: this.balance }, { showBackdrop: true, enableBackdropDismiss: false });
        this.balance = this.balance + this.btcAmount;
        contactModal.present();
    };
    PaymentPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-payment',template:/*ion-inline-start:"/Users/yuzhu/opt/ionic/BitCoinDemoV2/src/pages/payment/payment.html"*/'<!--\n  Generated template for the PaymentPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-item no-lines>\n    <ion-thumbnail item-start>\n      <img src="../../assets/imgs/bitcoin.png">\n    </ion-thumbnail>\n    <h2>用户充值</h2>\n    <p>比特币充值</p>\n    <p>当前余额(BTC)：{{balance}}</p>\n  </ion-item>\n  <ion-navbar color="dark">\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content padding>\n  <div class="reminder">Send BTC to the address below:</div>\n  <ion-list no-lines>\n    <ion-item class="customItem">\n      <ion-icon class="avatar" item-start style="background-color: green;" name="logo-bitcoin"></ion-icon>\n      <ion-label inline>BTC:\n      </ion-label>\n      <ion-input type="number" [(ngModel)]="btcAmount" (ionChange)="updateCny()"></ion-input>\n      <ion-icon name="copy" style="color:green;" small item-end (click)="copyToClipBoard(btcAmount)"></ion-icon>\n    </ion-item>\n\n    <ion-item class="customItem">\n      <ion-icon class="avatar" item-start style="background-color: blue;" name="logo-yen"></ion-icon>\n      <ion-label inline>CNY:</ion-label>\n      <ion-input type="number" [(ngModel)]="cnyAmount" (ionChange)="updateBtc()"></ion-input>\n      <ion-icon name="copy" style="color:blue;" small item-end (click)="copyToClipBoard(cnyAmount)"></ion-icon>\n    </ion-item>\n\n    <ion-item class="customItem">\n      <ion-icon class="avatar" item-start style="background-color: red;" name="locate"></ion-icon>\n      <ion-label inline>ADR:</ion-label>\n      <ion-input type="text" style="overflow:hidden;" [(ngModel)]="address" (ionChange)="updateBtc()"></ion-input>\n      <ion-icon name="copy" style="color:red;" small item-end (click)="copyToClipBoard(address)"></ion-icon>\n    </ion-item>\n  </ion-list>\n  <button class="actionButton" ion-button block color="dark" (click)="presentContactModal()" icon-start>\n    <ion-icon name="qr-scanner"></ion-icon>\n    Show QR\n  </button>\n  <button class="actionButton" ion-button block color="dark" (click)="confirm()" icon-start>\n    <ion-icon name="checkbox-outline"></ion-icon>\n    Confirm\n  </button>\n\n\n</ion-content>\n'/*ion-inline-end:"/Users/yuzhu/opt/ionic/BitCoinDemoV2/src/pages/payment/payment.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__ionic_native_clipboard__["a" /* Clipboard */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__providers_setting_setting__["a" /* SettingProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__providers_setting_setting__["a" /* SettingProvider */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__providers_request_request__["a" /* RequestProvider */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__providers_request_request__["a" /* RequestProvider */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* ModalController */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__angular_common_http__["a" /* HttpClient */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavParams */]) === "function" && _g || Object])
    ], PaymentPage);
    return PaymentPage;
    var _a, _b, _c, _d, _e, _f, _g;
}());

//# sourceMappingURL=payment.js.map

/***/ })

});
//# sourceMappingURL=0.js.map