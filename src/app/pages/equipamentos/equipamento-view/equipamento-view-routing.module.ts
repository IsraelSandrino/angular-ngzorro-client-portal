import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EquipamentoViewComponent } from './equipamento-view.component';

const routes: Routes = [
  { path: '', component: EquipamentoViewComponent }
];

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class EquipamentoViewRoutingModule { }
