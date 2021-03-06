import { HttpClient } from '@angular/common/http';
import { Inject, Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { ACLService } from '@delon/acl';
import { DA_SERVICE_TOKEN, ITokenService } from '@delon/auth';
import { ALAIN_I18N_TOKEN, MenuService, SettingsService, TitleService } from '@delon/theme';
import { TranslateService } from '@ngx-translate/core';
import { zip } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { I18NService } from '../i18n/i18n.service';

import { NzIconService } from 'ng-zorro-antd/icon';
import { ICONS } from '../../../style-icons';
import { ICONS_AUTO } from '../../../style-icons-auto';

import { APP_DATA } from '../../shared/data/app-data';
import { I18N_EN_US } from '../../shared/data/i18n/en-US';
import { MENU_DATA } from '../../shared/data/menu-data';

/**
 * Used for application startup
 * Generally used to get the basic data of the application, like: Menu Data, User Data, etc.
 */
@Injectable()
export class StartupService {
  constructor(
    iconSrv: NzIconService,
    private menuService: MenuService,
    private translate: TranslateService,
    @Inject(ALAIN_I18N_TOKEN) private i18n: I18NService,
    private settingService: SettingsService,
    private aclService: ACLService,
    private titleService: TitleService,
    @Inject(DA_SERVICE_TOKEN) private tokenService: ITokenService,
    private httpClient: HttpClient,
    private injector: Injector,
  ) {
    iconSrv.addIcon(...ICONS_AUTO, ...ICONS);
  }

  // private viaHttp(resolve: any, reject: any) {
  //   zip(this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`), this.httpClient.get('assets/tmp/app-data.json'))
  //     .pipe(
  //       catchError((res) => {
  //         console.warn(`StartupService.load: Network request failed`, res);
  //         resolve(null);
  //         return [];
  //       }),
  //     )
  //     .subscribe(
  //       ([langData, appData]) => {
  //         // Setting language data
  //         this.translate.setTranslation(this.i18n.defaultLang, langData);
  //         this.translate.setDefaultLang(this.i18n.defaultLang);

  //         // Application data
  //         const res: any = appData;
  //         // Application information: including site name, description, year
  //         this.settingService.setApp(res.app);
  //         // User information: including name, avatar, email address
  //         this.settingService.setUser(res.user);
  //         // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
  //         this.aclService.setFull(true);
  //         // Menu data, https://ng-alain.com/theme/menu
  //         this.menuService.add(res.menu);
  //         // Can be set page suffix title, https://ng-alain.com/theme/title
  //         this.titleService.suffix = res.app.name;
  //       },
  //       () => {},
  //       () => {
  //         resolve(null);
  //       },
  //     );
  // }

  // private viaMockI18n(resolve: any, reject: any) {
  //   this.httpClient.get(`assets/tmp/i18n/${this.i18n.defaultLang}.json`).subscribe((langData) => {
  //     this.translate.setTranslation(this.i18n.defaultLang, langData);
  //     this.translate.setDefaultLang(this.i18n.defaultLang);

  //     this.viaMock(resolve, reject);
  //   });
  // }

  // private viaMock(resolve: any, reject: any) {
  //   // const tokenData = this.tokenService.get();
  //   // if (!tokenData.token) {
  //   //   this.injector.get(Router).navigateByUrl('/passport/login');
  //   //   resolve({});
  //   //   return;
  //   // }
  //   // mock
  //   const app: any = {
  //     name: `ng-alain`,
  //     description: `Ng-zorro admin panel front-end framework`,
  //   };
  //   const user: any = {
  //     name: 'Admin',
  //     avatar: './assets/tmp/img/avatar.jpg',
  //     email: 'cipchk@qq.com',
  //     token: '123456789',
  //   };
  //   // Application information: including site name, description, year
  //   this.settingService.setApp(app);
  //   // User information: including name, avatar, email address
  //   this.settingService.setUser(user);
  //   // ACL: Set the permissions to full, https://ng-alain.com/acl/getting-started
  //   this.aclService.setFull(true);
  //   // Menu data, https://ng-alain.com/theme/menu
  //   this.menuService.add([
  //     {
  //       text: 'Main',
  //       group: true,
  //       children: [
  //         {
  //           text: 'Dashboard',
  //           link: '/dashboard',
  //           icon: { type: 'icon', value: 'appstore' },
  //         },
  //         {
  //           text: 'Quick Menu',
  //           icon: { type: 'icon', value: 'rocket' },
  //           shortcutRoot: true,
  //         },
  //       ],
  //     },
  //   ]);
  //   // Can be set page suffix title, https://ng-alain.com/theme/title
  //   this.titleService.suffix = app.name;

  //   resolve({});
  // }

  private loadStaticData() {
    this.translate.setTranslation(this.i18n.defaultLang, I18N_EN_US);
    this.translate.setDefaultLang(this.i18n.defaultLang);

    this.settingService.setApp(APP_DATA);
    this.aclService.setFull(true);
    this.menuService.add(MENU_DATA);
    this.titleService.suffix = APP_DATA.name;
  }

  private loadUser(resolve: any, reject: any) {
    this.httpClient.get<any>('users/current').subscribe((user) => {
      this.settingService.setUser({
        name: user.username,
      });
    });
    resolve({});
  }

  load(): Promise<any> {
    // only works with promises
    // https://github.com/angular/angular/issues/15088
    return new Promise((resolve, reject) => {
      // http
      // this.viaHttp(resolve, reject);
      // mock：请勿在生产环境中这么使用，viaMock 单纯只是为了模拟一些数据使脚手架一开始能正常运行
      this.loadStaticData();
      this.loadUser(resolve, reject);
    });
  }
}
