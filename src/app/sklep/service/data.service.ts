import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Category} from '../domain/model/category.model';
import {CategoryService} from './category.service';
import {Product} from '../domain/model/product.model';
import {ProductService} from './product.service';

export const SERVER_URL = 'http://137.135.245.109:8000/products';
export const CATEGORY_URL = SERVER_URL + '/category';
export const SUBCATEGORY_URL = SERVER_URL + '/subcategory';
export const PRODUCT_URL = SERVER_URL + '/product';

const GET_REQUEST_OPTIONS = {observe: 'body', responseType: 'json'};

@Injectable()
export class DataService {

  private allCategories: Category[] = [];

  constructor(private httpClient: HttpClient,
              private categoryService: CategoryService,
              private productService: ProductService) {
  }


  getAllCategories() {
    return this.httpClient.get<Category[]>(
      CATEGORY_URL,
      {
        observe: 'body',
        responseType: 'json'
      }).subscribe(data => {
      this.categoryService.setCategories(data);
      console.log('Fetched categories: ' + data.toString());
    });
  }

  getAllSubcategories() {
    return this.httpClient.get<Category[]>(
      SUBCATEGORY_URL,
      {
        observe: 'body',
        responseType: 'json'
      }).toPromise().then(fetchedSubcategories => {
        this.categoryService.setSubcategories(fetchedSubcategories);
        console.log('Fetched subcategories: ' + fetchedSubcategories);
      }
    );
  }

  getProducts() {
    return this.httpClient.get<Product[]>(
      PRODUCT_URL,
      {
        observe: 'body',
        responseType: 'json'
      }).toPromise().then(fetchedProducts => {
        this.productService.setProducts(fetchedProducts);
        console.log('Fetched products: ' + fetchedProducts);
        console.log(fetchedProducts[0]);
      }
    );
  }


  getProductByPartialName(partialName: string) {
    return this.httpClient.get<Product[]>(
      PRODUCT_URL + '/?search=' + partialName,
      {
        observe: 'body',
        responseType: 'json'
      });

    //   .toPromise().then(fetchedProducts => {
    //     // this.productService.setProducts(fetchedProducts);
    //     console.log('Fetched products by partial name: ' + fetchedProducts);
    //     console.log(fetchedProducts[0]);
    //   }
    // );
  }
}
