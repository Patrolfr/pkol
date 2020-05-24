import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {AppState, BucketEntry} from '../../ngRx-store/user-bucket.reducers';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  isLinear = true;
  zeroFormGroup: FormGroup;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  bucketEntries: Observable<BucketEntry[]>;
  totalCostInPln: Observable<number>;
  totalDiscountInPln: Observable<number>;
  totalAmount: Observable<number>;

  constructor(private _formBuilder: FormBuilder,
              private store: Store<AppState>) {
  }

  ngOnInit() {
    this.bucketEntries = this.store.select('bucketState', 'entries');
    this.totalCostInPln = this.store.select('bucketState', 'totalCostInPln');
    this.totalDiscountInPln = this.store.select('bucketState', 'totalDiscountInPln');
    this.totalAmount = this.store.select('bucketState', 'totalAmount');

    this.firstFormGroup = this._formBuilder.group({});
    this.firstFormGroup = this._formBuilder.group({
      cityCtrl: ['', Validators.required],
      postalCodeCtrl: ['', Validators.required],
      streetCtrl: ['', Validators.required],
      streetNumberCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  onSubmitOrder() {
    console.log('In order to order the order in ascending order, just order order.');
  }
}
