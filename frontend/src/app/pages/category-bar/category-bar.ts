import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { DataService } from '../../data';

Chart.register(...registerables);

@Component({
  selector: 'app-category-bar',
  standalone: true,
  templateUrl: './category-bar.html',
  styleUrls: ['./category-bar.scss'],
  imports: [CommonModule]
})
export class CategoryBarComponent implements AfterViewInit {

  @ViewChild('categoryBarChartRef', { static: false }) chartRef!: ElementRef<HTMLCanvasElement>;
  categoryChart: Chart | null = null;

  constructor(private dataService: DataService) {}

  ngAfterViewInit() {
    this.drawChart();
  }

  drawChart() {
    // Destroy previous chart instance if exists
    if (this.categoryChart) {
      this.categoryChart.destroy();
    }

    const data = this.dataService.getSalesData() || [];

    // Define categories (can also compute dynamically)
    const categories = ['Electronics', 'Clothes', 'Home'];

    // Sum revenue per category
    const categoryTotals = categories.map(cat =>
      data.filter(r => r.category === cat).reduce((sum, r) => sum + r.amount, 0)
    );

    const ctx = this.chartRef.nativeElement.getContext('2d');
    if (!ctx) return;

    this.categoryChart = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: categories,
        datasets: [{
          label: 'Revenue',
          data: categoryTotals,
          backgroundColor: ['#2575fc', '#6a11cb', '#ff7f50'],
          borderRadius: 6,
          barPercentage: 0.4,      // thinner bars
          categoryPercentage: 0.5   // less space occupied per category
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: true, position: 'top' }
        },
        scales: {
          y: { beginAtZero: true },
          x: { grid: { display: false } }
        }
      }
    });
  }
}
