import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class DataService {
  salesTableData: any[] = [];

  setSalesData(data: any[]) {
    this.salesTableData = data;
  }

  getSalesData() {
    return this.salesTableData;
  }
}
