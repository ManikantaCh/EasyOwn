import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'product-categories',
  templateUrl: './product-categories.component.html',
  styleUrls: ['./product-categories.component.css']
})
export class ProductCategoriesComponent implements OnInit {

  categories: any = [];
  index: number = 0;
  result: any[] = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
  constructor() {
    this.categories = [{title: "Smartphones", count: 1}, {title: "Television", count: 2}, {title: "Refrigerator", count: 3},{title: "Smartphones", count: 1}, {title: "Television", count: 2}, {title: "Refrigerator", count: 3},{title: "Smartphones", count: 1}, {title: "Television", count: 2}, {title: "Refrigerator", count: 3}];
  }

  ngOnInit() {
  }

  createCategory(): void{
    this.categories.unshift({title: '', count: 0, isCreate: true});
    this.index = 0;
  }

}
