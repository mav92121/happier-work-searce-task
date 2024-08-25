import { Component, AfterViewInit } from '@angular/core';
import { SidebarLayoutComponent } from '../sidebar-layout/sidebar-layout.component';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { MatIconModule } from '@angular/material/icon';
import { NzTableModule } from 'ng-zorro-antd/table';
import { CommonModule } from '@angular/common';
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
  rowData = [
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
}
