import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkerSelectInputComponent } from './worker-select-input.component';

describe('WorkerSelectInputComponent', () => {
  let component: WorkerSelectInputComponent;
  let fixture: ComponentFixture<WorkerSelectInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WorkerSelectInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WorkerSelectInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
