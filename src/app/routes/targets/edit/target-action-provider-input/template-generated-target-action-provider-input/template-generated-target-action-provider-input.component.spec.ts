import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateGeneratedTargetActionProviderInputComponent } from './template-generated-target-action-provider-input.component';

describe('TemplateGeneratedTargetActionProviderInputComponent', () => {
  let component: TemplateGeneratedTargetActionProviderInputComponent;
  let fixture: ComponentFixture<TemplateGeneratedTargetActionProviderInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [TemplateGeneratedTargetActionProviderInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateGeneratedTargetActionProviderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
