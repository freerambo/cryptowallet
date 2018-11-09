import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams} from 'ionic-angular';
import {SettingProvider} from "../../providers/setting/setting";
import {RequestProvider} from "../../providers/request/request";
import {Clipboard} from '@ionic-native/clipboard';
import {QrComponent} from "../../components/qr/qr";
import {ConfirmComponent} from "../../components/confirm/confirm";
import { HttpClient } from  '@angular/common/http';

/**
 * Generated class for the PaymentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment',
  templateUrl: 'payment.html',
})
export class PaymentPage {

  btcAmount = 0.1;
  convertRate = 44367;
  cnyAmount = this.btcAmount * this.convertRate;
  balance = 100;
  address = "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX";
  public price: any;

  public people: any;

  constructor(public navCtrl: NavController,
              public clipboard: Clipboard,
              public setting: SettingProvider,
              public httpRequest: RequestProvider,
              public modalCtrl: ModalController,
              public httpClient: HttpClient,
              public navParams: NavParams) {
  }

  getPrice(){
    this.httpRequest.get("https://api.coinbase.com/v2/prices/spot?currency=CNY").then(data => {
      this.price = data;
      this.convertRate = this.price.data.amount;
      console.log(this.convertRate);
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentPage');
    this.getPrice();
  }

  updateBtc() {
    this.cnyAmount = this.cnyAmount;
    this.btcAmount = this.cnyAmount / this.convertRate;
  }

  updateCny() {
    this.btcAmount = this.btcAmount;
    this.cnyAmount = this.convertRate * this.btcAmount;
  }

  copyToClipBoard(data) {
    this.clipboard.copy('Hello world');
    this.setting.presentToast("Copied:" + data);
  }

  presentContactModal() {
    let contactModal = this.modalCtrl.create(QrComponent,
      {address: this.address},
      {showBackdrop: true, enableBackdropDismiss: false});
    contactModal.present();
  }

  confirm() {
    let contactModal = this.modalCtrl.create(ConfirmComponent,
      {address: this.address, btcAmount: this.btcAmount, balance: this.balance},
      {showBackdrop: true, enableBackdropDismiss: false});
    this.balance =  this.balance + this.btcAmount;
    contactModal.present();
  }


}
