import { Component } from '@angular/core';

import { NzMessageService } from 'ng-zorro-antd/message';
import { NzUploadChangeParam } from 'ng-zorro-antd/upload';

@Component({
  selector: 'app-upload-button',
  templateUrl: './upload-button.component.html',
  styleUrls: ['./upload-button.component.less']
})
export class UploadButtonComponent {
  constructor(private msg: NzMessageService) {}

  handleChange(info: NzUploadChangeParam): void {
    if (info.file.status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (info.file.status === 'done') {
      this.msg.success(`${info.file.name} arquivo enviado com sucesso`);
    } else if (info.file.status === 'error') {
      this.msg.error(`${info.file.name} falha no upload do arquivo.`);
    }
  }
}
