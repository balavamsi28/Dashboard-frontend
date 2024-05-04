import { Component, OnInit } from '@angular/core';
import { Chart, registerables } from 'chart.js/auto';

@Component({
  selector: 'app-component-2',
  templateUrl: './component-2.component.html',
  styleUrls: ['./component-2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createBarChart();
  }

  createBarChart(): void {
    const countries = [
      'United Kingdom', 'Australia', 'United States of America', 'Canada', 'Cyprus', 'Singapore', 'China', 'Mongolia',
      'Iran', 'Saudi Arabia', 'Greece', 'Sweden', 'Poland', 'India', 'Nigeria', 'Venezuela', 'Germany', 'Panama',
      'Libya', 'Botswana', 'Ireland', 'Equatorial Guinea', 'New Zealand', 'Latvia', 'Turkey', 'Pakistan', 'Guyana',
      'Mexico', 'South Sudan', 'Austria', 'Belgium', 'South Africa', 'Taiwan', 'Chile', 'North Korea', 'Russia',
      'Italy', 'United Arab Emirates', 'France', 'Bahrain', 'Indonesia', 'Brazil', 'South Korea', 'Qatar', 'Yemen',
      'Estonia', 'Afghanistan'
    ];

    const counts = [
      25, 19, 86, 17, 1, 4, 38, 1, 5, 3, 3, 1, 2, 14, 2, 2, 4, 1, 2, 1, 1, 3, 1, 2, 1, 3, 1, 1, 1, 1, 1, 1, 2,
      1, 1, 3, 1, 1, 1, 3, 1, 1, 1, 1, 3, 2, 1, 1, 2, 1
    ];

    const ctx = document.getElementById('barChart') as HTMLCanvasElement;
    const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: countries,
        datasets: [{
          label: 'Count',
          data: counts,
          backgroundColor: 'rgba(54, 162, 235, 0.7)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
  }

}
