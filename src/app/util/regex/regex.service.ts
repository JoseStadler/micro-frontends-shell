import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class RegexService {
  readonly lettersNumbers = /^[a-zA-Z0-9]+$/;
  readonly lettersNumbersWhiteSpaces = /^[a-zA-Z0-9\s]+$/;
  readonly lettersNumbersWhiteSpacesOptional = /^[a-zA-Z0-9\s]*$/;

  readonly letters = /^[a-zA-Z]+$/;
  readonly lettersWhiteSpace = /^[a-zA-Z\s]+$/;
  readonly positiveIntegers = /^[0-9]+$/;
  readonly optionalNumbers = /^[0-9]*$/;
  /**
   * Regex copied from https://regexr.com/39nr7
   */
  readonly url =
    /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i;

  /**
   * This regular expression allows word characters and some non-word characters.
   * This is intended to be used for verifying person names, city names, and state names.
   */
  readonly lettersAndAllowedCharacters = /^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/;
}
