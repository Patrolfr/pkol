import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, BucketEntry} from '../ngRx-store/user-bucket.reducers';
import {Store} from '@ngrx/store';
import {RemoveProduct} from '../ngRx-store/bucket.actions';
import {Observable, Subscription} from 'rxjs';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit, OnDestroy {

  storeSubscription: Subscription;

  totalCostInPln = 0;

  bucketEntries: Observable<BucketEntry[]>;

  constructor(private store: Store<AppState>) {
  }

  ngOnInit(): void {
    this.bucketEntries = this.store.select('bucketState', 'entries');
    this.bucketEntries.subscribe(entires => {
      entires.forEach((it: BucketEntry) => {
        this.totalCostInPln = this.totalCostInPln + it.getTotalPrice();
      });
    });
  }

  onRemoveProduct(productId: number) {
    this.store.dispatch(new RemoveProduct(productId));
  }

  ngOnDestroy(): void {
    if (this.storeSubscription != null && !this.storeSubscription.closed) {
      this.storeSubscription.unsubscribe();
    }
  }
}
