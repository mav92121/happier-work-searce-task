import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzModalModule } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NzButtonModule, NzModalModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'happier_work';
  // showModal = false;
  // constructor() {}
  // handleCancel() {
  //   this.showModal = false;
  // }
  // handleOk() {
  //   this.showModal = false;
  // }
}
