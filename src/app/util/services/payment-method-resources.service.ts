import { Injectable } from '@angular/core';
import { TypePaymentMethodEnum } from '@enumerations/payment-type-method.enum';

@Injectable({ providedIn: 'root' })
export class PaymentMethodResourcesService {
  private baseIconUrl = 'https://assets.getontop.com/commons/media/brands/';
  readonly defaultCardIcon = this.baseIconUrl + 'sm-credit-card-icon.png';
  readonly icons = {
    visa: this.baseIconUrl + 'sm-visa.png',
    mastercard: this.baseIconUrl + 'sm-mastercard.png',
    amex: this.baseIconUrl + 'sm-amex.png',
    discover: this.baseIconUrl + 'sm-discover.png',
    jcb: this.baseIconUrl + 'sm-jcb.png',
    unionpay: this.baseIconUrl + 'sm-union-pay.png',
    diners: this.baseIconUrl + 'sm-diners.png',
    ach: this.baseIconUrl + 'sm-ach.png',
    [TypePaymentMethodEnum.ACCOUNT_BANK_TXT]: this.baseIconUrl + 'sm-ach.png',
    wire: 'assets/img/png/AvatarWire.png',
    crypto: 'assets/img/png/ot-icon-crypto-2.png',
    cpayl: 'assets/img/png/icon-checkout.png',
  };

  getIcon(key: string): string {
    return this.icons[key] ?? this.defaultCardIcon;
  }
}
