import { Component, AfterViewInit } from '@angular/core';
import { SidebarLayoutComponent } from '../sidebar-layout/sidebar-layout.component';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatIconModule } from '@angular/material/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
import { HighchartsChartModule } from 'highcharts-angular';
import * as Highcharts from 'highcharts';
import { NzTableSortOrder } from 'ng-zorro-antd/table';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-detail-screen',
  standalone: true,
  imports: [
    SidebarLayoutComponent,
    HeaderLayoutComponent,
    NzButtonModule,
    MatIconModule,
    NzTableModule,
    CommonModule,
    HighchartsChartModule,
    FormsModule,
  ],
  templateUrl: './detail-screen.component.html',
  styleUrl: './detail-screen.component.css',
})
export class DetailScreenComponent {
  project = {
    name: 'Asia Expansion',
    description: 'Planning for Asia Expansion',
    budget: '1.5 Cr',
    total_positons: 66,
    co_planners: 'Yash Mehta',
  };
  colomnData = [
    {
      name: 'Designation',
      key: 'designation',
    },
    {
      name: 'Department',
      key: 'department',
    },
    {
      name: 'Budget',
      key: 'budget',
    },
    {
      name: 'Location',
      key: 'location',
    },
    {
      name: 'Last Updated',
      key: 'last_updated',
    },
  ];
  initialRowData = [
    {
      designation: 'HR',
      department: 'Others',
      budget: '8L',
      location: 'Ahmedabad',
      last_updated: {
        name: 'Ankush Mehta',
        time: 'Sep 6 2022, 7.05pm',
      },
    },
    {
      designation: 'UI designer',
      department: 'Product',
      budget: '10L',
      location: 'Ahmedabad',
      last_updated: {
        name: 'Ankush Mehta',
        time: 'Sep 6 2022, 7.05pm',
      },
    },
    {
      designation: 'UI designer',
      department: 'Product',
      budget: '10L',
      location: 'Ahmedabad',
      last_updated: {
        name: 'Rhea Kapoor',
        time: 'Sep 6 2022, 7.05pm',
      },
    },
    {
      designation: 'Architech',
      department: 'Engineering',
      budget: '10L',
      location: 'Ahmedabad',
      last_updated: {
        name: 'Ankush Mehta',
        time: 'Sep 6 2022, 7.05pm',
      },
    },
    {
      designation: 'Programmer Analyst',
      department: 'Engineering',
      budget: '8L',
      location: 'Ahmedabad',
      last_updated: {
        name: 'Ankush Mehta',
        time: 'Sep 6 2022, 7.05pm',
      },
    },
    {
      designation: 'Chief Legal Officer',
      department: 'Others',
      budget: '26L',
      location: 'Ahmedabad',
      last_updated: {
        name: 'Ankush Mehta',
        time: 'Sep 6 2022, 7.05pm',
      },
    },
    {
      designation: 'Vice President',
      department: 'Product',
      budget: '35L',
      location: 'Ahmedabad',
      last_updated: {
        name: 'Rhea Kapoor',
        time: 'Sep 6 2022, 7.05pm',
      },
    },
    {
      designation: 'Chief Makkeing Officer',
      department: 'Product',
      budget: '21L',
      location: 'Ahmedabad',
      last_updated: {
        name: 'Ankush Mehta',
        time: 'Sep 6 2022, 7.05pm',
      },
    },
    {
      designation: 'Program Manager',
      department: 'Product',
      budget: '18L',
      location: 'India',
      last_updated: {
        name: 'Rhea Kapoor',
        time: 'Sep 6 2022, 7.05pm',
      },
    },
  ];
  rowData = this.initialRowData;
  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: string = 'chart';
  chartOptions: Highcharts.Options = {};
  chartCallback: Highcharts.ChartCallbackFunction = function (chart) {};
  updateFlag: boolean = false;
  oneToOneFlag: boolean = true;
  runOutsideAngular: boolean = false;
  ngAfterViewInit(): void {
    this.chartOptions = {
      credits: {
        enabled: false,
      },
      chart: {
        type: 'pie',
      },
      title: {
        text: '',
      },
      plotOptions: {
        pie: {
          size: '60%',
          innerSize: '80%',
          depth: 45,
          dataLabels: {
            enabled: false,
          },
          showInLegend: true,
        },
      },
      series: [
        {
          type: 'pie',
          name: 'Budget used',
          data: [
            ['Engineering', 40],
            ['Product', 20],
            ['Sales', 30],
            ['Others', 10],
          ],
          colors: ['#489e9f', '#81cb85', '#ffc74f', '#70b0b1'],
        },
      ],
    };
  }
  sortKey: string | null = null;
  sortOrder: NzTableSortOrder = null;
  filterOn = 'designation';
  filterValue = '';

  sort(columnKey: string): void {
    if (this.sortKey === columnKey) {
      this.sortOrder = this.sortOrder === 'ascend' ? 'descend' : 'ascend';
    } else {
      this.sortKey = columnKey;
      this.sortOrder = 'ascend';
    }
    this.rowData = this.sortData(this.rowData, columnKey, this.sortOrder);
  }

  sortData(data: any[], key: string, order: NzTableSortOrder): any[] {
    return data.sort((a, b) => {
      let valA = a[key];
      let valB = b[key];

      if (key === 'last_updated') {
        valA = a.last_updated?.name ?? '';
        valB = b.last_updated?.name ?? '';
      }
      if (key === 'budget') {
        valA = this.convertToNumber(valA);
        valB = this.convertToNumber(valB);
      }

      if (order === 'ascend') {
        return valA > valB ? 1 : -1;
      } else if (order === 'descend') {
        return valA < valB ? 1 : -1;
      }
      return 0;
    });
  }
  convertToNumber(value: string): number {
    return parseFloat(value.replace('L', '').trim());
  }
  filterData(filterOn: string, filterValue: string): void {
    if (filterValue === '') {
      this.rowData = this.initialRowData;
      return;
    }
    this.rowData = this.initialRowData.filter((row) => {
      if (filterOn === 'designation') {
        return row.designation
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      } else if (filterOn === 'department') {
        return row.department.toLowerCase().includes(filterValue.toLowerCase());
      } else if (filterOn === 'budget') {
        return row.budget.toLowerCase().includes(filterValue.toLowerCase());
      } else if (filterOn === 'location') {
        return row.location.toLowerCase().includes(filterValue.toLowerCase());
      } else if (filterOn === 'last_updated') {
        return row.last_updated.name
          .toLowerCase()
          .includes(filterValue.toLowerCase());
      }
      return false;
    });
  }
  applyFilter(): void {
    this.filterData(this.filterOn, this.filterValue);
  }
}
