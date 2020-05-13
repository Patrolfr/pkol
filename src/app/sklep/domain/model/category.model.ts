export class Category {

  constructor(
    public id: number,
    public name: string,
    public category: number,
    public parentCategory: Category
  ) {
  }

}
