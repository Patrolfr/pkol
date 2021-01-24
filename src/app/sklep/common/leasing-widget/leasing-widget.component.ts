import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../../domain/model/product.model';

@Component({
  selector: 'app-leasing-widget',
  templateUrl: './leasing-widget.component.html',
  styleUrls: ['./leasing-widget.component.scss']
})
export class LeasingWidgetComponent implements OnInit {
  API_URL = 'https://stpc.pkoleasing.pl';
  LEASING_FORM_ID = 'pko-leasing-form';
  SHOP_ID = '573278292';
  @Input() products: Product[] | undefined;
  @Input() widget_style = '1';
  @Input() source = 'item';
  unique_product_quantity = '1';
  ifRenderFlag = false;
  total_value = 0;
  total_value_string = '';
  total_net_value = 0;
  total_net_value_string = '';

  constructor() {
  }

  ngOnInit(): void {
    console.log('WIDGEEEET');
    console.log(this.products);

    this.unique_product_quantity = String(this.products.length);

    for (const product of this.products) {

      this.total_value += parseFloat(product.total_value.replace(',', '.')) * parseFloat(product.product_quantity);
      this.total_net_value += parseFloat(product.net_value.replace(',', '.')) * parseFloat(product.product_quantity);
    }

    this.total_value_string = this.total_value.toFixed(2).replace('.', ',');
    this.total_net_value_string = this.total_net_value.toFixed(2).replace('.', ',');

    console.log('total_value_string');
    console.log(this.total_value_string);
    console.log('total_net_value_string');
    console.log(this.total_net_value_string);
    this.ifRenderFlag = true;
  }

}
