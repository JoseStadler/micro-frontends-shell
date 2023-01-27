export class UpcomingPayment {
  firstName: string;
  lastName: string;
  roleName: string | null;
  paymentDate: string;
  ammount: number;
  totalAmmount: number;
  totalAmountInUsd: number;
  paygTypeId: number | null;
  paygTypeName: string | null;
  status: string | null;
  workSheetId: number | null;
  contractTypeId: number | string;
  contractId: number | null;
  currencyCode: string | null;
  paymentScheduleId: number;
  currencyId: number;
}

export class UpcomingPayments {
  total: number;
  upcomingPayments: UpcomingPayment[];
}
