import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { stringToNumber } from '@util/cast-values/utils';

export function maxCurrency(max: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }
    if (stringToNumber(value) > 10000) {
      return { maxTransfer: true };
    }
    return stringToNumber(value) > max ? { maxCurrency: true } : null;
  };
}

export function minCurrency(min: number): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if (!value) {
      return null;
    }

    return stringToNumber(value) < min ? { minCurrency: true } : null;
  };
}
