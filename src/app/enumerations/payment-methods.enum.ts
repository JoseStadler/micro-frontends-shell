export enum PaymentMethods {
  ACH = 'ACH',
  CC = 'CC',
  WT = 'WT',
  CRYEX = 'CRYEX',
  CURRENCY = 'usd',
  COUNTRY = 'US',
}

export const PaymentMethodsV2 = {
  CC: { id: 1, name: 'CC' },
  ACH: { id: 2, name: 'ACH' },
  WT: { id: 6, name: 'WT' },
  CRY: { id: 8, name: 'CRYPT' },
  CHC: { id: 9, name: 'CPAYL' },
};

export enum PaymentMethodsNames {
  CC = 'Credit card',
  WT = 'Wire',
  CRYPT = 'Crypto',
  ACH = 'ACH',
}
