import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CotacaoViewComponent } from './cotacao-view.component';

const routes: Routes = [
  { path: '', component: CotacaoViewComponent }
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
export class CotacaoViewRoutingModule { }
