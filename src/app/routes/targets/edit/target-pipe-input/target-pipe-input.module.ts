import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from '@shared';

import { AttachUpdateTimestampTargetPipeInputComponent } from './attach-update-timestamp-target-pipe-input/attach-update-timestamp-target-pipe-input.component';
import { ScriptTargetPipeInputComponent } from './script-target-pipe-input/script-target-pipe-input.component';
import { TargetPipeInputComponent } from './target-pipe-input.component';

const COMPONENTS = [TargetPipeInputComponent, AttachUpdateTimestampTargetPipeInputComponent, ScriptTargetPipeInputComponent];

@NgModule({
  declarations: [...COMPONENTS],
  imports: [CommonModule, SharedModule],
  exports: [...COMPONENTS],
})
export class TargetPipeInputModule {}
