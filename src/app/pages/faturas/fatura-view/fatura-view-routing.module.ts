import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { FaturaViewComponent } from './fatura-view.component';

const routes : Routes = [
  { path: '', component: FaturaViewComponent }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class FaturaViewRoutingModule { }
