export class Country {
  countryRegionId?: number;
  id: number;
  iso: string;
  name: string;
  nicename: string;
  iso3: string;
  numcode: number;
  phonecode: number;
  phoneCodeToShow: string;
  active?: boolean;
}

export class CountrySelect {
  active?: boolean;
  countryRegionId?: number;
  highRisk?: boolean;
  id?: number;
  iso?: string;
  iso3?: string;
  name?: string;
  nicename?: string;
  numcode?: number;
  phoneCodeToShow?: string;
  phonecode?: number;
  taxDisclaimer?: string;
}

export interface Countries {
  allCountries: Country[];
  countriesWithException: Country[];
  countries: Country[];
}
