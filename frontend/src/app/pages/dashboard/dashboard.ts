import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

// NG Zorro modules
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { Chart, registerables } from 'chart.js';
import { FormsModule } from '@angular/forms';
import { NzSelectModule } from 'ng-zorro-antd/select';
import { NzPaginationModule } from 'ng-zorro-antd/pagination';
import { DataService } from '../../data';

Chart.register(...registerables);

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.html',
  styleUrls: ['./dashboard.scss'],
  imports: [
    CommonModule,
    NzCardModule,
    NzTableModule,
    NzLayoutModule,
    NzMenuModule,
    FormsModule,
    NzSelectModule,
    NzPaginationModule
  ]
})
export class Dashboard implements OnInit {
  totalSales = 0;
  totalUsers = 0;
  ordersToday = 0;

  tableData: any[] = [];

  // Pagination
  pageIndex = 1;
  pageSize = 10;
  pageSizeOptions = [10, 20, 50, 100];

  // Select options
  pageSizeSelectOptions: { label: number; value: number }[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.loadSummary();
    this.loadTableData();

    this.dataService.setSalesData(this.tableData);


    this.pageSizeSelectOptions = this.pageSizeOptions.map(size => ({
      label: size,
      value: size
    }));

    this.updateOffset(); // log initial values
  }

  loadSummary() {
    this.totalSales = 15000;
    this.totalUsers = 320;
    this.ordersToday = 45;
  }

  loadTableData() {
  this.tableData = []; // reset array
  const customers = ['Ali', 'Sara', 'John', 'Aisha', 'Michael', 'Zara', 'Omar', 'Hassan', 'Fatima', 'David'];
  const statuses = ['Completed', 'Pending', 'Cancelled'];
  const categories = ['Electronics', 'Clothes', 'Home'];

  for (let i = 1; i <= 60; i++) {
    this.tableData.push({
      id: i,
      customer: customers[Math.floor(Math.random() * customers.length)],
      amount: Math.floor(Math.random() * 2000) + 100,
      status: statuses[Math.floor(Math.random() * statuses.length)],
      day: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'][Math.floor(Math.random()*7)],
      category: categories[Math.floor(Math.random() * categories.length)] 
    });
  }
  this.dataService.setSalesData(this.tableData);
}

  // ------------------------------------------
  // 🔥 OFFSET LOGGER
  // ------------------------------------------
  updateOffset() {
  const offset = (this.pageIndex - 1) * this.pageSize;
  const limit = this.pageSize;

  console.log(
    `📌 Offset: ${offset}, Limit: ${limit} (Page: ${this.pageIndex}, Page Size: ${this.pageSize})`
  );
}

  // ------------------------------------------
  // 🔥 Trigger when dropdown changes
  // ------------------------------------------
  onPageSizeChange(size: number) {
    this.pageSize = size;
    this.pageIndex = 1; // reset to page 1 when size changes
    this.updateOffset();
  }

  // ------------------------------------------
  // 🔥 Trigger when clicking pagination
  // ------------------------------------------
  onPageIndexChange(index: number) {
    this.pageIndex = index;
    this.updateOffset();
  }
}


