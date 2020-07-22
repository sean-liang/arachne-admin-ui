import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DictionaryService } from '../../../../../core/dictionary/dictionary.service';

@Component({
  selector: 'app-template-generated-target-action-provider-input',
  templateUrl: './template-generated-target-action-provider-input.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TemplateGeneratedTargetActionProviderInputComponent),
      multi: true,
    },
  ],
})
export class TemplateGeneratedTargetActionProviderInputComponent implements ControlValueAccessor, OnInit {
  URL_TEMPLATE_PLACEHOLDER = '{{}}';

  httpMethodOptions = this.dict.getItemsAsLabeledEnum('httpMethod');

  form = this.fb.group({
    template: this.fb.group({
      method: ['GET'],
      headers: [[]],
      url: [''],
      body: [''],
    }),
    start: [0],
    end: [0],
    step: [1],
  });
  disabled = false;
  onChange = (val: any) => {};
  onTouched = () => {};

  constructor(private fb: FormBuilder, private dict: DictionaryService) {}

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
