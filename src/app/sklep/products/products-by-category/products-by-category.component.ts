import {Component, Injectable, OnInit} from '@angular/core';
import {Product} from '../../domain/model/product.model';
import {Category} from '../../domain/model/category.model';
import {DataService} from '../../service/data.service';
import {ActivatedRoute, Params} from '@angular/router';
import {Subject} from 'rxjs';

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
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        const categoryId = Number(params.id); // handling so called type safety of Type Script..
        this.category = this.dataService.getCategories()[categoryId];
        this.productsOfCategory = this.dataService.getProductsByCategoryId(categoryId);
        this.productsChanged.next(this.productsOfCategory);
      });
  }

}
