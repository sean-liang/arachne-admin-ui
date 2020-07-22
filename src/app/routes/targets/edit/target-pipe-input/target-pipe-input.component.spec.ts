import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetPipeInputComponent } from './target-pipe-input.component';

describe('TargetPipeInputComponent', () => {
  let component: TargetPipeInputComponent;
  let fixture: ComponentFixture<TargetPipeInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetPipeInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetPipeInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
