import { Validators, ValidatorFn } from '@angular/forms';
import { Injectable } from '@angular/core';
import { FormValidatorsService } from './form-validators.service';

@Injectable({ providedIn: 'root' })
export class FormLegalValidatorsService {
  constructor(private formValidatorsService: FormValidatorsService) {}

  getTaxIdValidators(isRequired = true): ValidatorFn[] {
    return [
      ...this.formValidatorsService.getRequiredValidator(isRequired),
      Validators.maxLength(40),
      this.formValidatorsService.lettersAndNumbers,
    ];
  }

  getDocumentNumberValidators(isRequired = true): ValidatorFn[] {
    return [
      ...this.formValidatorsService.getRequiredValidator(isRequired),
      Validators.maxLength(50),
      Validators.pattern(
        this.formValidatorsService.regexs.lettersNumbersWhiteSpacesOptional,
      ),
      this.formValidatorsService.blankSpaceValidator(),
    ];
  }
}
