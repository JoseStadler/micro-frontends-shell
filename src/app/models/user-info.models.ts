export class UserInfoModel {
  fileId: number;
  thumbnailFileId: number;
  nextPage: string;
  name: string;
  lastName: string;
  firstName: string;
  phoneNumber: string;
  role: UserRoles;
  roles: string[];
  urlAvatar: string;
  plugandplayAdmin: boolean;
  initial1: string;
  initial2: string;
  hasActiveContract: boolean;
  disclaimerTaxesAcceptance: boolean;
  needsTaxDisclaimerAcceptance: boolean;
}

export enum UserRoles {
  Client = 'Client',
  Contractor = 'Contractor',
}

export interface StorageUserDataModel {
  address: string;
  addressOp: string;
  city: string;
  countryEntityTypeId: number;
  countryId: number;
  countryTaxId: number;
  createAccFinish: boolean;
  creatorId: number;
  dateIncorporation: string;
  enabled: true;
  entityTypeId: number; // ContractorIndividual === 1;
  federalTaxClassification: string;
  id: number;
  industryTypeId: string;
  legalName: string;
  legalStatusId: string;
  linkedinPage: string;
  numberOfEmployees: number;
  plaidId: number;
  registrationNumber: number;
  stripeId: number;
  taxClassification: string;
  taxId: number;
  taxIdentificationName: string;
  teamName: string;
  tradeName: string;
  uniqueId: string;
  webSite: string;
  zip: string;
}
