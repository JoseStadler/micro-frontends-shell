import { ContractClause } from './contract-clause.models';
import { NonCompetitionAndSolicitationClause } from './contract-non-competition-clause';

export class Contract {
  clientSign: string;
  contractTypeId: number;
  contractorId: number;
  contractorEmail: string;
  contractorEmailText: string;
  contractorSign: string;
  // contractorTaxCountryId: number;
  countryToHireId: number;
  commissionDescription: string;
  commissionFlag: boolean;
  creationDate: Date;
  creatorId: number;
  dateClientSign: Date;
  dateContractorSign: Date;
  daysOfNotice: number;
  documentPdfId: number;
  endContractDate: Date;
  endingConditions: Date;
  id: number;
  invitationText: string;
  name: string;
  scope: string;
  // responsiblities: string;
  roleName: string;
  sent: boolean;
  specialClause: string;
  startContractDate: Date;
  teamId: number;
  uploadComplianceDoc: boolean;
  ownDocument: boolean;

  contractStateId: number;
  reference: string;
  filename: string;
  plugPlayType: number;

  roleDescription: string;
  dedication: number;

  mkWorkAreaId: number;
  contractFile: File;
  specialClauses: ContractClause[];
  nonSolicAndNonComp: number;
  nonCompetitionAndSolicitationClause: NonCompetitionAndSolicitationClause;
  roleSelected;

  generalRating: number;
  cultureRating: number;
  performanceRating: number;
  recommendRating: number;
  plugPlayClientSign: string;
  contractState: string;
  signedByClient: boolean;
  signedByContractor: boolean;
  contractType: string;
  contractId: number;
  contractorName: string;
  contractorUserId: number;
}

// {
//   "clientSignFileId": 0,
//   "contractorSignFileId": 0,
//   "dateClientSignTimeZone": "string",
//   "dateContractorTimeZone": "string",
//   "paymentConfigList": [
//     {
//       "contractId": 0,
//       "currencyId": 0,
//       "description": "string",
//       "id": 0,
//       "milestoneName": "string",
//       "paygTypeId": 0,
//       "paymentDetailConfigList": [
//         {
//           "contractPaymentConfigId": 0,
//           "id": 0,
//           "payDay": 0
//         }
//       ],
//       "paymentValue": 0,
//       "periodicPayment": {
//         "id": 0,
//         "name": "string",
//         "numberPaymentsMonth": 0
//       },
//       "periodicPaymentId": 0
//     }
//   ],
//   "reference": "string",
// }
