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
import {ChatBotOverlayService} from './service/chat-bot-overlay.service';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {BucketEventsEmitter} from './service/bucket-events-emitter';
import { ProductReviewComponent } from './products/product-review/product-review.component';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";


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
    OrderDetailsComponent,
    ProductReviewComponent,
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
    MatSelectModule,
    MatSnackBarModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [
    DataService,
    CategoryService,
    DataMockService,
    ProductService,
    OrderService,
    ChatBotOverlayService,
    BucketEventsEmitter,
  ]
})
export class SklepModule {
}
