import {Component, Injectable, OnInit, ViewChild} from '@angular/core';
import {Product} from '../../domain/model/product.model';
import {DataMockService} from '../../service/dataMockService';
import {ActivatedRoute, Params} from '@angular/router';
import {ProductService} from '../../service/product.service';
import {Store} from '@ngrx/store';
import {AddProduct} from '../../ngRx-store/bucket.actions';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
@Injectable()
export class ProductDetailsComponent implements OnInit {

  @ViewChild('productsAmountForm') productsAmountForm: NgForm;
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

  onSubmitItem() {
    this.addToBucket(this.productsAmountForm.value.amount);
  }

  addToBucket(amountOfProducts: number = 1) {
    this.store.dispatch(new AddProduct(
      {amount: amountOfProducts, product: this.product})
    );
  }

}
