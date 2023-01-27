export enum MatiStatus {
  VERIFIED = 'verified',
  STARTED = 'started',
  STATUS_MISSING = 'Status Missing',
  REJECTED = 'rejected',
  REVIEW_NEEDED = 'reviewNeeded',
}
export interface MatiVerificationStatus {
  kycCheckId: number;
  notificationStatus: boolean | null;
  fullName: string;
  documentNumber: string | null;
  status: MatiStatus;
}

export interface MatiProcessFlow {
  flowId: string;
}
