import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';
import { TargetsEditComponent } from './edit/edit.component';
import { TargetActionProviderInputModule } from './edit/target-action-provider-input/target-action-provider-input.module';
import { TargetPipeInputModule } from './edit/target-pipe-input/target-pipe-input.module';
import { TargetStoreInputModule } from './edit/target-store-input/target-store-input.module';
import { TargetsListComponent } from './list/list.component';
import { TargetsRoutingModule } from './targets-routing.module';
import { TargetsViewComponent } from './view/view.component';

const COMPONENTS = [TargetsListComponent];
const COMPONENTS_NOROUNT = [TargetsEditComponent, TargetsViewComponent];

@NgModule({
  imports: [SharedModule, TargetsRoutingModule, TargetActionProviderInputModule, TargetStoreInputModule, TargetPipeInputModule],
  declarations: [...COMPONENTS, ...COMPONENTS_NOROUNT],
})
export class TargetsModule {}
