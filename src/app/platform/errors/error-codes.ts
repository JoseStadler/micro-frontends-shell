import { InjectionToken } from '@angular/core';

const ERROR_CODES_VALUES = {
  entityNotCreated: 1201,
  invalidPermissions: 'FRONT_INVALID_PERMISSIONS',
  rejectedUser: 'FRONT_REJECTED_USER',
};

export type ErrorCodes = typeof ERROR_CODES_VALUES;

export const ERROR_CODES = new InjectionToken('Error codes', {
  providedIn: 'root',
  factory: () => ERROR_CODES_VALUES,
});
