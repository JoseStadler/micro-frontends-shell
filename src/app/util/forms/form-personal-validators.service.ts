import { Validators, ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FormValidatorsService } from './form-validators.service';

@Injectable({ providedIn: 'root' })
export class FormPersonalValidatorsService {
  constructor(private formValidatorsService: FormValidatorsService) {}

  getNameValidators(isRequired = true): ValidatorFn[] {
    return [
      ...this.formValidatorsService.getRequiredValidator(isRequired),
      Validators.maxLength(50),
      Validators.pattern(
        this.formValidatorsService.regexs.lettersAndAllowedCharacters,
      ),
      this.formValidatorsService.blankSpaceValidator(),
    ];
  }

  getLastNameValidators(isRequired = true): ValidatorFn[] {
    return [...this.getNameValidators(isRequired)];
  }
}
