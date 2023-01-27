export class SignUp {
  signUpStateDto: SignUpStateDto;
  kybCheckStateDto: KybCheckStateDto;
}

export interface KybCheckStateDto {
  id: number;
  entityId: number;
  checkId: number;
  score: number;
  kybProviderId: number;
  active: boolean;
  notificationStatus: boolean;
  creatorId: number;
  kybState: KybState;
  email_sent: boolean;
}

export interface KybState {
  id: number;
  name: string;
}

export interface SignUpStateDto {
  name: string;
  stateId: number;
  firstLogin: string;
  thirtyDaysAfterFirstLogin: boolean;
}

export interface ChangeNotificationResponse
  extends Omit<KybCheckStateDto, 'kybState'> {
  kybStateId: number;
}

export class ClientFormDto {
  entityId?: number;
}

export class ContractorFormDto {
  contractorTypeId?: number;
}
