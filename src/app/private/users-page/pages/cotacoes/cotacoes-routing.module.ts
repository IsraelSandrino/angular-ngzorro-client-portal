import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CotacoesComponent } from './cotacoes.component';

const routes : Routes = [
  { path: '', component: CotacoesComponent}
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule. forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class CotacoesRoutingModule { }
