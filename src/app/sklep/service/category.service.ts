import {Injectable} from '@angular/core';
import {Category} from '../domain/model/category.model';
import {Subject} from 'rxjs';

@Injectable()
export class CategoryService {

  private allCategories: Category[] = [];

  private allSubcategories: Category[] = [];

  subcategoriesChanged = new Subject<Category[]>();

  constructor() {
  }

  getAllSubcategories() {
    return this.allSubcategories.slice();
  }

  setCategories(newCategories: Category[]) {
    this.allCategories = newCategories;
  }

  setSubcategories(newCategories: Category[]) {
    this.allSubcategories = newCategories;
    this.subcategoriesChanged.next(this.allSubcategories);
  }

  getCategoryById(id: number): Category {
    return this.allCategories.find(it => it.id === id);
  }

  getSubcategoryById(id: number): Category {
    const category = this.allSubcategories.find(it => it.id === id);
    category.parentCategory = this.getCategoryById(category.category);
    return category;
  }

}
