import { host } from './endpoints';

export const environment = {
  production: true,
  mati_key: '60e767140b5133001bb4cbf0',
  mati_prod: false,
  mati_modal: true,
  stripe_key:
    'pk_test_51HDEwVDcg37TSXSzKhckXOVEDZIccXLe4fXjYUb1AcdGVvT7l8X32ZrMwf8Z4aaYP7nKOS9p7ql1Jp0ctoh3Rgt600Ch6KFYv5',
  name: 'test',
  link: 'https://app.test.getontop.com',
  URL_TOP_API: 'https://api.test.getontop.com/api/private/',
  URL_LOGIN: 'https://api.test.getontop.com/api/security/oauth/',
  URL_TIMESHEET: 'https://api.test.getontop.com/timesheet/',
  URL_PAYMENT: 'https://api.test.getontop.com/payment/',
  URL_PAYMENT_METHOD: 'https://api.test.getontop.com/',
  URL_INVOICES: 'https://api.test.getontop.com/invoice/',
  URL_REPORT: 'https://api.test.getontop.com/reports/',
  URL_OPS: 'https://api.test.getontop.com/ops/',
  URL_TRUORA: 'https://api.test.getontop.com/kyc/',
  URL_PAYOUT: 'https://api.test.getontop.com/payouts/',
  URL_OTP: 'https://api.test.getontop.com/otp/',
  URL_ABACO: 'https://api.test.getontop.com/abaco/',
  URL_IPIFY: 'https://api64.ipify.org',
  host,
  recaptcha: {
    siteKey: '6LcvBOodAAAAAD4qKRw1kbf1K8XpIT1bQ0Rk1E2G',
  },
  amplitud: false,
  amplitudClientKey: '',
  amplitudContractorKey: '',
};
