import {Component, Injectable, OnInit} from '@angular/core';
import {Product} from '../../domain/model/product.model';
import {Category} from '../../domain/model/category.model';
import {DataService} from '../../service/data.service';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-products-by-category',
  templateUrl: './products-by-category.component.html',
  styleUrls: ['./products-by-category.component.scss']
})
@Injectable()
export class ProductsByCategoryComponent implements OnInit {

  public category: Category;
  public productsOfCategory: Product[];

  constructor(private route: ActivatedRoute,
              private dataService: DataService) {
  }

  ngOnInit(): void {
    this.route.params
      .subscribe((params: Params) => {
        const categoryId = params.id;
        this.category = this.dataService.getCategories()[categoryId];
        this.productsOfCategory = this.dataService.getProductsByCategoryId(categoryId);
      });
  }

}
