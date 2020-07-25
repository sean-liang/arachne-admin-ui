import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DelonACLModule } from '@delon/acl';
import { DelonFormModule } from '@delon/form';
import { AlainThemeModule } from '@delon/theme';
import { TranslateModule } from '@ngx-translate/core';
import { NzBreadCrumbModule } from 'ng-zorro-antd/breadcrumb';
import { NzListModule } from 'ng-zorro-antd/list';
import { NzTransferModule } from 'ng-zorro-antd/transfer';
import { FanyiPipe } from './pipe/fanyi/fanyi.pipe';

import { SHARED_DELON_MODULES } from './shared-delon.module';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

// #region third libs
import { CodemirrorModule } from '@ctrl/ngx-codemirror';

const THIRDMODULES = [CodemirrorModule];

// #endregion

// #region your componets & directives
import { KeyValueListInputComponent } from './components/key-value-list-input/key-value-list-input.component';
import { WorkerSelectInputComponent } from './components/worker-select-input/worker-select-input.component';

const COMPONENTS = [WorkerSelectInputComponent, KeyValueListInputComponent];
const DIRECTIVES = [];
const PIPES = [FanyiPipe];

// #endregion

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    AlainThemeModule.forChild(),
    DelonACLModule,
    DelonFormModule,
    NzBreadCrumbModule,
    NzTransferModule,
    NzListModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
  ],
  declarations: [
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  exports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    AlainThemeModule,
    DelonACLModule,
    DelonFormModule,
    TranslateModule,
    NzBreadCrumbModule,
    NzTransferModule,
    NzListModule,
    ...SHARED_DELON_MODULES,
    ...SHARED_ZORRO_MODULES,
    // third libs
    ...THIRDMODULES,
    // your components
    ...COMPONENTS,
    ...DIRECTIVES,
    ...PIPES,
  ],
  providers: [...PIPES],
})
export class SharedModule {}
