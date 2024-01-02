import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PrivateComponent } from './private.component';
import { PrivateRoutingModule } from './private-routing.module';
import { UsersPageComponent } from './users-page/users-page.component';

@NgModule({
  declarations: [ PrivateComponent, UsersPageComponent ],
  exports: [ PrivateComponent ],
  imports: [ CommonModule, PrivateRoutingModule ]
})
export class PrivateModule { }
