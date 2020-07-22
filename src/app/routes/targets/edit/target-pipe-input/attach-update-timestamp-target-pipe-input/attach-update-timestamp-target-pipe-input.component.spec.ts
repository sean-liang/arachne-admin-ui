import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachUpdateTimestampTargetPipeInputComponent } from './attach-update-timestamp-target-pipe-input.component';

describe('AttachUpdateTimestampTargetPipeInputComponent', () => {
  let component: AttachUpdateTimestampTargetPipeInputComponent;
  let fixture: ComponentFixture<AttachUpdateTimestampTargetPipeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachUpdateTimestampTargetPipeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachUpdateTimestampTargetPipeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
