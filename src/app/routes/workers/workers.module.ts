import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { WorkersEditComponent } from './edit/edit.component';
import { WorkersListComponent } from './list/list.component';
import { WorkersViewComponent } from './view/view.component';
import { WorkersRoutingModule } from './workers-routing.module';

const COMPONENTS = [
  WorkersListComponent];
const COMPONENTS_NOROUNT = [
  WorkersEditComponent,
  WorkersViewComponent];

@NgModule({
  imports: [
    SharedModule,
    WorkersRoutingModule
  ],
  declarations: [
    ...COMPONENTS,
    ...COMPONENTS_NOROUNT
  ],
})
export class WorkersModule { }
