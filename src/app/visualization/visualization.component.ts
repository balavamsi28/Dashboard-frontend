// visualization.component.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visualization',
  templateUrl: './visualization.component.html',
  styleUrls: ['./visualization.component.css']
})
export class VisualizationComponent implements OnInit {
  swotData: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchSwotData();
  }

  fetchSwotData() {
    this.http.get<any>('http://localhost:8000/api/data/swot').subscribe(
      (data) => {
        this.swotData = data;
      },
      (error) => {
        console.error('Error fetching SWOT data:', error);
      }
    );
  }
}
