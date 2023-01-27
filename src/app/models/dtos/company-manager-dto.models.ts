import { PersonV2 } from '@models/person.model';

export interface CompanyManagerPersonDto extends PersonV2 {
  creatorId: number;
  creationDate: string;
  entityId: number;
  comManagerPositionTypeId: number;
}

export type PartialCompanyManagerDto = Partial<CompanyManagerPersonDto>;

export interface CompanyManagerDto {
  entityId: number;
  addressInfoDto: null | Partial<CompanyManagerPersonDto>;
  adminInfoDto: null | Partial<CompanyManagerPersonDto>;
  personalLegalInfoDto: null | Partial<CompanyManagerPersonDto>;
  comManagerPositionTypeId: number;
}
