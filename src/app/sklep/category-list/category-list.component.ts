import {Component, Injectable, OnInit} from '@angular/core';
import {DataService} from '../service/data.service';
import {Category} from '../domain/model/category.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.scss']
})
@Injectable()
export class CategoryListComponent implements OnInit {

  public categories: Category[];

  constructor(private dataService: DataService) {
  }

  ngOnInit(): void {
    this.categories = this.dataService.getCategories();
  }

}
