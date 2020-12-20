import {Component, Injectable, OnDestroy, OnInit} from '@angular/core';
import {DataMockService} from '../service/dataMockService';
import {Category} from '../domain/model/category.model';
import {Subscription} from 'rxjs';
import {CategoryService} from '../service/category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
@Injectable()
export class CategoryListComponent implements OnInit, OnDestroy {

  public categories: Category[];

  public subcategories: Category[];

  private subscription: Subscription;

  constructor(private dataServiceMock: DataMockService,
              private categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this.categories = this.dataServiceMock.getCategories();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
