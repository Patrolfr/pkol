import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthenticationGuard} from './guard/authentication-guard.service';
import {StartComponent} from './start/start.component';
import {ProductsByCategoryComponent} from './products/products-by-category/products-by-category.component';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {BucketComponent} from './bucket/bucket.component';
import {LoginComponent} from './authentication/login/login.component';
import {RegistrationComponent} from './authentication/registration/registration.component';
import {CheckoutComponent} from './order/checkout/checkout.component';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {ProductReviewComponent} from "./products/product-review/product-review.component";

const routes: Routes = [
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
  },
  {
    path: 'product/review/:id',
    component: ProductReviewComponent
  },
  {
    path: 'bucket',
    component: BucketComponent
  },
  {
    path: 'checkout',
    canActivate: [AuthenticationGuard],
    component: CheckoutComponent
  },
  {
    path: 'profile',
    canActivate: [AuthenticationGuard],
    component: UserProfileComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SklepRoutingModule { }
