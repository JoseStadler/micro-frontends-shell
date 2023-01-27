export interface IDataDocuments {
  status: string;
  title: string;
  date: string;
  actions: boolean;
}

export interface IDataCardDocument {
  userContractor: string;
  country: string;
  email: string;
  statusType: string;
  statusText: string;
  documents: IDataDocuments[];
}
