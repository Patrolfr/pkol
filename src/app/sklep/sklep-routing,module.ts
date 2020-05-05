import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {CanAuthenticationGuard} from './guard/can-authentication-guard';
import {ProtectedComponent} from './protected/protected.component';
import {StartComponent} from './start/start.component';
import {ProductsByCategoryComponent} from './products/products-by-category/products-by-category.component';
import {ProductDetailsComponent} from './products/product-details/product-details.component';

const routes: Routes = [
  {
    path: 'protected',
    component: ProtectedComponent,
    canActivate: [CanAuthenticationGuard],
    data: {roles: ['NormalUser']}
  },
  {
    path: '',
    component: StartComponent,
  },
  {
    path: 'category/:id/products',
    component: ProductsByCategoryComponent
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SklepRoutingModule { }
