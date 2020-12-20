import {Category} from '../domain/model/category.model';
import {Product} from "../domain/model/product.model";

export class DataMockService {

  private categories: Category[] = [
    new Category(0, 'KOMPUTERY', 0, null),
    new Category(1, 'SERWERY', 1, null),
    new Category(2, 'TELEFONY', 2, null),
    new Category(3, 'MONITORY', 3, null),
  ];

  private products: Product[] = [
    //TV
    new Product(0, 'Samsung 4k fhd qa', 3, 555, 'src\\assets\\data-base\\monitor_samsung_1.jpg', 0, 'Najlepszy monitor', false, 1109, '2022-01-02'),
    new Product(1, 'Sony 4k', 3, 999, 'src\\assets\\data-base\\monitor_sony_2.jpg', 0, 'Super monitor', false, 4555, '2022-01-02'),
    new Product(2, 'Samsung 8k', 3, 500, 'src\\assets\\data-base\\monitor_samsung_3.jpg', 0, 'Dobry monitor.', false, 5444, '2022-01-02'),
    new Product(3, 'Lenovo good TV', 3, 799, 'src\\assets\\data-base\\monitor_lenovo_4.jpg', 0, 'Wyświetla kolory!', false, 7222, '2022-01-02'),
    //PC
    new Product(4, 'MAC', 0, 12999, 'src\\assets\\data-base\\PC_1.png', 0, 'W promocji - jabłko gratis!', false, 90, '2022-01-02'),
    new Product(5, 'Custom PC dysk tysionc!', 0, 5000, 'src\\assets\\data-base\\PC_2.jpg', 0, 'Ma duży dysk i w ogóle.', false, 1022, '2022-01-02'),
    new Product(6, 'Komputer gejmingowy', 0, 3000, 'src\\assets\\data-base\\PC_3.jpg', 0, 'Można grać w gry, w cyberpunku pokazuje bugi jakich inny komputer nie pokaże!', false, 102, '2022-01-02'),
    //SERVERS
    new Product(7, 'ThinkSystem St550', 1, 10999, 'src\\assets\\data-base\\serv_1.jpg', 0, 'Szypki i sprawny serwer!', false, 46, '2022-01-02'),
    new Product(8, 'Wavew SG Mobile Server', 1, 1200, 'src\\assets\\data-base\\serv_2.jpg', 0, 'Mały server 4GB ramu i ma nawet procesor.', false, 257, '2022-01-02'),
    new Product(9, 'Matrix serwer', 1, 3000, 'src\\assets\\data-base\\serv_3.png', 0, 'Duży taki.', false, 32, '2022-01-02'),
    //PHONES
    new Product(7, 'IPhone 12 64GB czarny', 2, 4999, 'src\\assets\\data-base\\phone_1.jpg', 0, 'Telefon IPhone 12, w zestawie jabłko.', false, 1000, '2022-01-02'),
    new Product(8, 'Samsung galaxy s10', 2, 2900, 'src\\assets\\data-base\\phone_2.png', 0, 'Dobry samsung, działa. Bateria nie wybucha.', false, 997, '2022-01-02'),
    new Product(9, 'Xiaomi redmi note 9', 2, 1000, 'src\\assets\\data-base\\phone_3.jpg', 0, 'Xiaomi to xiaomi, działa, tańszy, ale nie ma loga samsunga ani apla.', false, 1382, '2022-01-02'),
  ];


  // private allProducts: Product[] = this.productsTvs.slice().concat(this.towels.slice());

  public getProducts(): Product[] {
    return this.products;
  }

  public getCategories(): Category[] {
    return this.categories;
  }

  // public getProductsByCategoryId(categoryId: number): Product[] {
  //   if (categoryId % 2) {
  //     return this.productsTvs;
  //   }
  //   return this.towels;
  // }
  //
  // public getProductById(productId: number): Product {
  //   return this.allProducts[productId];
  // }

}
