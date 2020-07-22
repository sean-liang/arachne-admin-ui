import { Component, OnInit, ViewChild } from '@angular/core';
import { STColumn, STComponent, STPage, STReq, STRes } from '@delon/abc/st';
import { ModalHelper, _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { UsersEditComponent } from '../edit/edit.component';

@Component({
  selector: 'app-users-list',
  templateUrl: './list.component.html',
})
export class UsersListComponent implements OnInit {
  url = 'users/';

  @ViewChild('st', { static: false }) st: STComponent;
  columns: STColumn[] = [
    { title: 'ID', index: 'id' },
    { title: 'Username', index: 'username' },
    {
      title: '',
      buttons: [
        {
          text: 'Delete',
          type: 'del',
          pop: 'Remove user?',
          click: (record, modal, comp) => {
            this.http.delete(this.url + record.id).subscribe(() => {
              comp.removeRow(record);
              this.msgSrv.success(`User ${record.username} removed.`);
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

  constructor(private http: _HttpClient, private modal: ModalHelper, private msgSrv: NzMessageService) {}

  ngOnInit() {}

  add() {
    this.modal.createStatic(UsersEditComponent).subscribe(() => this.st.reload());
  }

  reload() {
    this.st.reload();
  }
}
