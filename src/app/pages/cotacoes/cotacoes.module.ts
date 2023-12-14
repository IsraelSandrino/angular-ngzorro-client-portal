import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CotacoesComponent } from './cotacoes.component';
import { CotacoesRoutingModule } from './cotacoes-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    CotacoesComponent
  ],
  imports: [
    CommonModule,
    CotacoesRoutingModule,
    NgZorroAntdModule,
    ToolbarModule
  ],
  exports: [
    CotacoesComponent
  ]
})
export class CotacoesModule { }
