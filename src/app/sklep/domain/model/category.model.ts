export class Category {

  constructor(
    public id: number,
    public name: string,
    public parentCategory: Category
  ) {
  }

}
