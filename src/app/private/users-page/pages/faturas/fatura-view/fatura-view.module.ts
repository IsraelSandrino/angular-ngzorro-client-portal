import { NgModule } from '@angular/core';
import { FaturaViewComponent } from './fatura-view.component';
import { FaturaViewRoutingModule } from './fatura-view-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { CommentModule } from 'src/app/components/comment/comment.module';
import { UploadButtonModule } from 'src/app/components/upload-button/upload-button.module';

@NgModule({
  declarations: [
    FaturaViewComponent
  ],
  imports: [
    FaturaViewRoutingModule,
    NgZorroAntdModule,
    ModalModule,
    CommentModule,
    UploadButtonModule
  ]
})
export class FaturaViewModule { }
