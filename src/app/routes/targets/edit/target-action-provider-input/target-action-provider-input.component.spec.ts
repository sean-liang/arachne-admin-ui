import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TargetActionProviderInputComponent } from './target-action-provider-input.component';

describe('TargetActionProviderInputComponent', () => {
  let component: TargetActionProviderInputComponent;
  let fixture: ComponentFixture<TargetActionProviderInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TargetActionProviderInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TargetActionProviderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
