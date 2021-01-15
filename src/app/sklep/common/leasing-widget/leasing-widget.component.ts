import {Component, Input, OnInit} from '@angular/core';
import {Product} from "../../domain/model/product.model";

@Component({
  selector: 'app-leasing-widget',
  templateUrl: './leasing-widget.component.html',
  styleUrls: ['./leasing-widget.component.scss']
})
export class LeasingWidgetComponent implements OnInit {
  API_URL = "https://stpc.pkoleasing.pl";
  LEASING_FORM_ID = "pko-leasing-form";
  SHOP_ID = "573278292"
  @Input() product: Product[];
  @Input() widget_style = "1";
  @Input() source = "item";
  unique_product_quantity = '1';
  ifRenderFlag = false;

  constructor() { }

  ngOnInit(): void {
  }

}
