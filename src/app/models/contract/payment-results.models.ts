export class PResults {
  contractPaymentConfig: ContractResultsPaymentConfig[];
}

export class ContractResultsPaymentConfig {
  contractId: number;
  milestoneName: string;
  description?: string;
  paymentValue: number;
  currencyId: number;
  periodicPaymentId: number; // siempre sera 1
}
