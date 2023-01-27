export class TimeSheetDto {
  timeSheetId: number;
  amount: number;
  paid: boolean;
  contractName: string;
  contractorName: string;
  fileId: number;
  quantity: number;

  timeEnd: Date;
  creationDate: Date;
  timeStart: Date;
  status: string;
  statusName: string;
  statusId: number;

  clientName: string;
  paymentDate: string;
  contractType: ContractTypes;
  contractTypeName: string;
  resultName: string;
  statusFront: string;
  paygType: string;
  details: string;
  fileName: string;
  // Just for Front
  checked: boolean;
  createdManually?: boolean;
}
export enum ContractTypes {
  TRADITIONAL = 1,
  PAY_PER_TASK = 2,
  RESULT_DRIVEN = 3,
}
