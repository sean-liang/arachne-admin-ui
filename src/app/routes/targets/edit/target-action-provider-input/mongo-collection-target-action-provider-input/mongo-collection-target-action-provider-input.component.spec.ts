import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoCollectionTargetActionProviderInputComponent } from './mongo-collection-target-action-provider-input.component';

describe('MongoCollectionTargetActionProviderInputComponent', () => {
  let component: MongoCollectionTargetActionProviderInputComponent;
  let fixture: ComponentFixture<MongoCollectionTargetActionProviderInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MongoCollectionTargetActionProviderInputComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoCollectionTargetActionProviderInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
