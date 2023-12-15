import { NgModule } from '@angular/core';
import { FaturaViewComponent } from './fatura-view.component';
import { FaturaViewRoutingModule } from './fatura-view-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';

@NgModule({
  declarations: [
    FaturaViewComponent
  ],
  imports: [
    FaturaViewRoutingModule,
    NgZorroAntdModule
  ]
})
export class FaturaViewModule { }
