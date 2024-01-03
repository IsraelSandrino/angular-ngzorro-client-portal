import { NgModule } from '@angular/core';
import { CotacaoViewComponent } from './cotacao-view.component';
import { CotacaoViewRoutingModule } from './cotacao-view-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';



@NgModule({
  declarations: [
    CotacaoViewComponent
  ],
  imports: [
    CotacaoViewRoutingModule,
    NgZorroAntdModule
  ],
  exports: [
    CotacaoViewComponent
  ]
})
export class CotacaoViewModule { }
