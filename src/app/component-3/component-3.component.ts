import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-component-3',
  templateUrl: './component-3.component.html',
  styleUrls: ['./component-3.component.css']
})
export class Component3Component implements OnInit {
  lineChartData: any[] = [];
  lineChartLabels: string[] = [];
  lineChartOptions: any = {
    responsive: true,
    scales: {
      xAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'Year'
        }
      }],
      yAxes: [{
        scaleLabel: {
          display: true,
          labelString: 'End Year'
        }
      }]
    },
    type: 'line' // Specify chart type here
  };
  lineChartLegend = true;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.http.get<number[]>('http://localhost:8000/api/data/endYears').subscribe(
      (data: number[]) => {
        // Prepare chart data
        this.lineChartData = [
          { data: data, label: 'End Year' }
        ];
        // Prepare chart labels
        this.lineChartLabels = data.map(year => year.toString());
      },
      error => {
        console.error('Error fetching data:', error);
      }
    );
  }
}
