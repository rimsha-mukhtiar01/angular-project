import { Component, OnInit, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Chart, registerables } from 'chart.js';
import { DataService } from '../../data';

Chart.register(...registerables);

@Component({
  selector: 'app-sales-line',
  standalone: true,
  templateUrl: './sales-line.html',
  styleUrls: ['./sales-line.scss'],
  imports: [CommonModule]
})
export class SalesLineComponent implements OnInit, AfterViewInit {

  @ViewChild('chartCanvas', { static: false }) chartRef!: ElementRef<HTMLCanvasElement>;
  chart: any;
  data: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.data = this.dataService.getSalesData();
    console.log("📌 Received Data:", this.data);
  }

  ngAfterViewInit() {
    if (!this.chartRef) {
      console.error("❌ Chart reference not found!");
      return;
    }

    const days = ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];
    const salesTotals = days.map(d =>
      this.data.filter(r => r.day === d)
               .reduce((sum, r) => sum + r.amount, 0)
    );

    this.chart = new Chart(this.chartRef.nativeElement.getContext('2d')!, {
      type: 'line',
      data: {
        labels: days,
        datasets: [{
          label: 'Sales',
          data: salesTotals,
          borderWidth: 2,
          borderColor: 'blue',
          tension: 0.4,
          fill: false
        }]
      },
      options: { responsive: true, maintainAspectRatio: false }
    });
  }
}
