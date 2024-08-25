import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzFormModule } from 'ng-zorro-antd/form';
import { NzMessageService } from 'ng-zorro-antd/message';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, NzButtonModule, NzFormModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private message: NzMessageService) {}
  email = '';
  password = '';
  ceoCredintials = {
    // credintails of ceo
    email: 'ceo@gmail.com',
    password: '123',
  };
  cfoCredintials = {
    // credintails of cfo
    email: 'cfo@gmail.com',
    password: '123',
  };
  router = inject(Router);
  login(): void {
    console.log('Email:', this.email);
    console.log('Password:', this.password);
    if (
      (this.email === this.ceoCredintials.email &&
        this.password === this.ceoCredintials.password) ||
      (this.email === this.cfoCredintials.email &&
        this.password === this.cfoCredintials.password)
    ) {
      localStorage.setItem('email', this.email);
      this.router.navigateByUrl('/dashboard');
    } else {
      this.message.error('Incorrect email or password');
    }
  }
}
