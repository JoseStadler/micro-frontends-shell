export type Base64 = string;
export enum FileTypes {
  PDF = 1,
  PNG = 2,
  JPEG = 3,
  ZIP = 4,
  JPG = 5,
  GIF = 6,
  CSV = 7,
  HEIC = 8,
  XLSX = 9,
}

/**
 * Model used to represet an information file stored by ontop
 */
export interface FileInformationModel {
  id: number;
  name: string;
  fileTypeId: FileTypes;
  bin: Base64;
  creatorId: number;
}
