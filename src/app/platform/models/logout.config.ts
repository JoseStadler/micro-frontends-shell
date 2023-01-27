import { NavigationExtras } from '@angular/router';

export interface LogoutConfig {
  commands?: any[];
  extras?: NavigationExtras;
}

export enum LogoutByEnum {
  RejectedUser = 'RejectedUser',
}
