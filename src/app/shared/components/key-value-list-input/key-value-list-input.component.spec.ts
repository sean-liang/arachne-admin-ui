import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeyValueListInputComponent } from './key-value-list-input.component';

describe('KeyValueListInputComponent', () => {
  let component: KeyValueListInputComponent;
  let fixture: ComponentFixture<KeyValueListInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeyValueListInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeyValueListInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
