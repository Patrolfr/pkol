import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CanAuthenticationGuard} from './guard/can-authentication-guard';
import {ProtectedComponent} from './protected/protected.component';
import {StartComponent} from './start/start.component';

const routes: Routes = [
  {
    path: 'protected',
    component: ProtectedComponent,
     canActivate: [CanAuthenticationGuard],
     data: { roles: ['NormalUser']}
  },
  {
    path: '',
    component: StartComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SklepRoutingModule { }
