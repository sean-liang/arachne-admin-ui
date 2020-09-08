import { Component, OnInit } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';
import { DictionaryService } from '../../../core/dictionary/dictionary.service';

@Component({
  selector: 'app-workers-edit',
  templateUrl: './edit.component.html',
})
export class WorkersEditComponent implements OnInit {
  record: any = {};
  i: any;
  schema: SFSchema = {
    properties: {
      name: { type: 'string', title: 'Name' },
      protocol: {
        type: 'string',
        title: 'Protocol',
        default: 'HTTP',
        enum: this.dict.getItemsAsLabeledEnum('worker.protocol'),
        ui: { widget: 'select' },
      },
      status: {
        type: 'string',
        title: 'Status',
        default: 'NORMAL',
        enum: this.dict.getItemsAsLabeledEnum('worker.status'),
        ui: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid',
        },
      },
      managed: { type: 'boolean', title: 'Managed', default: true},
      batchSize: {
        type: 'number', 
        title: 'Batch Size', 
        minimum: 1, 
        maximum: 100, 
        default: 10,
        ui: {
          visibleIf: {managed: [true]}
        }
      },
      tags: {
        type: 'string',
        title: 'Tags',
        ui: {
          widget: 'select',
          mode: 'tags',
          asyncData: () => this.http.get('workers/tags'),
        },
      },
    },
    required: ['name', 'protocol', 'status', 'batchSize'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
    $name: {
      grid: { span: 24 },
    },
    $tags: {
      grid: { span: 24 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient, public dict: DictionaryService) {}

  ngOnInit(): void {
    if (this.record.id) {
      this.http.get(`workers/${this.record.id}`).subscribe((res) => (this.i = res));
    }
  }

  save(value: any) {
    const action = this.record.id ? this.http.put(`workers/${this.record.id}`, value) : this.http.post('workers/', value);
    action.subscribe((res) => {
      this.msgSrv.success('Worker Saved.');
      this.modal.close(true);
    });
  }

  close() {
    this.modal.destroy();
  }
}
