export class AmendPayment {
  amendId: number;
  contractPaymentConfigDto: ContractPaymentConfigDto[];
  contractTypeId: number;
  endContractDate: string;
  roleName: string;
  scope: string;
  startContractDate: string;
}
export class ContractPaymentConfigDto {
  currencyId: number;
  id: number;
  paymentValue: number;
  paymentsDetailsConfig: PaymentsDetailsConfig[];
  periodicPaymentId: number;
  milestoneName?: string;
  deleteFlag?: boolean;
  description?: string;
  contractPaymentConfigId?: number;
}
export class PaymentsDetailsConfig {
  id: number;
  contractPaymentConfigId?: number;
  payDay: number;
}
