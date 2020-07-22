import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TargetsEditComponent } from './edit/edit.component';
import { TargetsListComponent } from './list/list.component';

const routes: Routes = [
  { path: '', redirectTo: 'list', pathMatch: 'full' },
  { path: 'list', component: TargetsListComponent },
  { path: 'edit/:id', component: TargetsEditComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TargetsRoutingModule {}
