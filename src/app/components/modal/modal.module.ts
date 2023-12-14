import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal.component';

import { NgZorroAntdModule } from '../../imports/ng-zorro-antd/ng-zorro-antd.module'
import { FormModule } from '../form/form.module';

@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormModule
  ],
  exports: [
    ModalComponent
  ]
})
export class ModalModule { }
