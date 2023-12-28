import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PublicComponent } from './public.component';
import { PublicRoutingModule } from './public-routing.module';
import { LandingModule } from './landing/landing.module';

@NgModule({
  declarations: [
    PublicComponent
  ],
  imports: [
    CommonModule,
    PublicRoutingModule,
    LandingModule
  ]
})
export class PublicModule { }
