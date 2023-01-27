import { host } from './endpoints';

const url = 'https://app.ontop.ai:8090/';

export const environment = {
  name: 'prod',
  production: true,
  mati_prod: true,
  mati_modal: true,
  URL_BASE: url,
  URL_TOP_API: url + 'api/private/',
  URL_CLIENT: url + 'client/',
  URL_CONTRACT: url + 'contract/',
  URL_LOGIN: url + 'api/security/oauth/',
  URL_TIMESHEET: url + 'timesheet/',
  URL_PAYMENT: url + 'payment/',
  URL_PAYMENT_METHOD: url,
  URL_INVOICES: url + 'invoice/',
  URL_REPORT: url + 'reports/',
  URL_TRUORA: url + 'kyc/',
  URL_OPS: url + 'ops/',
  link: url + 'api/private',
  URL_PAYOUT: url + 'payouts/',
  URL_TOP_WALLET: url + 'top-wallet/',
  URL_OTP: url + 'otp/',
  URL_WALLET: url + 'wallets/',
  URL_ABACO: url + 'abaco/',
  URL_SAVING_PERKS: 'https://perks.getontop.com',
  URL_GET_LOAN:
    'https://api.whatsapp.com/send/?phone=573114078885&text&type=phone_number&app_absent=0',
  URL_IPIFY: 'https://api64.ipify.org',
  URL_TOP_CASHOUT: url + 'top-cashout/',
  URL_TOP_CRYPTO_CASHOUT: url + 'top-crypto-cashout/',
  URL_TOP_PLANS: url + 'top-bff-plan/',
  URL_TOP_PLAN: url + 'top-plan/',
  URL_TOP_PAYMENT_METHOD: url + 'top-payment-method/',
  URL_TOP_BFF_PAYMENT_METHODS: url + 'top-bff-payment-methods/',
  URL_ACCEPTANCES: url + 'acceptances/',
  URL_CASHIN: url + 'cashin/',
  URL_CARD_TROUBLES_TYPEFORM: 'https://ontop2020.typeform.com/to/vhyyNC1E',
  URL_ONTOP_MARKER: 'https://assets.getontop.com/commons/Icon-pin.png',
  URL_TOC_PLANS_SUBSCRIPTION:
    'https://www.getontop.com/legal/card-terms-of-service',
  URL_DOWNLOAD_IOS_APP: 'https://apps.apple.com/us/app/ontop-inc/id1587070796',
  URL_DOWNLOAD_ANDROID_APP:
    'https://play.google.com/store/apps/details?id=com.ontopai.app',
  host,
  mati_key: '60ef154594d9f4001b375137',
  encrypt_key:
    'cLoAiWLjSu1ExLWZXSzD8Y4TqNZNgqsSWfMe3y7jskbjYThsTR19erKgaIl3FLLeBP3GwpCfLGn4TUtiT9Bac0K2WOSEiGyhW0ESTzhl7OnGX68m29aocNTm',
  stripe_key:
    'pk_live_51HDEwVDcg37TSXSzLpjaXug8c1YCRrb4FymWhnKuaaoOD7dE5dYDtY9zp0nARf9bbTJMymSHT7hjNnoaxNHXutWv00IL5OMWYk',
  recaptcha: {
    siteKey: '6LcvBOodAAAAAD4qKRw1kbf1K8XpIT1bQ0Rk1E2G',
  },
  googleMapsApiKey: 'AIzaSyCkpsMz_yA8KRfVdRlPPiXSkdva3DoGxSI',
  amplitud: true,
  amplitudClientKey: '3887f1200eb5f5f4902bc236db3a24ed',
  amplitudContractorKey: 'bd2bf451f34194b978941dd079923b23',
};
