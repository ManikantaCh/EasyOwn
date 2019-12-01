import { Component, OnInit, Input, OnChanges, ChangeDetectionStrategy, SimpleChanges, ViewChild, ElementRef, ContentChildren, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource, MatDialogRef } from '@angular/material';
import { merge, Observable, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  @Input() gridData: any;
  @Input() gridColumnsOptions: any;
  @Input() showEditButton: boolean;
  @Input() showRemoveButton: boolean;
  @Input() stickyColumns: any;
  @Input() excelFileName: string;
  @Input() editComponent: any;
  @Input() gridHeader: string;
  @Input() defaultPageSize: number;
  @Input() showFilter: boolean;

  ngOnChanges(changes: SimpleChanges) {
    if (changes.gridData.currentValue && changes.gridData.currentValue.length > 0) {
      this.dataSource = new MatTableDataSource<any>(changes.gridData.currentValue);

      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;

      this.displayColProps = Object.keys(this.gridColumnsOptions);

      if ((this.showEditButton || this.showRemoveButton) && this.displayColProps.indexOf("Action") == -1) {
        this.displayColProps.push("Action");
      }
    }
  }

  dataSource: any = new MatTableDataSource<any>();
  displayColProps: string[] = [];


  constructor() { 
    if (!this.gridHeader){
      this.gridHeader = "Search Result";
    }

    if (!this.defaultPageSize){
      this.defaultPageSize = 10;
    }

    if (!this.showFilter){
      this.showFilter = true;
    }

  }

  @ViewChild(MatSort, { static: true }) sort: MatSort;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild('TABLE', { static: true }) table: ElementRef;

  ngOnInit() {
    if (this.gridData && this.gridData.length > 0) {
      this.dataSource = new MatTableDataSource<any>(this.gridData);
      this.displayColProps = Object.keys(this.gridColumnsOptions);

      if (this.showEditButton || this.showRemoveButton) {
        this.displayColProps.push("Action");
      }
    }

    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  isSticky(column: string): boolean {
    if (this.stickyColumns) {
      return this.stickyColumns.indexOf(column) != -1;
    }

    return false;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }



}
