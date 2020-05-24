import {Component, Injectable, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Order} from '../../domain/model/order.model';
import {OrderService} from '../../service/order.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
@Injectable()
export class UserProfileComponent implements OnInit {

  public orders: Observable<Order[]>;

  constructor(private orderService: OrderService) {
  }

  ngOnInit(): void {
    this.orders = this.orderService.getProductsOfCurrentUser();
  }

}
