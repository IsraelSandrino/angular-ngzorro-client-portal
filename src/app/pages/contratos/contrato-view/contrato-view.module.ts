import { NgModule } from '@angular/core';
import { ContratoViewComponent } from './contrato-view.component';
import { ContratoViewRoutingModule } from './contrato-view-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';
import { UploadButtonModule } from 'src/app/components/upload-button/upload-button.module';

@NgModule({
  declarations: [
    ContratoViewComponent
  ],
  imports: [
    ContratoViewRoutingModule,
    NgZorroAntdModule
  ]
})
export class ContratoViewModule { }
