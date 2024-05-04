import { Component, Input, AfterViewInit } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';
Chart.register(...registerables);

// swot-pie-chart.component.ts


@Component({
  selector: 'app-swot-pie-chart',
  templateUrl: './swot-pie-chart.component.html',
  styleUrls: ['./swot-pie-chart.component.css']
})
export class SwotPieChartComponent implements AfterViewInit {
  @Input() swotData: any;

  ngAfterViewInit(): void {
    this.createChart();
  }

  createChart(): void {
    if (!this.swotData) {
      console.error('SWOT data is undefined');
      return;
    }

    const ctx = document.getElementById('swotPieChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'pie',
      data: {
        labels: ['weakness', 'strength', 'opportunity', 'threat'],
        datasets: [{
          data: [this.swotData.weakness, this.swotData.strength, this.swotData.opportunity, this.swotData.threat],
          backgroundColor: [
            'rgba(255, 99, 132, 0.7)',
            'rgba(54, 162, 235, 0.7)',
            'rgba(255, 206, 86, 0.7)',
            'rgba(75, 192, 192, 0.7)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        // Add your Chart.js options here
      }
    });
  }
}
