import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DictionaryService } from '../../../core/dictionary/dictionary.service';

@Component({
  selector: 'app-targets-edit',
  templateUrl: './edit.component.html',
})
export class TargetsEditComponent implements OnInit {
  URL_TEMPLATE_PLACEHOLDER = '{{}}';

  target: any = { id: '' };

  targetForm = this.fb.group({
    name: [''],
    weight: [100],
    repetition: ['NEVER'],
    repetitionConfig: [''],
    cancelPrevious: [true],
    retryStrategy: ['NEVER'],
    retries: [1],
    workers: [[]],
    pipes: [[]],
    provider: [{}],
    store: [{}],
  });

  repetitionOptions = this.dict.getItemsAsLabeledEnum('target.repetition');
  retryStrategyOptions = this.dict.getItemsAsLabeledEnum('target.retryStrategy');
  ready = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cdr: ChangeDetectorRef,
    private fb: FormBuilder,
    private msgSrv: NzMessageService,
    public http: _HttpClient,
    public dict: DictionaryService,
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.target.id = id === '_' ? null : id;

    if (this.target.id) {
      this.http.get(`targets/${this.target.id}`).subscribe((res) => {
        this.cdr.detach();
        this.targetForm.patchValue(res);
        this.target = res;
        this.ready = true;
        this.cdr.reattach();
      });
    } else {
      this.ready = true;
    }
  }

  onRepetitionChanged(val) {
    if (val === 'INTERVAL') {
      this.targetForm.controls.repetitionConfig.setValue('60');
    } else if (val === 'CRON') {
      this.targetForm.controls.repetitionConfig.setValue('0 0 0 * * * *');
    } else {
      this.targetForm.controls.repetitionConfig.setValue('');
    }
  }

  save() {
    console.log(this.targetForm.value);
    if (!this.targetForm.valid) {
      this.msgSrv.error('There are errors in the form.');
      return;
    }
    const action = this.target.id
      ? this.http.put(`targets/${this.target.id}`, this.targetForm.value)
      : this.http.post('targets/', this.targetForm.value);
    action.subscribe((res) => {
      this.msgSrv.success('Target Saved.');
      this.gotoList();
    });
  }

  gotoList() {
    this.router.navigateByUrl('/targets/list');
  }
}
