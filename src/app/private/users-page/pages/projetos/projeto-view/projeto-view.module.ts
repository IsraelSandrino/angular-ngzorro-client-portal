import { NgModule } from '@angular/core';
import { ProjetoViewComponent } from './projeto-view.component';
import { ProjetoViewRoutingModule } from './projeto-view-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { CommentModule } from 'src/app/components/comment/comment.module';
import { UploadButtonModule } from 'src/app/components/upload-button/upload-button.module';



@NgModule({
  declarations: [
    ProjetoViewComponent
  ],
  imports: [
    ProjetoViewRoutingModule,
    NgZorroAntdModule,
    ModalModule,
    CommentModule,
    UploadButtonModule
  ],
  exports: [
    ProjetoViewComponent
  ]
})
export class ProjetoViewModule { }
