import {Component, Injectable, OnInit} from '@angular/core';
import {Product} from '../../domain/model/product.model';
import {DataMockService} from '../../service/dataMockService';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Store} from '@ngrx/store';
import {AddProduct} from '../../ngRx-store/bucket.actions';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
@Injectable()
export class ProductDetailsComponent implements OnInit {

  public product: Product;

  constructor(private route: ActivatedRoute,
              private dataService: DataMockService,
              private productService: ProductService,
              private store: Store) {
  }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      const productId = Number(params.id); // handling so called type safety of Type Script..
      this.product = this.productService.getProductById(productId);
      console.log(this.product);
    });
  }

  addToBucket() {
    this.store.dispatch(new AddProduct({amount: 1, product: this.product}));
  }
}
