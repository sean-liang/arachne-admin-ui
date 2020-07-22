import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { UsersEditComponent } from './edit/edit.component';
import { UsersListComponent } from './list/list.component';
import { UsersRoutingModule } from './users-routing.module';

const COMPONENTS = [UsersListComponent];
const COMPONENTS_NOROUNT = [UsersEditComponent];

@NgModule({
  imports: [SharedModule, UsersRoutingModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class UsersModule {}
