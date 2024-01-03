import { NgModule } from '@angular/core';
import { ChamadosComponent } from './chamados.component';
import { ChamadosRoutingModule } from './chamados-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    ChamadosComponent
  ],
  imports: [
    ChamadosRoutingModule,
    NgZorroAntdModule,
    ToolbarModule
  ],
  exports: [
    ChamadosComponent
  ]
})
export class ChamadosModule { }
