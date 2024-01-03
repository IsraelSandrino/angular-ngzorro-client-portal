import { NgModule } from '@angular/core';
import { EquipamentoViewComponent } from './equipamento-view.component';
import { EquipamentoViewRoutingModule } from './equipamento-view-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';



@NgModule({
  declarations: [
    EquipamentoViewComponent
  ],
  imports: [
    EquipamentoViewRoutingModule,
    NgZorroAntdModule
  ],
  exports: [
    EquipamentoViewComponent
  ]
})
export class EquipamentoViewModule { }
