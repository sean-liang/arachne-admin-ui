import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScriptTargetPipeInputComponent } from './script-target-pipe-input.component';

describe('ScriptTargetPipeInputComponent', () => {
  let component: ScriptTargetPipeInputComponent;
  let fixture: ComponentFixture<ScriptTargetPipeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScriptTargetPipeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScriptTargetPipeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
