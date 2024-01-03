import { NgModule } from '@angular/core';
import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';

@NgModule({
  declarations: [
    PerfilComponent
  ],
  imports: [
    PerfilRoutingModule,
    NgZorroAntdModule
  ],
  exports: [
    PerfilComponent
  ]
})
export class PerfilModule { }
