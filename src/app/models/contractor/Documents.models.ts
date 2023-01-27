export class DocumentDto {
  documentCountryDescription: string;
  documentCategorization?: number;
  documentCountryReason: string;
  documentCountryId: number;
  documentCountryName: string;
  documentCountryPersonId: number;
  fileExtension: string;
  fileId: number;
  fileName: string;
  fileSize: number;
  groupId: number;
  loaded: boolean;
  month: string;
  readOnly: boolean;
  title: string;
  year: string;
  id?: number;
  class: string;
  optional?: boolean;
}

export interface DocumentList {
  content: DocumentDto[];
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
