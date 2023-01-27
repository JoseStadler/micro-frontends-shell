export class DocumentDto {
  id: number;
  name: string;
  description: string;
  fileId: number;
  optional: boolean;
  documentCountryTypeId: number;
  // Field for calculate contrctor documents status : None,
  status: string;
  icon: string;
  class: string;
}
