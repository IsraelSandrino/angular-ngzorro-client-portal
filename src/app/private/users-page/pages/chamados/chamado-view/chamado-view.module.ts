import { NgModule } from '@angular/core';
import { ChamadoViewComponent } from './chamado-view.component';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';
import { ChamadoViewRoutingModule } from './chamado-view-routing.module';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { CommentModule } from 'src/app/components/comment/comment.module';
import { UploadButtonModule } from 'src/app/components/upload-button/upload-button.module';

@NgModule({
  declarations: [
    ChamadoViewComponent
  ],
  imports: [
    ChamadoViewRoutingModule,
    NgZorroAntdModule,
    ModalModule,
    CommentModule,
    UploadButtonModule
  ],
  exports: [
    ChamadoViewComponent
  ]
})
export class ChamadoViewModule { }
