import { PlanCodeEnum } from '../shared/enumerations/subscribe-plans.enum';

export interface ContractorUserTopUserModel {
  contractor_id: number;
  contractor_type: ContractorTypeEnum;
  country_name: string;
  email: string;
  first_name: string;
  last_name: string;
  unique_id: string;
  user_id: number;
  address: string;
  birth_date: string;
  city: string;
  identity_number: string;
  identity_type: number;
  phone: string;
  wallet_creation_date: string;
  zip: string;
  plan_code: PlanCodeEnum;
}

export enum ContractorTypeEnum {
  INDIVIDUAL = 'Individual',
  BUSINESS = 'Business',
}
