import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { MongoCollectionTargetActionProviderInputComponent } from './mongo-collection-target-action-provider-input/mongo-collection-target-action-provider-input.component';
import { TargetActionProviderInputComponent } from './target-action-provider-input.component';
import { TemplateGeneratedTargetActionProviderInputComponent } from './template-generated-target-action-provider-input/template-generated-target-action-provider-input.component';

const COMPONENTS = [
  TargetActionProviderInputComponent,
  MongoCollectionTargetActionProviderInputComponent,
  TemplateGeneratedTargetActionProviderInputComponent,
];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule],
  exports: [...COMPONENTS],
})
export class TargetActionProviderInputModule {}
