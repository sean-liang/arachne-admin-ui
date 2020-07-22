import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormArray, FormBuilder, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';
import { DictionaryService } from '../../../../core/dictionary/dictionary.service';

@Component({
  selector: 'app-target-pipe-input',
  templateUrl: './target-pipe-input.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => TargetPipeInputComponent),
      multi: true,
    },
  ],
})
export class TargetPipeInputComponent implements ControlValueAccessor, OnInit {
  pipeOptions = this.dict.getItemsAsLabeledEnum('target.pipe');

  pipesForm = this.fb.group({
    pipes: this.fb.array([]),
  });

  disabled = false;
  onChange = (val: any) => {};
  onTouched = () => {};

  constructor(private fb: FormBuilder, private dict: DictionaryService) {}

  ngOnInit(): void {
    this.pipesForm.valueChanges.subscribe((val) => {
      const items = [];
      val.pipes.forEach((p) => {
        if (p.type) {
          items.push({ ...p.variables, type: p.type });
        }
      });
      this.onChange(items);
      this.onTouched();
    });
  }

  list(): FormArray {
    return this.pipesForm.get('pipes') as FormArray;
  }

  writeValue(obj: any): void {
    if (obj && obj.length && obj.forEach) {
      obj.forEach((item) => {
        const data = { type: item.type, variables: item };
        delete data.variables.type;
        this.list().push(this.fb.group(data));
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
    isDisabled ? this.pipesForm.disable({ emitEvent: false }) : this.pipesForm.enable({ emitEvent: false });
  }

  addItem() {
    this.list().push(
      this.fb.group({
        type: [''],
        variables: [{}],
      }),
    );
  }

  removeItem(index: number) {
    this.list().removeAt(index);
  }

  onTypeChange(group: FormGroup, val: string) {
    group.controls.variables.setValue({});
  }
}
