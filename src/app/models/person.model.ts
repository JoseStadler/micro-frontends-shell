export class Person {
  citizenId: number;
  creatorId: number;
  currencyId: number;
  dateBirth: Date;
  dateOfIssue: Date;
  days_in_USA: number;
  dialCodeId: number;
  documentNumber: string;
  documentTypeId: number;
  fileId: number;
  firstName: string;
  id: number;
  genderId: number;

  lastName: string;

  pepEntity: string;
  pepEntityYear: number;
  pepFlag: boolean;
  pepPosition: string;

  isUsPerson: boolean;

  uspersonFlag: boolean;
  residenceTime: number;
  socialSecurityNumber: number;

  phone: string;
  profession: string;

  thumbnailFileId: number;
  timezoneId: number;
  userId: number;

  get fullName(): string {
    // read-only property with getter function (this is not the same thing as a “function-property”)
    return this.firstName + ' ' + this.lastName;
  }
}

export class PersonV2 {
  id: number;
  firstName: string;
  lastName: string;
  genderId: number;
  citizenId: number;
  dateBirth: Date | string;
  documentNumber: string;
  documentTypeId: number;
  dialCodeId: number;
  pepFlag: boolean;
  pepPosition: string;
  pepEntity: string;
  pepEntityYear: number;
  pepEntityYearEnded: number;
  phone: string;
  thumbnailFileId: number;
  fileId: number;
  pictureFrontSideId: number;
  pictureBackSideId: number;
  email: string;
  countryId: number;
  address: string;
  addressOp: string;
  city: string;
  zip: string;
  state: string;
  timezoneId: number;

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }
}
