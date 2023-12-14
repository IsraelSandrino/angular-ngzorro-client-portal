import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChamadoViewComponent } from './chamado-view.component';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';

@NgModule({
  declarations: [
    ChamadoViewComponent
  ],
  imports: [
    CommonModule,
    NgZorroAntdModule,
  ],
  exports: [
    ChamadoViewComponent
  ]
})
export class ChamadoViewModule { }
