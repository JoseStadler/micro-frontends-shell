class Role {
  role: string;
  instances: number;
}

class Currency {
  id: number;
  name: string;
  code: string;
  symbol: string;
  paymentDetailName: string;
}

class PeriodicPayment {
  id: number;
  name: string;
  numberPaymentsMonth: number;
}

class Montly {
  date: string;
  value: number;
  description: string;
}

class Weekly {
  dayOfTheWeek: number;
  name: string;
  description: string;
}

export class DataForAmendmentTraditional {
  currencyId: Currency;
  paymentValue: string;
  description: string;
  selectedperiodicPayment: PeriodicPayment;
  weekDaySelected: Weekly;
  monthlyDays: Montly;
  firstPaymentSelected: Montly;
  secondPaymentSelected: Montly;
  roleName: Role;
  roleDescription: string;
  terminationDate: string;
}
