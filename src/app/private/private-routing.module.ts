import { NgModule } from '@angular/core';;
import { RouterModule, Routes } from '@angular/router';
import { PrivateComponent } from './private.component';
import { UsersPageComponent } from './users-page/users-page.component';

const routes: Routes = [
  { path: '', component: PrivateComponent, children: [
    { path: '', component: UsersPageComponent }
  ] }
]

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule]
})
export class PrivateRoutingModule { }
