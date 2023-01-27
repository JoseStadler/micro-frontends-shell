/**
 * Api resources paths
 */

export const RouteResources = {
  // Client
  client: '/client',
  clientPayNow: '/client/pay-now',
  clientOldPayNow: '/client/payout',
  clientNewHire: '/client/new-hire',
  clientPaymentApproval: '/client/payout/upcoming',
  clientInvoices: '/client/payout/invoices',
  clientUpcomingPayment: 'client/payout/upcoming',
  clientPayoutSetup: '/client/payout/payment-setup',
  clientHome: '/client/home',

  verificationCenter: '/verification-center',
  permissions: '/permissions',
  teams: '/teams',
  newHire: '/new-hire',
  taxes: '/documents/taxes',
  payout: '/payout',
  payNow: '/pay-now',
  extraPayments: '/extra-payments',
  upcomingPayment: '/payout/upcoming',
  payoutSetup: '/payout/payment-setup',
  bulkCommission: '/payout/upcoming/bulk-commission',
  docsRecurrents: 'recurrent',
  clientConfig: '/client-config',
  clientConfigPersonalInformation: '/client-config/personal-information',
  clientConfigCompanyManagers: '/client-config/company-managers',
  clientConfigCompanyInfo: '/client-config/company-information',
  clientConfigShareholders: '/client-config/shareholders',
  clientKybOnboarding: '/client-config/kyb-onboarding',
  clientContractAmendment: '/client/contract/amendments',
  clientContractTraditionalAmendment: '/client/contract/amendments/traditional',
  clientContractResultsDrivenAmendment:
    '/client/contract/amendments/results-driven',
  clientContractPayPerTaskAmendment: '/client/contract/amendments/pay-per-task',
  clientContractList: '/client/contract/contract-list',
  clientContractSummary: '/client/contract/summary',

  // Contractor
  contractor: '/contractor',
  paymentSetupContractor: '/wallet/payment-setup',
  settingsContractor: '/user-settings',
  cardContractor: '/contractor/card',
  cardRequest: '/contractor/card/card-request',
  paymentInvoices: '/contractor/wallet/payments/payment-tracking',
  walletTransactions: '/contractor/wallet/transactions',
  sendMoney: '/contractor/wallet/send-money',
  contractorConfig: '/contractor-config',

  contractorContractList: '/contractor/contract/contract-list',
  businessContractorConfig: '/bc-contractor-config',
  businessContractorOnboarding: '/bc-contractor-config/kyb-onboarding',
  businessContractorConfigCompanyInfo:
    '/bc-contractor-config/company-information',
  businessContractorConfigPersonalInformation:
    '/bc-contractor-config/personal-information',
  businessContractorConfigCompanyManagers:
    '/bc-contractor-config/company-managers',
  businessContractorConfigShareholders: '/bc-contractor-config/shareholders',

  // All users
  login: '/login',
  default: '/',
  signUp: '/signup/',
  home: '/home',
  documents: '/documents',
  notifications: '/notifications',
  userSettings: '/user-settings',
  contractList: '/contract/contract-list',
  contractSummary: '/contract/summary',
  timeOff: '/time-report/time-off',
  workSheet: '/time-report/worksheet',
  userValidation: '/user-validation',
  plugAndPlayContractList: '/contract/plugAndPlayContractList',
  paymentTracking: '/wallet/payments/payment-tracking',

  singleContracts: 'client/new-hire/single-contracts',
  multipleContracts: 'client/new-hire/multiple-contracts',
  multipleContractsList: '/client/new-hire/multiple-contracts/list',
  workerInvitation: 'client/new-hire/single-contracts/worker-invitation',
};
