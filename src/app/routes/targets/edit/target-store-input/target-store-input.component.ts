import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DictionaryService } from '../../../../core/dictionary/dictionary.service';

@Component({
  selector: 'app-target-store-input',
  templateUrl: './target-store-input.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TargetStoreInputComponent),
      multi: true,
    },
  ],
})
export class TargetStoreInputComponent implements ControlValueAccessor, OnInit {
  storeOptions = this.dict.getItemsAsLabeledEnum('target.store');

  storeForm = this.fb.group({
    type: [''],
    variables: [{}],
  });

  disabled = false;
  onChange = (val: any) => {};
  onTouched = () => {};

  constructor(private fb: FormBuilder, private dict: DictionaryService) {}

  ngOnInit(): void {
    this.storeForm.valueChanges.subscribe((val) => {
      const data = { ...val.variables, type: val.type };
      this.onChange(data);
      this.onTouched();
    });
  }

  writeValue(obj: any): void {
    if (obj && obj.type) {
      const variables = { ...obj };
      delete variables.type;
      this.storeForm.controls.type.setValue(obj.type);
      this.storeForm.controls.variables.patchValue(variables);
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
    isDisabled ? this.storeForm.disable({ emitEvent: false }) : this.storeForm.enable({ emitEvent: false });
  }

  onTypeChange(val: string) {
    this.storeForm.controls.variables.setValue({});
  }
}
