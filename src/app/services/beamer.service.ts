import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AdminService } from './admin.service';
// import { ThirdPartyScriptService } from './third-party-script.service';

@Injectable({
  providedIn: 'root',
})
export class BeamerService {
  isBeamerButtonActive: BehaviorSubject<boolean> = new BehaviorSubject(false);
  beamerStorageCache: Record<string, string> = {};

  constructor(
    // private scriptService: ThirdPartyScriptService,
    private adminService: AdminService
  ) {}

  loadBeamer() {
    this.adminService.getByToken().subscribe(({ id }) => {
      this.configureBeamer(id);
      this.initializeBeamer();
    });
  }

  removeBeamer() {
    // @ts-ignore
    window.Beamer.destroy();
  }

  cacheBeamerStorage() {
    this.beamerStorageCache = Object.keys(localStorage)
      .filter((key) => key.startsWith('_BEAMER'))
      .reduce(
        (acc, beamerKey) => ({
          ...acc,
          [beamerKey]: localStorage.getItem(beamerKey),
        }),
        {}
      );
  }

  saveBeamerStorage() {
    Object.keys(this.beamerStorageCache).forEach((key) =>
      localStorage.setItem(key, this.beamerStorageCache[key])
    );
  }

  private configureBeamer(userId: number) {
    // @ts-ignore
    window.beamer_config = {
      product_id: 'XSGNfIpq42395',
      top: -8,
      right: -8,
      user_id: userId,
      multi_user: true,
      standalone: false,
      button: false,
      bounce: false,
      filter: this.adminService.getUserLogedInfo(),
    };
  }

  private initializeBeamer() {
    // @ts-ignore
    // if (window.Beamer) {
    //   // @ts-ignore
    //   window.Beamer.init();
    // } else {
    //   this.scriptService.loadScript(
    //     'https://app.getbeamer.com/js/beamer-embed.js',
    //   );
    // }
  }
}
