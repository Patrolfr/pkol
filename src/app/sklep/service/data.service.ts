import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../domain/model/category.model';
import {CategoryService} from './category.service';
import {Product} from '../domain/model/product.model';
import {ProductService} from './product.service';
import {environment} from '../../../environments/environment';
import {DataMockService} from './dataMockService';
import {of} from 'rxjs';

export const SERVER_ADDRESS = environment.SERVER_URL;
export const PRODUCTS_URL = SERVER_ADDRESS + '/products';
export const CATEGORY_URL = PRODUCTS_URL + '/category';
export const SUBCATEGORY_URL = PRODUCTS_URL + '/subcategory';
export const PRODUCT_URL = PRODUCTS_URL + '/product';


@Injectable()
export class DataService {

  private mockService: DataMockService = new DataMockService();

  constructor(private httpClient: HttpClient,
              private categoryService: CategoryService,
              private productService: ProductService) {
  }


  getAllCategories() {
    return of(this.categoryService.setSubcategories(this.mockService.getCategories())).toPromise();
  }

  getAllSubcategories() {
  return of(this.categoryService.setCategories(this.mockService.getCategories())).toPromise();
  }

  getProducts() {
    return of(this.productService.setProducts(this.mockService.getProducts())).toPromise();
  }


  getProductByPartialName(partialName: string) {
    return this.httpClient.get<Product[]>(
      PRODUCT_URL + '/?search=' + partialName,
      {
        observe: 'body',
        responseType: 'json'
      });
  }
}
