import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-mongo-document-target-store-input',
  templateUrl: './mongo-document-target-store-input.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => MongoDocumentTargetStoreInputComponent),
      multi: true,
    },
  ],
})
export class MongoDocumentTargetStoreInputComponent implements ControlValueAccessor, OnInit {
  form = this.fb.group({
    collection: [''],
    idField: [''],
  });
  disabled = false;
  onChange = (val: any) => {};
  onTouched = () => {};

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((val) => {
      this.onChange(val);
      this.onTouched();
    });
  }

  writeValue(obj: any): void {
    if (obj) {
      this.form.patchValue(obj);
    }
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    isDisabled ? this.form.disable({ emitEvent: false }) : this.form.enable({ emitEvent: false });
  }
}
