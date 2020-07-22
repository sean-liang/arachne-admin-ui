import { Component, OnInit, ViewChild } from '@angular/core';
import { SFSchema, SFUISchema } from '@delon/form';
import { _HttpClient } from '@delon/theme';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalRef } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-users-edit',
  templateUrl: './edit.component.html',
})
export class UsersEditComponent implements OnInit {
  i: any = { username: '', password: '' };
  schema: SFSchema = {
    properties: {
      username: { type: 'string', title: 'Username', maxLength: 100 },
      password: { type: 'string', title: 'Password', maxLength: 100, ui: { type: 'password' } },
    },
    required: ['username', 'password'],
  };
  ui: SFUISchema = {
    '*': {
      spanLabelFixed: 100,
      grid: { span: 12 },
    },
  };

  constructor(private modal: NzModalRef, private msgSrv: NzMessageService, public http: _HttpClient) {}

  ngOnInit(): void {}

  save(value: any) {
    this.http.post('users/', value).subscribe((res) => {
      this.msgSrv.success('New User Saved.');
      this.modal.close(true);
    });
  }

  close() {
    this.modal.destroy();
  }
}
