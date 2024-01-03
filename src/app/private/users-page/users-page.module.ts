import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page.component';
import { UsersPageRoutingModule } from './users-page-routing.module';
import { NgZorroAntdModule } from 'src/app/imports/ng-zorro-antd/ng-zorro-antd.module';

@NgModule({
  declarations: [ UsersPageComponent ],
  exports: [ UsersPageComponent ],
  imports: [ CommonModule, UsersPageRoutingModule, NgZorroAntdModule ]
})
export class UsersPageModule { }
