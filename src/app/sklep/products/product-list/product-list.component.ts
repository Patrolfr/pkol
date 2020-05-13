import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../domain/model/product.model';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  public products: Product[];
  private subscription: Subscription;
  @Input() productsChanged: Subject<Product[]>;

  constructor() {
  }

  ngOnInit(): void {
    this.subscription = this.productsChanged.subscribe((products: Product[]) => {
      this.products = products;
      console.log(products);
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
