import { NgModule } from '@angular/core';
import { CommentComponent } from './comment.component';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';

@NgModule({
  declarations: [
    CommentComponent
  ],
  imports: [
    NgZorroAntdModule
  ],
  exports: [
    CommentComponent
  ]
})
export class CommentModule { }
