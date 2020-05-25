import {APP_INITIALIZER, NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SklepRoutingModule} from './sklep-routing.module';
import {ProtectedComponent} from './protected/protected.component';
import {StartComponent} from './start/start.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryItemComponent} from './category-list/category-item/category-item.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductItemComponent} from './products/product-item/product-item.component';
import {ProductsByCategoryComponent} from './products/products-by-category/products-by-category.component';
import {SklepComponent} from './sklep.component';
import {ProductDetailsComponent} from './products/product-details/product-details.component';
import {BucketComponent} from './bucket/bucket.component';
import {DataService} from './service/data.service';
import {CategoryService} from './service/category.service';
import {DataMockService} from './service/dataMockService';
import {initializeCategories, initializeOrderTypes, initializeProducts} from '../app-init';
import {ProductService} from './service/product.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {JwtInterceptor} from './interceptor/auth.interceptor';
import {ErrorInterceptor} from './interceptor/error.interceptor';
import {CheckoutComponent} from './order/checkout/checkout.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {UserProfileComponent} from './user/user-profile/user-profile.component';
import {OrderDetailsComponent} from './order/order-details/order-details.component';
import {OrderService} from './service/order.service';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations: [
    ProtectedComponent,
    StartComponent,
    CategoryListComponent,
    CategoryItemComponent,
    ProductListComponent,
    ProductItemComponent,
    ProductsByCategoryComponent,
    SklepComponent,
    ProductDetailsComponent,
    BucketComponent,
    CheckoutComponent,
    UserProfileComponent,
    OrderDetailsComponent
  ],
  exports: [
    SklepComponent
  ],
  imports: [
    CommonModule,
    SklepRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatStepperModule,
    MatFormFieldModule,
    MatButtonModule,
    MatSelectModule
  ],
  providers: [
    DataService,
    CategoryService,
    DataMockService,
    ProductService,
    OrderService,
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
    {provide: APP_INITIALIZER, useFactory: initializeCategories, deps: [DataService, CategoryService], multi: true},
    {provide: APP_INITIALIZER, useFactory: initializeProducts, deps: [DataService, CategoryService], multi: true},
    {provide: APP_INITIALIZER, useFactory: initializeOrderTypes, deps: [OrderService], multi: true}
  ]
})
export class SklepModule {
}
