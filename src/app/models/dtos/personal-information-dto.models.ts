import { PersonV2 } from '@models/person.model';

export type PersonalInformationDto =
  | ClientPersonalInformationDto
  | ContractorPersonalInformationDto;

export interface ClientPersonalInformationDto {
  entityId: number;
  addressInfoDto: null | Partial<PersonV2>;
  adminInfoDto: null | Partial<PersonV2>;
  personalLegalInfoDto: null | Partial<PersonV2>;
}

export interface ContractorPersonalInformationDto {
  entityId: number;
  addressInfoDto: Partial<PersonV2>;
  adminInfoDto: Partial<PersonV2>;
  personalLegalInfoDto: Partial<PersonV2>;
}
