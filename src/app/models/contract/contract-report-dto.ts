export class ContractReportDto {
  contractId: number;
  contractOwnDocument: boolean;
  contractOwnDocumentFileId: number;
  contractStartDate: string;
  contractName: string;
  noticeDays: number;
  contractReference: string;
  scope: string;
  roleName?: string;
  contractType: string;
  contractTypeId: number;
  payment: string;
  periodicityTag: string;
  ownDocument: boolean;
  content: ContractReportDto[];

  clientId: number;
  clientLegalName: string;
  clientRepName: string;
  clientCity: string;
  clientCountryName: string;
  clientAddress: string;
  clientEmail: string;
  clientSign: string;
  clientPhone: string;
  isClicked: boolean;

  contractorId: number;
  contractorUserId: number;
  contractorName: string;
  contractStateName: string;
  contractStateid: number;
  contractorAddress: string;
  contractorCity: string;
  contractorCountry: string;
  contractorEmail: string;
  contractorTaxId: string;
  contractorTeamName: string;
  contractorSign: string;
  contractorIsUsPerson: boolean;
  contractorPhone: string;

  commissionDescription: string;
  commissionFlag: boolean;

  dateClientSign: string;
  dateContractorSign: string;

  startContractDate: Date;
  endContractDate: Date;

  contractStateId: number;
  contractState: string;
  thumbnailBin: string;
  initial1: string;
  initial2: string;

  contractSpecialClauses: Array<any>;

  plugPlayType: number;
  availableToSignPlugAndPlayContract: boolean;

  clientPlugAndPlayId: number;
  clientPlugAndPlayLegalName: string;
  clientPlugPlayFileId: number;

  plugAndPlay: boolean;
  signedByTop: boolean;
  signedByClient: boolean;
  signedByContractor: boolean;

  totals: number;
  checked: boolean;

  roleDescription: string;
  mailstoneDescription: string;
  fullScope: string;
  mkWorkAreaId: number;
}

export interface ContractListFilter {
  content: ContractReportDto[];
  empty: boolean;
  first: boolean;
  last: boolean;
  number: number;
  numberOfElements: number;
  pageable: {};
  size: number;
  sort: {};
  totalElements: number;
  totalPages: number;
}
export class ContractState {
  contractStateName: string;
  contractStateid: number;
  totals: number;
  isSelected?: boolean;
}
export class GenericType {
  label: string;
  id: number;
}
