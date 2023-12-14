import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';

@NgModule({
  declarations: [
    FormComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  exports: [
    FormComponent
  ]
})
export class FormModule { }
