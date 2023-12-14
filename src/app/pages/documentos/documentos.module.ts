import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentosComponent } from './documentos.component';
import { DocumentosRoutingModule } from './documentos-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { UploadButtonModule } from 'src/app/components/upload-button/upload-button.module';

@NgModule({
  declarations: [
    DocumentosComponent
  ],
  imports: [
    CommonModule,
    DocumentosRoutingModule,
    NgZorroAntdModule,
    ToolbarModule,
    UploadButtonModule
  ],
  exports: [
    DocumentosComponent
  ]
})
export class DocumentosModule { }
