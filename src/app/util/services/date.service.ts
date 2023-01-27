import { Injectable } from '@angular/core';
import { IsoDate } from '../types/date';
import { format, sub } from 'date-fns';

@Injectable({ providedIn: 'root' })
export class DateService {
  /**
   * Use this method if you want to:
   * - Convert an ISO date to js Date
   * - Convert an ISO date to js Date and ignore user's local time zone, this
   * can be useful when you want to get birthdates
   * Example of UTC ISO date, 2015-04-10T00:00:00.000+00:00
   * @param isoDate
   * @returns Date
   */
  getDateFromIsoDate(isoDate: IsoDate, ignoreOffset = false): Date {
    const date = new Date(isoDate);

    if (ignoreOffset) {
      const dateTimeIgnoreOffset =
        date.valueOf() + date.getTimezoneOffset() * 60 * 1000;

      return new Date(dateTimeIgnoreOffset);
    }

    return date;
  }

  getFormattedDate(date: Date, formatPattern = 'yyyy-MM-dd'): string {
    return format(date, formatPattern);
  }

  getDate(): Date {
    return new Date();
  }

  subtract(date: Date, duration: Duration = {}): Date {
    return sub(date, duration);
  }
}
