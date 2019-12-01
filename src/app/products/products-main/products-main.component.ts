import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'products-main',
  templateUrl: './products-main.component.html',
  styleUrls: ['./products-main.component.css']
})
export class ProductsMainComponent implements OnInit {
  index: number = 0;
  isSmallScreen: boolean;

  constructor(private breakpointObserver: BreakpointObserver, private formBuilder: FormBuilder) {
    this.breakpointObserver.observe(Breakpoints.Handset).subscribe((matches: any) => {
      this.isSmallScreen = matches.matches;
    });
  }

  ngOnInit() {
  }

  tabChange(evnt): void{
    this.index = evnt["index"];
  }

}
