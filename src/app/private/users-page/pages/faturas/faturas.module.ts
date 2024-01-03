import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaturasComponent } from './faturas.component';
import { FaturasRoutingModule } from './faturas-routing.module';
import { ToolbarModule } from 'src/app/components/toolbar/toolbar.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';

@NgModule({
  declarations: [
    FaturasComponent
  ],
  imports: [
    CommonModule,
    FaturasRoutingModule,
    NgZorroAntdModule,
    ToolbarModule
  ],
  exports: [
    FaturasComponent
  ]
})
export class FaturasModule { }
