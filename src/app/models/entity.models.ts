export class Entity {
  address: string;
  city: string;
  countryId: number;
  id: number;
  creatorId: number; // Id user
  enabled: boolean; // When entity setup = true, other -> false
  entityTypeId: number;
  legalName: string;
  registrationNumber: string;
  taxId: string;
  taxIdentificationName: string;
  zip: string;
  teamName: string;
  legalStatusId: number;
  stripeId: string;
  state: string;
  industryTypeId: number;
  numberOfEmployees: number;
  tradeName: string;
  countryEntityTypeId: number;
  weHireMexico: boolean;
}

export class EntityV2 {
  id: number;
  linkedinPage: string;
  countryId: number;
  address: string;
  addressOP: string;
  city: string;
  taxId: string;
  taxIdentificationName: string;
  zip: string;
  countryTaxId: number;
  entityTypeId: number;
  tradeName: string;
  legalName: string;
  numberOfEmployees: number;
  industryTypeId: number;
  teamName: string;
  certifyProofId?: number;
  website?: string;
  companyTypeId?: number;
  phone: string;
  phoneNumber: string;
  foundationDate: Date;
}
