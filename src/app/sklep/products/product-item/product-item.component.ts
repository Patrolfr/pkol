import {Component, Injectable, Input, OnInit} from '@angular/core';
import {Product} from '../../domain/model/product.model';
import {Store} from '@ngrx/store';
import {AddProduct} from '../../ngRx-store/bucket.actions';
import {MatSnackBar} from '@angular/material/snack-bar';
import {BucketEventsEmitter} from '../../service/bucket-events-emitter';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
@Injectable()
export class ProductItemComponent implements OnInit {

  @Input() product: Product;

  stars = [];
  votes = 0;

  constructor(private store: Store,
              private emitter: BucketEventsEmitter,
              private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.stars = Array(Math.floor(3 + Math.random() * 5));
    this.votes = Math.floor(5 + Math.random() * 50);
  }

  addToBucket() {
    const addAction = new AddProduct({amount: 1, product: this.product});
    this.store.dispatch(addAction);
    this.emitter.emit(addAction);
  }
}
