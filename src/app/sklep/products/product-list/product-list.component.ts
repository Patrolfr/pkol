import {AfterViewInit, Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Product} from '../../domain/model/product.model';
import {Subject, Subscription} from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, OnDestroy {

  @Input() public products: Product[];

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
  }

}
