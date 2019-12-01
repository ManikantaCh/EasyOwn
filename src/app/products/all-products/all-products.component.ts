import { Component, OnInit } from '@angular/core';
import { FormControl, FormArray, FormBuilder, FormGroup } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Router } from '@angular/router';

@Component({
  selector: 'all-products',
  templateUrl: './all-products.component.html',
  styleUrls: ['./all-products.component.css']
})
export class AllProductsComponent implements OnInit {

  isSmallScreen: boolean;
  fruits: any[] = [
    {name: 'Velicham Finance Pvt. Ltd.'},
    {name: 'Smartphones'},
    {name: 'Apple'}
  ];

  partners: any[] = [
    {name: 'Velicham Finance Pvt. Ltd.'},
    {name: 'Smartphones'},
    {name: 'Apple'},
    {name: 'Apple1'},
    {name: 'Apple2'}
  ];

categories: any[] = [
    {name: 'Home Appliances'},
    {name: 'Smartphones'},
    {name: 'Tvs'},
    {name: 'Refrdgerators'}
  ];

  result: any[] = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];
  filtersForm: FormGroup;

  constructor(private breakpointObserver: BreakpointObserver, private formBuilder: FormBuilder, private router: Router) {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((matches: any) => {
      this.isSmallScreen = matches.matches;
    });
  }

  ngOnInit() {
    this.filtersForm = this.formBuilder.group({
      dateAddedFrom: null,
      dateAddedTo: null,
      partners: this.formBuilder.array([]),
      categories: this.formBuilder.array([]),
      salesMin: null,
      salesMax: null,
    });

    this.partners.forEach((o, i) => {
      const control = new FormControl(false);
      (this.filtersForm.controls.partners as FormArray).push(control);
    });

    this.categories.forEach((o, i) => {
      const control = new FormControl(false);
      (this.filtersForm.controls.categories as FormArray).push(control);
    });
  }

  createNewProduct(): void{
    this.router.navigate(["createProduct"]);
    //createProduct
  }

}
