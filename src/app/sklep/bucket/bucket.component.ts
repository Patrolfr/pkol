import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, BucketEntry} from '../ngRx-store/user-bucket.reducers';
import {Store} from '@ngrx/store';
import {RemoveProduct} from '../ngRx-store/bucket.actions';
import {Observable, Subscription} from 'rxjs';
import {AuthenticationService} from '../service/authentication.service';

@Component({
  selector: 'app-bucket',
  templateUrl: './bucket.component.html',
  styleUrls: ['./bucket.component.scss']
})
export class BucketComponent implements OnInit, OnDestroy {

  storeSubscription: Subscription;
  bucketEntries: Observable<BucketEntry[]>;
  totalCostInPln: Observable<number>;
  totalDiscountInPln: Observable<number>;

  constructor(private store: Store<AppState>,
              public authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.bucketEntries = this.store.select('bucketState', 'entries');
    this.totalCostInPln = this.store.select('bucketState', 'totalCostInPln');
    this.totalDiscountInPln = this.store.select('bucketState', 'totalDiscountInPln');
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
