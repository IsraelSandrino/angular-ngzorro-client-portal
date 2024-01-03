import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EquipamentosComponent } from './equipamentos.component';
import { EquipamentosRoutingModule } from './equipamentos-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';

@NgModule({
  declarations: [
    EquipamentosComponent
  ],
  imports: [
    CommonModule,
    EquipamentosRoutingModule,
    NgZorroAntdModule,
    ToolbarModule
  ],
  exports: [
    EquipamentosComponent
  ]
})
export class EquipamentosModule { }
