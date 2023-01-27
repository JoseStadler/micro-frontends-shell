/**
 * payment traditional and pay per task/time
 */
export class PTraditional {
  contractPaymentConfig: ContractPaymentConfig;
  paymentDetailConfig: PaymentDetailConfig[];
  paymentSchedule: PaymentSchedule;
}

export class ContractPaymentConfig {
  id?: number;
  contractId: number;
  milestoneName?: string;
  description?: string; // SOLO PARA pay per task/time
  paygTypeId?: number; // SOLO PARA pay per task/time
  paymentValue: number;
  currencyId: number;
  periodicPaymentId: number;
}

export class PaymentDetailConfig {
  id?: number;
  contractPaymentConfigId?: number;
  payDay: number;
}

export class PaymentSchedule {
  id?: number;
  paymentDate?: Date;
  paymentValue: number;
}
