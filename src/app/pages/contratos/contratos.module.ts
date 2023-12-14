import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratosComponent } from './contratos.component';
import { ContratosRoutingModule } from './contratos-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    ContratosComponent
  ],
  imports: [
    CommonModule,
    ContratosRoutingModule,
    NgZorroAntdModule,
    ToolbarModule
  ],
  exports: [
    ContratosComponent
  ]
})
export class ContratosModule { }
