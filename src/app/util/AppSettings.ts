import { HttpHeaders } from '@angular/common/http';

export class AppSettings {
  public static CLIENT_ID = 'frontendApp';
  public static CLIENT_PW = 'fr4nt2020';

  // This version 2 of the getBearerHeader is for work with the new updates
  // of some services, with the new header "R-API-V" for example
  public static getBearerHeaderV2(version: string) {
    // Version is for use a specific version of the service, for example "1.3"
    const httpHeaders = new HttpHeaders({
      'R-API-V': version,
    });
    return httpHeaders;
  }

  public static getBearerFileHeader() {
    return new HttpHeaders({
      responseType: 'text',
    });
  }

  public static getExpiresIn() {
    return (
      sessionStorage.getItem('user.expiresIn') ||
      localStorage.getItem('user.expiresIn')
    );
  }
  public static getUserEmail() {
    return (
      sessionStorage.getItem('user.email') || localStorage.getItem('user.email')
    );
  }
}
