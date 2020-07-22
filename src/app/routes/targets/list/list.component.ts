import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STPage, STReq, STRes } from '@delon/abc/st';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { DictionaryService } from '../../../core/dictionary/dictionary.service';
import { TargetsEditComponent } from '../edit/edit.component';
import { TargetsViewComponent } from '../view/view.component';

@Component({
  selector: 'app-targets-list',
  templateUrl: './list.component.html',
})
export class TargetsListComponent implements OnInit {
  url = 'targets/';

  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: 'Name', index: 'name' },
    { title: 'Weight', type: 'number', index: 'weight' },
    { title: 'Status', type: 'tag', index: 'status', tag: this.dict.getItemsAsTag('target.status') },
    { title: 'Repetition', type: 'tag', index: 'repetition', tag: this.dict.getItemsAsTag('target.repetition') },
    { title: 'Retry Strategy', type: 'tag', index: 'retryStrategy', tag: this.dict.getItemsAsTag('target.retryStrategy') },
    { title: 'Action Provider', type: 'tag', index: 'actionprovider.type', tag: this.dict.getItemsAsTag('target.actionprovider') },
    { title: 'Store', type: 'tag', index: 'store.type', tag: this.dict.getItemsAsTag('target.store') },
    {
      title: '',
      buttons: [
        { text: 'View', type: 'modal', modal: { component: TargetsViewComponent } },
        { text: 'Edit', type: 'link', click: (record) => `/targets/edit/${record.id}` },
        {
          text: 'Delete',
          type: 'del',
          pop: 'Remove worker?',
          click: (record, modal, comp) => {
            this.http.delete(this.url + record.id).subscribe(() => {
              comp.removeRow(record);
              this.msgSrv.success(`Target ${record.name} removed.`);
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

  reload() {
    this.st.reload();
  }
}
