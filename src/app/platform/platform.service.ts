import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Permission } from '@models/permission.model';
// import { AuthorizationService } from '@authorization/services/authorization.service';
// import { CookiesStorageService } from '@service/cookies.service';
// import { IntercomService } from '@service/intercom.service';
// import { LocalStorageService } from '@service/local-storage.service';
import { RouteResources } from '@util/routes';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AdminService } from '@service/admin.service';
import { LogoutConfig } from './models/logout.config';
import { SecurityService } from '@service/security.service';

@Injectable({ providedIn: 'root' })
export class PlatformService {
  constructor() // private intercomService: IntercomService,
  // private securityService: SecurityService,
  // private router: Router,
  // private adminService: AdminService,
  // private localStorageService: LocalStorageService,
  // private authorizationService: AuthorizationService,
  // private cookiesService: CookiesStorageService,
  {}

  logout(config: LogoutConfig = {}) {
    // const _config: LogoutConfig = {
    //   commands: [RouteResources.login],
    //   ...config,
    // };
    // this.adminService.setUserLogedInfo(null);
    // this.securityService.logout();
    // // this.intercomService.intercomNoUser();
    // this.localStorageService.clearLocalStorage();
    // this.router.navigate(_config.commands!, _config.extras);
  }

  // getPermissions(logoutOnFailure = true): Observable<Permission[]> {
  //   const token = this.cookiesService.getProperty('user.token');

  //   return this.securityService.getPermissionsList(token).pipe(
  //     tap((permissions) =>
  //       this.authorizationService.savePermissions(permissions),
  //     ),
  //     catchError((error) => {
  //       console.error(error);

  //       if (logoutOnFailure) {
  //         this.logout();
  //       }

  //       return of([]);
  //     }),
  //   );
  // }

  // getBasePath(): string {
  //   return this.adminService.isClient()
  //     ? RouteResources.client
  //     : RouteResources.contractor;
  // }
}
