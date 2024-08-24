import { Component } from '@angular/core';
import { SidebarLayoutComponent } from '../sidebar-layout/sidebar-layout.component';
import { HeaderLayoutComponent } from '../header-layout/header-layout.component';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { CommonModule } from '@angular/common';
import { NzModalModule } from 'ng-zorro-antd/modal';
import { NzFormModule } from 'ng-zorro-antd/form';
import { FormGroup, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    SidebarLayoutComponent,
    CommonModule,
    HeaderLayoutComponent,
    NzButtonModule,
    NzModalModule,
    NzFormModule,
    FormsModule,
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  isModalVisible = false;
  projectName = '';
  description = '';
  coPlanners = '';

  planningProjects = [
    {
      name: 'Asia Expansion',
      description: 'Planning for Asia Expansion',
      budget: '1.5 Cr',
      total_positons: 66,
      co_planners: 'Yash Mehta',
    },
    {
      name: 'Australia Expansion',
      description: 'Planning for Australia Expansion',
      budget: '1.5 Cr',
      total_positons: 66,
      co_planners: 'Yash Mehta',
    },
    {
      name: 'Growth 2024',
      description: 'Planning for Growth 2024',
      budget: '1.5 Cr',
      total_positons: 66,
      co_planners: 'Yash Mehta',
    },
  ];

  createProject(): void {
    this.planningProjects.push({
      name: this.projectName,
      description: this.description,
      budget: '1.2 Cr',
      total_positons: 45,
      co_planners: this.coPlanners,
    });
    this.projectName = '';
    this.description = '';
    this.coPlanners = '';
    this.isModalVisible = false;
  }
}
