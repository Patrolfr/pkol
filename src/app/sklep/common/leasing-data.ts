import {Input} from "@angular/core";
import {Product} from "../domain/model/product.model";

export interface leasingData {
  unique_item_quantity: string;
  product_category_id: string;
  product_quantity: string;
  product_net_value: string;
  widget_style: string;
  source: string;
  product_vat_rate: string;
  product_name: string;
}
