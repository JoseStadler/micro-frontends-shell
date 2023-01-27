import { Validators, ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FormValidatorsService } from './form-validators.service';

@Injectable({ providedIn: 'root' })
export class FormAddressValidatorsService {
  readonly commonPlaceValidators = [
    Validators.maxLength(128),
    this.formValidatorsService.blankSpaceValidator(),
    this.formValidatorsService.lettersAndAllowedCharacters,
  ];

  constructor(private formValidatorsService: FormValidatorsService) {}

  getCityValidators(isRequired = true): ValidatorFn[] {
    return [
      ...this.formValidatorsService.getRequiredValidator(isRequired),
      ...this.commonPlaceValidators,
    ];
  }

  getStateValidators(isRequired = true): ValidatorFn[] {
    return this.getCityValidators(isRequired);
  }

  getAddressValidators(isRequired = true): ValidatorFn[] {
    return [
      ...this.formValidatorsService.getRequiredValidator(isRequired),
      Validators.maxLength(150),
      this.formValidatorsService.blankSpaceValidator(),
    ];
  }

  getZipValidators(isRequired = true): ValidatorFn[] {
    return [
      ...this.formValidatorsService.getRequiredValidator(isRequired),
      Validators.maxLength(32),
      this.formValidatorsService.blankSpaceValidator(),
      this.formValidatorsService.lettersNumbersWhiteSpaces,
    ];
  }

  getPhoneValidators(isRequired = true): ValidatorFn[] {
    return [
      ...this.formValidatorsService.getRequiredValidator(isRequired),
      Validators.maxLength(20),
      Validators.pattern(this.formValidatorsService.regexs.optionalNumbers),
    ];
  }
}
