import { ContractorDto } from '../dto/contractor-dto.models';
import { DocumentDto } from '@models/contractor/Documents.models';

export class ContractorDocumentsDto {
  contractor: ContractorDto;
  documents: (ContractorDocumentsDto | any)[];

  // Field for calculate contrctor documents status : None,
  status: string;
  icon: string;
  class: string;
  optional?: boolean;
}
