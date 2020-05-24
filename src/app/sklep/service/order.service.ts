import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Order} from '../domain/model/order.model';

@Injectable()
export class OrderService {

  ORDER_URL = 'http://137.135.245.109:8000/users/order';

  constructor(private httpClient: HttpClient) {
  }

  getProductsOfCurrentUser(): Observable<Order[]> {
    return this.httpClient.get<Order[]>(
      this.ORDER_URL,
      {
        observe: 'body',
        responseType: 'json'
      });
  }

}
