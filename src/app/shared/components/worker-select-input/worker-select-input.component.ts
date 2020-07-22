import { Component, forwardRef, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';
import { _HttpClient } from '@delon/theme';

@Component({
  selector: 'app-worker-select-input',
  templateUrl: './worker-select-input.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => WorkerSelectInputComponent),
      multi: true,
    },
  ],
})
export class WorkerSelectInputComponent implements ControlValueAccessor, OnInit {
  @Input()
  required = false;

  workerForm = this.fb.control([[]]);
  disabled = false;
  workerSummary = [];
  avaliableWorkers = [];
  onChange = (list: []) => {};
  onTouched = () => {};

  constructor(public http: _HttpClient, private fb: FormBuilder) {}

  ngOnInit(): void {
    this.http.get('workers/names/').subscribe((list) => {
      this.workerSummary = list;
      this.avaliableWorkers = list;
    });
    this.workerForm.valueChanges.subscribe((val) => {
      this.onChange(val);
      this.onTouched();
    });
  }

  writeValue(obj: any): void {
    this.workerForm.patchValue(obj);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    this.disabled = isDisabled;
    isDisabled ? this.workerForm.disable({ emitEvent: false }) : this.workerForm.enable({ emitEvent: false });
  }

  onSearch(value: string) {
    if (!value) {
      this.avaliableWorkers = this.workerSummary;
      return;
    }
    const k = value.trim();
    this.avaliableWorkers = this.workerSummary.filter((item) => {
      if (item.name.includes(k)) {
        return true;
      }
      if (item.tags && item.tags.length && item.tags.length > 0) {
        for (const tag of item.tags) {
          if (tag.includes(k)) {
            return true;
          }
        }
      }
      return false;
    });

    console.log(this.avaliableWorkers);
  }
}
