import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProjetoViewComponent } from './projeto-view.component';

const routes: Routes = [
  { path: '', component: ProjetoViewComponent }
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
export class ProjetoViewRoutingModule { }
