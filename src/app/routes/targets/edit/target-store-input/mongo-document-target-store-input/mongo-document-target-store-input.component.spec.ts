import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MongoDocumentTargetStoreInputComponent } from './mongo-document-target-store-input.component';

describe('MongoDocumentTargetStoreInputComponent', () => {
  let component: MongoDocumentTargetStoreInputComponent;
  let fixture: ComponentFixture<MongoDocumentTargetStoreInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MongoDocumentTargetStoreInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MongoDocumentTargetStoreInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
