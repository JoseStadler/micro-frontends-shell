import {
  AfterViewInit,
  Component,
  Input,
  OnInit,
  ViewChild,
} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { PermissionsEnum } from '@enumerations/permissions.enum';
import { RoleEnum } from '@enumerations/role.enum';
import { RouteResources } from '@util/routes';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.scss'],
})
// @AutoUnsubscribe()
export class Menu2Component implements AfterViewInit, OnInit {
  private isPlugAndPlayAdmin = false;
  @Input() avatar!: string;
  @Input() userInfo: any;
  @Input() navMobileItems: any[] = [];
  @Input() navItems: any[] = [];
  @Input() notifications: any[] = [];
  @Input() navUser: any[] = [];
  @Input() archive = true;
  @Input() pendingNotificationsCount = 0;
  // @ViewChild('dropDownNtf', { static: false, read: NgbDropdown })
  // dropDown: NgbDropdown;

  mobileToggle = false;
  userType!: string;
  url = '';
  alive = true;
  routeResources = RouteResources;
  isManager = false;
  isClient = false;
  isContractor = false;
  roleEnum = RoleEnum;
  generalInfoUser: any;
  upcomingPaymentsFiltersSetup: any;
  paymentExperienceSetupSubscription!: Subscription;

  constructor() {
    // private amplitudeService: AmplitudeService, // private managerService: ManagerService, // private location: Location, // private router: Router, // private adminService: AdminService, // public paymentV2Service: PaymentV2Service, // public app: MainComponent,
    // this.router.events
    //   .pipe(
    //     takeWhile(() => this.alive),
    //     filter((event) => event instanceof NavigationEnd),
    //   )
    //   .subscribe((event: NavigationEnd) => {
    //     this.url = event.url;
    //   });
    // this.adminService.approvNtfs.subscribe(() => {
    //   this.getRecentPayments();
    //   this.dropDown.open();
    //   setTimeout(() => {
    //     this.dropDown.close();
    //   }, 5000);
    // });
  }
  private buildNavigator(): void {
    this.navUser = [
      /* {
        label: 'Time-off',
        img: '',
        icon: 'alarm_off',
        routerLink: ['/' + this.userType + this.routeResources.timeOff],
        visible: this.isContractor,
        permission: PermisionsEnum.permissions.TIME.code,
        clickFn: null,
      }, */
      {
        label: 'Worksheets',
        img: '',
        icon: 'text_snippet',
        routerLink: ['/' + this.userType + this.routeResources.workSheet],
        permission: PermissionsEnum.permissions.TIME.code,
        visible: this.isContractor,
        clickFn: null,
      },
      {
        label: 'Invoices',
        img: '',
        icon: 'receipt',
        routerLink: ['/' + this.userType + this.routeResources.paymentTracking],
        visible: this.isContractor,
        permission: PermissionsEnum.permissions.PAYMENTS.code,
        clickFn: null,
      },
      {
        label: 'Users & permissions',
        img: '',
        icon: 'admin_panel_settings',
        visible: this.isClient,
        routerLink: ['/' + this.userType + this.routeResources.permissions],
        permission: PermissionsEnum.permissions.USERS_AND_PERMISSIONS.code,
        clickFn: null,
      },
      {
        label: 'Teams',
        img: '',
        icon: 'group_add',
        visible: this.isClient,
        routerLink: ['/' + this.userType + this.routeResources.teams],
        permission: PermissionsEnum.permissions.TEAMS.code,
        clickFn: null,
      },
    ];
    this.navItems = [
      {
        label: 'Wallet',
        img: '',
        active: 'transactions',
        icon: 'account_balance_wallet',
        visible: true,
        permission: PermissionsEnum.permissions.WALLET.code,
        routerLink: ['/wallet'],
        itemsVisible: false,
        items: [],
      },
      {
        label: 'Card',
        img: '',
        active: 'card',
        icon: 'credit_card',
        permission: PermissionsEnum.permissions.WALLET.code,
        visible: true,
        routerLink: ['/card'],
        itemsVisible: false,
        items: [],
      },
      {
        label: 'Contracts',
        img: '',
        active: 'contract/',
        icon: 'description',
        visible: true,
        permission: PermissionsEnum.permissions.CONTRACTS.code,
        routerLink: this.isContractor
          ? ['/' + this.userType + this.routeResources.contractList]
          : null,
        itemsVisible: this.isClient,
        items: [
          {
            label: 'New Hire',
            img: 'assets/build/img/hire.svg',
            icon: '',
            routerLink: ['/' + this.userType + this.routeResources.newHire],
            visible: this.isClient,
            permission: PermissionsEnum.permissions.NEW_HIRE.code,
          },
          {
            label: 'Contract List',
            img: 'assets/build/img/contracts.svg',
            icon: '',
            routerLink: [
              '/' + this.userType + this.routeResources.contractList,
            ],
            visible: true,
            permission: PermissionsEnum.permissions.CONTRACT_LIST.code,
          },
          {
            label: 'P&P Contracts',
            img: 'assets/build/img/contracts.svg',
            icon: '',
            routerLink: [
              '/' + this.userType + this.routeResources.plugAndPlayContractList,
            ],
            visible: this.isPlugAndPlayAdmin,
          },
        ],
      },
      // {
      //   label: 'Payments',
      //   img: '',
      //   icon: 'payments',
      //   visible: this.isClient,
      //   active: 'payout',
      //   permission: this.isClient
      //     ? PermissionsEnum.permissions.PAYMENTS.code
      //     : '',
      //   routerLink: null,
      //   itemsVisible: this.isClient,
      //   items: [
      //     {
      //       label: 'Pay Now',
      //       img: 'assets/build/img/payout.svg',
      //       icon: '',
      //       routerLink: [
      //         `/${this.userType}${
      //           this.upcomingPaymentsFiltersSetup.show
      //             ? this.routeResources.payNow
      //             : this.routeResources.payout
      //         }`,
      //       ],
      //       visible: this.isClient,
      //       permission: PermissionsEnum.permissions.PAYMENTS.code,
      //     },
      //     {
      //       label: 'Extra Payments',
      //       img: 'assets/build/img/payout.svg',
      //       icon: '',
      //       routerLink: [
      //         `/${this.userType}${this.routeResources.extraPayments}`,
      //       ],
      //       visible: this.isClient,
      //       permission: PermissionsEnum.permissions.PAYMENTS.code,
      //     },
      //     !this.upcomingPaymentsFiltersSetup.show && {
      //       label: 'Payment Approval',
      //       img: 'assets/build/img/payout.svg',
      //       icon: '',
      //       routerLink: [
      //         '/' + this.userType + this.routeResources.upcomingPayment,
      //       ],
      //       visible: this.isClient,
      //       permission: PermissionsEnum.permissions.PAYMENTS.code,
      //     },
      //     {
      //       label: 'Payment Setup',
      //       img: 'assets/build/img/time.svg',
      //       icon: '',
      //       routerLink: ['/' + this.userType + this.routeResources.payoutSetup],
      //       visible: this.isClient,
      //       permission: PermissionsEnum.permissions.PAYMENTS.code,
      //     },
      //     {
      //       label: 'Invoices',
      //       img: 'assets/build/img/payout.svg',
      //       icon: '',
      //       routerLink: [this.routeResources.clientInvoices],
      //       visible: this.isClient,
      //       permission: PermissionsEnum.permissions.PAYMENTS.code,
      //     },
      //   ].filter((option) => option),
      // },
      {
        label: 'Documents',
        img: '',
        icon: 'file_copy',
        active: 'documents',
        visible: true,
        permission: PermissionsEnum.permissions.DOCUMENTS.code,
        routerLink: this.isContractor ? ['/contractor/documents'] : null,
        itemsVisible: this.isClient,
        items: [
          {
            label: 'Documents',
            img: 'assets/build/img/contract.svg',
            icon: '',
            routerLink: ['/' + this.userType + this.routeResources.documents],
            visible: this.isClient,
            permission: PermissionsEnum.permissions.DOCUMENTS.code,
          },
          {
            label: 'Taxes',
            img: 'assets/build/img/taxes.svg',
            icon: '',
            routerLink: ['/' + this.userType + this.routeResources.taxes],
            visible: this.isClient,
            permission: PermissionsEnum.permissions.DOCUMENTS.code,
          },
        ],
      },
    ];
    this.navMobileItems = JSON.parse(JSON.stringify(this.navItems));
    this.navMobileItems.unshift({
      label: 'Notifications',
      img: '',
      icon: 'notifications',
      visible: true,
      permission: null,
      routerLink: ['/' + this.userType + this.routeResources.notifications],
      itemsVisible: false,
      items: [],
    });
    this.navMobileItems = this.navMobileItems.concat([
      // {
      //   label: 'Time-off',
      //   img: '',
      //   icon: 'alarm_off',
      //   routerLink: ['/' + this.userType + this.routeResources.timeOff],
      //   visible: this.isContractor,
      //   permission: PermisionsEnum.permissions.TIME.code,
      //   clickFn: null,
      // },
      {
        label: 'Worksheets',
        img: '',
        icon: 'text_snippet',
        routerLink: ['/' + this.userType + this.routeResources.workSheet],
        permission: PermissionsEnum.permissions.TIME.code,
        visible: this.isContractor,
        clickFn: null,
      },
      {
        label: 'Invoices',
        img: '',
        icon: 'receipt',
        routerLink: ['/' + this.userType + this.routeResources.paymentTracking],
        visible: this.isContractor,
        permission: PermissionsEnum.permissions.PAYMENTS.code,
        clickFn: null,
      },
      {
        label: 'Users & permissions',
        img: '',
        icon: 'admin_panel_settings',
        visible: this.isClient && !this.isManager,
        routerLink: ['/' + this.userType + this.routeResources.permissions],
        permission: PermissionsEnum.permissions.USERS_AND_PERMISSIONS.code,
        clickFn: null,
      },
      {
        label: 'Teams',
        img: '',
        icon: 'group_add',
        visible: this.isClient,
        routerLink: ['/' + this.userType + this.routeResources.teams],
        permission: PermissionsEnum.permissions.TEAMS.code,
        clickFn: null,
      },
    ]);
  }
  async ngAfterViewInit(): Promise<void> {
    // this.buildNavigator();
  }

  navPaynow() {
    // this.dropDown.close();
    // this.router.navigate([
    //   `/${this.userType}${
    //     this.upcomingPaymentsFiltersSetup.show
    //       ? this.routeResources.payNow
    //       : this.routeResources.payout
    //   }`,
    // ]);
  }
  ngOnInit() {
    this.buildNavigator();
    // this.isClient = this.userInfo.role === UserRoles.Client;
    // this.isManager = this.managerService.isManager(this.userInfo.roles);
    // this.isContractor = this.userInfo.role === UserRoles.Contractor;
    // this.userType = this.userInfo.role.toLowerCase();
    // this.avatar = this.adminService.getImgBIN();
    // this.isPlugAndPlayAdmin = this.userInfo.plugandplayAdmin;
    // this.paymentExperienceSetupSubscription =
    //   this.adminService.refreshUpcomingPaymentsFiltersSetup.subscribe(() => {
    //     this.upcomingPaymentsFiltersSetup =
    //       this.adminService.getPaymentExperienceSetup();
    //     this.buildNavigator();
    //   });
    // this.userValidation();
    // await this.getRecentPayments();
    // this.url = this.location.path();
    // this.avatar = this.adminService.getImgBIN();
  }
  /**
   * Validate user configuration.
   */
  userValidation() {
    // this.userInfo = this.adminService.getUserLoged();
    // this.generalInfoUser = this.adminService.getUserData();
    // this.isPlugAndPlayAdmin = this.userInfo.plugandplayAdmin;
  }

  async getRecentPayments() {
    // if (
    //   this.userInfo &&
    //   this.userInfo.role === RoleEnum.roles.ROLE_CONTRACTOR.desc
    // ) {
    //   return;
    // }
    // await this.paymentV2Service.getRecentPayments();
  }

  getInvoicesSubtotal(): number {
    // if (this.paymentV2Service.recentPaymentsApproved.length === 1) {
    //   return this.paymentV2Service.recentPaymentsApproved[0].total;
    // }
    let total = 0;
    // this.paymentV2Service.recentPaymentsApproved.forEach((item) => {
    //   total = total + item.total;
    // });
    return total;
  }
  readAll() {
    // this.adminService
    //   .readNotifications()
    //   .pipe(take(1))
    //   .subscribe(() => {
    //     this.app.updateNotifications();
    //   });
  }

  /**
   * Amplitude
   */
  navbarClick(navbar: any) {
    // if (navbar.label === 'Card') {
    //   this.amplitudeService.getInstance('CARD_HOME', 'Card Home');
    // }
  }
  logAmplitudeEvent(eventName: string) {
    // this.amplitudeService.getInstance(eventName, {});
  }
}
