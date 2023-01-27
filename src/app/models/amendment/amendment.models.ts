export class Amendment {
  contractId: number;
  startDate: Date | string;
  id: number;
  text: string;
  applied: boolean;
  clientSign: string;
  contractorSign: string;
  creationDate: string;
  creatorId: number;
  dateClientSign: string;
  dateContractorSign: string;
  documentPdfId: number;
}

export interface createAmendmentRequestDTO {
  contractId: number;
  ownDocument: boolean;
  startDate: Date;
  text: string;
  amendId?: number;
}

export interface AmendmentRequestDTO {
  amendId: number;
  commissionDescription?: string;
  commissionFlag?: boolean;
  contractClauses?: AmendmentContractClauseInterface[];
  contractPaymentConfigDto?: AmendmentContractPaymentConfigInterface[];
  contractTypeId?: number;
  contractorTaxCountryId?: number;
  documentContractFileId?: number;
  endContractDate?: Date | string;
  startContractDate?: Date | string;
  responsibilities?: string;
  roleName?: string;
  scope?: string;
  mkWorkAreaId?: number;
}

export interface AmendmentResponseDTO {
  amendmentOntopDto: AmendmentOntopInterface;
  applied: boolean;
  changes: string;
  clientSign: string;
  contractId: number;
  contractorSign: string;
  creationDate: string;
  creatorId: number;
  dateClientSign: string;
  dateContractorSign: string;
  documentPdfId: number;
  id: number;
  startDate: Date | string;
  text: string;
}

export interface AmendmentOntopInterface {
  amendId?: number;
  commissionDescription?: string;
  commissionFlag?: boolean;
  contractClauses?: AmendmentContractClauseInterface[];
  contractPaymentConfigDto?: AmendmentContractPaymentConfigInterface[];
  contractTypeId?: number;
  contractorTaxCountryId?: number;
  documentContractFileId?: number;
  endContractDate?: string;
  responsibilities?: string;
  roleName?: string;
  scope?: string;
  startContractDate?: string;
}

export interface AmendmentContractClauseInterface {
  clause?: string;
  contractId?: number;
  months?: number;
  title?: string;
}

export interface AmendmentContractPaymentConfigInterface {
  contractPaymentConfigId?: number;
  currencyId?: number;
  deleteFlag?: boolean;
  milestoneName?: string;
  milestoneDescription?: string;
  nextPaymentAmount?: number;
  nextPaymentDate?: Date | string;
  paymentValue?: number;
  paymentsDetailsConfig?: AmendmentPaymentsDetailsConfigInterface[];
  periodicPaymentId?: number;
}

export interface AmendmentPaymentsDetailsConfigInterface {
  payDay?: number;
}

export enum PeriodictPaymentIdEnum {
  MILESTONE = 1,
  WEEKLY = 2,
  MONTHLY = 3,
  TWICE_PER_MONTH = 4,
}
