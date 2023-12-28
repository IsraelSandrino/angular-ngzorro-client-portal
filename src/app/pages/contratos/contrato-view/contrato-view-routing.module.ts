import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContratoViewComponent } from './contrato-view.component';

const routes: Routes = [
  { path: '', component: ContratoViewComponent }
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
export class ContratoViewRoutingModule { }
