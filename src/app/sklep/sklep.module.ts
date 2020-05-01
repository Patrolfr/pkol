import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SklepRoutingModule} from './sklep-routing,module';
import {ProtectedComponent} from './protected/protected.component';
import {StartComponent} from './start/start.component';
import {CategoryListComponent} from './category-list/category-list.component';
import {CategoryItemComponent} from './category-list/category-item/category-item.component';
import {ProductListComponent} from './products/product-list/product-list.component';
import {ProductItemComponent} from './products/product-item/product-item.component';
import {ProductsByCategoryComponent} from './products/products-by-category/products-by-category.component';
import {SklepComponent} from './sklep.component';
import {ProductDetailsComponent} from './products/product-details/product-details.component';


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
    ProductDetailsComponent
  ],
  exports: [
    SklepComponent
  ],
  imports: [
    CommonModule,
    SklepRoutingModule
  ]
})
export class SklepModule {
}
