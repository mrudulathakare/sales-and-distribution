import { Component, NgModule } from '@angular/core';
import { LoginForm } from '../../Auth/auth';
import { AuthService } from '../../Auth/auth.service';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,NgIf],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  form: LoginForm = {
    email: "",
    password: "",
  }
  errorMessage: string = '';
  http: any;

  constructor(private authService: AuthService, private router: Router) { }

  isLoading: boolean = false;

  isAthenticated: boolean = false;

  login() {
    
    this.authService.login(this.form);
  }

}
