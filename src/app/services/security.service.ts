// import { AuthorizationService } from '@authorization/services/authorization.service';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Router } from '@angular/router';
// import { OnboardingStatus } from '@enumerations/onboarding-status.enem';
// import {
//   CLIENT_CONFIG_CODE,
//   CONTRACTOR_CONFIG_CODE,
//   RoutesEnum,
// } from '@enumerations/routes.enum';
import { LoginResponseModel } from '@models/login.model';
import { Permission } from '@models/permission.model';
import { SignUp } from '@models/signup.model';
import { RouteResources } from '@util/routes';
import { forkJoin, Observable, of } from 'rxjs';
import { catchError, concatMap, map } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import {
  ResetNewPassword,
  SetNewPassword,
} from '../models/reset-new-password.models';
import { UserModel } from '../models/user.model';
// import { ClientTokenModel } from '../modules/sign-up/models/userAdmin.model';
import { AppSettings } from '../util/AppSettings';
import { AdminService } from './admin.service';
// import { AmplitudeService } from './amplitude.service';
// import { ComplianceIdentityValidationService } from './compliance-identity-validation.service';
// import { CookiesStorageService } from './cookies.service';
import { CustomError } from '@platform/errors/custom-error';
import { ErrorCodes, ERROR_CODES } from '@platform/errors/error-codes';

@Injectable({
  providedIn: 'root',
})
export class SecurityService {
  static stayLoggedCounterLimit = 2;
  private _stayLoggedCounter: number;
  public refreshingToken: boolean;
  constructor(
    private http: HttpClient,
    private adminService: AdminService,
    // private amplitudeService: AmplitudeService,
    private router: Router,
    // private cookiesService: CookiesStorageService,
    // private identityValidationService: ComplianceIdentityValidationService,
    // private authorizationService: AuthorizationService,
    @Inject(ERROR_CODES) private errorCodes: ErrorCodes
  ) {
    this._stayLoggedCounter = 0;
    this.refreshingToken = false;
  }
  // login(user: UserModel) {
  //   this.refreshingToken = false;
  //   const _headers = new HttpHeaders({
  //     'Content-type': 'application/json; charset=utf-8',
  //     Authorization:
  //       'Basic ' + btoa(AppSettings.CLIENT_ID + ':' + AppSettings.CLIENT_PW),
  //   });
  //   return this.getUserIp().pipe(
  //     concatMap((ip) =>
  //       this.http.post(
  //         environment.URL_TOP_API + environment.host.ms_gateway.methods.loginV2,
  //         { ...user, user: user.email, ip },
  //         {
  //           headers: _headers,
  //         },
  //       ),
  //     ),
  //   );
  // }
  // refreshToken() {
  //   this.refreshingToken = true;
  //   const _headers = new HttpHeaders({
  //     'Content-type': 'application/json; charset=utf-8',
  //     Authorization: this.cookiesService.getBearerHeader(),
  //   });
  //   const rememberMe = localStorage.getItem('rememberMe') === 'true';
  //   const storage = rememberMe ? localStorage : sessionStorage;
  //   const refreshToken = storage.getItem('user.refreshToken');
  //   const email = storage.getItem('user.email');
  //   this.http
  //     .put(
  //       environment.URL_TOP_API +
  //         environment.host.ms_gateway.methods.refreshToken,
  //       { refreshToken, email },
  //       {
  //         headers: _headers,
  //       },
  //     )
  //     .subscribe(
  //       (data: LoginResponseModel) => {
  //         this.saveLogin(data, rememberMe, email);
  //         this.refreshingToken = false;
  //       },
  //       () => {
  //         this.refreshingToken = false;
  //       },
  //     );
  // }
  // loginFunction(user: UserModel, rememberMe: boolean = false) {
  //   const promise = new Promise((resolve, reject) => {
  //     this.login(user).subscribe(
  //       async (data: LoginResponseModel) => {
  //         this.saveLogin(data, rememberMe, user.email);
  //         this.amplitudeService.getInstance('USER_LOGIN', {});

  //         try {
  //           await this.savePermissions(data.access_token).toPromise();
  //         } catch (error) {
  //           /*
  //            * The endpoint that returns the permissions can fail if
  //            * the entity is not created, for this case we allow the user
  //            * to access the application to complete the signup
  //            * */

  //           const { entityNotCreated } = this.errorCodes;
  //           const isEntityNotCreated =
  //             error.error.errorCode === entityNotCreated;

  //           if (!isEntityNotCreated) {
  //             this.logout();

  //             reject(error);

  //             return;
  //           }
  //         }

  //         resolve(data.access_token);
  //         this._stayLoggedCounter = 0;
  //       },
  //       (err) => {
  //         reject(err);
  //       },
  //     );
  //   });
  //   return promise;
  // }

  // getUserIp() {
  //   let params = new HttpParams();
  //   params = params.append('format', 'json');
  //   return this.http
  //     .get<{ ip: string }>(environment.URL_IPIFY, { params })
  //     .pipe(
  //       catchError(() => of({ ip: '' })),
  //       map(({ ip }) => ip),
  //     );
  // }

  redirectTo(token: string, redirectUrl?: string) {
    // // Get user info and redirect
    // const promise = new Promise((resolve, reject) => {
    //   const onboardingStatus$ = this.getOnboardingStatus();
    //   const userInfo$ = this.adminService.getUserInfo(token);
    //   const userData$ = forkJoin({
    //     userInfo: userInfo$,
    //     onboardingStatus: onboardingStatus$,
    //   });
    //   userData$.subscribe((result) => {
    //     const { userInfo, onboardingStatus } = result;
    //     const nextPage = userInfo.nextPage;
    //     const isClient = this.adminService.isClient(userInfo.role);
    //     const userPath = this.getUserPath(isClient);
    //     const isConfigPage = this.isConfigPage(nextPage);
    //     let path = this.getPath(userInfo.nextPage);
    //     if (isConfigPage && onboardingStatus) {
    //       const { signUpStateDto } = onboardingStatus;
    //       const { stateId } = signUpStateDto;
    //       /**
    //        * *Important note:
    //        * For individual contractors the stateId always is going to be 1 because
    //        * the stateId only is updated for business contractors and clients that's why
    //        * individual contractors only access to home when they complete the signup
    //        */
    //       if (stateId > OnboardingStatus.Personalinfo) {
    //         path = RouteResources.home;
    //       }
    //     }
    //     this.adminService.setUserLogedInfo(userInfo);
    //     if (redirectUrl) {
    //       this.router.navigate([redirectUrl]).then(() => resolve('SUCCESS'));
    //     } else {
    //       this.router
    //         .navigate([userPath + path])
    //         .then(() => resolve('SUCCESS'));
    //     }
    //   });
    // });
    // return promise;
  }

  // saveLogin(data: LoginResponseModel, remember: boolean, email: string) {
  //   const { refresh_token, access_token, expires_in } = data;
  //   const tenMinutes = 600;
  //   const oneSecond = 1000;
  //   const now = new Date().getTime();
  //   const expiresIn = new Date(
  //     now + (Number(expires_in) - tenMinutes) * oneSecond,
  //   );
  //   const storage = remember ? localStorage : sessionStorage;
  //   localStorage.setItem('rememberMe', `${remember}`);
  //   storage.setItem('user.email', email);
  //   this.cookiesService.setProperty('user.token', access_token);
  //   storage.setItem('user.expiresIn', expiresIn.getTime().toString());
  //   this.cookiesService.setProperty('user.refreshToken', refresh_token);
  //   storage.setItem('user.expiresIn', expiresIn.getTime().toString());
  // }

  // logout() {
  //   this.cookiesService.deleteProperty('user.token');
  //   localStorage.removeItem('user.expiresIn');
  //   this.cookiesService.deleteProperty('user.refreshToken');
  //   localStorage.removeItem('user.email');
  //   sessionStorage.removeItem('user.expiresIn');
  //   sessionStorage.removeItem('user.email');
  //   sessionStorage.removeItem('userDataTopUser');
  //   sessionStorage.removeItem('userData');
  //   this.identityValidationService.clearStorage();
  // }

  // signup(user: UserModel) {
  //   const urlPath = user.clientToken
  //     ? environment.host.ms_gateway.methods.signupForClients
  //     : environment.host.ms_gateway.methods.usersV2;
  //   return this.getUserIp().pipe(
  //     concatMap((ip) =>
  //       this.http.post(environment.URL_TOP_API + urlPath, { ...user, ip }),
  //     ),
  //   );
  // }

  // validateClientToken(clientToken: string) {
  //   return this.http.get<ClientTokenModel>(
  //     environment.URL_OPS +
  //       environment.host.ms_gateway.methods.verifyClientToken +
  //       clientToken,
  //   );
  // }

  // // Send email to reset password
  // resetPassword(email: string) {
  //   const params = new URLSearchParams();
  //   params.append('username', email);
  //   return this.http.post(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.resetPassword +
  //       email,
  //     params.toString(),
  //   );
  // }

  // // Create a new password
  // newPassword(pass: ResetNewPassword) {
  //   return this.http.post(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.changePassword,
  //     pass,
  //   );
  // }

  // // set a new password
  // setPassword(password: SetNewPassword) {
  //   return this.http.put(
  //     environment.URL_TOP_API + environment.host.ms_gateway.methods.setPassword,
  //     password,
  //   );
  // }

  // // Get the token when user click confirm mail
  // firstLogin(uuidToken: string) {
  //   return this.http.get(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.firstLogin +
  //       uuidToken,
  //   );
  // }

  // getPermissionsList(token: string): Observable<Permission[]> {
  //   const bearerHeaders = new HttpHeaders({
  //     Authorization: 'Bearer ' + token,
  //   });

  //   return this.http
  //     .get(
  //       environment.URL_BASE + environment.host.ms_gateway.methods.getRolesList,
  //       {
  //         headers: bearerHeaders,
  //       },
  //     )
  //     .pipe(
  //       map((results: Permission[]) => {
  //         return results;
  //       }),
  //     );
  // }

  // private savePermissions(token: string): Observable<void> {
  //   const permissions$ = this.getPermissionsList(token);

  //   return permissions$.pipe(
  //     map((permissions) => {
  //       if (!Array.isArray(permissions)) {
  //         const error = new CustomError('Invalid data for permissions', {
  //           errorCode: this.errorCodes.invalidPermissions,
  //         });

  //         throw { error };
  //       }

  //       this.authorizationService.savePermissions(permissions);

  //       return undefined;
  //     }),
  //   );
  // }

  // addStayLoggedIn(): void {
  //   this._stayLoggedCounter++;
  // }
  // isSessionActive(): boolean {
  //   return this._stayLoggedCounter < SecurityService.stayLoggedCounterLimit;
  // }

  private getOnboardingStatus(): Observable<SignUp> {
    return this.adminService.getClientOnboardingStatus().pipe(
      catchError((error) => {
        console.log(error);

        return of(null);
      })
    );
  }

  // private getUserPath(isClient: boolean): string {
  //   return isClient ? RouteResources.client : RouteResources.contractor;
  // }

  // private getPath(nextPage: string): string {
  //   return RoutesEnum.find((r) => r.code === nextPage).route;
  // }

  // private isConfigPage(nextPage: string): boolean {
  //   return (
  //     nextPage === CLIENT_CONFIG_CODE || nextPage === CONTRACTOR_CONFIG_CODE
  //   );
  // }
}
