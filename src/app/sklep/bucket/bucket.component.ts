import {Component, OnDestroy, OnInit} from '@angular/core';
import {AppState, BucketEntry} from '../ngRx-store/user-bucket.reducers';
import {Store} from '@ngrx/store';
import {RemoveProduct} from '../ngRx-store/bucket.actions';
import {Observable, Subscription} from 'rxjs';
import {AuthenticationService} from '../service/authentication.service';
import {BucketEventsEmitter} from '../service/bucket-events-emitter';

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
              private bucketEventsEmitter: BucketEventsEmitter,
              public authenticationService: AuthenticationService) {
  }

  ngOnInit(): void {
    this.bucketEntries = this.store.select('bucketState', 'entries');
    this.totalCostInPln = this.store.select('bucketState', 'totalCostInPln');
    this.totalDiscountInPln = this.store.select('bucketState', 'totalDiscountInPln');
  }

  onRemoveProduct(productId: number) {
    const removeProductAction = new RemoveProduct(productId);
    this.store.dispatch(removeProductAction);
    this.bucketEventsEmitter.emit(removeProductAction);
  }

  ngOnDestroy(): void {
    if (this.storeSubscription != null && !this.storeSubscription.closed) {
      this.storeSubscription.unsubscribe();
    }
  }
}
