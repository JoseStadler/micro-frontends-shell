import { UserInfoModel } from './user-info.models';

export interface VerificationInformation {
  isRejected: boolean;
  showThirtyDaysModal?: boolean;
}

export interface UserInformation {
  isClient: boolean;
  isIndividualContractor: boolean | null;
  userInfo: UserInfoModel;
}

export type ComplianceAuthInformation = [
  UserInformation,
  VerificationInformation,
];
