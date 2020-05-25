import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../domain/model/order.model';
import {DeliveryType} from '../domain/model/delivery-type.model';
import {PaymentType} from '../domain/model/payment-type.model';
import {OrderStatus} from '../domain/model/order-status.model';

@Injectable()
export class OrderService {

  ORDER_URL = 'http://137.135.245.109:8000/users/order/';
  DELIVERY_TYPE_URL = 'http://137.135.245.109:8000/users/delivery_type';
  PAYMENT_TYPE_URL = 'http://137.135.245.109:8000/users/payment_type';
  ORDER_STATUS_URL = 'http://137.135.245.109:8000/users/status';

  paymentTypes: PaymentType[];
  deliveryTypes: DeliveryType[];
  orderStatuses: OrderStatus[];

  constructor(private httpClient: HttpClient) {
  }

  postOrder(payload: any) {
    console.log(payload);
    return this.httpClient.post(
      this.ORDER_URL,
      payload);
  }

  getProductsOfCurrentUser(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(
      this.ORDER_URL,
      {
        observe: 'body',
        responseType: 'json'
      });
  }

  getDeliveryTypes(): Observable<DeliveryType[]> {
    return this.httpClient.get<DeliveryType[]>(
      this.DELIVERY_TYPE_URL,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }

  getPaymentTypes(): Observable<PaymentType[]> {
    return this.httpClient.get<PaymentType[]>(
      this.PAYMENT_TYPE_URL,
      {
        observe: 'body',
        responseType: 'json'
      }
    );
  }

  getAllPaymentTypes() {
    return this.httpClient.get<PaymentType[]>(
      this.PAYMENT_TYPE_URL,
      {
        observe: 'body',
        responseType: 'json'
      }
    ).subscribe(it => {
      this.paymentTypes = it;
    });
  }

  getAllDeliveryTypes() {
    return this.httpClient.get<DeliveryType[]>(
      this.DELIVERY_TYPE_URL,
      {
        observe: 'body',
        responseType: 'json'
      }
    ).toPromise().then(it => {
      this.deliveryTypes = it;
    });
  }

  getAllOrderStatuses() {
    return this.httpClient.get<OrderStatus[]>(
      this.ORDER_STATUS_URL,
      {
        observe: 'body',
        responseType: 'json'
      }
    ).toPromise().then(it => {
      this.orderStatuses = it;
    });
  }

}
