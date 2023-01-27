export class PeriodicPayment {
  id: number;
  name: PeriodicPaymentNameEnum | '';
  numberPaymentsMonth: number;
}

export type WeeklyPaymentType = {
  description: string;
  dayOfTheWeek: number;
  name: string;
  id: number;
};
export type MonthlyPaymentType = {
  description: string;
  date: string;
  value: number;
  date2?: Date;
  id: number;
};

export enum PeriodicPaymentNameEnum {
  WEEKLY = 'Weekly',
  MONTHLY = 'Monthly',
  TWICE_PER_MONTH = 'Twice per month',
}
