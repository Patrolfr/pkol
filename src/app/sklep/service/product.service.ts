import {Subject} from 'rxjs';
import {Product} from '../domain/model/product.model';


export class ProductService {

  private allProducts: Product[] = [];

  productsChanged = new Subject<Product[]>();

  getProductById(id: number): Product {
    return this.allProducts.find(it => it.id === id);
  }

  getProductBySubcategoryId(id: number): Product[] {
    console.log(id);
    console.log(this.allProducts);
    return this.allProducts.filter(it => it.subcategory === id);
  }

  getAllProducts() {
    return this.allProducts.slice();
  }

  setProducts(newProducts: Product[]) {
    this.allProducts = newProducts;
    this.productsChanged.next(this.allProducts);
  }

}
