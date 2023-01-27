import { Entity, EntityV2 } from '../entity.models';
import { Person, PersonV2 } from '../person.model';

export class ContractorDto {
  contractorId: number;
  contractorTypeId: number;
  person: Person;
  entity: Entity;
}

export class ContractorDtoV2 {
  contractorId: number;
  contractorTypeId: number;
  person: PersonV2;
  entity: EntityV2;
  placeOfBirthFlag: boolean;
}

export class PersonInfoDto {
  firstName: string;
  lastName: string;
  citizenId: number;
  documentTypeId: number;
  documentNumber: string;
  dateBirth: Date;
  genderId: number;
  linkedinPage: string;
  placeOfBirthFlag: boolean;
}

export class AddressInfoDto {
  countryId: number;
  dialCodeId: number;
  phone: string;
  address: string;
  addressOp: string;
  city: string;
  zipCode: string;
  state?: string;
  timezone?: string;
  zip: string;
}

export class TaxInfoDto {
  countryTaxId: number;
  pepEntity: string;
  pepEntityYear: number;
  pepFlag: boolean;
  pepPosition: string;
  taxId: string;
  taxIdentificationName: string;
}

export class IndividualFormDto {
  // contractor
  contractorTypeId: number;
  contractorId: number;
  // individual
  addressInfoDto: AddressInfoDto;
  personInfoDto: PersonInfoDto;
  taxInfoDto: TaxInfoDto;
  // bussiness
  companyClientInfoDto: CompanyInfoDto;
  adminInfoDto: PersonBInfoDto;

  // cliente
  entityId: number;
  companyInfoDto: CompanyInfoDto;
  personBInfoDto: PersonBInfoDto;
}

export class CompanyInfoDto {
  tradeName: string;
  legalName: string;
  countryId: number;
  entityTypeId: number;
  taxId: string;
  industryTypeId: number;
  numberOfEmployees: number;
  teamName: string;
  website: string;
  phone: string;
  foundationDate?: string | Date;
}

export class CompanyInfoDtoV2 {
  tradeName: string;
  legalName: string;
  countryId: number;
  entityTypeId: number;
  companyType: number;
  taxId: string;
  industryTypeId: number;
  numberOfEmployees: number;
  certificationOfProofId: string;
  certificationOfProof: string;
  foundationDate: Date;
  timezoneId: string;
  countryTaxId?: number;
  shareholderPercentage?: number;
  endValidation?: Date;
  companyTypeId?: number;
}

export class PersonBInfoDto {
  firstName: string;
  lastName: string;
  genderId: number;
  dateBirth: Date;
  dialCodeId: number;
  phone: string;
  documentTypeId: number;
  documentNumber: string;
  pepPosition: string;
  pepEntity: string;
  pepEntityYear: number;
  pepFlag: boolean;
  citizenId: number;

  linkedinPage: string;
}

export interface Contractor {
  id: number;
  entityId: number;
  personId: number;
  contractorTypeId: number;
  creatorId: number;
  invoiceConsecutive: number;
  taxSignFileId: null;
  contractorSignTax: null;
  dateContractorSignTax: null;
}

export interface PartialContractorDto {
  contractorTypeId?: number;
  entity?: Partial<EntityV2>;
  person?: Partial<PersonV2>;
}

export interface ContractorResponseDto {
  contractor: Contractor;
  entity: EntityV2;
  person: PersonV2;
}
