import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {AppState, BucketEntry} from '../../ngRx-store/user-bucket.reducers';
import {Store} from '@ngrx/store';
import {DeliveryType} from '../../domain/model/delivery-type.model';
import {OrderService} from '../../service/order.service';
import {PaymentType} from '../../domain/model/payment-type.model';

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

  entries: BucketEntry[];
  bucketEntries: Observable<BucketEntry[]>;
  totalCostInPln: Observable<number>;
  totalDiscountInPln: Observable<number>;
  totalAmount: Observable<number>;

  deliveryTypes: Observable<DeliveryType[]>;
  paymentTypes: Observable<PaymentType[]>;

  paymentSuccessful = false;

  constructor(private _formBuilder: FormBuilder,
              private store: Store<AppState>,
              private orderService: OrderService) {
  }

  ngOnInit() {
    this.bucketEntries = this.store.select('bucketState', 'entries');
    this.bucketEntries.subscribe(it => {
      this.entries = it;
    });
    this.totalCostInPln = this.store.select('bucketState', 'totalCostInPln');
    this.totalDiscountInPln = this.store.select('bucketState', 'totalDiscountInPln');
    this.totalAmount = this.store.select('bucketState', 'totalAmount');
    this.deliveryTypes = this.orderService.getDeliveryTypes();
    this.paymentTypes = this.orderService.getPaymentTypes();

    this.firstFormGroup = this._formBuilder.group({});
    this.firstFormGroup = this._formBuilder.group({
      cityCtrl: ['', Validators.required],
      postalCodeCtrl: ['', Validators.required],
      streetCtrl: ['', Validators.required],
      streetNumberCtrl: ['', Validators.required],
      deliveryType: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      paymentType: ['', Validators.required]
    });
  }

  onSubmitOrder() {
    console.log('In order to order the order in ascending order, just order order.');
    console.log(this.firstFormGroup);
    console.log(this.secondFormGroup);
    console.log(this.secondFormGroup.controls.paymentType.value);
    this.orderService.postOrder(
      {
        postal_code: this.firstFormGroup.controls.postalCodeCtrl.value,
        city: this.firstFormGroup.controls.cityCtrl.value,
        street_address: this.firstFormGroup.controls.streetCtrl.value,
        payment_type: this.secondFormGroup.controls.paymentType.value,
        delivery_type: this.firstFormGroup.controls.deliveryType.value,
        products: this.entries.map(it => {
          return {id: it.product.id, count: it.amount};
        })
      }
    ).subscribe(response => {
    });
  }

  onProcessPayment() {
    this.paymentSuccessful = false;
  }
}
