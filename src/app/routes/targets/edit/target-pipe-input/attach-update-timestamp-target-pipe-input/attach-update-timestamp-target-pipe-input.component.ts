import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DictionaryService } from '../../../../../core/dictionary/dictionary.service';

@Component({
  selector: 'app-attach-update-timestamp-target-pipe-input',
  templateUrl: './attach-update-timestamp-target-pipe-input.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => AttachUpdateTimestampTargetPipeInputComponent),
      multi: true,
    },
  ],
})
export class AttachUpdateTimestampTargetPipeInputComponent implements OnInit {
  form = this.fb.group({
    field: [''],
    indexed: [false],
    ascending: [true],
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
