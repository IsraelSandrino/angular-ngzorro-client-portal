import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InicioComponent } from './inicio.component';
import { InicioRoutingModule } from './inicio-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';
import { ModalModule } from 'src/app/components/modal/modal.module';
import { UploadButtonModule } from 'src/app/components/upload-button/upload-button.module';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    NgZorroAntdModule,
    ModalModule,
    UploadButtonModule
  ],
  exports: [
    InicioComponent
  ]
})
export class InicioModule { }
