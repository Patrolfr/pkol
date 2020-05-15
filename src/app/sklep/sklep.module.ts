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
import {initializeCategories, initializeProducts} from '../app-init';
import {ProductService} from './service/product.service';
import {FormsModule} from '@angular/forms';

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
    BucketComponent
  ],
  exports: [
    SklepComponent
  ],
  imports: [
    CommonModule,
    SklepRoutingModule,
    FormsModule
  ],
  providers: [
    DataService,
    CategoryService,
    DataMockService,
    ProductService,
    // ,{ provide: APP_INITIALIZER, useFactory: initializer, multi: true, deps: [KeycloakService]}
    {provide: APP_INITIALIZER, useFactory: initializeCategories, deps: [DataService, CategoryService], multi: true},
    {provide: APP_INITIALIZER, useFactory: initializeProducts, deps: [DataService, CategoryService], multi: true}
  ]
})
export class SklepModule {
}
