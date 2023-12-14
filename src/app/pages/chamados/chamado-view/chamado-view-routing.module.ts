import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChamadoViewComponent } from './chamado-view.component';

const routes : Routes = [
  { path: '', component: ChamadoViewComponent}
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class ChamadoViewRoutingModule { }
