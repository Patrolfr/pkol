import {Component, Injectable, OnInit} from '@angular/core';
import {Product} from '../../domain/model/product.model';
import {Category} from '../../domain/model/category.model';
import {DataMockService} from '../../service/dataMockService';
import {ActivatedRoute, Params} from '@angular/router';
import {Subject} from 'rxjs';
import {ProductService} from '../../service/product.service';
import {CategoryService} from '../../service/category.service';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
@Injectable()
export class ProductsByCategoryComponent implements OnInit {

  public category: Category;
  public productsOfCategory: Product[];
  public productsChanged = new Subject<Product[]>();

  constructor(private route: ActivatedRoute,
              private dataService: DataMockService,
              private productService: ProductService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        const subcategoryId = Number(params.id); // handling so called type safety of Type Script..
        this.category = this.categoryService.getSubcategoryById(subcategoryId);
        this.productsOfCategory = this.productService.getProductBySubcategoryId(subcategoryId);
        console.log(this.productsOfCategory);
        this.productsChanged.next(this.productsOfCategory);
      });
  }

}
