export class Product {

  constructor(
    public id: number,
    public subcategoryId: number,
    public description: string,
    public discount: number,
    public expirationTimestamp: string,
    public imageUrl: string,
    public isSponsored: boolean,
    public name: string,
    public price: number,
    public itemsLeft: number
  ) {}

}
