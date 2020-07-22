import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DictionaryService } from '../../../../core/dictionary/dictionary.service';

@Component({
  selector: 'app-target-action-provider-input',
  templateUrl: './target-action-provider-input.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TargetActionProviderInputComponent),
      multi: true,
    },
  ],
})
export class TargetActionProviderInputComponent implements ControlValueAccessor, OnInit {
  providerOptions = this.dict.getItemsAsLabeledEnum('target.actionprovider');

  providerForm = this.fb.group({
    type: [''],
    variables: [{}],
  });

  disabled = false;
  onChange = (val: any) => {};
  onTouched = () => {};

  constructor(private fb: FormBuilder, private dict: DictionaryService) {}

  ngOnInit(): void {
    this.providerForm.valueChanges.subscribe((val) => {
      const data = { ...val.variables, type: val.type };
      this.onChange(data);
      this.onTouched();
    });
  }

  writeValue(obj: any): void {
    if (obj && obj.type) {
      const variables = { ...obj };
      delete variables.type;
      this.providerForm.controls.type.setValue(obj.type);
      this.providerForm.controls.variables.patchValue(variables);
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
    isDisabled ? this.providerForm.disable({ emitEvent: false }) : this.providerForm.enable({ emitEvent: false });
  }

  onTypeChange(val: string) {
    this.providerForm.controls.variables.setValue({});
  }
}
