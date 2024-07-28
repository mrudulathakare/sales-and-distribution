import { Component, NgModule } from '@angular/core';
import { AuthService } from '../../Auth/auth.service';
import { RegisterForm } from '../../Auth/auth';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  form: RegisterForm = {
    email: "",
    name: "",
    password: "",
    confirm_password: "",

  }
  registrationSuccess: boolean = false;
  router: any;

  constructor (private authService: AuthService) {}

  register() {
    this.authService.register(this.form);
  }
}
