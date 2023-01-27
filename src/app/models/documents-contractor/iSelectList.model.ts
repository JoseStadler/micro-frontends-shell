export interface ISelectDetails {
  label?: string;
  color?: string;
}
export interface ISelectList {
  id?: number;
  iconCountry?: string;
  icon?: string;
  text?: string;
  detail?: string;
  active?: boolean;
  data?: any;
  description?: Array<ISelectDetails>;
  disabled?: boolean;
}
