import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../data.service';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  data: any[] = [];
  pagedData: any[] = [];
  pageSize = 5; // Number of items per page
  totalItems = 0; // Total number of items
  filters: any = {}; // Declare filters property here

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataService.getDataWithFilters(this.filters).subscribe(data => {
      this.data = data;
      this.totalItems = this.data.length;
      this.updatePaginator();
    });
  }

  onPageChange(event: PageEvent) {
    const startIndex = event.pageIndex * event.pageSize;
    this.pagedData = this.data.slice(startIndex, startIndex + event.pageSize);
  }

  private updatePaginator() {
    if (this.paginator) {
      this.paginator.length = this.totalItems;
      this.paginator.pageIndex = 0;
      this.onPageChange({ pageIndex: 0, pageSize: this.pageSize, length: this.totalItems });
    }
  }
}
