import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { AttachUpdateTimestampTargetPipeInputComponent } from './attach-update-timestamp-target-pipe-input/attach-update-timestamp-target-pipe-input.component';
import { TargetPipeInputComponent } from './target-pipe-input.component';

const COMPONENTS = [TargetPipeInputComponent];

@NgModule({
  declarations: [...COMPONENTS, AttachUpdateTimestampTargetPipeInputComponent],
  imports: [CommonModule, SharedModule],
  exports: [...COMPONENTS],
})
export class TargetPipeInputModule {}
