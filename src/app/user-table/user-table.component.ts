// user-table.component.ts
import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.css']
})
export class UserTableComponent implements OnInit {
  data: any[] = [];
  searchText: string = '';
  filters: any = {
    endYear: null,
    topic: null,
    sector: null,
    region: null,
    source: null,
    swot: null,
    country: null,
    city: null
  };

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.dataService.getDataWithFilters(this.filters).subscribe(data => {
      this.data = data;
    });
  }
}
