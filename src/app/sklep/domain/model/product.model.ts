export class Product {
  constructor(
    public id: number,
    public name: string,
    public subcategory: number,
    public price: number,
    public image: string,
    public discount: number,
    public description: string,
    public is_sponsored: boolean,
    public items_left: number,
    public expiration_timestamp: string
  ) {
  }
}
