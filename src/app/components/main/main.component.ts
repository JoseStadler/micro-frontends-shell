import { Component, OnInit, OnDestroy } from '@angular/core';
import { SecurityService } from '@service/security.service';
import { NavigationEnd, Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin.service';
import { Notification } from 'src/app/models/notification.models';
import { UserInfoModel, UserRoles } from 'src/app/models/user-info.models';
// import { IntercomService } from '@service/intercom.service';
import { ContractorDto } from '@models/dto/contractor-dto.models';
import { AmendmentService } from '@service/amendment.service';
import { AmendmentPendigSign } from '@models/amendment/amend-pending-sign.models';
import { RouteResources } from '@util/routes';
import { filter, take } from 'rxjs/operators';
import { BeamerService } from '@service/beamer.service';
import {
  ContractorTypeEnum,
  ContractorUserTopUserModel,
} from '@models/user-top-user.model';
import { PlatformService } from '@platform/platform.service';
import { stepperCustom } from 'src/app/shared/animation/route-animation';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations: [stepperCustom],
})
export class MainComponent implements OnInit, OnDestroy {
  loading = false;
  userInfo: UserInfoModel | undefined;
  contractorDto!: ContractorDto;
  pendingNotificationsCount!: number;
  infoAmendmentPendingSign!: AmendmentPendigSign;
  userData: any;
  isContractor: boolean = false;
  navNotifications: any[] = [];
  isIndividualContractor = false;
  isShowStyleHiring: boolean = false;

  showVerificationAlert = true;

  constructor(
    // private intercomService: IntercomService,
    private router: Router,
    private adminService: AdminService,
    private amendmentService: AmendmentService,
    private beamerService: BeamerService,
    private platformService: PlatformService
  ) {}

  // get showVerificationNotification(): boolean {
  //   return (
  //     this.isContractor &&
  //     this.isIndividualContractor &&
  //     this.userData?.id &&
  //     this.showVerificationAlert
  //   );
  // }

  // private async loadPaymentExperienceSetup(): Promise<void> {
  //   this.getRouteActually();
  // }
  async ngOnInit() {
    this.userInfo = {
      disclaimerTaxesAcceptance: true,
      fileId: null,
      firstName: 'Kalpesh',
      hasActiveContract: true,
      initial1: 'K',
      initial2: 'T',
      lastName: 'Tank',
      name: 'kalpesh.ontop+1111@gmail.com',
      needsTaxDisclaimerAcceptance: true,
      nextPage: 'DASHBOARD',
      phoneNumber: '8585335555',
      plugandplayAdmin: false,
      role: UserRoles.Contractor,
      roles: ['ROLE_CONTRACTOR'],
      thumbnailFileId: null,
      urlAvatar: null,
    };
    // // right when the component initializes, start reset state and start watching
    // this.loadUserData();
    // this.adminService
    //   .findByOwnerId()
    //   .pipe(take(1))
    //   .subscribe((res) => {
    //     this.userData = res;
    //     this.adminService.setUserData(res);
    //     this.loadPaymentExperienceSetup();
    //   });

    // this.beamerService.loadBeamer();
  }

  // public getRouteActually() {
  //   this.validateRouteStylyHiring(this.router?.url);
  //   this.router.events
  //     .pipe(filter((event) => event instanceof NavigationEnd))
  //     .subscribe((event) => {
  //       this.validateRouteStylyHiring((event as NavigationEnd)?.url);
  //     });
  // }

  // public validateRouteStylyHiring(route: string) {
  //   this.isShowStyleHiring = route.includes(RouteResources?.newHire);
  // }

  ngOnDestroy() {
    //   this.beamerService.removeBeamer();
  }

  // logout() {
  //   // this.platformService.logout();
  // }

  // loadUserData() {
  //   this.userInfo = this.adminService.getUserLoged();
  //   if (this.userInfo) {
  //     const { role } = this.userInfo;
  //     this.isContractor = this.adminService.isContractor(role);

  //     if (this.isContractor) {
  //       this.adminService.getUserInfoTopUser().subscribe(
  //         (res: ContractorUserTopUserModel) => {
  //           this.adminService.setUserInfoTopUser(res);
  //           this.isIndividualContractor =
  //             res.contractor_type === ContractorTypeEnum.INDIVIDUAL;
  //         },
  //         (err: any) => console.error(err)
  //       );
  //     }

  //     // this.updateNotifications();
  //     if (this.userInfo.thumbnailFileId) {
  //       this.adminService.getBINFromThubnailId().subscribe(
  //         (res: { bin: string }) => {
  //           this.adminService.profileImgBIN = res.bin;
  //           this.getNotAmendmentPendingSign(this.userInfo!.role);
  //         },
  //         (err: any) => {
  //           console.log('IMG ERROR: ', err);
  //           this.getNotAmendmentPendingSign(this.userInfo!.role);
  //         }
  //       );
  //     } else {
  //       this.getNotAmendmentPendingSign(this.userInfo.role);
  //     }
  //     // this.intercomService.intercomUser(this.userInfo);
  //   } else {
  //     this.router.navigate(['/login']);
  //   }
  // }

  // // public updateNotifications() {
  // //   this.adminService
  // //     .getNotifications()
  // //     .subscribe((results: Notification[]) => {
  // //       this.navNotifications = results
  // //         .map((el: Notification) => {
  // //           return {
  // //             badge: false,
  // //             acronym: '',
  // //             avatar: '',
  // //             title: '',
  // //             description: el.message,
  // //             date: el.creationDate,
  // //           };
  // //         })
  // //         .slice(0, 5);
  // //       this.pendingNotificationsCount = results.filter(
  // //         (t) => !t.checked
  // //       ).length;
  // //     });
  // // }

  // public reviewNotification(not: Notification) {
  //   this.adminService.reviewNotification(not).subscribe(() => {
  //     // this.updateNotifications();
  //     switch (not.notificationTypeId) {
  //       case 1:
  //         this.router.navigateByUrl(
  //           RouteResources.contractor + RouteResources.contractList
  //         );
  //         break;
  //       case 3:
  //         this.router.navigateByUrl(
  //           `/${this.userInfo?.role.toLowerCase()}/verification-center`
  //         );
  //         break;
  //       case 4:
  //         this.router.navigateByUrl(
  //           RouteResources.contractor + RouteResources.contractList
  //         );
  //         break;

  //       default:
  //         this.router.navigateByUrl(
  //           `/${this.userInfo?.role.toLowerCase()}/home`
  //         );
  //         break;
  //     }
  //   });
  // }

  // getNotAmendmentPendingSign(TypeUser: string) {
  //   this.loading = true;
  //   this.amendmentService.getNotAmendmentPendingSign(TypeUser).subscribe(
  //     (res: AmendmentPendigSign) => {
  //       this.infoAmendmentPendingSign = res;
  //       this.loading = false;
  //     },
  //     (err) => {
  //       console.error(err);
  //       this.loading = false;
  //     }
  //   );
  // }
}
