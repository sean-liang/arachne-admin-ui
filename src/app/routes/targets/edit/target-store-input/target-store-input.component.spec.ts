import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetStoreInputComponent } from './target-store-input.component';

describe('TargetStoreInputComponent', () => {
  let component: TargetStoreInputComponent;
  let fixture: ComponentFixture<TargetStoreInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TargetStoreInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetStoreInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
