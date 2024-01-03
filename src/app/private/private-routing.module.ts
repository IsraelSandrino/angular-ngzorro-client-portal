import { NgModule } from '@angular/core';;
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

const routes: Routes = [
  { path: '', component: PrivateComponent, children: [
    { path: '', loadChildren: () => import('./users-page/users-page.module').then(m => m.UsersPageModule) },
  ] }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule]
})
export class PrivateRoutingModule { }
