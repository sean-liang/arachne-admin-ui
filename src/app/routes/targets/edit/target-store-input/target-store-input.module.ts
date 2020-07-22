import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { MongoDocumentTargetStoreInputComponent } from './mongo-document-target-store-input/mongo-document-target-store-input.component';
import { TargetStoreInputComponent } from './target-store-input.component';

const COMPONENTS = [TargetStoreInputComponent, MongoDocumentTargetStoreInputComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule],
  exports: [...COMPONENTS],
})
export class TargetStoreInputModule {}
