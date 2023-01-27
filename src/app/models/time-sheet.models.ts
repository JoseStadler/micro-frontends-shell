export class TimeSheet {
  id: number;
  contractPaymentConfigId: number;
  contractId: number;
  fileId: number;
  details: string;
  quantity: number;
  timeEnd: Date;
  timeStart: Date;

  approvalDate: Date;
  approvalUserId: number;
  calculatedTotal: number;
  timeSheetApprovalStateId: number;
  creationDate: Date;
  contractName: string;
  rejectedDescription: string;
  timeSheetTypeId: number;
  milestoneName: string;
  contractType: number;
  status: string;
  // time-off
  reason: string;
}
