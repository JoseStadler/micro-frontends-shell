import { ContractPaymentConfigDto } from './amend-payment.models';
import { ContractClause } from '../contract/contract-clause.models';

export class AmendmentList {
  amendmentOntopDto: AmendmentOntopDto;
  changes: AmendmentChanges | string;
  clientSign: string;
  contractId: number;
  contractorSign: string;
  creationDate: string;
  creatorId: number;
  dateClientSign: string;
  dateContractorSign: string;
  documentPdfId: number;
  id: number;
  startDate: string;
  text: string;
  ownDocument: boolean;
}

export class AmendmentOntopDto {
  amendId: number;
  contractClauses: ContractClause[];
  contractPaymentConfigDto: ContractPaymentConfigDto[];
  contractTypeId: number;
  documentContractFileId: number;
  endContractDate: string;
  roleName: string;
  scope: string;
  startContractDate: string;
  applied: boolean;
}

export class AmendmentChanges {
  contractClauses: boolean[];
  contractPaymentConfigDto: boolean[];
  contractTypeId: boolean[];
  endContractDate: boolean[];
  roleName: boolean[];
  scope: boolean[];
  startContractDate: boolean[];
}
