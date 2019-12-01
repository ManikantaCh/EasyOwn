import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-partners-main',
  templateUrl: './partners-main.component.html',
  styleUrls: ['./partners-main.component.css']
})
export class PartnersMainComponent implements OnInit {
  index: number = 0;
  isSmallScreen: boolean;
  fruits: any[] = [
    {name: 'Velicham Finance Pvt. Ltd.'},
    {name: 'Smartphones'},
    {name: 'Apple'}
  ];
  result: any[] = [1,2,3,4,5,6,7,8,9,10,1,2,3,4,5,6,7,8,9,10];

  constructor(private breakpointObserver: BreakpointObserver) {
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
