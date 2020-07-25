import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-script-target-pipe-input',
  templateUrl: './script-target-pipe-input.component.html',
  styles: [],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ScriptTargetPipeInputComponent),
      multi: true,
    },
  ],
})
export class ScriptTargetPipeInputComponent implements OnInit {
  form = this.fb.group({
    content: [
      `{
    initialize: function() { },
    destroy: function() { },
    proceed: function(stream, feedback, context) {
      throw new DropFeedbackException();
    }
}`,
    ],
  });

  codeMirrorOptions = {
    lineNumbers: true,
    theme: 'material',
    mode: 'javascript',
  };

  disabled = false;

  constructor(private fb: FormBuilder) {}

  onChange = (val: any) => {};
  onTouched = () => {};

  ngOnInit(): void {
    this.form.valueChanges.subscribe((val) => {
      this.onChange(val);
      console.log(val);
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
