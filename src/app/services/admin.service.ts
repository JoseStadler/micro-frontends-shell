import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientDTO } from '@models/dto/client-dto.model';
import {
  ChangeNotificationResponse,
  SignUp,
  SignUpStateDto,
} from '@models/signup.model';
import { UserEntity } from '@models/user-entity.model';
import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
import { tap, catchError, map, switchMap, take } from 'rxjs/operators';
import { UserModel } from '@models/user.model';
// import { RecentPaymentsModels } from '@service/models/recent-payments.models';
import {
  ContractorTypeEnum,
  ContractorUserTopUserModel,
} from '@models/user-top-user.model';
// import { UpcomingPaymentsFiltersSetup } from '../modules/client/pages/upcoming-payments/models/upcoming-payments.models';
// import { upcomingPaymentsFiltersSetupDefault } from '../modules/client/pages/upcoming-payments/constants/filters-setup.constants';
import { httpErrorHandler, httpSuccessfulHandler } from '@util/http';
import { environment } from '../../environments/environment';
import { Notification } from '@models/notification.models';
import { UserInfoModel, UserRoles } from '@models/user-info.models';
// import { UserAdminModel } from '../modules/sign-up/models/userAdmin.model';
// import { ServerResponse } from '@util/http';
import { RoleEnum } from '@enumerations/role.enum';
import { Entity } from '@models/entity.models';

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  private contractorTopUser: BehaviorSubject<ContractorUserTopUserModel | null> =
    new BehaviorSubject<ContractorUserTopUserModel | null>(null);
  private role: string | undefined;
  private user: UserInfoModel | undefined;
  private userLogin: UserModel;
  // private thirtyDaysAfterFirstLogin: boolean;
  // private _upcomingPaymentsFiltersSetup: UpcomingPaymentsFiltersSetup;
  // public refreshUpcomingPaymentsFiltersSetup = new BehaviorSubject<boolean>(
  //   false,
  // );

  public profileImgBIN: string | undefined | null;
  // roles: string[];
  // disclaimerTaxesAcceptance: boolean | null = null;
  // needsTaxDisclaimerAcceptance: boolean | null = null;
  // public approvNtfs = new Subject<string>();
  constructor(private http: HttpClient) {
    // this._upcomingPaymentsFiltersSetup = upcomingPaymentsFiltersSetupDefault;
  }

  // setMessage() {
  //   this.approvNtfs.next();
  // }

  // getNotifications() {
  //   return this.http.get<Notification[]>(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.notificationFindByUserId,
  //   );
  // }

  // readNotifications() {
  //   return this.http.put(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.notificationReadAllForUserId,
  //     {},
  //   );
  // }

  reviewNotification(notification: Notification) {
    return this.http.put(
      environment.URL_TOP_API +
        environment.host.ms_gateway.methods.notificationReviewById +
        notification.id,
      {}
    );
  }

  findByOwnerId(): Observable<Entity> {
    return this.http.get<Entity>(
      environment.URL_TOP_API +
        environment.host.ms_gateway.methods.findByOwnerId
    );
  }

  // getUser() {
  //   return this.http.get(
  //     environment.URL_TOP_API + environment.host.ms_gateway.methods.users,
  //   );
  // }

  getUserInfoTopUser() {
    return this.contractorTopUser.asObservable().pipe(
      switchMap((contractorTopUser: ContractorUserTopUserModel | null) => {
        if (!contractorTopUser) {
          return this.http
            .get<ContractorUserTopUserModel>(
              `${environment.URL_BASE}${environment.host.ms_gateway.methods.userTopUser}`
            )
            .pipe(
              tap((user: ContractorUserTopUserModel) =>
                this.contractorTopUser.next(user)
              )
            );
        } else {
          return of(contractorTopUser);
        }
      }),
      take(1)
    );
  }

  resetContractorTopUser() {
    this.contractorTopUser.next(null);
  }

  setUserInfoTopUser(user: ContractorUserTopUserModel) {
    sessionStorage.setItem('userDataTopUser', JSON.stringify(user));
    // this.userInfoTopUser = user;
  }

  // getSetUserInfoTopUser(): ContractorUserTopUserModel | null {
  //   return JSON.parse(sessionStorage.getItem('userDataTopUser'));
  // }

  // getUsers() {
  //   return this.http.get(
  //     environment.URL_TOP_API + environment.host.ms_gateway.methods.users,
  //   );
  // }

  // getDocumentTypes() {
  //   return this.http.get(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.documentTypes,
  //   );
  // }

  // saveUser(user: any) {
  //   return this.http.post(
  //     environment.URL_TOP_API + environment.host.ms_gateway.methods.users,
  //     user,
  //   );
  // }

  getUserInfo(token: string) {
    const bearerHeaders = new HttpHeaders({
      Authorization: 'Bearer ' + token,
    });

    return this.http
      .get(
        environment.URL_TOP_API + environment.host.ms_gateway.methods.getInfo,
        {
          headers: bearerHeaders,
        }
      )
      .pipe
      // tap((user: UserInfoModel) => {
      //   this.disclaimerTaxesAcceptance = user.disclaimerTaxesAcceptance;
      //   this.needsTaxDisclaimerAcceptance = user.needsTaxDisclaimerAcceptance;
      //   this.roles = user.roles;
      // }),
      ();
  }

  getClientOnboardingStatus(): Observable<SignUp> {
    return this.http.get<SignUp>(
      environment.URL_TOP_API +
        environment.host.ms_gateway.methods.getClientOnboardingStatus
    );
  }

  // setClientOnboardingStatus(state: number): Observable<SignUpStateDto> {
  //   return this.http.post<SignUpStateDto>(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.setClientOnboardingStatus +
  //       '/' +
  //       state,
  //     {},
  //   );
  // }

  getByToken(): Observable<UserEntity> {
    return this.http.get<UserEntity>(
      environment.URL_TOP_API + environment.host.ms_gateway.methods.getByToken
    );
  }

  // deleteUser() {
  //   return this.http.delete(
  //     environment.URL_TOP_API + environment.host.ms_gateway.methods.deleteUser,
  //   );
  // }

  setUserLogedInfo(user: UserInfoModel | null) {
    if (user) {
      this.user = user;
      this.role = user.role;
    } else {
      this.setImgBINtoNull();
    }
  }

  getUserLogedInfo(): string | undefined {
    return this.role;
  }

  getUserLoged(): UserInfoModel | undefined {
    return this.user;
  }

  setUserLogin(user: UserModel) {
    this.userLogin = user;
  }

  getUserLogin(): UserModel {
    return this.userLogin;
  }

  // getEmailFromToken(token: string) {
  //   return this.http.get(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.tokenEmail +
  //       token,
  //   );
  // }

  // saveAdminUser(user: UserAdminModel) {
  //   return this.http.post(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.userAdminSave,
  //     user,
  //   );
  // }

  // @GetMapping("/getThumbnailEncode/{fileId}")
  getBINFromThubnailId() {
    return this.http.get<{ bin: string }>(
      environment.URL_TOP_API +
        environment.host.ms_gateway.methods.getThumbnailEncode +
        this.user?.thumbnailFileId
    );
  }

  // getRecentPayments(): Observable<RecentPaymentsModels> {
  //   return this.http.get<RecentPaymentsModels>(
  //     environment.URL_BASE +
  //       environment.host.ms_gateway.methods.shoppingCartInfo,
  //   );
  // }

  // getInitials(): string {
  //   return this.user.initial1 + this.user.initial2;
  // }

  // getImgBIN(): string {
  //   if (!this.profileImgBIN) {
  //     return null;
  //   }
  //   return this.profileImgBIN;
  // }

  setImgBINtoNull() {
    this.profileImgBIN = null;
  }

  setUserData(userData: any) {
    sessionStorage.setItem(
      'userData',
      JSON.stringify({ ...userData, ...this.user })
    );
  }

  // getUserData(): any {
  //   return JSON.parse(sessionStorage.getItem('userData'));
  // }

  // setThirtyDaysAfterFirstLogin(hasPassed: boolean): void {
  //   this.thirtyDaysAfterFirstLogin = hasPassed;
  // }

  // getThirtyDaysAfterFirstLogin(): boolean {
  //   return this.thirtyDaysAfterFirstLogin;
  // }

  // getUpcomingPaymentsFiltersSetup(): Observable<UpcomingPaymentsFiltersSetup> {
  //   return this.http.get<UpcomingPaymentsFiltersSetup>(
  //     environment.URL_INVOICES +
  //       environment.host.invoices.methods.upcomingPaymentsV2FiltersSetup,
  //   );
  // }
  // getWorksheetForContractorSetup(): Observable<boolean> {
  //   return this.http.get<boolean>(
  //     environment.URL_TIMESHEET +
  //       environment.host.timeSheet.methods.contractorNewExp,
  //   );
  // }
  // setPaymentExperienceSetup(
  //   upcomingPaymentsFiltersSetup: UpcomingPaymentsFiltersSetup,
  // ): void {
  //   this._upcomingPaymentsFiltersSetup = upcomingPaymentsFiltersSetup;
  //   this.refreshUpcomingPaymentsFiltersSetup.next(true);
  // }

  // getPaymentExperienceSetup(): UpcomingPaymentsFiltersSetup {
  //   return this._upcomingPaymentsFiltersSetup;
  // }

  // getClientInformation(): ServerResponse<ClientDTO> {
  //   const resource = environment.host.ms_gateway.methods.clientInformation;
  //   const url = environment.URL_TOP_API + resource;

  //   return this.http
  //     .get(url, { observe: 'response' })
  //     .pipe(
  //       map(httpSuccessfulHandler<ClientDTO>()),
  //       catchError(httpErrorHandler()),
  //     );
  // }

  // changeNotificationStatus(): Observable<ChangeNotificationResponse> {
  //   return this.http.post<ChangeNotificationResponse>(
  //     environment.URL_TOP_API +
  //       environment.host.ms_gateway.methods.com_check_kyb +
  //       '/' +
  //       environment.host.ms_gateway.methods.changeNotificationStatus,
  //     {},
  //   );
  // }

  isClient(role?: UserRoles | string): boolean {
    if (role === undefined) {
      return this.getUserLogedInfo() === RoleEnum.roles.ROLE_CLIENT_ADMIN.desc;
    }

    return role === RoleEnum.roles.ROLE_CLIENT_ADMIN.desc;
  }

  isContractor(role?: UserRoles | string): boolean {
    if (role === undefined) {
      return this.getUserLogedInfo() === RoleEnum.roles.ROLE_CONTRACTOR.desc;
    }

    return role === RoleEnum.roles.ROLE_CONTRACTOR.desc;
  }

  // isIndividualContractor(type?: string): boolean {
  //   if (type === undefined) {
  //     const userDataTopUser = this.getSetUserInfoTopUser();

  //     return (
  //       userDataTopUser &&
  //       userDataTopUser.contractor_type === ContractorTypeEnum.INDIVIDUAL
  //     );
  //   }

  //   return type === ContractorTypeEnum.INDIVIDUAL;
  // }
}
