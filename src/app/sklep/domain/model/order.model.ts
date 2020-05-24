export class ProductSmallInfo {
  id: number;
  name: string;
  count: number;
  product_price: number;
  total_price: number;
}

export class Order {
  id: number;
  postal_code: string;
  city: string;
  street_address: string;
  user: number;
  status: number;
  payment_type: number;
  delivery_type: number;
  total_price: number;
  products: ProductSmallInfo[];
}
