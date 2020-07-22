import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STPage, STReq, STRes } from '@delon/abc/st';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DictionaryService } from '../../../core/dictionary/dictionary.service';
import { WorkersEditComponent } from '../edit/edit.component';
import { WorkersViewComponent } from '../view/view.component';

@Component({
  selector: 'app-workers-list',
  templateUrl: './list.component.html',
})
export class WorkersListComponent implements OnInit {
  url = 'workers/';

  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: 'Name', index: 'name' },
    { title: 'Status', type: 'tag', index: 'status', tag: this.dict.getItemsAsTag('worker.status') },
    { title: 'Engine', type: 'tag', index: 'engine', tag: this.dict.getItemsAsTag('worker.engine') },
    { title: 'Tags', index: 'tags' },
    { title: 'Batch Size', type: 'number', index: 'batchSize' },
    { title: 'Last Request IP', index: 'lastRequestIp' },
    { title: 'Last Request Time', type: 'date', index: 'lastRequestAt', dateFormat: 'yyyy-MM-dd HH:mm' },
    {
      title: '',
      buttons: [
        { text: 'View', type: 'modal', modal: { component: WorkersViewComponent } },
        { text: 'Edit', type: 'modal', modal: { component: WorkersEditComponent }, click: 'reload' },
        {
          text: 'Delete',
          type: 'del',
          pop: 'Remove worker?',
          click: (record, modal, comp) => {
            this.http.delete(this.url + record.id).subscribe(() => {
              comp.removeRow(record);
              this.msgSrv.success(`Worker ${record.name} removed.`);
            });
          },
        },
      ],
    },
  ];
  stReq: STReq = {
    reName: { pi: 'page', ps: 'size' },
  };
  stRes: STRes = {
    reName: { total: 'totalElements', list: 'content' },
  };
  stPage: STPage = {
    zeroIndexed: true,
    show: true,
    total: true,
  };

  constructor(private http: _HttpClient, private modal: ModalHelper, private msgSrv: NzMessageService, public dict: DictionaryService) {}

  ngOnInit() {}

  add() {
    this.modal.createStatic(WorkersEditComponent, { i: { id: '' } }).subscribe(() => this.st.reload());
  }

  reload() {
    this.st.reload();
  }
}
