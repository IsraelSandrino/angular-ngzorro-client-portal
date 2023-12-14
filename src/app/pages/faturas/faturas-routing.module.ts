import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FaturasComponent } from './faturas.component';
import { Routes, RouterModule } from '@angular/router';

const routes : Routes = [
  { path: '', component: FaturasComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FaturasRoutingModule { }
