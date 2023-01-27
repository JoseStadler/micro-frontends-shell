import { Injectable } from '@angular/core';
import {
  AbstractControl,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { RegexService } from '@util/regex/regex.service';

@Injectable({ providedIn: 'root' })
export class FormValidatorsService {
  readonly lettersWhiteSpace = Validators.pattern(
    this.regexs.lettersWhiteSpace,
  );
  readonly lettersAndNumbers = Validators.pattern(this.regexs.lettersNumbers);
  readonly lettersNumbersWhiteSpaces = Validators.pattern(
    this.regexs.lettersNumbersWhiteSpaces,
  );
  readonly positiveIntegers = Validators.pattern(this.regexs.positiveIntegers);
  readonly url = Validators.pattern(this.regexs.url);
  readonly lettersAndAllowedCharacters = Validators.pattern(
    this.regexs.lettersAndAllowedCharacters,
  );

  constructor(readonly regexs: RegexService) {}

  blankSpaceValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      if (control.value) {
        const inputValue = control.value;
        return inputValue[0] !== ' '
          ? null
          : { blankSpace: { value: control.value } };
      }

      return null;
    };
  }

  blankSpaceEmailValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
      const blankSpaceBeforeEmail = { value: control.value };
      const validatorError = { blankSpaceBeforeEmail };
      const blankSpaceValidatorResult = this.blankSpaceValidator()(control);

      if (blankSpaceValidatorResult !== null) {
        return validatorError;
      }

      const emailValidatorResult = Validators.email(control);

      if (emailValidatorResult !== null) {
        return validatorError;
      }

      return null;
    };
  }

  getEmailValidators(isRequired = true): ValidatorFn[] {
    return [
      ...this.getRequiredValidator(isRequired),
      this.blankSpaceEmailValidator(),
    ];
  }

  getYearValidators(isRequired = true): ValidatorFn[] {
    return [
      ...this.getRequiredValidator(isRequired),
      Validators.maxLength(4),
      Validators.max(new Date().getFullYear()),
      this.positiveIntegers,
    ];
  }

  getWebSiteValidators(isRequired = true): ValidatorFn[] {
    return [
      ...this.getRequiredValidator(isRequired),
      Validators.maxLength(250),
      this.blankSpaceValidator(),
      this.url,
    ];
  }

  getRequiredValidator(isRequired = true): ValidatorFn[] {
    return isRequired ? [Validators.required] : [];
  }
}
