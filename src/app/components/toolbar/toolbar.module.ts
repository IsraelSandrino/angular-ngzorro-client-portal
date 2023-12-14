import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ToolbarComponent } from './toolbar.component';

import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';
import { ModalModule } from '../modal/modal.module';

@NgModule({
  declarations: [
    ToolbarComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
    FormsModule,
    ModalModule
  ],
  exports: [
    ToolbarComponent
  ]
})
export class ToolbarModule { }
