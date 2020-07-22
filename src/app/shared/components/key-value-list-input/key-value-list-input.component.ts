import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-key-value-list-input',
  templateUrl: './key-value-list-input.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => KeyValueListInputComponent),
      multi: true,
    },
  ],
})
export class KeyValueListInputComponent implements ControlValueAccessor, OnInit {
  @Input()
  fieldname: string;

  form = this.fb.group({
    list: this.fb.array([]),
  });
  disabled = false;
  onChange = (list: []) => {};
  onTouched = () => {};

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form.valueChanges.subscribe((val) => {
      this.onChange(val.list);
      this.onTouched();
    });
  }

  list(): FormArray {
    return this.form.get('list') as FormArray;
  }

  writeValue(obj: any): void {
    if (obj && obj.length && obj.forEach) {
      obj.forEach((item) => {
        this.list().push(
          this.fb.group({
            key: [item.key],
            value: [item.value],
          }),
        );
      });
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

  addItem() {
    this.list().push(
      this.fb.group({
        key: [''],
        value: [''],
      }),
    );
  }

  removeItem(index: number) {
    this.list().removeAt(index);
  }

  // notify() {
  //   setTimeout(() => {
  //     this.onChange(this.list().value);
  //     this.onTouched();
  //   });
  // }
}
